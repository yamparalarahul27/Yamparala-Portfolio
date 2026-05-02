#!/usr/bin/env bash
set -euo pipefail

ROOT="/Users/yamparalarahul/Desktop/Personal Apps/Yamparala-UX"
CRAWL_DIR="/tmp/portfolio-audit/framer-pages"
ROUTES_FILE="/tmp/portfolio-audit/framer-pages.txt"
ASSET_MAP="/tmp/portfolio-audit/framer-route-assets.tsv"
RAW_OUT="$ROOT/public/framer-replica-raw"
LOCAL_OUT="$ROOT/public/framer-replica-local"

if [[ ! -f "$ROUTES_FILE" ]]; then
  echo "Missing crawl file: $ROUTES_FILE"
  exit 1
fi

mkdir -p "$RAW_OUT" "$LOCAL_OUT"

badge_injection=$(cat <<'HTML'
<style id="remove-framer-badge">
#__framer-badge-container,
[data-framer-badge],
[id*="framer-badge"],
[class*="framer-badge"] {
  display: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
  pointer-events: none !important;
}
a[href*="framer.com"][style*="position: fixed"],
div[style*="position: fixed"][style*="bottom"][style*="right"] a[href*="framer.com"] {
  display: none !important;
}
</style>
<script id="remove-framer-badge-script">
(function() {
  function removeFramerBadge() {
    var selectors = [
      '#__framer-badge-container',
      '[data-framer-badge]',
      '[id*="framer-badge"]',
      '[class*="framer-badge"]',
      'a[href*="framer.com"][style*="position: fixed"]',
      'div[style*="position: fixed"][style*="bottom"][style*="right"] a[href*="framer.com"]'
    ];
    selectors.forEach(function(sel) {
      document.querySelectorAll(sel).forEach(function(el) {
        el.remove();
      });
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', removeFramerBadge);
  } else {
    removeFramerBadge();
  }
  setTimeout(removeFramerBadge, 400);
  setTimeout(removeFramerBadge, 1200);
})();
</script>
HTML
)
badge_file=$(mktemp)
printf '%s\n' "$badge_injection" > "$badge_file"

url_to_key() {
  local url="$1"
  local path="${url#https://yamparala.framer.ai}"
  if [[ -z "$path" || "$path" == "/" ]]; then
    echo "home"
  else
    path="${path#/}"
    echo "$path" | sed 's#/#__#g'
  fi
}

url_to_source_file() {
  local url="$1"
  local name
  name=$(echo "$url" | sed 's#https\?://##; s#[^a-zA-Z0-9._-]#_#g')
  echo "$CRAWL_DIR/${name}.html"
}

key_to_out_dir() {
  local base="$1"
  local key="$2"
  if [[ "$key" == "home" ]]; then
    echo "$base"
  else
    local path
    path=$(echo "$key" | sed 's#__#/#g')
    echo "$base/$path"
  fi
}

inject_badge_removal() {
  local file="$1"
  if rg -q 'remove-framer-badge' "$file"; then
    return
  fi
  local tmp inserted
  tmp=$(mktemp)
  inserted=0
  while IFS= read -r line || [[ -n "$line" ]]; do
    if [[ $inserted -eq 0 && "$line" == *"</head>"* ]]; then
      cat "$badge_file" >> "$tmp"
      inserted=1
    fi
    printf '%s\n' "$line" >> "$tmp"
  done < "$file"
  mv "$tmp" "$file"
}

localize_assets_for_key() {
  local file="$1"
  local key="$2"
  [[ -f "$ASSET_MAP" ]] || return
  while IFS=$'\t' read -r route url; do
    [[ "$route" == "$key" ]] || continue
    local name local_path escaped_url
    name=$(echo "$url" | awk -F/ '{print $NF}' | sed 's/[?#].*$//')
    local_path="/portfolio/framer/$route/$name"
    if [[ -f "$ROOT/public${local_path}" ]]; then
      escaped_url=$(printf '%s' "$url" | sed -e 's/[.[\*^$()+?{|]/\\&/g')
      perl -0777 -i -pe "s#${escaped_url}(?:\\?[^\"'\s<>)]*)?#${local_path}#g" "$file"
    fi
  done < "$ASSET_MAP"
}

count=0
while IFS= read -r url; do
  [[ -n "$url" ]] || continue
  key=$(url_to_key "$url")
  src=$(url_to_source_file "$url")
  [[ -f "$src" ]] || { echo "Skipping missing source: $src"; continue; }

  raw_dir=$(key_to_out_dir "$RAW_OUT" "$key")
  local_dir=$(key_to_out_dir "$LOCAL_OUT" "$key")
  mkdir -p "$raw_dir" "$local_dir"

  cp "$src" "$raw_dir/index.html"
  cp "$src" "$local_dir/index.html"

  inject_badge_removal "$raw_dir/index.html"
  inject_badge_removal "$local_dir/index.html"
  localize_assets_for_key "$local_dir/index.html" "$key"

  count=$((count+1))
done < "$ROUTES_FILE"

# Backward-compatible direct files for home page
cp "$RAW_OUT/index.html" "$ROOT/public/framer-home-replica.html"
cp "$LOCAL_OUT/index.html" "$ROOT/public/framer-home-replica-local.html"

echo "Generated $count route replicas"
echo "Raw output: $RAW_OUT"
echo "Local output: $LOCAL_OUT"
rm -f "$badge_file"
