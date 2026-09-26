# V67 — kopieerbeveiliging en publicatie

## Overgenomen / nuttig uit de aangeleverde Studio SaGo broncode
- Het bestaande patroon `user-select: none` op niet-bewerkbare interactieve scènes.
- Afbeeldingen in statische productweergaven zijn niet selecteerbaar en niet bedoeld om als los bestand versleept te worden.
- Interactieve invoer en drag/drop moeten functioneel blijven; beveiliging mag de UX niet breken.

## Toegevoegd aan Klasbordstudio
- contextmenu geblokkeerd buiten input/textarea/contenteditable;
- kopiëren, knippen en tekstselectie geblokkeerd buiten bewerkbare velden;
- niet-functionele image-drag geblokkeerd;
- Ctrl/Cmd+S, Ctrl/Cmd+U, F12 en gangbare DevTools-sneltoetsen onderschept;
- invoervelden behouden normale tekstbewerking;
- functionele draggable elementen, handles en canvas blijven uitgezonderd;
- copyrightvermelding toegevoegd;
- beveiligingsscript ook gekoppeld aan student.html.

## Belangrijke grens
Client-side bescherming voorkomt geen technisch gemotiveerde broncode-inspectie. Voor echte licentie- of toegangsbeveiliging is server-side authenticatie/autorisatie nodig.

## Productie
Gebruik voor GitHub Pages de aparte productie-ZIP. Die bevat geen QA-rapporten of ontwikkelprompts.
