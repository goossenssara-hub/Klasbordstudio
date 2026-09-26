# Klasbordstudio V53 — uitvoeringsprompt na volledige V52-audit

Werk vanuit V52 en voer eerst een broncode-audit uit vóór nieuwe functionaliteit.

## Vastgestelde structurele verbeterpunten
1. `app.js` draagt nog historische V26–V50-patches en `styles.css` bevat veel overlappende selectors (`.widget`, `.widget-bar`, `.board`, `.topbar`, `.sidebar`). Voeg geen nieuwe willekeurige patchlaag toe; maak voor kritieke componenten één laatste canonieke laag en documenteer resterende technische schuld.
2. Er zijn 114 unieke tools. Controleer catalogus-ID's, assets, `bodyFor()` en runtime-wiring systematisch. Alle 102 gevonden assetreferenties bestaan momenteel; behoud dat.
3. Werksymbolen zijn niet centraal: Werksymbolen gebruikt de nieuwe user-assets, maar Klasafspraken, Stemniveaus en Stiltebord mengen oude SVG's. Maak één `WORK_SYMBOLS` bron en hergebruik die.
4. Verjaardag gebruikt nog een emoji als hoofdbeeld hoewel `icon-birthday-user.png` bestaat. Gebruik de user-illustratie.
5. Breukencirkels gebruiken nog `conic-gradient`; vervang de didactische cirkel door SVG-sectoren zodat 9–12 delen geometrisch stabiel blijven.
6. GGD/KGV, eerder gevraagd, ontbreekt nog. Voeg een afzonderlijke rekenmodule toe en laat het algemene T-schema intact.
7. Spotlight en afdekkaart verwijderen zichzelf nog rechtstreeks. Gebruik overal centrale `removeWidget()`.
8. Klasafspraken zegt in de catalogus 'maximaal vijf' maar runtime laat acht toe. Maak dit consistent.
9. Behoud V47–V52: pentool, spotlight onder header, leeg-bordmelding, scrollbaar/groeiend bord, centrale drag, fullscreen clean view, herstelactie en RoomRecess-tools.
10. Lever geen tientallen oude QA/promptbestanden mee in de distributie. Houd alleen actuele README, uitvoeringsprompt en QA-rapport bij.

## Functionele eisen V53
- Centrale `WORK_SYMBOLS` met de acht user-assets.
- Stiltebord gebruikt user-silence asset.
- Stemniveaus gebruiken passende user-assets.
- Klasafspraken gebruiken dezelfde centrale bron.
- Verjaardagsmodule gebruikt user-birthday afbeelding.
- Nieuwe GGD/KGV-module: twee positieve gehele getallen; modus GGD/KGV/beide; toon factoren/veelvouden en uitkomst; willekeurige oefening.
- Breukencirkels renderen met echte SVG-sectoren voor noemer 1–12.
- Spotlight en afdekkaart verwijderen via `removeWidget()`.
- Actuele catalogustekst klopt met runtime.
- Geen ontbrekende assets.
- `node --check app.js` moet slagen.
- Start server en voer HTTP-smoketest op `/` en `/student.html` uit.
- Maak `V53_UITVOERINGSPROMPT.md` en `QA_REPORT_V53.md`.
