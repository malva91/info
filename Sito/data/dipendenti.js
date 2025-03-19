const masterPassword = "Adminhr"; // Master password

const employees = [
  {
    name: "**Dipendente Test**",
    password: "Test",
    sheetUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQexG2-QMILCSkX0vxPtC7yJyriiAw7r6uhzxYCHjKmifu-XjQefoZXzU_tAdTYX-xSuPyx7yrEGSxy/pubhtml?gid=13035718&single=true",
      urlParam: "DipendenteTest"
  },
  {
    name: "Alessandro Resti",
    password: "AR5671",
    sheetUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQexG2-QMILCSkX0vxPtC7yJyriiAw7r6uhzxYCHjKmifu-XjQefoZXzU_tAdTYX-xSuPyx7yrEGSxy/pubhtml?gid=544014734&single=true",
      urlParam: "AlessandroResti"
  },
  {
    name: "Anna Wleklak",
    password: "AW5896",
    sheetUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQexG2-QMILCSkX0vxPtC7yJyriiAw7r6uhzxYCHjKmifu-XjQefoZXzU_tAdTYX-xSuPyx7yrEGSxy/pubhtml?gid=13035718&single=true",
      urlParam: "AnnaWleklak"
  },
  {
    name: "Antonella Guarnieri",
    password: "AG8024",
    sheetUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQexG2-QMILCSkX0vxPtC7yJyriiAw7r6uhzxYCHjKmifu-XjQefoZXzU_tAdTYX-xSuPyx7yrEGSxy/pubhtml?gid=948977200&single=true",
      urlParam: "AntonellaGuarnieri"
  },
  {
    name: "Antonio Bene",
    password: "AB3098",
    sheetUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQexG2-QMILCSkX0vxPtC7yJyriiAw7r6uhzxYCHjKmifu-XjQefoZXzU_tAdTYX-xSuPyx7yrEGSxy/pubhtml?gid=1229267140&single=true",
      urlParam: "AntonioBene"
  },
  {
    name: "Letizia Vannini",
    password: "LV4587",
    sheetUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQexG2-QMILCSkX0vxPtC7yJyriiAw7r6uhzxYCHjKmifu-XjQefoZXzU_tAdTYX-xSuPyx7yrEGSxy/pubhtml?gid=1056497549&single=true",
      urlParam: "LetiziaVannini"
  },
  {
    name: "Manola Santarnecchi",
    password: "MS1936",
    sheetUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQexG2-QMILCSkX0vxPtC7yJyriiAw7r6uhzxYCHjKmifu-XjQefoZXzU_tAdTYX-xSuPyx7yrEGSxy/pubhtml?gid=1884662301&single=true",
      urlParam: "ManolaSanternecchi"
  },
  {
    name: "Roberta Salemmo",
    password: "RS6239",
    sheetUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQexG2-QMILCSkX0vxPtC7yJyriiAw7r6uhzxYCHjKmifu-XjQefoZXzU_tAdTYX-xSuPyx7yrEGSxy/pubhtml?gid=2087128731&single=true",
      urlParam: "RobertaSalemmo"
  },
  {
    name: "Elizabeta Abaz",
    password: "EA5872",
    sheetUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQexG2-QMILCSkX0vxPtC7yJyriiAw7r6uhzxYCHjKmifu-XjQefoZXzU_tAdTYX-xSuPyx7yrEGSxy/pubhtml?gid=1677418867&single=true",
      urlParam: "ElizabetaAbaz"
  },
  {
    name: "Silvia Marrucci",
    password: "SM5872",
    sheetUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQexG2-QMILCSkX0vxPtC7yJyriiAw7r6uhzxYCHjKmifu-XjQefoZXzU_tAdTYX-xSuPyx7yrEGSxy/pubhtml?gid=1553549821&single=true",
      urlParam: "SilviaMarrucci"
  },
  {
    name: "Anna Macrì",
    password: "AM9814",
    sheetUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQexG2-QMILCSkX0vxPtC7yJyriiAw7r6uhzxYCHjKmifu-XjQefoZXzU_tAdTYX-xSuPyx7yrEGSxy/pubhtml?gid=1663815114&single=true",
      urlParam: "AnnaMacrì"
  }

  /* Commented employees
  {
      name: "Anna Musolino",
      password: "AM7352",
      sheetUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQexG2-QMILCSkX0vxPtC7yJyriiAw7r6uhzxYCHjKmifu-XjQefoZXzU_tAdTYX-xSuPyx7yrEGSxy/pubhtml?gid=796693583&single=true",
      urlParam: "AnnaMusolino"
  },
  {
      name: "Michela Gasperini",
      password: "MG7425",
      sheetUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQexG2-QMILCSkX0vxPtC7yJyriiAw7r6uhzxYCHjKmifu-XjQefoZXzU_tAdTYX-xSuPyx7yrEGSxy/pubhtml?gid=1617758158&single=true",
      urlParam: "MichelaGasperini"
  },
  {
      name: "Jennifer Giannola",
      password: "JG2245",
      sheetUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQexG2-QMILCSkX0vxPtC7yJyriiAw7r6uhzxYCHjKmifu-XjQefoZXzU_tAdTYX-xSuPyx7yrEGSxy/pubhtml?gid=950912792&single=true",
      urlParam: "JenniferGiannola"
  },
      {
      name: "Mardine Cremasco",
      password: "MC4352",
      sheetUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQexG2-QMILCSkX0vxPtC7yJyriiAw7r6uhzxYCHjKmifu-XjQefoZXzU_tAdTYX-xSuPyx7yrEGSxy/pubhtml?gid=991026091&single=true",
      urlParam: "MardineCremasco"
  },
  */
];