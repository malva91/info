const cerrano = [
    {
      nome: "Tuscany House",
      indirizzo: "Via del Tondo 3, Pisa, Pisa",
      ospiti: 5,
      composizione: [
        "1 Letto Matrimoniale",
        "1 Letto Singolo",
        "1 Divano Letto Matrimoniale",
        "2 Bagni (uno senza doccia)",
        "1 Cucina",
      ],
      ore: 2,
      mappa:
        "https://www.google.com/maps/dir//Via+del+Tondo,+3,+56124+Pisa+PI/@43.701052,10.4301216,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x12d591fb907f2cb9:0xab9ae8f91d8a4c55!2m2!1d10.4326965!2d43.701052!3e0?entry=ttu",
      note: [
        "METTERE BIDET",
        "KeyBox: 5-5-6-6",
        "Se trovate soldi o contratti, lasciare tutti nello stanzone dove ci sono i cambi biancheria",
      ],
    },
    {
      nome: "new house",
      indirizzo: "Via Francesco Pardi 16, Pisa, Pisa",
      ospiti: 4,
      composizione: ["2 Letti Matrimoniali", "1 Bagno", "1 Cucina"],
      ore: 1.5,
      mappa: "https://goo.gl/maps/ZPmfF4LNYk3zRMUR7",
      note: [
        "METTERE BIDET, L'APPARTAMENTO È AL SECONDO PIANO",
        "Keybox: 1-9-7-3",
      ],
    },
    {
      nome: "3 in uno",
      indirizzo: "Via Di Mezzana 11, Pisa, Pisa",
      ospiti: "2-1-3",
      composizione: [
        "Mimosa: 1 Letto Matrimoniale, 1 Bagno, Ospiti: 2, KeyBox: 1-1-1-2",
        "Gelsomino: 1 Letto Singolo che diventa matrimoniale, 1 Bagno, Ospiti: 1, KeyBox: 3-3-3-4",
        "Girasole: 1 Letto Matrimoniale, 1 Letto Singolo (da fare solo con 3 ospiti), 1 Bagno, Ospiti: 3, KeyBox: 0-0-1-1",
        "Cucina comune",
        "Appartamento Completo: 3 Letti Matrimoniali, 1 Letto Singolo, 3 Bagni, 1 Cucina, Ospiti: 7",
      ],
      ore: "0,5 a camera/1,5 per appartamento completo",
      mappa: "https://goo.gl/maps/TW6R1tfcMebjL81DA",
      note: [
        "METTERE BIDET",
        "Sono 3 camere con bagno privato in un unico appartamento, va fatta la pulizia della camera, del bagno e della cucina",
        "Edificio 11, suonare a CATANIA (il portone si apre), salire al secondo piano, ultima porta sulla destra (ci sono le 3 KeyBox)",
        "Se trovate soldi o contratti, lasciare tutto in garage (è l'unico con la cassetta postale)",
      ],
    },
    {
      nome: "Designer Flat",
      indirizzo: "Via Italo bargagna 38, Pisa, Pisa",
      ospiti: 4,
      composizione: [
        "1 Letto Matrimoniale",
        "1 Divano Letto Matrimoniale",
        "1 Bagno",
        "1 Cucina",
      ],
      ore: 1.5,
      mappa: "https://maps.app.goo.gl/oRMVWxB117Un5WsK6",
      note: [
        "METTERE BIDET, L'APPARTAMENTO È AL SECONDO PIANO INTERNO 10, Mettere Bidet",
        "Keybox: 8-8-8-7",
      ],
    },
    {
      nome: "homiday elegant",
      indirizzo: "Via Andrea Vesalio, 8",
      ospiti: 7,
      composizione: ["3 Letti Matrimoniali", "2 Bagni", "1 Cucina"],
      ore: 2,
      mappa: "https://maps.app.goo.gl/MbZimuDkcq1vobBJ6",
      note: [
        "Terzo piano interno 8 Campanello 'Lista'",
        "Mettere Bidet",
        "Keybox: 2-1-2-1",
      ],
    },
    {
      nome: "Apt Ospedale",
      indirizzo: "Via Luigi Pera, 14",
      ospiti: 4,
      composizione: [
        "1 Letto Matrimoniale",
        "1 Divano Letto Matrimoniale",
        "1 Bagno",
        "1 Cucina",
      ],
      ore: 1,
      mappa:
        "https://www.google.it/maps/place/Via+Luigi+Pera,+14,+56124+Pisa+PI/@43.7079896,10.4362853,17z/data=!3m1!4b1!4m6!3m5!1s0x12d591e21adbf6d5:0x3ce5c8155fb7b30f!8m2!3d43.7079858!4d10.4388602!16s%2Fg%2F11c281k30j?entry=ttu",
      note: ["Mettere Bidet", "Keybox: 8 - 0 - 8 - 0"],
    },
    {
      nome: "New apt",
      indirizzo: "Via taddei, 15",
      ospiti: 4,
      composizione: [
        "1 Letto Matrimoniale",
        "1 Divano Letto Matrimoniale",
        "1 Bagno",
        "1 Cucina",
      ],
      ore: 1,
      mappa: "https://maps.app.goo.gl/DQ69W7NAT3r5Dq439",
      note: [
        "Mettere Bidet",
        "Piano Secondo Interno 9",
        "Keybox: 2-0-0-4",
        "Quando fate il divano letto, mettete il <a href='images/newApt/topper.jpg' class='btn btn-custom-2 btn-lg text-white btn-custom ripple'>TOPPER</a> che poi quando lo sfate andrà riposto dove lo avete preso e richiuso con le cinghie",
      ],
    },
    {
      nome: "Pontasserchio",
      indirizzo: "Via F.Cilea, 18, Pontasserchio",
      ospiti: 12,
      composizione: [
        "Savana: 1 Letto Matrimoniale, 1 Divano Letto Matrimoniale, 1 Bagno, 1 Cucina, Ospiti: 4, Keybox: 1-1-2-2",
        "Rinoceronte: 1 Letto Matrimoniale, 1 Divano Letto Matrimoniale, 1 Bagno, 1 Cucina, Ospiti: 4, Keybox: 2-2-3-3",
        "Giraffa: 1 Letto Matrimoniale, 1 Divano Letto Matrimoniale, 1 Bagno, 1 Cucina, Ospiti: 4, Keybox: 3-3-4-4",
      ],
      ore: 1,
      mappa: "https://maps.app.goo.gl/F2ZG1inS1oJ4gmyN9",
      note: [
        "Mettere Bidet",
        "Interno 1, 2, 3",
        "Le scale se molto sporche chiedere prima a noi e fare scale (30min extra)",
      ],
    },
    {
      nome: "Charme And Relax",
      indirizzo: "vicolo del Poschi 15, Pisa",
      ospiti: 4,
      composizione: [
        "1 Letto Matrimoniale",
        "1 Divano Letto Matrimoniale",
        "1 Bagno",
        "1 Cucina",
      ],
      ore: 1,
      mappa: "https://maps.app.goo.gl/xU2jgT9ZtodDCaSM6",
      note: [
        "Mettere Bidet",
        "Keybox:2020 ",
        "Codice Portone:1 5 1 5 #",
        "Parcheggiate al cinema odeno o in borgo stretto",
        "è un vicolo accanto al Bar 'Salza'",
        "Come arrivare e video KeyBox <a href='DescrizioneAppartamenti/charm.html' class='btn btn-custom-2 btn-lg text-white btn-custom ripple'>INFO</a>",
      ],
    },
    {
      nome: "Nuovo&Grazioso",
      indirizzo: "Via Paolo VI 12,Cisanello",
      ospiti: 4,
      composizione: [
        "1 Letto Matrimoniale",
        "1 Divano Letto Matrimoniale",
        "1 Bagno",
        "1 Cucina",
      ],
      ore: 1,
      mappa: "https://maps.app.goo.gl/HfxGhaus8yGyTuDFA",
      note: ["Mettere Bidet", "Keybox:Cassetta postale con KeyBox 595"],
    },
    {
      nome: "VIA CAMPANIA 2 ",
      indirizzo: "Via Campaniaa 2, Cisanello ",
      ospiti: 4,
      composizione: [
        "1 Letto Matrimoniale",
        "1 Divano Letto Matrimoniale",
        "1 Bagno",
        "1 Cucina",
      ],
      ore: 1,
      mappa: "https://maps.app.goo.gl/W1GkNcb46WKJkdys8",
      note: [
        "Mettere Bidet",
        "Piano Primo",
        "Keybox:9-8-7-6 (Cassettapostale con etichetta rossa)",
      ],
    },
  
    {
      nome: "Cozy House ",
      indirizzo: "Via Taddei 1, Cisanello ",
      ospiti: 3,
      composizione: [
        "1 Letto Matrimoniale",
        "1 Divano Letto Singolo",
        "1 Bagno",
        "1 Cucina",
      ],
      ore: 1,
      mappa: "https://maps.app.goo.gl/iYX7rNfKd9PRQ7xG6",
      note: [
        "Mettere Bidet",
        "Keybox: Cassetta postale :'Salinari' 7-8-7-8 ",
        " 2 piano , INT. 8",
      ],
    },
  
    {
      nome: "Sweet Home",
      indirizzo: "vicolo del poschi 15, Pisa ",
      ospiti: 4,
      composizione: [
        "1 Letto Matrimoniale",
        "1 Divano Letto Matrimoniale",
        "1 Bagno",
        "1 Cucina",
      ],
      ore: 1,
      mappa: "https://maps.app.goo.gl/xU2jgT9ZtodDCaSM6",
      note: [
        "Mettere Bidet",
        "Keybox:2 - 5 - 0 - 5",
        "  piano 1, INT.4 "
      ],
    },
    {
      nome: "Flat Moderno",
      indirizzo: "Via Italo bargagna 38, Pisa, Pisa",
      ospiti: 4,
      composizione: [
        "1 Letto Matrimoniale",
        "1 Divano Letto Matrimoniale",
        "1 Bagno",
        "1 Cucina",
      ],
      ore: 1,
      mappa: "https://maps.app.goo.gl/oRMVWxB117Un5WsK6",
      note: [
        "METTERE BIDET ","L'APPARTAMENTO È AL QUARTO PIANO INTERNO 23",
        "Keybox: 1711 ",
      ],
    },
  ];