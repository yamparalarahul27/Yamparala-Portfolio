# Portfolio Asset Guide

This folder is the source for portfolio media used by the app.

## Upload Rules

- Use lowercase kebab-case file names when possible.
- Avoid spaces in new file names.
- Keep related assets inside one project folder.
- For sequences, use `01`, `02`, `03` style numbering.

## Preferred Folder Structure

- `about/`
- `password-ux/`
- `pubkey/`
- `synclo/`
- `resume/`
- `dewey/`
- `islanddao-solman/`
- `realms-dao/`
- `kridafans/`
- `safegold/`
- `yamparala-media/`
- `timeline/`

## Suggested Naming

- Deck/story frames: `frame-01.png`, `frame-02.png`
- Dark/light variants: `theme-dark.png`, `theme-light.png`
- Proof assets: `tx-proof.png`, `grant-proof.png`, `metrics-proof.png`
- Video preview: `motion-preview.png`

## Migration Safety

Do not rename or move old files yet unless code references are updated in the same commit.
Some existing files still use spaces and legacy names; they are valid until migrated.
