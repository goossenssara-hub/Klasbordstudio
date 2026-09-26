# MAB visuele verfijningsprompt

Analyseer de MAB-module als één fullscreen leerlinginterface, niet als losse componenten.

Doel: de volledige oefencyclus moet zonder scrollen zichtbaar zijn: opdracht, materiaalkeuzes, D/H/T/E-werkvlak, actuele waarde, Nakijken en feedback.

Regels:
- Geen interactief element mag onder de viewport vallen.
- Het werkvlak gebruikt de resterende hoogte (1fr), geen vaste grote hoogte.
- Materiaalkaarten en previews schalen mee met de schermhoogte.
- D/H/T/E blijven exact even brede kolommen met consequente scheidingslijnen.
- Behoud de 5-structuur van de eenheden en voorkom overlap.
- Teller en Nakijken staan direct onder het werkvlak en zijn altijd zichtbaar.
- Feedback mag de knop nooit naar beneden duwen.
- Gebruik compacte breakpoints voor schermhoogtes onder 850px en 720px.
- Behoud Studio SaGo/Klasbordstudio-vormgeving en Werkbladstudio-MAB-kleuren.
