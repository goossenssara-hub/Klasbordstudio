# Klasbordstudio V58 — analyse- en uitvoeringsprompt

Analyseer V57 als één samenhangend digibordproduct en herstel functies zonder bestaande modules te breken.

## 1. GGD & KGV
Maak dit een echte instructie- en oefenmodule, niet alleen een antwoordcalculator. Toon delers van beide getallen, markeer gemeenschappelijke delers, laat de grootste gemeenschappelijke deler visueel opvallen. Toon voor KGV de veelvouden van beide getallen in twee afzonderlijke rijen tot het eerste gemeenschappelijke veelvoud en markeer de eerste match. Voeg leerlingvelden toe voor GGD en KGV, Controleer, Toon uitwerking en Nieuwe oefening. Respecteer de gekozen modus (GGD, KGV of beide). Vermijd extreem lange lijsten en onbruikbare waarden.

## 2. Woordkaarten
Herstel alle bediening: vorige, volgende, door elkaar, verberg/toon, zoeken en woordenbank laden. Laat modi betekenisvol werken: flitskaart toont woord, dictee kan woord verbergen/tonen, leeskaart toont lijst/kaart duidelijk, woord raden ondersteunt verbergen. Zorg dat lege lijsten nooit JS-fouten veroorzaken en dat wijzigingen aan de textarea meteen worden verwerkt.

## 3. Woordenflitser+
De HTML bestaat in V57 maar de functionele eventlogica ontbreekt. Implementeer start, volgende, pauze/hervat en stop; handmatige en automatische modus; eigen woorden of gekozen woordenbank; aantal; zichtduur; pauzeduur; voortgang; status; lidwoordoptie. Timers moeten altijd worden opgeruimd bij stop/verwijderen en dubbele timerloops moeten onmogelijk zijn.

## 4. Oorzaak & gevolg
Werk didactisch duidelijker uit. Leg bovenaan kort uit: oorzaak = waarom iets gebeurt; gevolg = wat er daardoor gebeurt. Voeg oefenmodi toe: gevolg zoeken bij oorzaak én oorzaak zoeken bij gevolg. Toon de twee delen visueel met labels OORZAAK en GEVOLG en een pijl. Geef gerichte feedback en een knop Nieuwe ronde. Houd invoer voor de leerkracht apart van de leerlingweergave.

## 5. Doel van de schrijver
Maak de brontekst zelf groot en leesbaar in de leerlingweergave. De textarea is alleen leerkrachtinstelling en mag niet de enige plek zijn waar de tekst staat. Toon drie doelen met leerlingvriendelijke uitleg: informeren = iets uitleggen/feiten geven; overtuigen = je iets laten vinden/doen; vermaken = plezier/spanning/verhaal. Voeg herkenningshulp/signaalvragen toe en laat de leerkracht het juiste antwoord instellen. Bij wijziging van tekst of antwoord moet de leerlingkaart direct bijwerken. In schone/leerlingweergave blijven tekst, vraag, antwoordknoppen en feedback zichtbaar; instellingen verdwijnen.

## Algemene QA
Geen regressies in slepen, schalen, pentool/gom, pagina's of andere modules. Gebruik bestaande Studio SaGo-stijl. Test JavaScript-syntax en controleer selectors op null-fouten.
