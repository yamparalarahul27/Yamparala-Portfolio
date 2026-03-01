# Mello Sprite Sheet — Drop-in Replacement Spec

## Image Properties

| Property | Value |
|---|---|
| **Total size** | **768 × 384 px** |
| **Format** | WebP (with alpha/transparency) |
| **Color space** | RGBA (4 channels, 8-bit) |
| **File path** | `public/sprites/mello.webp` |

---

## Grid Layout

The sprite sheet is a **6 columns × 3 rows** grid of 128px frames with 5px gutters.

```
←─────────────── 768px total ──────────────────→

  128px   5  128px   5  128px   5  128px   5  128px   5  128px
┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐  ↑
│        │  │        │  │        │  │        │  │        │  │        │  │
│ R0:F0  │  │ R0:F1  │  │ R0:F2  │  │ R0:F3  │  │ R0:F4  │  │(empty) │  128px
│WALKING │  │WALKING │  │WALKING │  │WALKING │  │WALKING │  │        │  │
│        │  │        │  │        │  │        │  │        │  │        │  ↓
└────────┘  └────────┘  └────────┘  └────────┘  └────────┘  └────────┘
     5px gutter                                                         
┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐  ↑
│        │  │        │  │        │  │        │  │        │  │        │  │
│ R1:F0  │  │ R1:F1  │  │ R1:F2  │  │ R1:F3  │  │ R1:F4  │  │ R1:F5  │  128px
│SITTING │  │SITTING │  │SITTING │  │SITTING │  │SITTING │  │SITTING │  │
│        │  │        │  │        │  │        │  │        │  │        │  ↓
└────────┘  └────────┘  └────────┘  └────────┘  └────────┘  └────────┘
     5px gutter
┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐  ↑
│        │  │        │  │        │  │        │  │        │  │        │  │
│ R2:F0  │  │ R2:F1  │  │ R2:F2  │  │ R2:F3  │  │ R2:F4  │  │ R2:F5  │  128px
│BARKING │  │BARKING │  │BARKING │  │BARKING │  │BARKING │  │BARKING │  ↓
│        │  │        │  │        │  │        │  │        │  │        │  │
└────────┘  └────────┘  └────────┘  └────────┘  └────────┘  └────────┘

```

---

## Row Definitions

### Row 0 — Walking (5 frames)
- **Purpose**: Looping walk cycle while following cursor
- **Frames**: 5 (columns 0–4, column 5 is empty/unused)
- **Playback**: 0.5s per cycle, loops infinitely
- **Design tip**: Draw the character facing **right**. The code auto-flips for left movement.

### Row 1 — Sitting / Idle (6 frames)
- **Purpose**: Idle animation when cursor stops moving
- **Frames**: 6 (all columns used)
- **Playback**: 2s per cycle, plays once then picks next idle
- **Design tip**: Can include props (current Mello has a ❤️ heart appearing in frames 4–5)

### Row 2 — Barking / Emote (6 frames)
- **Purpose**: Secondary idle animation, alternates with sitting
- **Frames**: 6 (all columns used)
- **Playback**: 2s per cycle, plays 3 times
- **Design tip**: An expressive action (jump, wave, spin, etc.)

---

## Pixel Math

```
Frame positions (top-left corner of each cell):

          Col 0     Col 1     Col 2     Col 3     Col 4     Col 5
Row 0:    (0,0)     (133,0)   (266,0)   (399,0)   (532,0)   (665,0)
Row 1:    (0,133)   (133,133) (266,133) (399,133) (532,133) (665,133)
Row 2:    (0,266)   (133,266) (266,266) (399,266) (532,266) (665,266)

Formula:  x = col × (128 + 5) = col × 133
          y = row × (128 + 5) = row × 133
```

---

## Checklist for Creating a New Sprite

- [ ] Canvas size is exactly **768 × 384 px**
- [ ] Background is **transparent** (alpha channel)
- [ ] Each frame fits within a **128 × 128 px** cell
- [ ] **5px** clear gutter between all frames
- [ ] Row 0 has **5 walking frames** (right-facing)
- [ ] Row 1 has **6 sitting/idle frames**
- [ ] Row 2 has **6 barking/emote frames**
- [ ] Exported as **WebP** with transparency
- [ ] Saved to `public/sprites/mello.webp` (overwrite existing)
- [ ] Pixel art style uses **crisp edges** (no anti-aliasing blur)
