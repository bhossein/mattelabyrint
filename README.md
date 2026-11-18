# Marihøna i labyrinten

Et lite mattespill for barn (6–8 år). Marihøna skal gjennom labyrinten til blomsten. Hver port har et regnestykke (pluss, minus og enkel ganging). Tekst på norsk med store bokstaver.

## Spill på iPad

1. Åpne spillets nettadresse i **Safari** på iPad.
2. Trykk **Del** → **Legg til på Hjem-skjerm**, og slå på **Åpne som nettapp**.
3. Åpne spillet én gang med internett. Etter det virker det også uten nett.

## Oppdatere spillet

Endre filene, og øk `VERSION` i `sw.js` (f.eks. `v1` → `v2`). Da henter iPaden de nye filene neste gang den er på nett.

## Filer

- `index.html` – hele spillet
- `sw.js` – lagrer filene for bruk uten nett
- `manifest.webmanifest`, `*.png` – app-navn og ikon
- `*.woff2` – skrifttypene Fredoka og Nunito (SIL Open Font License)
