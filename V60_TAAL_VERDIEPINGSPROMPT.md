# Klasbordstudio V60 — masterprompt taalverdieping

Analyseer vóór elke wijziging de volledige taalrubriek functioneel én didactisch. Een module is pas klaar wanneer de leerling in leerling-/clean-view zelfstandig kan begrijpen: (1) welke bron/tekst centraal staat, (2) wat de opdracht is, (3) wat interactief moet gebeuren, (4) wat feedback betekent en (5) hoe een nieuwe ronde start. Instellingen van de leerkracht mogen nooit de enige plaats zijn waar noodzakelijke leerlinginhoud zichtbaar is.

## Algemene kwaliteitsnorm
- Toon brontekst, woord, zin of opdracht groot en leesbaar in de oefenweergave; nooit uitsluitend in textarea/input van de leerkracht.
- Scheid `module-settings` van leerlinginhoud. Clean view verbergt instellingen maar nooit de oefenbron.
- Minimum bordleesbaarheid: hoofdtekst 22–34 px responsief, voldoende regelafstand, maximaal ca. 1100 px tekstbreedte, hoog contrast.
- Elke module heeft een duidelijke instructiezin en status/feedback.
- Start/maak oefening, controleren, oplossing/hulp en opnieuw/nieuwe ronde moeten een voorspelbare state-flow hebben.
- Touch, muis en digibord moeten bruikbaar zijn. Klikdoelen minimaal ca. 44 px.
- Reset wist oude feedback, selecties en scores correct.
- Geen impliciete antwoordlogica op basis van positie, sorteervolgorde of “laatste item”. Correctheid moet expliciet in de data zitten.
- Voorkom dubbele eventlisteners, stale state en willekeur die tijdens render opnieuw verandert.
- Test iedere module in leerkrachtweergave, clean view en leerlingweergave.

## Leesstrategieën
- De volledige leestekst moet permanent als afzonderlijke LEESTEKST-kaart zichtbaar zijn boven de vraag.
- Wijzigingen van de leerkracht moeten meteen of bij 'Maak vraag' naar de leeskaart synchroniseren.
- Vraagtypes: hoofdgedachte, feit/mening, context. Formuleer leerlinggerichte opdrachten.
- Leerkrachthulp is standaard verborgen en mag niet noodzakelijk zijn om de opdracht te begrijpen.
- Voeg later optioneel voorbeeldantwoord/rubric toe, zonder vrije antwoorden foutief automatisch te beoordelen.
- Bij context: laat de leerkracht doelwoord en aanwijzingen expliciet instellen i.p.v. volledig open formulering.

## Hoofdgedachte & details
- Toon duidelijk labels HOOFDGEDACHTE en MOGELIJKE DETAILS.
- Elk detail is één afzonderlijke kaart; nooit meerdere regels samengevoegd tot één antwoord.
- Correctheid expliciet opslaan. Huidige tekstinvoer gebruikt `+ detail` voor ondersteunend en `- detail` voor afleider; een latere UI mag dit vervangen door per-regel toggles.
- Leerling selecteert eerst zonder onmiddellijke verklapping; daarna knop Controleer.
- Correct geselecteerd = positief; fout geselecteerd = fout; gemist correct detail = aparte waarschuwing.
- Voeg Opnieuw toe en schud alleen bij het starten/resetten, niet tijdens interactie.
- Maak hoofdgedachte visueel dominant en details individueel scanbaar.

## Oorzaak & gevolg
- Behoud expliciete definitie oorzaak → gevolg.
- Maak relaties één-op-één en valideer invoer op ontbrekende/duplicaatparen.
- Ondersteun beide richtingen. Zorg dat dropdownopties niet ambigu zijn bij dubbele teksten.
- Voeg later moeilijkheidsniveaus toe: signaalwoorden, zonder signaalwoorden, meerdere stappen.

## Doel van de schrijver
- Brontekst altijd groot zichtbaar in leerlingweergave.
- Maak onderscheid informeren/overtuigen/vermaken met korte herkenningsvragen, niet alleen definities.
- Laat leerkracht juiste categorie expliciet instellen.
- Feedback legt uit welk tekstkenmerk de keuze ondersteunt.
- Voorzie voldoende tekstgrootte en ruimte op kleine schermen/fullscreen.

## Flashcards / woordkaarten / woordenflitser
- Flashcards: stabiele kaartvolgorde per ronde; voor-/achterkant; bekend/nog oefenen; score per unieke kaart; automatisch verder alleen als ingesteld; gemiste kaarten opnieuw oefenen.
- Woordkaarten: woord en betekenis blijven gekoppeld; navigatie en teller werken; import van twee kolommen valideren; lege regels negeren; kaart nooit buiten beeld.
- Woordenflitser: start/pauze/volgende/stop betrouwbaar; interval instelbaar; geen automatische lidwoorden toevoegen; voortgang zichtbaar; handmatig en automatisch duidelijk onderscheiden.

## Overige taalmodules
Controleer Tekstmarkeerder, Zinnen bouwen, Lettergrepen, Dictee, Woordrelaties en Volgorde zetten op dezelfde criteria. Bij Lettergrepen geen onbewezen automatische splitsing als absoluut correct antwoord presenteren. Bij vrije taalantwoorden liever leerkrachthulp/rubric dan schijnprecisie.

## Regressietest
Na wijzigingen: syntaxcheck; open/sluit elke taalmodule; test alle primaire knoppen; test reset; test clean view; test leerlingmodus; test smal scherm; controleer dat broninhoud niet verdwijnt wanneer settings verborgen worden. Wijzig geen andere categorieën tenzij nodig voor een gedeelde infrastructuurfix.
