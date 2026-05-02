#!/usr/bin/env bash
set -euo pipefail

ROOT="/Users/yamparalarahul/Desktop/Personal Apps/Yamparala-UX"
CRAWL_DIR="/tmp/portfolio-audit/wix-pages"
ROUTES_FILE="/tmp/portfolio-audit/wix-pages-selected.txt"
ASSET_MAP="/tmp/portfolio-audit/wix-route-assets.tsv"
RAW_OUT="$ROOT/public/wix-replica-raw"
LOCAL_OUT="$ROOT/public/wix-replica-local"
WIX_PREFIX="https://rahulwebwork2020.wixsite.com/rahul"
LOCAL_ASSET_ROOT="/portfolio/wix"

if [[ ! -f "$ROUTES_FILE" ]]; then
  echo "Missing crawl file: $ROUTES_FILE"
  exit 1
fi

mkdir -p "$RAW_OUT" "$LOCAL_OUT"

url_to_key() {
  local url="$1"
  local route_path="${url#${WIX_PREFIX}}"
  if [[ -z "$route_path" || "$route_path" == "/" ]]; then
    echo "home"
  else
    route_path="${route_path#/}"
    echo "$route_path" | sed 's#/#__#g'
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
    local route_path
    route_path=$(echo "$key" | sed 's#__#/#g')
    echo "$base/$route_path"
  fi
}

localize_assets_for_key() {
  local file="$1"
  local key="$2"
  [[ -f "$ASSET_MAP" ]] || return
  while IFS=$'\t' read -r route url; do
    [[ "$route" == "$key" ]] || continue
    local name local_path escaped_url
    name=$(echo "$url" | awk -F/ '{print $NF}' | sed 's/[?#].*$//')
    local_path="${LOCAL_ASSET_ROOT}/$route/$name"
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
  localize_assets_for_key "$local_dir/index.html" "$key"

  count=$((count+1))
done < "$ROUTES_FILE"

cp "$RAW_OUT/index.html" "$ROOT/public/wix-home-replica.html"
cp "$LOCAL_OUT/index.html" "$ROOT/public/wix-home-replica-local.html"

echo "Generated $count route replicas"
echo "Raw output: $RAW_OUT"
echo "Local output: $LOCAL_OUT"
