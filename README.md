# Klasbordstudio

Een zelfstandige digibordwebsite voor Studio SaGo. De prototypeversie is bewust zonder framework gebouwd, zodat ze meteen lokaal of via GitHub Pages kan draaien.

## Starten
Open `index.html` rechtstreeks in een browser, of publiceer de map via GitHub Pages.

## Ingebouwde bordtools
- timer
- stoplicht
- willekeurige naamkiezer
- draaischijf
- één/twee dobbelstenen
- notities
- tekenbord
- getallenlijn
- tienveld
- honderdveld
- MAB / base-ten
- breukenstroken
- interactieve klok
- geobord
- woordkaarten

Tools kunnen samen op één bord staan en vrij worden verplaatst.

## Productierichting
Deze versie is een werkende front-end basis. Voor een volwaardig product zijn de logische volgende lagen:
1. borden opslaan in Supabase;
2. leerkrachtaccounts en schoollicenties;
3. eigen presets en favorieten;
4. uitgebreidere manipulatieven (rekenrek, geld, breukencirkels, meetlat/gradenboog, patroonblokken);
5. import uit Werkbladstudio;
6. klascode / delen;
7. bordtemplates per leerdoel;
8. PWA/offline modus.


## Classroomscreen-geïnspireerde uitbreiding
Deze iteratie voegt eigen Studio SaGo-implementaties toe van nuttige digibordconcepten:
- stopwatch en visuele timer
- werksymbolen
- groepenmaker
- scorebord
- dagplanning
- event countdown
- geluidsmeter via microfoon
- klassikale poll
- QR/link/media/embed-widgets
- stickers
- focusmodus
- annotatielaag boven het volledige bord
- toetsenbordshortcut `1` voor focus en `B` voor navigatie

Dit is geen kopie van Classroomscreen: de UI, code en Studio SaGo-workflow zijn zelfstandig opgebouwd.

## V3-uitbreiding
- alle widgets zijn via de browser-resizehoek vergroot/verkleind
- MAB houdt honderdtallen, tientallen en eenheden in vaste kolomvolgorde
- annotatie heeft pen, gom en 'tekening wissen'
- klok schakelt tussen analoog en digitaal
- uitgebreidere woordkaarten met zoeken, vorige/volgende, shuffle en verbergen
- poll blijft volledig bewerkbaar; vraag en opties kunnen in de volgende iteratie aan een opgeslagen klas worden gekoppeld
- maaltafel- en splitsflitser met instelbare wachttijd
- meerdere bordpagina's
- dagstart met bewerkbare reken- en taaloefeningen en toonbare oplossingen
- stopbord, stiltebord, stemniveaus, exit ticket, verjaardag, stappenplan
- positieve punten en teams als optionele klasmanagementlaag
- bestaande timer, geluidsmeter, groepenmaker, randomizer, media, QR, tekenbord en rekenmanipulatieven blijven behouden

### Woordenlijst-zip
De aangeleverde PDF's vermelden expliciet persoonlijk gebruik en een verbod op herdistributie. Daarom zijn de woorden uit die commerciële/gelicentieerde PDF's niet in deze distributie gekopieerd. Klasbordstudio bevat in plaats daarvan een invoerveld waarin de leerkracht eigen of rechtmatig gebruikte woordenlijsten kan plakken/importeren.


## Verdiepingsronde
Deze versie maakt van het prototype een veel meer lesgerichte bordomgeving:
- echte resize-handle per widget;
- widgets vastzetten;
- lokale autosave van pagina's en bordtitel;
- centrale klaslijst;
- presentatiemodus;
- bordtemplates;
- slimme dagstartgenerator met L1-L6-rekenbereiken;
- klikbare oplossingen;
- aanwezigheden;
- datum/kalender;
- vraag van de dag;
- dynamisch bewerkbare pollopties;
- meerdere pagina's blijven onderdeel van één bord;
- achtergronden wisselen;
- bestaande Classroomscreen/ClassDojo-geïnspireerde tools blijven geïntegreerd.

De ClassDojo-inspiratie is bewust beperkt tot generieke klasmanagementpatronen zoals positieve feedback, klaslijsten, routines, groepen en leerlingselectie. Er zijn geen ClassDojo-assets, namen, monsters of propriëtaire UI-elementen gekopieerd.


## V5 verfijning
- visuele polish en consistentere widgets;
- bord exporteren/importeren als JSON;
- automatisch bord ordenen;
- presentatiebalk en pijltjestoetsnavigatie;
- centrale klaslijst vult naamkiezer/groepen automatisch;
- weerwidget en routinechecklist;
- klasbeloningspot;
- willekeurige-getallengenerator;
- interactieve D-H-T-E plaatswaardetabel;
- rekenrek tot 20;
- euromateriaal;
- snelle klassikale quiz;
- voortgangsbalk;
- geselecteerde widget krijgt visuele focus.

Voor productie blijven server-side accounts, databaseopslag, live leerlingresponses en echte samenwerking aparte backendtaken.


## V6 – functionele verdieping
- timeralarm bij 0 via Web Audio;
- visuele timer telt werkelijk af en geeft alarm;
- klok: analoog/digitaal + streepjes voor uur, halfuur, kwartier, 5 min of 1 min;
- maaltafelflitser: meerdere tafels tegelijk + maximumfactor;
- splitsflitser in splits-hokjes;
- plaatswaardetabel selecteerbaar van E t/m M (1.000.000);
- geld gebruikt dezelfde vereenvoudigde euro-SVG-vormgeving als de Werkbladstudio-referentie;
- woordkaarten: originele nieuwe woordenbanken per niveau, zonder tekst uit de aangeleverde PDF's te kopiëren;
- slimme dagstart: bovengrens, tafelselectie, eigen titel/tekst, meerdere taalbanken en bewaarde instellingen;
- stiltebordtekst is vrij bewerkbaar;
- leerlinginteractie via klascode op eigen toestel.

### Starten op poort 3600
Gebruik nu **Node** in plaats van `python3 -m http.server`, omdat leerlinginteractie een kleine server nodig heeft:

```bash
node server.js
```

Open als leerkracht `http://localhost:3600`.

Leerlingen op hetzelfde netwerk openen de URL die bij **Leerlingcode** verschijnt. Gebruik op een fysiek leerlingtoestel het lokale IP-adres van de leerkrachtcomputer (bijvoorbeeld `http://192.168.x.x:3600/student.html?code=ABC123`) in plaats van `localhost`.

De leerling vult een naam in. Die naam wordt niet op het klasbord getoond; alleen in het uitklapbare leerkrachtdashboard van de widget.


## V7
Klok opnieuw vormgegeven; klasvenster sluit/open robuuster; dagplanning uitbreidbaar; MAB bundelt 10 E automatisch naar 1 T en 10 T naar 1 H; splitsingen volgen het aangeleverde hokjesmodel; geldmodule bevat oefeningen en geen 1/2 cent; woordkaarten bevatten de woorden uit de aangeleverde kern-PDF's; slimme dagstartknoppen zijn opnieuw bedraad en genereren nieuwe taalopgaven.


## V63
GGD/KGV: de leerlingbediening (inclusief Controleer) blijft nu zichtbaar en bereikbaar in leerlingpreview en volledig scherm. De GGD/KGV-body kan scrollen wanneer de oefening hoger is dan het scherm.
