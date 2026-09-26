# Klasbordstudio V59 — analyse taal + masterprompt

## Diagnose
De taalrubriek bevat 13 modules: Woordkaarten, Woordenflitser+, Flashcards, Tekstmarkeerder, Zinnen bouwen, Lettergrepen, Dictee, Woordrelaties, Leesstrategieën, Volgorde zetten, Oorzaak & gevolg, Hoofdgedachte & details en Doel van de schrijver.

### Kritieke bevindingen
1. Flashcards had een goede visuele basis, maar de oefenstatus was te fragiel: automatisch verder werd altijd uitgevoerd, ook als de optie uit stond; herhaald controleren kon de score meermaals verhogen; 'toon antwoord' werd niet als leeractie bijgehouden; na de laatste kaart was er geen echte eindstaat/herstart; lege/gewijzigde rijen werden niet opnieuw gevalideerd bij starten; de richting werd tijdens elke paint opnieuw willekeurig gekozen; er ontbrak een duidelijke knop 'opnieuw oefenen'.
2. Woordkaarten werkt technisch, maar mist teller, lege-lijststatus en expliciete leerlinginstructie. Modi zijn vooral labels en veranderen de oefenflow onvoldoende.
3. Woordenflitser werkt, maar 'lidwoorden tonen' produceert didactisch foutief 'de/het woord'. Lidwoord moet alleen worden gebruikt als het in de bron staat of expliciet is ingevoerd.
4. Tekstmarkeerder heeft geen opdracht/legenda per kleur en gebruikt contenteditable waardoor tekst per ongeluk gewijzigd kan worden.
5. Zinnen bouwen vergelijkt letterlijk, waardoor hoofdletter/spaties/interpunctie snel tot onnodige foutmeldingen leiden.
6. Lettergrepen probeert automatisch te syllabificeren. Dat is taalkundig niet betrouwbaar genoeg voor alle Nederlandse woorden. Eigen correcte verdeling moet leidend zijn; automatische suggestie moet als suggestie worden behandeld.
7. Dictee toont standaard het woord. Voor een dictee moet de leerkracht kunnen kiezen tussen kort tonen, verborgen starten en handmatig onthullen.
8. Woordrelaties ondersteunt slechts één exact antwoord; synoniemen kunnen meerdere geldige antwoorden hebben.
9. Leesstrategieën genereert vooral open vragen zonder controleerbare oefenflow of goed leesvlak.
10. Volgorde zetten is functioneel maar kan didactisch sterker met stapnummers, oplossing en herstel.
11. Oorzaak & gevolg is functioneel, maar moet expliciet maken dat oorzaak chronologisch/logisch vóór het gevolg ligt en signaalwoorden tonen zonder te suggereren dat elk signaalwoord altijd hetzelfde verband betekent.
12. Hoofdgedachte & details bepaalt nu impliciet dat het laatste detail fout is. Dat is verborgen logica en te kwetsbaar. De leerkracht moet correcte details expliciet kunnen markeren.
13. Doel van de schrijver is inhoudelijk verbeterd, maar moet nog meer focussen op tekstsoort, aanwijzingen in de tekst en een zeer groot leesvlak in leerlingmodus.

## MASTERPROMPT VOOR VERDERE UITWERKING
Werk uitsluitend verder op de nieuwste stabiele Klasbordstudio-code. Verwijder geen bestaande functies. Behoud Studio SaGo-huisstijl en de scheiding tussen leerkrachtinstellingen en leerlingweergave. Test elke taalmodule functioneel met muis én touch.

### Algemene eisen voor ALLE taalmodules
- Elke module heeft vier duidelijke fasen: INSTELLEN → STARTEN → OEFENEN → AFRONDEN/HERSTARTEN.
- Alles wat alleen de leerkracht nodig heeft krijgt `.module-settings`; in leerlingmodus is dit volledig verborgen.
- De leerling ziet een groot, rustig leesvlak met minimaal 22–24 px lopende tekst en grotere kernwoorden.
- Elke actieknop moet daadwerkelijk een eventhandler hebben. Geen decoratieve knoppen of selects.
- Enter moet waar logisch hetzelfde doen als Controleer/Volgende.
- Geef feedback zonder het juiste antwoord onmiddellijk prijs te geven, behalve na 'Toon oplossing'.
- Voeg lege-toestand, fouttoestand en eindtoestand toe.
- Wijzigingen in instellingen mogen nooit een lopende oefening stilzwijgend corrupt maken.
- Voorkom dubbele score door dezelfde kaart/vraag meermaals te controleren.
- Maak knoppen touchvriendelijk (minimaal circa 44 px raakvlak).
- Behoud toestand per widget zolang de widget open staat.
- Zorg dat fullscreen/leerlingmodus geen teksten afsnijdt en geen instellingen toont.
- Gebruik begrijpelijk Vlaams/Nederlands onderwijsjargon.

### Flashcards — volledig functioneel
- Invoer: plakken met TAB, `;` of `=`; CSV/TSV; XLSX met kolom A woord en kolom B betekenis.
- Toon na import exact hoeveel geldige kaarten zijn geladen en hoeveel regels zijn overgeslagen.
- Tabel blijft bewerkbaar. Valideer opnieuw bij Start.
- Richtingen: woord→betekenis, betekenis→woord, gemengd. Leg gemengde richting per kaart vast voor die ronde zodat een repaint de richting niet verandert.
- Controle: exact en kernwoorden. Normaliseer hoofdletters, dubbele spaties en eindinterpunctie. Kernwoordenmodus accepteert alle essentiële woorden, niet toevallige substringmatches.
- Eén kaart kan per poging maximaal één punt opleveren.
- Fout antwoord: kaart blijft staan; toon 'Probeer opnieuw' en bied Toon antwoord.
- Toon antwoord markeert de kaart als 'bekeken' en levert geen juist-punt op.
- 'Automatisch verder' werkt alleen wanneer aangevinkt. Indien uit: toon na een juist antwoord een duidelijke Volgende-knop.
- Voeg Vorige, Volgende, Hussel, Opnieuw oefenen en Terug naar kaarten toe.
- Toon voortgang: kaart x/y, juist, nog te oefenen.
- Eindscherm: score + knop 'Oefen fouten opnieuw' wanneer er fouten/bekeken kaarten zijn + 'Alles opnieuw'.
- Geen focus op een verborgen input na einde.

### Woordkaarten
- Voeg teller x/y en lege-lijststatus toe.
- Maak Flitskaart, Dictee, Leeskaart en Woord raden werkelijk verschillende flows.
- Zoek/filter mag de index niet buiten bereik laten.
- Shuffle met Fisher-Yates.
- Verberg/toon heeft duidelijke status.

### Woordenflitser+
- Geen fictief `de/het`. Lidwoord alleen tonen wanneer de bron `de boom`, `het huis`, etc. bevat.
- Handmatig en automatisch moeten afzonderlijk correct werken.
- Pauzeren hervat dezelfde kaart en springt niet onbedoeld verder.
- Stop reset timers en voortgang.
- Instelbare zichtduur, pauze en aantal.
- Toetsenbord: spatie = volgende/pauze waar passend.

### Tekstmarkeerder
- Tekst in leerlingweergave is read-only behalve selectie/markering.
- Laat leerkracht per kleur een betekenis kiezen (bv. hoofdgedachte, sleutelwoord, oorzaak, gevolg).
- Wis één markering of alle markeringen.
- Grote regelafstand en leesbare tekst.

### Zinnen bouwen
- Meerdere zinnen, elk afzonderlijk.
- Normaliseer witruimte en interpunctie bij controle, maar behoud grammaticale correctheid.
- Geef per zin feedback.
- Oplossing per zin en alles opnieuw husselen.

### Lettergrepen
- Presenteer automatische splitsing nooit als gegarandeerd correct.
- Eigen correcte verdeling heeft voorrang.
- Voeg woordenlijstmodus toe met meerdere oefeningen.
- Accepteer `-` en `·` als scheiding.

### Dictee
- Modi: kort tonen → verbergen; direct verborgen; handmatig tonen.
- Vorige/volgende, automatische timing, stop en herstart.
- Optioneel teller zonder het woord zichtbaar te maken.

### Woordrelaties
- Synoniem, antoniem en verwant woord als expliciete types.
- Sta meerdere correcte antwoorden toe, gescheiden door `|`.
- Toon pas oplossing op verzoek.

### Leesstrategieën
- Groot leesvlak naast/onder de vraag.
- Modi: voorspellen, hoofdgedachte, detail, feit/mening, contextwoord, samenvatten.
- Leerkracht kan modelantwoord invullen.
- Toon modelantwoord alleen op verzoek.

### Volgorde zetten
- Sleepbaar én pijltjes als toegankelijk alternatief.
- Controle, oplossing, opnieuw husselen.
- Houd originele volgorde als immutable answer key.

### Oorzaak & gevolg
- Toon: OORZAAK → GEVOLG.
- Oefen beide richtingen.
- Voeg signaalwoorden als hulp toe: omdat, doordat, daarom, daardoor, zodat; leg uit dat betekenis uit de zin/context komt.
- Leerkracht voert paren expliciet in.
- Antwoorden worden per paar gecontroleerd; nieuwe ronde husselt antwoordopties.

### Hoofdgedachte & details
- Stop met de regel 'alle behalve laatste zijn correct'.
- Laat invoerformaat toe: `+ detail` = ondersteunt, `- detail` = afleider, of bied toggles in editor.
- Leerling selecteert meerdere ondersteunende details en drukt daarna Controleer.
- Feedback benoemt verschil tussen hoofdgedachte en detail.

### Doel van de schrijver
- Groot leesvlak, ook in leerling/fullscreen.
- Doelen: informeren, overtuigen, vermaken; optioneel instrueren/uitleggen als leerkracht dit activeert.
- Toon korte definities, maar niet zo prominent dat ze het antwoord verraden.
- Na antwoord: laat aanwijzing in tekst bespreken (feiten/uitleg, oproep/argument, verhaal/humor/spanning).
- Voeg tekstsoort toe als optionele hint, niet als automatisch bewijs.

### QA
Maak na implementatie een taal-QA-matrix met per module: openen, instellingen, start, kerninteractie, controle, oplossing, volgende, reset, leerlingmodus, fullscreen, touch, lege invoer. Geen release als één kritieke flow faalt. Controleer JavaScript-syntax en consolefouten.
