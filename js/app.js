/* ==========================================================================
   LSBSC SOUTH LILLE — LOGIQUE PRINCIPALE COMPLÈTE (js/app.js)
   - 70 Matchs 2026-2027 & Adresses des clubs intégrés
   - Mode Direct / Scores sécurisé par code PIN 9694
   - Édition complète de chaque fiche match (date, heure, lieu, clubs, salle, adresse, précisions, score)
   - Gestionnaire global du carnet d'adresses des clubs
   ========================================================================== */

const DEFAULT_EMBEDDED_DATA = {
  "season": "2026-2027",
  "club": "Lille Sud Basketball Sporting Club (LSBSC)",
  "defaultHomeVenue": {
    "salle": "ANTOINE BLONDIN A 790M2",
    "address": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
    "precision": "Salle principale LSBSC"
  },
  "clubAddresses": {
    "LSBSC (LILLE SUD)": {
      "salle": "SALLE ANTOINE BLONDIN (A 790M2)",
      "adresse": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
      "precision": "Salle principale LSBSC - Parking rue François Coppée"
    },
    "SEQUEDIN OSM": {
      "salle": "SALLE GÉRARD DEWAELE",
      "adresse": "RUE D'HALLENNES, 59320 SEQUEDIN",
      "precision": ""
    },
    "TOURCOING US F": {
      "salle": "PALAIS DES SPORTS",
      "adresse": "RUE DU CALVAIRE, 59200 TOURCOING",
      "precision": ""
    },
    "LILLE-EST BASKET": {
      "salle": "SALLE RAYMOND HERBAUX / GYMNASE LYCÉE HÔTELIER",
      "adresse": "RUE SAINT-GABRIEL / 31 RUE DE VAUCANSON, 59800 LILLE",
      "precision": "Vérifier salle sur convocation (Herbaux ou Vaucanson)"
    },
    "LOMME BASKET CLUB (LBC)": {
      "salle": "PALAIS DES SPORTS",
      "adresse": "RUE LÉO LAGRANGE, 59160 LOMME",
      "precision": ""
    },
    "BAILLEULOIS B C": {
      "salle": "SALLE NATALIS DUMEZ",
      "adresse": "RUE NATALIS DUMEZ, 59270 BAILLEUL",
      "precision": ""
    },
    "COMINOISE L L": {
      "salle": "SALLE JEAN DEGROS",
      "adresse": "RUE DES SPORTS, 59560 COMINES",
      "precision": "Complexe sportif Jean Degros"
    },
    "WATTRELOS BC": {
      "salle": "SALLE JEAN ZAY",
      "adresse": "RUE JEAN ZAY, 59150 WATTRELOS",
      "precision": ""
    },
    "BAUVIN B C": {
      "salle": "SALLE PIERRE LEGRAIN",
      "adresse": "RUE F. POUILLE, 59221 BAUVIN",
      "precision": ""
    },
    "ORCHESIEN B C": {
      "salle": "PUBÉCO PÉVÈLE ARENA / SALLE LÉO LAGRANGE",
      "adresse": "59310 ORCHIES",
      "precision": ""
    },
    "ESTAIRES BC": {
      "salle": "SALLE LES TULIPES",
      "adresse": "RUE DES TULIPES, 59940 ESTAIRES",
      "precision": ""
    },
    "WASQUEHAL FEM B": {
      "salle": "SALLE PIERRE LOTI",
      "adresse": "RUE PIERRE LOTI, 59290 WASQUEHAL",
      "precision": ""
    },
    "WAMBRECHIES J": {
      "salle": "SALLE JACQUES PREVOST",
      "adresse": "RUE DE BONDUES, 59118 WAMBRECHIES",
      "precision": ""
    },
    "HELLEMMES LILLE BFC": {
      "salle": "SALLE LÉO LAGRANGE",
      "adresse": "RUE FERDINAND BUISSON, 59260 HELLEMMES",
      "precision": ""
    },
    "CHAPELLE D'ARMENTIERES OSM": {
      "salle": "COMPLEXE SPORTIF",
      "adresse": "59930 LA CHAPELLE D'ARMENTIÈRES",
      "precision": ""
    },
    "SPORTS OUVRIERS ARMENTIEROIS": {
      "salle": "COMPLEXE LÉO LAGRANGE",
      "adresse": "59280 ARMENTIÈRES",
      "precision": ""
    },
    "RONCHIN BC": {
      "salle": "SALLE NIO/LOUCHART",
      "adresse": "RUE CHARLES SAINT-VENANT, 59790 RONCHIN",
      "precision": ""
    },
    "HEM S B B": {
      "salle": "SALLE DELCOURT",
      "adresse": "52 RUE JEAN JAURÈS, 59510 HEM",
      "precision": ""
    },
    "MARCQ EN BAROEUL ASJ": {
      "salle": "SALLE LAZARO",
      "adresse": "RUE LAZARO, 59700 MARCQ-EN-BAROEUL",
      "precision": ""
    },
    "CHERENG ABC": {
      "salle": "SALLE POLYVALENTE VICTOR PROVO",
      "adresse": "RUE NATIONALE, 59152 CHÉRENG",
      "precision": ""
    },
    "CROIX BASKET BALL": {
      "salle": "SALLE OMNISPORTS HENRI SEIGNEUR",
      "adresse": "RUE JEAN JAURÈS, 59170 CROIX",
      "precision": ""
    },
    "SAINT ANDRE US": {
      "salle": "SALLE SCHUMAN",
      "adresse": "RUE ROBERT SCHUMAN, 59350 SAINT-ANDRÉ-LEZ-LILLE",
      "precision": ""
    },
    "BASKET CLUB PEVELE": {
      "salle": "SALLE INTERCOMMUNALE",
      "adresse": "59242 TEMPLEUVE-EN-PÉVÈLE",
      "precision": "CTC Pévèle Templeuve"
    },
    "BASKET CLUB LEZENNOIS": {
      "salle": "COMPLEXE PHILIPPE BERTHE",
      "adresse": "RUE DU CAMP FRANCAIS, 59260 LEZENNES",
      "precision": ""
    },
    "VILLENEUVE D'ASCQ ESB": {
      "salle": "C.S. PALACIUM",
      "adresse": "2 RUE BREUGHEL, 59650 VILLENEUVE D'ASCQ",
      "precision": ""
    },
    "TOURCOING I C": {
      "salle": "SALLE GUSTAVE DRON",
      "adresse": "RUE BEAU SÉJOUR, 59200 TOURCOING",
      "precision": ""
    },
    "COEUR DE FLANDRE BASKET BALL": {
      "salle": "SALLE PIERRE DE COUBERTIN",
      "adresse": "AVENUE DES FLANDRES, 59190 HAZEBROUCK",
      "precision": ""
    },
    "LAMBERSART J F": {
      "salle": "SALLE NORBERT SEGARD",
      "adresse": "RUE DU MARÉCHAL JUIN, 59130 LAMBERSART",
      "precision": ""
    },
    "HOYMILLE ACS": {
      "salle": "SALLE LAURENT THIRIONET",
      "adresse": "59492 HOYMILLE",
      "precision": ""
    },
    "THUMERIES A G": {
      "salle": "SALLE F. BEGHIN",
      "adresse": "59239 THUMERIES",
      "precision": ""
    },
    "SAINT POL SUR MER BC": {
      "salle": "SALLE CHRISTOPHE THOMAS / PAUL LANGEVIN",
      "adresse": "59430 SAINT-POL-SUR-MER",
      "precision": "Vérifier salle : Christophe Thomas ou Paul Langevin"
    },
    "BC BLARINGHEM": {
      "salle": "SALLE DES SPORTS",
      "adresse": "59173 BLARINGHEM",
      "precision": ""
    },
    "RONCQ U S": {
      "salle": "SALLE JULES GILLES",
      "adresse": "RUE MAURICE THOREZ, 59223 RONCQ",
      "precision": ""
    },
    "STEENWERCK BC": {
      "salle": "SALLE MAURICE DECLERCQ",
      "adresse": "RUE DE NIEPPE, 59181 STEENWERCK",
      "precision": ""
    },
    "FRETIN BC": {
      "salle": "SALLE DES SPORTS",
      "adresse": "59273 FRETIN",
      "precision": ""
    },
    "ANNOEULLIN B C": {
      "salle": "SALLE LÉO LAGRANGE",
      "adresse": "59112 ANNOEULLIN",
      "precision": ""
    }
  },
  "matches": [
    {
      "id": "24",
      "date": "2026-09-05",
      "dateLabel": "SAM. 05 SEP.",
      "time": "18H00",
      "week": "WE 05-06 SEP.",
      "cat": "U18M",
      "location": "AWAY",
      "home": "SEQUEDIN OSM",
      "away": "U18 GARÇONS CADETS",
      "scoreHome": 86,
      "scoreAway": 55,
      "status": "FINISHED",
      "comp": "Amical",
      "journee": "24",
      "salle": "GÉRARD DEWAELE",
      "address": "RUE D'HALLENNES, 59320 SEQUEDIN",
      "precision": ""
    },
    {
      "id": "9405",
      "date": "2026-09-12",
      "dateLabel": "SAM. 12 SEP.",
      "time": "15H30",
      "week": "WE 12-13 SEP.",
      "cat": "U15F",
      "location": "HOME",
      "home": "U15 FILLES MINIMES",
      "away": "TOURCOING US F - 1",
      "scoreHome": 27,
      "scoreAway": 46,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "1",
      "salle": "ANTOINE BLONDIN A 790M2",
      "address": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
      "precision": ""
    },
    {
      "id": "6110",
      "date": "2026-09-12",
      "dateLabel": "SAM. 12 SEP.",
      "time": "18H30",
      "week": "WE 12-13 SEP.",
      "cat": "U18F",
      "location": "AWAY",
      "home": "LILLE-EST BASKET - 1",
      "away": "U18 FILLES CADETTE",
      "scoreHome": 66,
      "scoreAway": 21,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "1",
      "salle": "GYMNASE LYCEE HOTELIER",
      "address": "31 RUE DE VAUCANSON, 59800 LILLE",
      "precision": ""
    },
    {
      "id": "3964",
      "date": "2026-09-13",
      "dateLabel": "DIM. 13 SEP.",
      "time": "14H00",
      "week": "WE 12-13 SEP.",
      "cat": "U18M",
      "location": "AWAY",
      "home": "LOMME BASKET CLUB (LBC) - 1",
      "away": "U18 GARÇONS CADETS",
      "scoreHome": 87,
      "scoreAway": 45,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "1",
      "salle": "PALAIS DES SPORTS",
      "address": "RUE LÉO LAGRANGE, 59160 LOMME",
      "precision": ""
    },
    {
      "id": "20660",
      "date": "2026-09-19",
      "dateLabel": "SAM. 19 SEP.",
      "time": "17H00",
      "week": "WE 19-20 SEP.",
      "cat": "U13F",
      "location": "HOME",
      "home": "U13 FILLE BENJAMINES",
      "away": "BAILLEULOIS B C",
      "scoreHome": 45,
      "scoreAway": 27,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "1",
      "salle": "ANTOINE BLONDIN A 790M2",
      "address": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
      "precision": ""
    },
    {
      "id": "21651",
      "date": "2026-09-19",
      "dateLabel": "SAM. 19 SEP.",
      "time": "17H00",
      "week": "WE 19-20 SEP.",
      "cat": "U11F",
      "location": "AWAY",
      "home": "COMINOISE LL",
      "away": "U11 FILLES POUSSINES",
      "scoreHome": 15,
      "scoreAway": 27,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "1",
      "salle": "SALLE JEAN DEGROS",
      "address": "RUE DES SPORTS, 59560 COMINES",
      "precision": ""
    },
    {
      "id": "6132",
      "date": "2026-09-19",
      "dateLabel": "SAM. 19 SEP.",
      "time": "18H30",
      "week": "WE 19-20 SEP.",
      "cat": "U18F",
      "location": "HOME",
      "home": "U18 FILLES CADETTE",
      "away": "WATTRELOS BC",
      "scoreHome": 55,
      "scoreAway": 44,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "2",
      "salle": "ANTOINE BLONDIN A 790M2",
      "address": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
      "precision": ""
    },
    {
      "id": "1267",
      "date": "2026-09-19",
      "dateLabel": "SAM. 19 SEP.",
      "time": "20H30",
      "week": "WE 19-20 SEP.",
      "cat": "SM2",
      "location": "HOME",
      "home": "SENIORS MASCULINS 2",
      "away": "BAUVIN B C - 2",
      "scoreHome": 50,
      "scoreAway": 61,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "1",
      "salle": "ANTOINE BLONDIN A 790M2",
      "address": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
      "precision": ""
    },
    {
      "id": "3986",
      "date": "2026-09-20",
      "dateLabel": "DIM. 20 SEP.",
      "time": "10H30",
      "week": "WE 19-20 SEP.",
      "cat": "U18M",
      "location": "HOME",
      "home": "U18 GARÇONS CADETS",
      "away": "ORCHESIEN B C - 2",
      "scoreHome": 60,
      "scoreAway": 112,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "2",
      "salle": "ANTOINE BLONDIN A 790M2",
      "address": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
      "precision": ""
    },
    {
      "id": "1264",
      "date": "2026-09-20",
      "dateLabel": "DIM. 20 SEP.",
      "time": "11H00",
      "week": "WE 19-20 SEP.",
      "cat": "SM1",
      "location": "AWAY",
      "home": "ESTAIRES BC - 2",
      "away": "SENIORS MASCULINS 1",
      "scoreHome": 35,
      "scoreAway": 72,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "1",
      "salle": "SALLE LES TULIPES",
      "address": "RUE DES TULIPES, 59940 ESTAIRES",
      "precision": ""
    },
    {
      "id": "9415",
      "date": "2026-09-20",
      "dateLabel": "DIM. 20 SEP.",
      "time": "14H00",
      "week": "WE 19-20 SEP.",
      "cat": "U15F",
      "location": "AWAY",
      "home": "LOMME BASKET CLUB (LBC)",
      "away": "U15 FILLES MINIMES",
      "scoreHome": 44,
      "scoreAway": 34,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "2",
      "salle": "PALAIS DES SPORTS",
      "address": "RUE LÉO LAGRANGE, 59160 LOMME",
      "precision": ""
    },
    {
      "id": "9422",
      "date": "2026-09-26",
      "dateLabel": "SAM. 26 SEP.",
      "time": "17H00",
      "week": "WE 26-27 SEP.",
      "cat": "U15F",
      "location": "HOME",
      "home": "U15 FILLES MINIMES",
      "away": "WASQUEHAL FEM B - 1",
      "scoreHome": 11,
      "scoreAway": 81,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "3",
      "salle": "ANTOINE BLONDIN A 790M2",
      "address": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
      "precision": ""
    },
    {
      "id": "20682",
      "date": "2026-09-26",
      "dateLabel": "SAM. 26 SEP.",
      "time": "17H00",
      "week": "WE 26-27 SEP.",
      "cat": "U13F",
      "location": "AWAY",
      "home": "LOMME BASKET CLUB (LBC)",
      "away": "U13 FILLE BENJAMINES",
      "scoreHome": 31,
      "scoreAway": 31,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "2",
      "salle": "PALAIS DES SPORTS",
      "address": "RUE LÉO LAGRANGE, 59160 LOMME",
      "precision": ""
    },
    {
      "id": "4005",
      "date": "2026-09-26",
      "dateLabel": "SAM. 26 SEP.",
      "time": "18H30",
      "week": "WE 26-27 SEP.",
      "cat": "U18M",
      "location": "HOME",
      "home": "U18 GARÇONS CADETS",
      "away": "WAMBRECHIES J - 1",
      "scoreHome": 46,
      "scoreAway": 86,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "3",
      "salle": "ANTOINE BLONDIN A 790M2",
      "address": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
      "precision": ""
    },
    {
      "id": "6154",
      "date": "2026-09-26",
      "dateLabel": "SAM. 26 SEP.",
      "time": "18H30",
      "week": "WE 26-27 SEP.",
      "cat": "U18F",
      "location": "AWAY",
      "home": "WAMBRECHIES J",
      "away": "U18 FILLES CADETTE",
      "scoreHome": 40,
      "scoreAway": 32,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "3",
      "salle": "SALLE JACQUES PREVOST",
      "address": "RUE DE BONDUES, 59118 WAMBRECHIES",
      "precision": ""
    },
    {
      "id": "1314",
      "date": "2026-09-26",
      "dateLabel": "SAM. 26 SEP.",
      "time": "20H30",
      "week": "WE 26-27 SEP.",
      "cat": "SM1",
      "location": "HOME",
      "home": "SENIORS MASCULINS 1",
      "away": "HELLEMMES LILLE BFC - 3",
      "scoreHome": 62,
      "scoreAway": 57,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "2",
      "salle": "ANTOINE BLONDIN A 790M2",
      "address": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
      "precision": ""
    },
    {
      "id": "22373",
      "date": "2026-09-27",
      "dateLabel": "DIM. 27 SEP.",
      "time": "11H00",
      "week": "WE 26-27 SEP.",
      "cat": "U9",
      "location": "HOME",
      "home": "U9 MIXTE MINI-POUSSINS",
      "away": "CHAPELLE D'ARMENTIERES OSM",
      "scoreHome": 6,
      "scoreAway": 50,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "2",
      "salle": "ANTOINE BLONDIN A 790M2",
      "address": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
      "precision": ""
    },
    {
      "id": "1319",
      "date": "2026-09-27",
      "dateLabel": "DIM. 27 SEP.",
      "time": "15H00",
      "week": "WE 26-27 SEP.",
      "cat": "SM2",
      "location": "AWAY",
      "home": "HELLEMMES LILLE BFC - 2",
      "away": "SENIORS MASCULINS 2",
      "scoreHome": 56,
      "scoreAway": 39,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "2",
      "salle": "SALLE LEO LAGRANGE",
      "address": "RUE FERDINAND BUISSON, 59260 HELLEMMES",
      "precision": ""
    },
    {
      "id": "21679",
      "date": "2026-09-27",
      "dateLabel": "DIM. 27 SEP.",
      "time": "16H00",
      "week": "WE 26-27 SEP.",
      "cat": "U11F",
      "location": "HOME",
      "home": "U11 FILLES POUSSINES",
      "away": "SPORTS OUVRIERS ARMENTIEROIS - 1",
      "scoreHome": 35,
      "scoreAway": 8,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "2",
      "salle": "ANTOINE BLONDIN A 790M2",
      "address": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
      "precision": ""
    },
    {
      "id": "21707",
      "date": "2026-10-03",
      "dateLabel": "SAM. 03 OCT.",
      "time": "14H00",
      "week": "WE 03-04 OCT.",
      "cat": "U11F",
      "location": "AWAY",
      "home": "RONCHIN BC - 1",
      "away": "U11 FILLES POUSSINES",
      "scoreHome": 14,
      "scoreAway": 36,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "3",
      "salle": "SALLE NIO/LOUCHART",
      "address": "RUE CHARLES SAINT-VENANT, 59790 RONCHIN",
      "precision": ""
    },
    {
      "id": "9432",
      "date": "2026-10-03",
      "dateLabel": "SAM. 03 OCT.",
      "time": "15H30",
      "week": "WE 03-04 OCT.",
      "cat": "U15F",
      "location": "AWAY",
      "home": "HEM S B B",
      "away": "U15 FILLES MINIMES",
      "scoreHome": 48,
      "scoreAway": 18,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "4",
      "salle": "SALLE DELCOURT",
      "address": "52 RUE JEAN JAURÈS, 59510 HEM",
      "precision": ""
    },
    {
      "id": "6174",
      "date": "2026-10-03",
      "dateLabel": "SAM. 03 OCT.",
      "time": "17H00",
      "week": "WE 03-04 OCT.",
      "cat": "U18F",
      "location": "HOME",
      "home": "U18 FILLES CADETTE",
      "away": "MARCQ EN BAROEUL ASJ",
      "scoreHome": 37,
      "scoreAway": 70,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "4",
      "salle": "ANTOINE BLONDIN A 790M2",
      "address": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
      "precision": ""
    },
    {
      "id": "1367",
      "date": "2026-10-03",
      "dateLabel": "SAM. 03 OCT.",
      "time": "18H30",
      "week": "WE 03-04 OCT.",
      "cat": "SM1",
      "location": "HOME",
      "home": "SENIORS MASCULINS 1",
      "away": "CHERENG ABC - 3",
      "scoreHome": 103,
      "scoreAway": 29,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "3",
      "salle": "ANTOINE BLONDIN A 790M2",
      "address": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
      "precision": ""
    },
    {
      "id": "1368",
      "date": "2026-10-03",
      "dateLabel": "SAM. 03 OCT.",
      "time": "20H30",
      "week": "WE 03-04 OCT.",
      "cat": "SM2",
      "location": "HOME",
      "home": "SENIORS MASCULINS 2",
      "away": "HEM S B B - 2",
      "scoreHome": 67,
      "scoreAway": 69,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "3",
      "salle": "ANTOINE BLONDIN A 790M2",
      "address": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
      "precision": ""
    },
    {
      "id": "4027",
      "date": "2026-10-03",
      "dateLabel": "SAM. 03 OCT.",
      "time": "20H30",
      "week": "WE 03-04 OCT.",
      "cat": "U18M",
      "location": "AWAY",
      "home": "CROIX BASKET BALL - 1",
      "away": "U18 GARÇONS CADETS",
      "scoreHome": 86,
      "scoreAway": 65,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "4",
      "salle": "SALLE OMNISPORTS HENRI SEIGNEUR",
      "address": "RUE JEAN JAURÈS, 59170 CROIX",
      "precision": ""
    },
    {
      "id": "20704",
      "date": "2026-10-04",
      "dateLabel": "DIM. 04 OCT.",
      "time": "09H00",
      "week": "WE 03-04 OCT.",
      "cat": "U13F",
      "location": "AWAY",
      "home": "SAINT ANDRE US",
      "away": "U13 FILLE BENJAMINES",
      "scoreHome": 19,
      "scoreAway": 64,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "3",
      "salle": "SALLE SCHUMAN",
      "address": "RUE ROBERT SCHUMAN, 59350 SAINT-ANDRÉ-LEZ-LILLE",
      "precision": ""
    },
    {
      "id": "22414",
      "date": "2026-10-04",
      "dateLabel": "DIM. 04 OCT.",
      "time": "11H00",
      "week": "WE 03-04 OCT.",
      "cat": "U9",
      "location": "HOME",
      "home": "U9 MIXTE MINI-POUSSINS",
      "away": "LILLE-EST BASKET",
      "scoreHome": 10,
      "scoreAway": 10,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "3",
      "salle": "ANTOINE BLONDIN A 790M2",
      "address": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
      "precision": ""
    },
    {
      "id": "4047",
      "date": "2026-10-07",
      "dateLabel": "MER. 07 OCT.",
      "time": "20H30",
      "week": "WE 10-11 OCT.",
      "cat": "U18M",
      "location": "AWAY",
      "home": "IE - CTC PÉVÈLE TEMPLEUVE - BASKET CLUB PEVELE",
      "away": "U18 GARÇONS CADETS",
      "scoreHome": 160,
      "scoreAway": 38,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "5",
      "salle": "SALLE INTERCOMMUNALE",
      "address": "59242 TEMPLEUVE-EN-PÉVÈLE",
      "precision": ""
    },
    {
      "id": "22453",
      "date": "2026-10-10",
      "dateLabel": "SAM. 10 OCT.",
      "time": "15H30",
      "week": "WE 10-11 OCT.",
      "cat": "U9",
      "location": "AWAY",
      "home": "LOMME BASKET CLUB (LBC) - 2",
      "away": "U9 MIXTE MINI-POUSSINS",
      "scoreHome": 2,
      "scoreAway": 12,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "4",
      "salle": "PALAIS DES SPORTS",
      "address": "RUE LÉO LAGRANGE, 59160 LOMME",
      "precision": ""
    },
    {
      "id": "9440",
      "date": "2026-10-10",
      "dateLabel": "SAM. 10 OCT.",
      "time": "17H00",
      "week": "WE 10-11 OCT.",
      "cat": "U15F",
      "location": "AWAY",
      "home": "COMINOISE L L",
      "away": "U15 FILLES MINIMES",
      "scoreHome": 75,
      "scoreAway": 31,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "5",
      "salle": "SALLE JEAN DEGROS",
      "address": "RUE DES SPORTS, 59560 COMINES",
      "precision": ""
    },
    {
      "id": "20724",
      "date": "2026-10-10",
      "dateLabel": "SAM. 10 OCT.",
      "time": "17H00",
      "week": "WE 10-11 OCT.",
      "cat": "U13F",
      "location": "HOME",
      "home": "U13 FILLE BENJAMINES",
      "away": "SPORTS OUVRIERS ARMENTIEROIS - 2",
      "scoreHome": 52,
      "scoreAway": 17,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "4",
      "salle": "ANTOINE BLONDIN A 790M2",
      "address": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
      "precision": ""
    },
    {
      "id": "6195",
      "date": "2026-10-10",
      "dateLabel": "SAM. 10 OCT.",
      "time": "18H30",
      "week": "WE 10-11 OCT.",
      "cat": "U18F",
      "location": "HOME",
      "home": "U18 FILLES CADETTE",
      "away": "LOOSSOIS BASKET CLUB",
      "scoreHome": 61,
      "scoreAway": 23,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "5",
      "salle": "ANTOINE BLONDIN A 790M2",
      "address": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
      "precision": ""
    },
    {
      "id": "1420",
      "date": "2026-10-10",
      "dateLabel": "SAM. 10 OCT.",
      "time": "20H30",
      "week": "WE 10-11 OCT.",
      "cat": "SM2",
      "location": "AWAY",
      "home": "BASKET CLUB LEZENNOIS",
      "away": "SENIORS MASCULINS 2",
      "scoreHome": 75,
      "scoreAway": 34,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "4",
      "salle": "COMPLEXE PHILIPPE BERTHE",
      "address": "RUE DU CAMP FRANCAIS, 59260 LEZENNES",
      "precision": ""
    },
    {
      "id": "1418",
      "date": "2026-10-11",
      "dateLabel": "DIM. 11 OCT.",
      "time": "10H30",
      "week": "WE 10-11 OCT.",
      "cat": "SM1",
      "location": "AWAY",
      "home": "VILLENEUVE D'ASCQ ESB - 2",
      "away": "SENIORS MASCULINS 1",
      "scoreHome": 47,
      "scoreAway": 51,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "4",
      "salle": "C.S. PALACIUM",
      "address": "2 RUE BREUGHEL, 59650 VILLENEUVE D'ASCQ",
      "precision": ""
    },
    {
      "id": "21733",
      "date": "2026-10-11",
      "dateLabel": "DIM. 11 OCT.",
      "time": "16H00",
      "week": "WE 10-11 OCT.",
      "cat": "U11F",
      "location": "HOME",
      "home": "U11 FILLES POUSSINES",
      "away": "MARCQ EN BAROEUL ASJ",
      "scoreHome": 34,
      "scoreAway": 24,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "4",
      "salle": "ANTOINE BLONDIN A 790M2",
      "address": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
      "precision": ""
    },
    {
      "id": "22492",
      "date": "2026-10-17",
      "dateLabel": "SAM. 17 OCT.",
      "time": "17H00",
      "week": "WE 17-18 OCT.",
      "cat": "U9",
      "location": "HOME",
      "home": "U9 MIXTE MINI-POUSSINS",
      "away": "SEQUEDIN OSM",
      "scoreHome": 10,
      "scoreAway": 21,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "5",
      "salle": "ANTOINE BLONDIN A 790M2",
      "address": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
      "precision": ""
    },
    {
      "id": "1469",
      "date": "2026-10-17",
      "dateLabel": "SAM. 17 OCT.",
      "time": "20H30",
      "week": "WE 17-18 OCT.",
      "cat": "SM1",
      "location": "HOME",
      "home": "SENIORS MASCULINS 1",
      "away": "TOURCOING I C - 3",
      "scoreHome": 71,
      "scoreAway": 64,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "5",
      "salle": "ANTOINE BLONDIN A 790M2",
      "address": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
      "precision": ""
    },
    {
      "id": "1470",
      "date": "2026-10-18",
      "dateLabel": "DIM. 18 OCT.",
      "time": "09H00",
      "week": "WE 17-18 OCT.",
      "cat": "SM2",
      "location": "AWAY",
      "home": "COMINOISE L L - 3",
      "away": "SENIORS MASCULINS 2",
      "scoreHome": 113,
      "scoreAway": 52,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "5",
      "salle": "SALLE JEAN DEGROS",
      "address": "RUE DES SPORTS, 59560 COMINES",
      "precision": ""
    },
    {
      "id": "22335",
      "date": "2026-10-24",
      "dateLabel": "SAM. 24 OCT.",
      "time": "14H00",
      "week": "WE 24-25 OCT.",
      "cat": "U9",
      "location": "AWAY",
      "home": "COEUR DE FLANDRE BASKET BALL - 1",
      "away": "U9 MIXTE MINI-POUSSINS",
      "scoreHome": 29,
      "scoreAway": 9,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "1",
      "salle": "SALLE PIERRE DE COUBERTIN",
      "address": "AVENUE DES FLANDRES, 59190 HAZEBROUCK",
      "precision": ""
    },
    {
      "id": "1522",
      "date": "2026-11-07",
      "dateLabel": "SAM. 07 NOV.",
      "time": "18H30",
      "week": "WE 07-08 NOV.",
      "cat": "SM2",
      "location": "AWAY",
      "home": "BAUVIN B C - 2",
      "away": "SENIORS MASCULINS 2",
      "scoreHome": 91,
      "scoreAway": 46,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "6",
      "salle": "SALLE PIERRE LEGRAIN",
      "address": "RUE F. POUILLE, 59221 BAUVIN",
      "precision": ""
    },
    {
      "id": "1519",
      "date": "2026-11-07",
      "dateLabel": "SAM. 07 NOV.",
      "time": "20H30",
      "week": "WE 07-08 NOV.",
      "cat": "SM1",
      "location": "HOME",
      "home": "SENIORS MASCULINS 1",
      "away": "ESTAIRES BC - 2",
      "scoreHome": 76,
      "scoreAway": 48,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "6",
      "salle": "ANTOINE BLONDIN A 790M2",
      "address": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
      "precision": ""
    },
    {
      "id": "22582",
      "date": "2026-11-14",
      "dateLabel": "SAM. 14 NOV.",
      "time": "14H00",
      "week": "WE 14-15 NOV.",
      "cat": "U9",
      "location": "AWAY",
      "home": "COEUR DE FLANDRE BASKET BALL - 2",
      "away": "U9 MIXTE MINI-POUSSINS",
      "scoreHome": 6,
      "scoreAway": 52,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "1",
      "salle": "SALLE PIERRE DE COUBERTIN",
      "address": "AVENUE DES FLANDRES, 59190 HAZEBROUCK",
      "precision": ""
    },
    {
      "id": "12203",
      "date": "2026-11-14",
      "dateLabel": "SAM. 14 NOV.",
      "time": "17H00",
      "week": "WE 14-15 NOV.",
      "cat": "U11F",
      "location": "HOME",
      "home": "U11 FILLES POUSSINES",
      "away": "BEUVRAGES ASM - 1",
      "scoreHome": 22,
      "scoreAway": 13,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "1",
      "salle": "ANTOINE BLONDIN A 790M2",
      "address": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
      "precision": ""
    },
    {
      "id": "4811",
      "date": "2026-11-14",
      "dateLabel": "SAM. 14 NOV.",
      "time": "18H30",
      "week": "WE 14-15 NOV.",
      "cat": "U18M",
      "location": "HOME",
      "home": "U18 GARÇONS CADETS",
      "away": "GAYANT BASKET - 2",
      "scoreHome": 53,
      "scoreAway": 50,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "1",
      "salle": "ANTOINE BLONDIN A 790M2",
      "address": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
      "precision": ""
    },
    {
      "id": "1569",
      "date": "2026-11-14",
      "dateLabel": "SAM. 14 NOV.",
      "time": "20H30",
      "week": "WE 14-15 NOV.",
      "cat": "SM1",
      "location": "AWAY",
      "home": "HELLEMMES LILLE BFC - 3",
      "away": "SENIORS MASCULINS 1",
      "scoreHome": 62,
      "scoreAway": 65,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "7",
      "salle": "SALLE LEO LAGRANGE",
      "address": "RUE FERDINAND BUISSON, 59260 HELLEMMES",
      "precision": ""
    },
    {
      "id": "1574",
      "date": "2026-11-14",
      "dateLabel": "SAM. 14 NOV.",
      "time": "20H30",
      "week": "WE 14-15 NOV.",
      "cat": "SM2",
      "location": "HOME",
      "home": "SENIORS MASCULINS 2",
      "away": "HELLEMMES LILLE BFC - 2",
      "scoreHome": 39,
      "scoreAway": 82,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "7",
      "salle": "ANTOINE BLONDIN A 790M2",
      "address": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
      "precision": ""
    },
    {
      "id": "6310",
      "date": "2026-11-14",
      "dateLabel": "SAM. 14 NOV.",
      "time": "20H30",
      "week": "WE 14-15 NOV.",
      "cat": "U18F",
      "location": "AWAY",
      "home": "LAMBERSART J F - 2",
      "away": "U18 FILLES CADETTE",
      "scoreHome": 101,
      "scoreAway": 38,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "1",
      "salle": "SALLE NORBERT SEGARD",
      "address": "RUE DU MARÉCHAL JUIN, 59130 LAMBERSART",
      "precision": ""
    },
    {
      "id": "9753",
      "date": "2026-11-15",
      "dateLabel": "DIM. 15 NOV.",
      "time": "10H30",
      "week": "WE 14-15 NOV.",
      "cat": "U15F",
      "location": "HOME",
      "home": "U15 FILLES MINIMES",
      "away": "WORMHOUT A S - 1",
      "scoreHome": 51,
      "scoreAway": 35,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "1",
      "salle": "ANTOINE BLONDIN A 790M2",
      "address": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
      "precision": ""
    },
    {
      "id": "20751",
      "date": "2026-11-15",
      "dateLabel": "DIM. 15 NOV.",
      "time": "15H30",
      "week": "WE 14-15 NOV.",
      "cat": "U13F",
      "location": "HOME",
      "home": "U13 FILLE BENJAMINES",
      "away": "WATTIGNIES/TEMPLEMARS AS",
      "scoreHome": null,
      "scoreAway": null,
      "status": "UPCOMING",
      "comp": "Champ.",
      "journee": "1",
      "salle": "ANTOINE BLONDIN A 790M2",
      "address": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
      "precision": ""
    },
    {
      "id": "18922",
      "date": "2026-11-15",
      "dateLabel": "DIM. 15 NOV.",
      "time": "17H00",
      "week": "WE 14-15 NOV.",
      "cat": "U15M",
      "location": "HOME",
      "home": "MINIMES GARCONS U15 M1",
      "away": "COEUR DE FLANDRE BASKET BALL - 2",
      "scoreHome": 13,
      "scoreAway": 57,
      "status": "FINISHED",
      "comp": "Champ.",
      "journee": "1",
      "salle": "ANTOINE BLONDIN A 790M2",
      "address": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
      "precision": ""
    },
    {
      "id": "12205",
      "date": "2026-11-21",
      "dateLabel": "SAM. 21 NOV.",
      "time": "14H00",
      "week": "WE 21-22 NOV.",
      "cat": "U11F",
      "location": "AWAY",
      "home": "HOYMILLE ACS",
      "away": "U11 FILLES POUSSINES",
      "scoreHome": null,
      "scoreAway": null,
      "status": "UPCOMING",
      "comp": "Champ.",
      "journee": "2",
      "salle": "SALLE LAURENT THIRIONET",
      "address": "59492 HOYMILLE",
      "precision": ""
    },
    {
      "id": "20769",
      "date": "2026-11-21",
      "dateLabel": "SAM. 21 NOV.",
      "time": "17H00",
      "week": "WE 21-22 NOV.",
      "cat": "U13F",
      "location": "AWAY",
      "home": "THUMERIES A G - 1",
      "away": "U13 FILLE BENJAMINES",
      "scoreHome": null,
      "scoreAway": null,
      "status": "UPCOMING",
      "comp": "Champ.",
      "journee": "2",
      "salle": "SALLE F. BEGHIN",
      "address": "59239 THUMERIES",
      "precision": ""
    },
    {
      "id": "1622",
      "date": "2026-11-21",
      "dateLabel": "SAM. 21 NOV.",
      "time": "18H30",
      "week": "WE 21-22 NOV.",
      "cat": "SM1",
      "location": "AWAY",
      "home": "CHERENG ABC - 3",
      "away": "SENIORS MASCULINS 1",
      "scoreHome": null,
      "scoreAway": null,
      "status": "UPCOMING",
      "comp": "Champ.",
      "journee": "8",
      "salle": "SALLE POLYVALENTE VICTOR PROVO",
      "address": "RUE NATIONALE, 59152 CHÉRENG",
      "precision": ""
    },
    {
      "id": "6329",
      "date": "2026-11-21",
      "dateLabel": "SAM. 21 NOV.",
      "time": "18H30",
      "week": "WE 21-22 NOV.",
      "cat": "U18F",
      "location": "HOME",
      "home": "U18 FILLES CADETTE",
      "away": "VILLENEUVE D'ASCQ ESB - 2",
      "scoreHome": null,
      "scoreAway": null,
      "status": "UPCOMING",
      "comp": "Champ.",
      "journee": "2",
      "salle": "ANTOINE BLONDIN A 790M2",
      "address": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
      "precision": ""
    },
    {
      "id": "9761",
      "date": "2026-11-21",
      "dateLabel": "SAM. 21 NOV.",
      "time": "18H30",
      "week": "WE 21-22 NOV.",
      "cat": "U15F",
      "location": "AWAY",
      "home": "SAINT POL SUR MER BC",
      "away": "U15 FILLES MINIMES",
      "scoreHome": null,
      "scoreAway": null,
      "status": "UPCOMING",
      "comp": "Champ.",
      "journee": "2",
      "salle": "SALLE CHRISTOPHE THOMAS",
      "address": "59430 SAINT-POL-SUR-MER",
      "precision": ""
    },
    {
      "id": "1623",
      "date": "2026-11-21",
      "dateLabel": "SAM. 21 NOV.",
      "time": "20H30",
      "week": "WE 21-22 NOV.",
      "cat": "SM2",
      "location": "AWAY",
      "home": "HEM S B B - 2",
      "away": "SENIORS MASCULINS 2",
      "scoreHome": null,
      "scoreAway": null,
      "status": "UPCOMING",
      "comp": "Champ.",
      "journee": "8",
      "salle": "SALLE DELCOURT",
      "address": "52 RUE JEAN JAURÈS, 59510 HEM",
      "precision": ""
    },
    {
      "id": "4833",
      "date": "2026-11-21",
      "dateLabel": "SAM. 21 NOV.",
      "time": "20H30",
      "week": "WE 21-22 NOV.",
      "cat": "U18M",
      "location": "AWAY",
      "home": "BASKET CLUB PEVELE",
      "away": "U18 GARÇONS CADETS",
      "scoreHome": null,
      "scoreAway": null,
      "status": "UPCOMING",
      "comp": "Champ.",
      "journee": "2",
      "salle": "SALLE INTERCOMMUNALE",
      "address": "59242 TEMPLEUVE-EN-PÉVÈLE",
      "precision": ""
    },
    {
      "id": "22620",
      "date": "2026-11-22",
      "dateLabel": "DIM. 22 NOV.",
      "time": "11H00",
      "week": "WE 21-22 NOV.",
      "cat": "U9",
      "location": "HOME",
      "home": "U9 MIXTE MINI-POUSSINS",
      "away": "PHALEMPIN B C",
      "scoreHome": null,
      "scoreAway": null,
      "status": "UPCOMING",
      "comp": "Champ.",
      "journee": "2",
      "salle": "ANTOINE BLONDIN A 790M2",
      "address": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
      "precision": ""
    },
    {
      "id": "18949",
      "date": "2026-11-22",
      "dateLabel": "DIM. 22 NOV.",
      "time": "14H00",
      "week": "WE 21-22 NOV.",
      "cat": "U15M",
      "location": "AWAY",
      "home": "BC BLARINGHEM",
      "away": "MINIMES GARCONS U15 M1",
      "scoreHome": null,
      "scoreAway": null,
      "status": "UPCOMING",
      "comp": "Champ.",
      "journee": "2",
      "salle": "SALLE DES SPORTS",
      "address": "59173 BLARINGHEM",
      "precision": ""
    },
    {
      "id": "12207",
      "date": "2026-11-28",
      "dateLabel": "SAM. 28 NOV.",
      "time": "15H30",
      "week": "WE 28-29 NOV.",
      "cat": "U11F",
      "location": "AWAY",
      "home": "SAINT POL SUR MER BC",
      "away": "U11 FILLES POUSSINES",
      "scoreHome": null,
      "scoreAway": null,
      "status": "UPCOMING",
      "comp": "Champ.",
      "journee": "3",
      "salle": "SALLE PAUL LANGEVIN",
      "address": "59430 SAINT-POL-SUR-MER",
      "precision": ""
    },
    {
      "id": "20788",
      "date": "2026-11-28",
      "dateLabel": "SAM. 28 NOV.",
      "time": "17H00",
      "week": "WE 28-29 NOV.",
      "cat": "U13F",
      "location": "HOME",
      "home": "U13 FILLE BENJAMINES",
      "away": "LEERS OSBB",
      "scoreHome": null,
      "scoreAway": null,
      "status": "UPCOMING",
      "comp": "Champ.",
      "journee": "3",
      "salle": "ANTOINE BLONDIN A 790M2",
      "address": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
      "precision": ""
    },
    {
      "id": "1673",
      "date": "2026-11-28",
      "dateLabel": "SAM. 28 NOV.",
      "time": "18H30",
      "week": "WE 28-29 NOV.",
      "cat": "SM1",
      "location": "HOME",
      "home": "SENIORS MASCULINS 1",
      "away": "VILLENEUVE D'ASCQ ESB - 2",
      "scoreHome": null,
      "scoreAway": null,
      "status": "UPCOMING",
      "comp": "Champ.",
      "journee": "9",
      "salle": "ANTOINE BLONDIN A 790M2",
      "address": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
      "precision": ""
    },
    {
      "id": "1675",
      "date": "2026-11-28",
      "dateLabel": "SAM. 28 NOV.",
      "time": "20H30",
      "week": "WE 28-29 NOV.",
      "cat": "SM2",
      "location": "HOME",
      "home": "SENIORS MASCULINS 2",
      "away": "BASKET CLUB LEZENNOIS",
      "scoreHome": null,
      "scoreAway": null,
      "status": "UPCOMING",
      "comp": "Champ.",
      "journee": "9",
      "salle": "ANTOINE BLONDIN A 790M2",
      "address": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
      "precision": ""
    },
    {
      "id": "6348",
      "date": "2026-11-28",
      "dateLabel": "SAM. 28 NOV.",
      "time": "20H30",
      "week": "WE 28-29 NOV.",
      "cat": "U18F",
      "location": "AWAY",
      "home": "TOURCOING US F - 1",
      "away": "U18 FILLES CADETTE",
      "scoreHome": null,
      "scoreAway": null,
      "status": "UPCOMING",
      "comp": "Champ.",
      "journee": "3",
      "salle": "PALAIS DES SPORTS",
      "address": "RUE DU CALVAIRE, 59200 TOURCOING",
      "precision": ""
    },
    {
      "id": "22661",
      "date": "2026-11-29",
      "dateLabel": "DIM. 29 NOV.",
      "time": "11H00",
      "week": "WE 28-29 NOV.",
      "cat": "U9",
      "location": "HOME",
      "home": "U9 MIXTE MINI-POUSSINS",
      "away": "BASKET CLUB BONDUES",
      "scoreHome": null,
      "scoreAway": null,
      "status": "UPCOMING",
      "comp": "Champ.",
      "journee": "3",
      "salle": "ANTOINE BLONDIN A 790M2",
      "address": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
      "precision": ""
    },
    {
      "id": "9769",
      "date": "2026-11-29",
      "dateLabel": "DIM. 29 NOV.",
      "time": "14H00",
      "week": "WE 28-29 NOV.",
      "cat": "U15F",
      "location": "AWAY",
      "home": "ESTAIRES BC - 1",
      "away": "U15 FILLES MINIMES",
      "scoreHome": null,
      "scoreAway": null,
      "status": "UPCOMING",
      "comp": "Champ.",
      "journee": "3",
      "salle": "SALLE LES TULIPES",
      "address": "RUE DES TULIPES, 59940 ESTAIRES",
      "precision": ""
    },
    {
      "id": "4852",
      "date": "2026-11-29",
      "dateLabel": "DIM. 29 NOV.",
      "time": "16H00",
      "week": "WE 28-29 NOV.",
      "cat": "U18M",
      "location": "HOME",
      "home": "U18 GARÇONS CADETS",
      "away": "LAMBRES BASKET CLUB - 2",
      "scoreHome": null,
      "scoreAway": null,
      "status": "UPCOMING",
      "comp": "Champ.",
      "journee": "3",
      "salle": "ANTOINE BLONDIN A 790M2",
      "address": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
      "precision": ""
    },
    {
      "id": "22700",
      "date": "2026-12-05",
      "dateLabel": "SAM. 05 DÉC.",
      "time": "10H30",
      "week": "WE 05-06 DÉC.",
      "cat": "U9",
      "location": "AWAY",
      "home": "RONCQ U S - 2",
      "away": "U9 MIXTE MINI-POUSSINS",
      "scoreHome": null,
      "scoreAway": null,
      "status": "UPCOMING",
      "comp": "Champ.",
      "journee": "4",
      "salle": "SALLE JULES GILLES",
      "address": "RUE MAURICE THOREZ, 59223 RONCQ",
      "precision": ""
    },
    {
      "id": "20805",
      "date": "2026-12-05",
      "dateLabel": "SAM. 05 DÉC.",
      "time": "15H30",
      "week": "WE 05-06 DÉC.",
      "cat": "U13F",
      "location": "AWAY",
      "home": "LILLE-EST BASKET",
      "away": "U13 FILLE BENJAMINES",
      "scoreHome": null,
      "scoreAway": null,
      "status": "UPCOMING",
      "comp": "Champ.",
      "journee": "4",
      "salle": "SALLE RAYMOND HERBAUX",
      "address": "RUE SAINT-GABRIEL, 59800 LILLE",
      "precision": ""
    },
    {
      "id": "12210",
      "date": "2026-12-05",
      "dateLabel": "SAM. 05 DÉC.",
      "time": "17H00",
      "week": "WE 05-06 DÉC.",
      "cat": "U11F",
      "location": "HOME",
      "home": "U11 FILLES POUSSINES",
      "away": "DUNKERQUE MALO BASKET CLUB - 1",
      "scoreHome": null,
      "scoreAway": null,
      "status": "UPCOMING",
      "comp": "Champ.",
      "journee": "4",
      "salle": "ANTOINE BLONDIN A 790M2",
      "address": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
      "precision": ""
    },
    {
      "id": "6365",
      "date": "2026-12-05",
      "dateLabel": "SAM. 05 DÉC.",
      "time": "18H30",
      "week": "WE 05-06 DÉC.",
      "cat": "U18F",
      "location": "HOME",
      "home": "U18 FILLES CADETTE",
      "away": "RONCHIN BC - 2",
      "scoreHome": null,
      "scoreAway": null,
      "status": "UPCOMING",
      "comp": "Champ.",
      "journee": "4",
      "salle": "ANTOINE BLONDIN A 790M2",
      "address": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
      "precision": ""
    },
    {
      "id": "1724",
      "date": "2026-12-05",
      "dateLabel": "SAM. 05 DÉC.",
      "time": "20H30",
      "week": "WE 05-06 DÉC.",
      "cat": "SM1",
      "location": "AWAY",
      "home": "TOURCOING I C - 3",
      "away": "SENIORS MASCULINS 1",
      "scoreHome": null,
      "scoreAway": null,
      "status": "UPCOMING",
      "comp": "Champ.",
      "journee": "10",
      "salle": "SALLE GUSTAVE DRON",
      "address": "RUE BEAU SÉJOUR, 59200 TOURCOING",
      "precision": ""
    },
    {
      "id": "1725",
      "date": "2026-12-05",
      "dateLabel": "SAM. 05 DÉC.",
      "time": "20H30",
      "week": "WE 05-06 DÉC.",
      "cat": "SM2",
      "location": "HOME",
      "home": "SENIORS MASCULINS 2",
      "away": "COMINOISE L L - 3",
      "scoreHome": null,
      "scoreAway": null,
      "status": "UPCOMING",
      "comp": "Champ.",
      "journee": "10",
      "salle": "ANTOINE BLONDIN A 790M2",
      "address": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
      "precision": ""
    },
    {
      "id": "19003",
      "date": "2026-12-06",
      "dateLabel": "DIM. 06 DÉC.",
      "time": "09H00",
      "week": "WE 05-06 DÉC.",
      "cat": "U15M",
      "location": "AWAY",
      "home": "STEENWERCK BC - 2",
      "away": "MINIMES GARCONS U15 M1",
      "scoreHome": null,
      "scoreAway": null,
      "status": "UPCOMING",
      "comp": "Champ.",
      "journee": "4",
      "salle": "SALLE MAURICE DECLERCQ",
      "address": "RUE DE NIEPPE, 59181 STEENWERCK",
      "precision": ""
    },
    {
      "id": "9778",
      "date": "2026-12-06",
      "dateLabel": "DIM. 06 DÉC.",
      "time": "10H30",
      "week": "WE 05-06 DÉC.",
      "cat": "U15F",
      "location": "HOME",
      "home": "U15 FILLES MINIMES",
      "away": "BASKET CLUB BRAY DUNES",
      "scoreHome": null,
      "scoreAway": null,
      "status": "UPCOMING",
      "comp": "Champ.",
      "journee": "4",
      "salle": "ANTOINE BLONDIN A 790M2",
      "address": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
      "precision": ""
    },
    {
      "id": "4874",
      "date": "2026-12-06",
      "dateLabel": "DIM. 06 DÉC.",
      "time": "17H00",
      "week": "WE 05-06 DÉC.",
      "cat": "U18M",
      "location": "AWAY",
      "home": "FRETIN BC",
      "away": "U18 GARÇONS CADETS",
      "scoreHome": null,
      "scoreAway": null,
      "status": "UPCOMING",
      "comp": "Champ.",
      "journee": "4",
      "salle": "SALLE DES SPORTS",
      "address": "59273 FRETIN",
      "precision": ""
    },
    {
      "id": "12215",
      "date": "2026-12-12",
      "dateLabel": "SAM. 12 DÉC.",
      "time": "14H00",
      "week": "WE 12-13 DÉC.",
      "cat": "U11F",
      "location": "AWAY",
      "home": "LILLE-EST BASKET",
      "away": "U11 FILLES POUSSINES",
      "scoreHome": null,
      "scoreAway": null,
      "status": "UPCOMING",
      "comp": "Champ.",
      "journee": "5",
      "salle": "SALLE RAYMOND HERBAUX",
      "address": "RUE SAINT-GABRIEL, 59800 LILLE",
      "precision": ""
    },
    {
      "id": "20823",
      "date": "2026-12-12",
      "dateLabel": "SAM. 12 DÉC.",
      "time": "17H00",
      "week": "WE 12-13 DÉC.",
      "cat": "U13F",
      "location": "HOME",
      "home": "U13 FILLE BENJAMINES",
      "away": "COMINOISE L L",
      "scoreHome": null,
      "scoreAway": null,
      "status": "UPCOMING",
      "comp": "Champ.",
      "journee": "5",
      "salle": "ANTOINE BLONDIN A 790M2",
      "address": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
      "precision": ""
    },
    {
      "id": "4894",
      "date": "2026-12-12",
      "dateLabel": "SAM. 12 DÉC.",
      "time": "18H30",
      "week": "WE 12-13 DÉC.",
      "cat": "U18M",
      "location": "AWAY",
      "home": "ANNOEULLIN B C",
      "away": "U18 GARÇONS CADETS",
      "scoreHome": null,
      "scoreAway": null,
      "status": "UPCOMING",
      "comp": "Champ.",
      "journee": "5",
      "salle": "SALLE LÉO LAGRANGE",
      "address": "59112 ANNOEULLIN",
      "precision": ""
    },
    {
      "id": "6383",
      "date": "2026-12-12",
      "dateLabel": "SAM. 12 DÉC.",
      "time": "18H30",
      "week": "WE 12-13 DÉC.",
      "cat": "U18F",
      "location": "HOME",
      "home": "U18 FILLES CADETTE",
      "away": "DOUAI BASKET FEMININ - 2",
      "scoreHome": null,
      "scoreAway": null,
      "status": "UPCOMING",
      "comp": "Champ.",
      "journee": "5",
      "salle": "ANTOINE BLONDIN A 790M2",
      "address": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
      "precision": ""
    },
    {
      "id": "9789",
      "date": "2026-12-12",
      "dateLabel": "SAM. 12 DÉC.",
      "time": "18H30",
      "week": "WE 12-13 DÉC.",
      "cat": "U15F",
      "location": "AWAY",
      "home": "MARCQ EN BAROEUL ASJ",
      "away": "U15 FILLES MINIMES",
      "scoreHome": null,
      "scoreAway": null,
      "status": "UPCOMING",
      "comp": "Champ.",
      "journee": "5",
      "salle": "SALLE LAZARO",
      "address": "RUE LAZARO, 59700 MARCQ-EN-BAROEUL",
      "precision": ""
    },
    {
      "id": "22739",
      "date": "2026-12-13",
      "dateLabel": "DIM. 13 DÉC.",
      "time": "11H00",
      "week": "WE 12-13 DÉC.",
      "cat": "U9",
      "location": "HOME",
      "home": "U9 MIXTE MINI-POUSSINS",
      "away": "FRETIN BC - 2",
      "scoreHome": null,
      "scoreAway": null,
      "status": "UPCOMING",
      "comp": "Champ.",
      "journee": "5",
      "salle": "ANTOINE BLONDIN A 790M2",
      "address": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
      "precision": ""
    },
    {
      "id": "19030",
      "date": "2026-12-13",
      "dateLabel": "DIM. 13 DÉC.",
      "time": "16H00",
      "week": "WE 12-13 DÉC.",
      "cat": "U15M",
      "location": "HOME",
      "home": "MINIMES GARCONS U15 M1",
      "away": "CROIX BASKET BALL - 3",
      "scoreHome": null,
      "scoreAway": null,
      "status": "UPCOMING",
      "comp": "Champ.",
      "journee": "5",
      "salle": "ANTOINE BLONDIN A 790M2",
      "address": "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
      "precision": ""
    }
  ]
};

const STAFF_PIN = "9694";
let staffMode = false;
let pendingPinTarget = null;
let pinBuffer = "";

let matchesList = [];
let clubAddresses = {};
let selectedWeek = "";
let currentLocFilter = localStorage.getItem("lsbsc_fav_loc") || "ALL";
let currentCatFilter = localStorage.getItem("lsbsc_fav_cat") || "ALL";
let selectedMatchId = null;
let deferredPwaPrompt = null;

// 1. CHARGEMENT ET SAUVEGARDE DES DONNÉES (LOCALSTORAGE + MATCHES.JSON + FIREBASE OPTIONNEL)
async function loadAllData() {
  let baseData = DEFAULT_EMBEDDED_DATA;
  try {
    const res = await fetch("data/matches.json", { cache: "no-store" });
    if (res.ok) {
      baseData = await res.json();
    }
  } catch (e) {
    // Fallback sur les données embarquées si ouvert en file://
  }

  const savedMatches = localStorage.getItem("lsbsc_matches_v2027");
  const savedAddresses = localStorage.getItem("lsbsc_club_addresses_v2027");

  if (savedMatches) {
    try { matchesList = JSON.parse(savedMatches); } catch (e) { matchesList = baseData.matches || []; }
  } else {
    matchesList = baseData.matches || [];
  }

  if (savedAddresses) {
    try { clubAddresses = JSON.parse(savedAddresses); } catch (e) { clubAddresses = baseData.clubAddresses || {}; }
  } else {
    clubAddresses = baseData.clubAddresses || {};
  }

  // Charger le texte du bandeau Buvette
  const savedTicker = localStorage.getItem("lsbsc_ticker_text") ||
    "🍔 Bienvenue à la Salle Antoine Blondin ! Buvette ouverte pendant tous les matchs à domicile (boissons fraîches, café, crêpes, croque-monsieur, confiseries) • Soutenez les équipes du Lille Sud Basketball Sporting Club ! 🏀";
  updateTickerUI(savedTicker);

  populateWeekSelect();
  populateCategorySelect();
  selectCurrentWeek(false);
  renderAll();
}

function persistDataLocally() {
  localStorage.setItem("lsbsc_matches_v2027", JSON.stringify(matchesList));
  localStorage.setItem("lsbsc_club_addresses_v2027", JSON.stringify(clubAddresses));
  syncWithCloudIfConfigured();
}

async function syncWithCloudIfConfigured() {
  const syncUrl = localStorage.getItem("lsbsc_sync_url");
  if (!syncUrl) return;
  try {
    await fetch(syncUrl, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        updatedAt: new Date().toISOString(),
        clubAddresses,
        matches: matchesList,
        ticker: localStorage.getItem("lsbsc_ticker_text") || ""
      })
    });
  } catch (e) {
    console.warn("Erreur de synchronisation Cloud :", e);
  }
}

// Exporter le fichier matches.json actualisé
function exportMatchesJsonFile() {
  const payload = {
    season: "2026-2027",
    club: "Lille Sud Basketball Sporting Club (LSBSC)",
    updatedAt: new Date().toISOString(),
    clubAddresses: clubAddresses,
    matches: matchesList
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "matches.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Réinitialiser les matchs d'origine du PDF
function resetMatchesToPdfDefault() {
  if (!confirm("Voulez-vous recharger la liste officielle des 70 matchs du PDF (les modifications manuelles locales seront réinitialisées) ?")) return;
  localStorage.removeItem("lsbsc_matches_v2027");
  localStorage.removeItem("lsbsc_club_addresses_v2027");
  matchesList = JSON.parse(JSON.stringify(DEFAULT_EMBEDDED_DATA.matches));
  clubAddresses = JSON.parse(JSON.stringify(DEFAULT_EMBEDDED_DATA.clubAddresses));
  populateWeekSelect();
  populateCategorySelect();
  renderAll();
}

// 2. NAVIGATION SEMAINES (MENU DÉROULANT) & FILTRES CATÉGORIES
function getUniqueWeeks() {
  const weeks = [];
  matchesList.forEach(m => {
    if (m.week && !weeks.includes(m.week)) weeks.push(m.week);
  });
  return weeks;
}

function populateWeekSelect() {
  const sel = document.getElementById("weekSelect");
  if (!sel) return;
  const weeks = getUniqueWeeks();
  sel.innerHTML = `<option value="ALL">📅 Tous les week-ends (${matchesList.length} matchs)</option>`;
  weeks.forEach(w => {
    const count = matchesList.filter(m => m.week === w).length;
    const opt = document.createElement("option");
    opt.value = w;
    opt.textContent = `${w} (${count} matchs)`;
    sel.appendChild(opt);
  });
}

function populateCategorySelect() {
  const catSel = document.getElementById("catSelect");
  if (!catSel) return;
  const cats = new Set(["U9", "U11F", "U13F", "U15F", "U15M", "U18F", "U18M", "SM1", "SM2"]);
  matchesList.forEach(m => { if (m.cat) cats.add(m.cat); });
  catSel.innerHTML = `<option value="ALL">Toutes les catégories</option>`;
  Array.from(cats).forEach(c => {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    catSel.appendChild(opt);
  });
  if (currentCatFilter && Array.from(cats).includes(currentCatFilter)) {
    catSel.value = currentCatFilter;
  }
  const locSel = document.getElementById("locSelect");
  if (locSel && currentLocFilter) {
    locSel.value = currentLocFilter;
  }
}

function selectCurrentWeek(doRender = true) {
  // Date de référence ou week-end le plus proche (ex: mi-novembre 2026 : WE 14-15 NOV. ou WE 21-22 NOV.)
  const todayIso = new Date().toISOString().slice(0, 10);
  const upcoming = matchesList.find(m => m.date >= todayIso);
  if (upcoming && upcoming.week) {
    selectedWeek = upcoming.week;
  } else {
    const weeks = getUniqueWeeks();
    selectedWeek = weeks.includes("WE 21-22 NOV.") ? "WE 21-22 NOV." : (weeks[0] || "ALL");
  }
  const sel = document.getElementById("weekSelect");
  if (sel) sel.value = selectedWeek;
  if (doRender) renderAll();
}

function selectWeek(wk) {
  selectedWeek = wk;
  const sel = document.getElementById("weekSelect");
  if (sel && sel.value !== wk) sel.value = wk;
  renderAll();
}

function shiftWeek(dir) {
  const weeks = getUniqueWeeks();
  if (!weeks.length) return;
  let idx = weeks.indexOf(selectedWeek);
  if (idx === -1) idx = 0;
  else idx = Math.max(0, Math.min(weeks.length - 1, idx + dir));
  selectWeek(weeks[idx]);
}

function setLocFilter(val) {
  currentLocFilter = val;
  localStorage.setItem("lsbsc_fav_loc", val);
  const locSel = document.getElementById("locSelect");
  if (locSel && locSel.value !== val) locSel.value = val;
  renderAll();
}

function setCatFilter(val) {
  currentCatFilter = val;
  localStorage.setItem("lsbsc_fav_cat", val);
  const catSel = document.getElementById("catSelect");
  if (catSel && catSel.value !== val) catSel.value = val;
  renderAll();
}

function getFilteredMatches() {
  return matchesList.filter(m => {
    if (selectedWeek && selectedWeek !== "ALL" && m.week !== selectedWeek) return false;
    if (currentLocFilter !== "ALL" && m.location !== currentLocFilter) return false;
    if (currentCatFilter !== "ALL" && m.cat !== currentCatFilter) return false;
    return true;
  });
}

// 3. CALCUL DU RÉSULTAT POUR LE CLUB LSBSC (VICTOIRE / DÉFAITE / NUL)
function getLsbscOutcome(m) {
  if (m.scoreHome === null || m.scoreHome === undefined || m.scoreAway === null || m.scoreAway === undefined || m.scoreHome === "" || m.scoreAway === "") {
    return "UPCOMING";
  }
  const sh = Number(m.scoreHome);
  const sa = Number(m.scoreAway);
  if (isNaN(sh) || isNaN(sa)) return "UPCOMING";
  if (sh === sa) return "DRAW";
  const isHomeLsbsc = m.location === "HOME";
  if (isHomeLsbsc) return sh > sa ? "WIN" : "LOSS";
  return sa > sh ? "WIN" : "LOSS";
}

function buildGpsUrl(m) {
  const queryParts = [m.salle || "", m.address || ""].filter(Boolean).join(", ");
  const finalQuery = queryParts || (m.location === "HOME" ? "3 Rue François Coppée, 59000 Lille" : `Salle basket ${m.home}`);
  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(finalQuery);
}

// 4. RENDU GLOBAL DE L'INTERFACE
function renderAll() {
  const filtered = getFilteredMatches();
  if (!selectedMatchId || !filtered.some(m => m.id === selectedMatchId)) {
    const liveMatch = filtered.find(m => m.status === "LIVE");
    selectedMatchId = liveMatch ? liveMatch.id : (filtered[0]?.id || matchesList[0]?.id || null);
  }
  renderKpis(filtered);
  renderMatchesList(filtered);
  renderScoreboard();
  renderNextMatchAndOverview(filtered);
}

function renderKpis(list) {
  let wins = 0, losses = 0, draws = 0;
  list.forEach(m => {
    const out = getLsbscOutcome(m);
    if (out === "WIN") wins++;
    else if (out === "LOSS") losses++;
    else if (out === "DRAW") draws++;
  });
  const elTot = document.getElementById("kpiTotal");
  const elWin = document.getElementById("kpiWin");
  const elLoss = document.getElementById("kpiLoss");
  const elDraw = document.getElementById("kpiDraw");
  if (elTot) elTot.textContent = `${list.length} Match${list.length > 1 ? "s" : ""}`;
  if (elWin) elWin.textContent = `${wins} V`;
  if (elLoss) elLoss.textContent = `${losses} D`;
  if (elDraw) elDraw.textContent = `${draws} N`;
}

function renderMatchesList(list) {
  const container = document.getElementById("matchesListContainer");
  if (!container) return;
  if (!list.length) {
    container.innerHTML = `<div style="padding:18px;text-align:center;color:#94A3B8;background:#1E293B;border-radius:12px;">Aucun match trouvé pour ces critères.</div>`;
    return;
  }

  container.innerHTML = list.map(m => {
    const outcome = getLsbscOutcome(m);
    const hasScore = outcome !== "UPCOMING";
    const scoreText = hasScore ? `${m.scoreHome} - ${m.scoreAway}` : m.time;
    const pillClass = m.status === "LIVE" ? "live" : (outcome === "WIN" ? "win" : (outcome === "LOSS" ? "loss" : ""));
    const locLabel = m.location === "HOME" ? "🏠 Domicile" : "🚌 Extérieur";
    const gpsUrl = buildGpsUrl(m);
    const venueDisplay = [m.salle, m.address].filter(Boolean).join(" • ") || "Salle non renseignée";

    return `
      <div class="match-card-item ${m.id === selectedMatchId ? "selected" : ""}" onclick="selectMatchCard('${m.id}')">
        <div class="mc-top">
          <span>📅 ${m.dateLabel} à ${m.time} <small style="color:#94A3B8;">(#${m.id})</small></span>
          <div style="display:flex;gap:5px;align-items:center;">
            <span class="mc-loc-tag ${m.location === "HOME" ? "home" : "away"}">${locLabel}</span>
            <span class="mc-cat-badge">${m.cat}</span>
          </div>
        </div>

        <div class="mc-teams-row">
          <div style="text-align:left;word-break:break-word;">${m.home}</div>
          <div class="mc-score-pill ${pillClass}">${m.status === "LIVE" ? "🔴 " + scoreText : scoreText}</div>
          <div style="text-align:right;word-break:break-word;">${m.away}</div>
        </div>

        ${m.precision ? `<div class="mc-precision-note">📌 Précision : ${m.precision}</div>` : ""}

        <div class="mc-venue-line">
          <span>📍 ${venueDisplay}</span>
          <div class="mc-actions-row" onclick="event.stopPropagation()">
            <a class="match-gps-link" href="${gpsUrl}" target="_blank" rel="noopener">📍 GPS Salle</a>
            <button type="button" class="btn-mc-edit staff-only-tool" onclick="openEditMatchModal('${m.id}')">✏️ Modifier Fiche / Adresse</button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function selectMatchCard(id) {
  selectedMatchId = String(id);
  renderAll();
  if (document.body.classList.contains("mode-mobile")) {
    switchMobileTab("live");
  }
}

// 5. RENDU DU SCOREBOARD CENTRAL
function renderScoreboard() {
  const m = matchesList.find(x => String(x.id) === String(selectedMatchId)) || matchesList[0];
  if (!m) return;

  const badge = document.getElementById("sbStatusBadge");
  const meta = document.getElementById("sbMetaInfo");
  const homeName = document.getElementById("sbHomeName");
  const awayName = document.getElementById("sbAwayName");
  const homeLoc = document.getElementById("sbHomeLocPill");
  const awayLoc = document.getElementById("sbAwayLocPill");
  const centerWrap = document.getElementById("sbCenterWrap");
  const summaryBar = document.getElementById("sbMatchSummaryBar");
  const btnGps = document.getElementById("btnSbGps");
  const btnEditCurrent = document.getElementById("btnEditSelectedMatch");

  const outcome = getLsbscOutcome(m);
  const hasScore = outcome !== "UPCOMING";

  if (badge) {
    if (m.status === "LIVE") {
      badge.className = "sb-status-badge live";
      badge.textContent = "🔴 MATCH EN DIRECT";
    } else if (hasScore) {
      badge.className = "sb-status-badge finished";
      badge.textContent = "✅ MATCH TERMINÉ";
    } else {
      badge.className = "sb-status-badge";
      badge.textContent = "⏳ MATCH À VENIR";
    }
  }

  if (meta) {
    meta.textContent = `${m.dateLabel} à ${m.time} • Catégorie ${m.cat} • ${m.comp || "Champ."} (J${m.journee || "-"} • Renc. #${m.id})`;
  }
  if (homeName) homeName.textContent = m.home;
  if (awayName) awayName.textContent = m.away;
  if (homeLoc) homeLoc.textContent = m.location === "HOME" ? "🏠 LOCAUX (LSBSC DOMICILE)" : "LOCAUX (CLUB RECEVANT)";
  if (awayLoc) awayLoc.textContent = m.location === "AWAY" ? "🚌 VISITEURS (LSBSC EXTÉRIEUR)" : "VISITEURS";

  if (centerWrap) {
    const sh = hasScore || m.status === "LIVE" ? (m.scoreHome ?? 0) : "-";
    const sa = hasScore || m.status === "LIVE" ? (m.scoreAway ?? 0) : "-";
    centerWrap.innerHTML = `
      <div class="sb-score-digits">${sh} - ${sa}</div>
      <div style="font-size:0.72rem;color:#94A3B8;font-weight:800;margin-top:2px;">${m.location === "HOME" ? "Domicile" : "Extérieur"}</div>
    `;
  }

  if (summaryBar) {
    const fullVenue = [m.salle, m.address].filter(Boolean).join(" — ") || "Adresse à préciser";
    summaryBar.innerHTML = `
      <div><strong>📍 Lieu & Adresse :</strong> ${fullVenue}</div>
      ${m.precision ? `<div style="color:#FDBA74;font-weight:800;">📌 <strong>Précision Staff / Rencontre :</strong> ${m.precision}</div>` : ""}
    `;
  }

  if (btnGps) {
    btnGps.href = buildGpsUrl(m);
  }
  if (btnEditCurrent) {
    btnEditCurrent.onclick = () => openEditMatchModal(m.id);
  }
}

function renderNextMatchAndOverview(filtered) {
  const nextBox = document.getElementById("nextMatchContainer");
  const overviewBox = document.getElementById("clubOverviewCard");
  const mobQuick = document.getElementById("mobileQuickMatchesCard");

  const nextMatch = filtered.find(m => getLsbscOutcome(m) === "UPCOMING") || matchesList.find(m => getLsbscOutcome(m) === "UPCOMING");
  if (nextBox) {
    if (nextMatch) {
      nextBox.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
          <div>
            <span style="font-size:0.72rem;font-weight:900;color:#F97316;text-transform:uppercase;">⏭️ Prochaine Rencontre Programmée</span>
            <h4 style="font-size:0.95rem;margin-top:3px;">${nextMatch.home} <span style="color:#F97316;">vs</span> ${nextMatch.away}</h4>
            <div style="font-size:0.76rem;color:#94A3B8;margin-top:2px;">📅 ${nextMatch.dateLabel} à ${nextMatch.time} • 📍 ${nextMatch.salle || ""} (${nextMatch.address || ""})</div>
          </div>
          <button class="btn-action-sm btn-save-score" onclick="selectMatchCard('${nextMatch.id}')">Voir la fiche</button>
        </div>
      `;
    } else {
      nextBox.innerHTML = `<div style="font-size:0.84rem;color:#94A3B8;">Tous les matchs de cette sélection ont été joués.</div>`;
    }
  }

  if (overviewBox) {
    const homeCount = filtered.filter(m => m.location === "HOME").length;
    const awayCount = filtered.filter(m => m.location === "AWAY").length;
    overviewBox.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
        <div>
          <strong style="font-size:0.86rem;color:#F8FAFC;">🏟️ Salle Principale LSBSC : Salle Antoine Blondin (3 Rue François Coppée, 59000 Lille)</strong>
          <div style="font-size:0.76rem;color:#94A3B8;margin-top:3px;">Sélection actuelle : ${homeCount} match(s) à domicile • ${awayCount} match(s) à l'extérieur</div>
        </div>
      </div>
    `;
  }

  if (mobQuick) {
    mobQuick.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <strong style="font-size:0.84rem;">📅 ${(selectedWeek === "ALL" ? "Tous les week-ends" : selectedWeek)} (${filtered.length} matchs)</strong>
        <button class="btn-action-sm btn-save-score" onclick="switchMobileTab('schedule')">Voir toute la liste / Filtrer</button>
      </div>
    `;
  }
}

// 6. AUTHENTIFICATION CODE PIN 9694 & GESTION DU MODE STAFF
function requestPinAccess(target) {
  // Si déjà en mode Staff déverrouillé :
  if (staffMode) {
    if (target === "staff") {
      // Basculer hors du mode Staff
      staffMode = false;
      updateStaffModeUI();
      return;
    }
    openProtectedTarget(target);
    return;
  }

  pendingPinTarget = target;
  pinBuffer = "";
  updatePinDisplay();
  const modal = document.getElementById("pinModal");
  if (modal) modal.classList.add("open");
}

function pressPinDigit(d) {
  if (d === "C") {
    pinBuffer = "";
    updatePinDisplay();
    return;
  }
  if (d === "OK") {
    verifyPinCode();
    return;
  }
  if (pinBuffer.length < 6) {
    pinBuffer += String(d);
    updatePinDisplay();
    if (pinBuffer.length === 4 && pinBuffer === STAFF_PIN) {
      verifyPinCode();
    }
  }
}

function updatePinDisplay() {
  const box = document.getElementById("pinDisplayBox");
  if (box) box.textContent = "•".repeat(pinBuffer.length);
}

function verifyPinCode() {
  if (pinBuffer === STAFF_PIN) {
    staffMode = true;
    closeModals();
    updateStaffModeUI();
    if (pendingPinTarget && pendingPinTarget !== "staff") {
      openProtectedTarget(pendingPinTarget);
    }
    pendingPinTarget = null;
  } else {
    const box = document.getElementById("pinDisplayBox");
    if (box) box.textContent = "CODE ERRONÉ";
    pinBuffer = "";
    setTimeout(updatePinDisplay, 900);
  }
}

function updateStaffModeUI() {
  document.body.classList.toggle("staff-unlocked", staffMode);
  const btn = document.getElementById("btnStaffToggle");
  const panel = document.getElementById("staffScorePanel");
  if (btn) {
    btn.classList.toggle("active", staffMode);
    btn.innerHTML = staffMode ? "🔓 Mode Staff Actif (Quitter)" : "🔒 Direct / Scores";
  }
  if (panel) {
    panel.style.display = staffMode ? "block" : "none";
  }
  renderAll();
}

function openProtectedTarget(target) {
  if (target === "logos") {
    const m = document.getElementById("logosModal");
    if (m) m.classList.add("open");
  } else if (target === "settings") {
    const inp = document.getElementById("inpTickerText");
    const syncInp = document.getElementById("inpSyncUrl");
    if (inp) inp.value = localStorage.getItem("lsbsc_ticker_text") || "";
    if (syncInp) syncInp.value = localStorage.getItem("lsbsc_sync_url") || "";
    const m = document.getElementById("cloudModal");
    if (m) m.classList.add("open");
  } else if (target === "addresses") {
    openClubAddressesModal();
  } else if (target && target.startsWith("editMatch:")) {
    const matchId = target.split(":")[1];
    openEditMatchModal(matchId);
  }
}

function closeModals() {
  document.querySelectorAll(".modal-backdrop").forEach(m => m.classList.remove("open"));
}

// 7. ÉDITION COMPLÈTE D'UNE FICHE MATCH (DATE, HEURE, LIEU, CLUBS, ADRESSE, PRÉCISION, SCORE) — PROTÉGÉ PAR PIN 9694
function openEditMatchModal(matchId) {
  if (!staffMode) {
    requestPinAccess("editMatch:" + matchId);
    return;
  }

  const isNew = matchId === "NEW";
  const m = isNew ? {
    id: String(Math.floor(23000 + Math.random() * 9000)),
    date: new Date().toISOString().slice(0, 10),
    dateLabel: "SAM. --",
    time: "17H00",
    week: selectedWeek && selectedWeek !== "ALL" ? selectedWeek : "WE 21-22 NOV.",
    cat: currentCatFilter !== "ALL" ? currentCatFilter : "U13F",
    location: "HOME",
    home: "U13 FILLE BENJAMINES",
    away: "",
    scoreHome: null,
    scoreAway: null,
    status: "UPCOMING",
    comp: "Champ.",
    journee: "1",
    salle: "ANTOINE BLONDIN A 790M2",
    address: "3 RUE FRANCOIS COPPÉE, 59000 LILLE",
    precision: ""
  } : matchesList.find(x => String(x.id) === String(matchId));

  if (!m) return;

  document.getElementById("editMatchModalTitle").textContent = isNew
    ? "➕ Ajouter une Nouvelle Rencontre"
    : `✏️ Modifier la Fiche Match #${m.id} (${m.cat})`;

  document.getElementById("emOriginalId").value = isNew ? "NEW" : m.id;
  document.getElementById("emId").value = m.id || "";
  document.getElementById("emDate").value = m.date || "";
  document.getElementById("emDateLabel").value = m.dateLabel || "";
  document.getElementById("emTime").value = m.time || "";
  document.getElementById("emWeek").value = m.week || "";
  document.getElementById("emCat").value = m.cat || "U13F";
  document.getElementById("emLocation").value = m.location || "HOME";
  document.getElementById("emComp").value = m.comp || "Champ.";
  document.getElementById("emJournee").value = m.journee || "";
  document.getElementById("emHome").value = m.home || "";
  document.getElementById("emAway").value = m.away || "";
  document.getElementById("emScoreHome").value = (m.scoreHome !== null && m.scoreHome !== undefined) ? m.scoreHome : "";
  document.getElementById("emScoreAway").value = (m.scoreAway !== null && m.scoreAway !== undefined) ? m.scoreAway : "";
  document.getElementById("emStatus").value = m.status || "UPCOMING";
  document.getElementById("emSalle").value = m.salle || "";
  document.getElementById("emAddress").value = m.address || "";
  document.getElementById("emPrecision").value = m.precision || "";

  // Remplir le sélecteur rapide d'adresse de club connu
  const presetSel = document.getElementById("emClubPresetSelect");
  if (presetSel) {
    presetSel.innerHTML = `<option value="">-- Remplir automatiquement avec l'adresse d'un club connu --</option>`;
    Object.keys(clubAddresses).sort().forEach(clubName => {
      const info = clubAddresses[clubName];
      const opt = document.createElement("option");
      opt.value = clubName;
      opt.textContent = `${clubName} (${info.salle} - ${info.adresse})`;
      presetSel.appendChild(opt);
    });
  }

  const delBtn = document.getElementById("btnDeleteMatchModal");
  if (delBtn) delBtn.style.display = isNew ? "none" : "inline-flex";

  const modal = document.getElementById("editMatchModal");
  if (modal) modal.classList.add("open");
}

function applyClubAddressPreset(clubName) {
  if (!clubName || !clubAddresses[clubName]) return;
  const info = clubAddresses[clubName];
  document.getElementById("emSalle").value = info.salle || "";
  document.getElementById("emAddress").value = info.adresse || "";
  if (info.precision && !document.getElementById("emPrecision").value) {
    document.getElementById("emPrecision").value = info.precision;
  }
}

function autoFormatDateLabelFromIso(isoDate) {
  if (!isoDate) return;
  try {
    const d = new Date(isoDate + "T12:00:00");
    const days = ["DIM.", "LUN.", "MAR.", "MER.", "JEU.", "VEN.", "SAM."];
    const months = ["JAN.", "FÉV.", "MARS", "AVR.", "MAI", "JUIN", "JUIL.", "AOÛT", "SEP.", "OCT.", "NOV.", "DÉC."];
    const dayNum = String(d.getDate()).padStart(2, "0");
    const label = `${days[d.getDay()]} ${dayNum} ${months[d.getMonth()]}`;
    document.getElementById("emDateLabel").value = label;
  } catch (e) {}
}

function saveMatchFromModal(e) {
  if (e) e.preventDefault();
  if (!staffMode) return;

  const origId = document.getElementById("emOriginalId").value;
  const newId = document.getElementById("emId").value.trim() || String(Date.now());
  const shRaw = document.getElementById("emScoreHome").value.trim();
  const saRaw = document.getElementById("emScoreAway").value.trim();

  const updatedMatch = {
    id: newId,
    date: document.getElementById("emDate").value.trim(),
    dateLabel: document.getElementById("emDateLabel").value.trim(),
    time: document.getElementById("emTime").value.trim(),
    week: document.getElementById("emWeek").value.trim() || "WE PERSONNALISÉ",
    cat: document.getElementById("emCat").value.trim(),
    location: document.getElementById("emLocation").value,
    comp: document.getElementById("emComp").value.trim(),
    journee: document.getElementById("emJournee").value.trim(),
    home: document.getElementById("emHome").value.trim(),
    away: document.getElementById("emAway").value.trim(),
    scoreHome: shRaw === "" ? null : Number(shRaw),
    scoreAway: saRaw === "" ? null : Number(saRaw),
    status: document.getElementById("emStatus").value,
    salle: document.getElementById("emSalle").value.trim(),
    address: document.getElementById("emAddress").value.trim(),
    precision: document.getElementById("emPrecision").value.trim()
  };

  if (updatedMatch.scoreHome !== null && updatedMatch.scoreAway !== null && updatedMatch.status === "UPCOMING") {
    updatedMatch.status = "FINISHED";
  }

  if (origId === "NEW") {
    matchesList.push(updatedMatch);
  } else {
    const idx = matchesList.findIndex(x => String(x.id) === String(origId));
    if (idx !== -1) matchesList[idx] = updatedMatch;
    else matchesList.push(updatedMatch);
  }

  selectedMatchId = updatedMatch.id;
  persistDataLocally();
  populateWeekSelect();
  populateCategorySelect();
  closeModals();
  renderAll();
}

function deleteMatchFromModal() {
  if (!staffMode) return;
  const origId = document.getElementById("emOriginalId").value;
  if (!origId || origId === "NEW") return;
  if (!confirm(`Confirmer la suppression définitive de la rencontre #${origId} ?`)) return;
  matchesList = matchesList.filter(x => String(x.id) !== String(origId));
  persistDataLocally();
  populateWeekSelect();
  closeModals();
  renderAll();
}

// 8. GESTIONNAIRE GLOBAL DES ADRESSES DES CLUBS & PRÉCISIONS (PROTÉGÉ PIN 9694)
function openClubAddressesModal() {
  if (!staffMode) {
    requestPinAccess("addresses");
    return;
  }
  renderClubAddressesList();
  const modal = document.getElementById("clubAddressesModal");
  if (modal) modal.classList.add("open");
}

function renderClubAddressesList() {
  const listEl = document.getElementById("clubAddressesListContainer");
  if (!listEl) return;
  const clubNames = Object.keys(clubAddresses).sort();

  listEl.innerHTML = clubNames.map((name, idx) => {
    const info = clubAddresses[name] || { salle: "", adresse: "", precision: "" };
    const safeKey = encodeURIComponent(name);
    return `
      <div class="club-addr-card">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;">
          <strong style="color:#F97316;font-size:0.88rem;">🏀 ${name}</strong>
          <button type="button" class="btn-action-sm btn-save-score" onclick="saveSingleClubAddress('${safeKey}', ${idx})">💾 Appliquer aux matchs</button>
        </div>
        <div class="form-grid-2">
          <div class="form-field">
            <label>Nom de la salle / gymnase</label>
            <input type="text" id="ca_salle_${idx}" value="${(info.salle || "").replace(/"/g, '&quot;')}">
          </div>
          <div class="form-field">
            <label>Adresse complète (Rue, CP, Ville)</label>
            <input type="text" id="ca_addr_${idx}" value="${(info.adresse || "").replace(/"/g, '&quot;')}">
          </div>
          <div class="form-field full">
            <label>Précisions (Accès, parking, salle annexe, consignes)</label>
            <input type="text" id="ca_prec_${idx}" value="${(info.precision || "").replace(/"/g, '&quot;')}" placeholder="Ex: Entrée par la rue arrière, code portail...">
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function saveSingleClubAddress(encodedClubName, idx) {
  const clubName = decodeURIComponent(encodedClubName);
  const salle = document.getElementById(`ca_salle_${idx}`)?.value.trim() || "";
  const adresse = document.getElementById(`ca_addr_${idx}`)?.value.trim() || "";
  const precision = document.getElementById(`ca_prec_${idx}`)?.value.trim() || "";

  clubAddresses[clubName] = { salle, adresse, precision };

  // Met à jour automatiquement tous les matchs où ce club reçoit
  const normClub = clubName.toUpperCase().replace(" (LILLE SUD)", "");
  let updatedCount = 0;
  matchesList.forEach(m => {
    if (normClub.includes("LSBSC") && m.location === "HOME") {
      m.salle = salle;
      m.address = adresse;
      if (precision) m.precision = precision;
      updatedCount++;
    } else if (m.location === "AWAY" && m.home.toUpperCase().includes(normClub.slice(0, 8))) {
      m.salle = salle;
      m.address = adresse;
      if (precision) m.precision = precision;
      updatedCount++;
    }
  });

  persistDataLocally();
  renderAll();
  alert(`Adresse de "${clubName}" enregistrée et répercutée sur ${updatedCount} match(s) !`);
}

function addNewClubToDirectory() {
  const name = document.getElementById("newClubNameInp")?.value.trim().toUpperCase();
  const salle = document.getElementById("newClubSalleInp")?.value.trim();
  const adresse = document.getElementById("newClubAddrInp")?.value.trim();
  const precision = document.getElementById("newClubPrecInp")?.value.trim();
  if (!name) return alert("Veuillez saisir le nom du club.");

  clubAddresses[name] = { salle: salle || "", adresse: adresse || "", precision: precision || "" };
  persistDataLocally();
  renderClubAddressesList();
  document.getElementById("newClubNameInp").value = "";
  document.getElementById("newClubSalleInp").value = "";
  document.getElementById("newClubAddrInp").value = "";
  document.getElementById("newClubPrecInp").value = "";
}

// 9. GESTION DES MODES D'AFFICHAGE (TV SALLE / MOBILE) & HORLOGE
function chooseDisplayMode(mode) {
  const remember = document.getElementById("chkRememberFormat")?.checked;
  if (remember) localStorage.setItem("lsbsc_display_mode", mode);
  applyDisplayMode(mode);
  const ov = document.getElementById("formatSelectorOverlay");
  if (ov) ov.classList.remove("open");
}

function applyDisplayMode(mode) {
  const isMob = mode === "mobile";
  document.body.classList.toggle("mode-mobile", isMob);
  document.body.classList.toggle("mode-tv", !isMob);
  const btn = document.getElementById("btnSwitchFormat");
  if (btn) btn.innerHTML = isMob ? "🖥️ Version TV" : "📱 Version Mobile";
}

function toggleDisplayMode() {
  const isCurrentlyMob = document.body.classList.contains("mode-mobile");
  const nextMode = isCurrentlyMob ? "tv" : "mobile";
  localStorage.setItem("lsbsc_display_mode", nextMode);
  applyDisplayMode(nextMode);
}

function openFormatOverlay() {
  const ov = document.getElementById("formatSelectorOverlay");
  if (ov) ov.classList.add("open");
}

function switchMobileTab(tab) {
  document.querySelectorAll(".mob-tab").forEach(b => b.classList.toggle("active", b.dataset.tab === tab));
  const secLive = document.getElementById("sectionLive");
  const secSched = document.getElementById("sectionSchedule");
  const secInfo = document.getElementById("sectionMobileInfos");
  if (secLive) secLive.classList.toggle("active-mobile-sec", tab === "live");
  if (secSched) secSched.classList.toggle("active-mobile-sec", tab === "schedule");
  if (secInfo) secInfo.classList.toggle("active-mobile-sec", tab === "buvette");
}

function updateTickerUI(text) {
  const t1 = document.getElementById("tickerTextDisplay");
  const t2 = document.getElementById("mobileTickerStaticText");
  if (t1) t1.textContent = text;
  if (t2) t2.textContent = text;
}

function saveCloudAndTicker() {
  const txt = document.getElementById("inpTickerText")?.value.trim() || "";
  const url = document.getElementById("inpSyncUrl")?.value.trim() || "";
  localStorage.setItem("lsbsc_ticker_text", txt);
  localStorage.setItem("lsbsc_sync_url", url);
  updateTickerUI(txt);
  syncWithCloudIfConfigured();
  closeModals();
}

function openVideoGalleryModal() {
  const modal = document.getElementById("videoModal");
  const body = document.getElementById("videoModalBody");
  if (body) {
    body.innerHTML = `
      <div style="padding:12px;text-align:center;">
        <p style="margin-bottom:10px;color:#CBD5E1;">Retrouvez les directs et vidéos du Lille Sud Basketball Sporting Club :</p>
        <a class="btn-action-sm btn-save-score" href="https://lsbsc.kalisport.com" target="_blank" rel="noopener" style="text-decoration:none;display:inline-block;">🌐 Ouvrir le site officiel LSBSC Kalisport</a>
      </div>
    `;
  }
  if (modal) modal.classList.add("open");
}

function closeVideoModal() {
  const modal = document.getElementById("videoModal");
  if (modal) modal.classList.remove("open");
}

function uploadClubAsset(event, type) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    const dataUrl = e.target.result;
    if (type === "logo") {
      localStorage.setItem("lsbsc_custom_logo", dataUrl);
      document.querySelectorAll("#headerLogoImg, #splashLogoImg, #sbHomeLogo").forEach(img => img.src = dataUrl);
    } else {
      localStorage.setItem("lsbsc_custom_mascot", dataUrl);
      document.querySelectorAll("#headerMascotImg, #splashMascotImg, #sbMascotWatermark").forEach(img => img.src = dataUrl);
    }
  };
  reader.readAsDataURL(file);
}

// Horloge temps réel
setInterval(() => {
  const el = document.getElementById("liveClock");
  if (el) el.textContent = new Date().toLocaleTimeString("fr-FR");
}, 1000);

// Installation PWA
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPwaPrompt = e;
  const btn = document.getElementById("btnInstallSplash");
  if (btn) btn.style.display = "inline-flex";
});

async function triggerPwaInstall() {
  if (!deferredPwaPrompt) return;
  deferredPwaPrompt.prompt();
  await deferredPwaPrompt.userChoice;
  deferredPwaPrompt = null;
}

document.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.getItem("lsbsc_display_mode");
  if (savedMode) {
    applyDisplayMode(savedMode);
    const ov = document.getElementById("formatSelectorOverlay");
    if (ov) ov.classList.remove("open");
  } else if (window.innerWidth <= 768) {
    const badgeMob = document.getElementById("badgeRecMobile");
    if (badgeMob) badgeMob.style.display = "inline-block";
  } else {
    const badgeTv = document.getElementById("badgeRecTv");
    if (badgeTv) badgeTv.style.display = "inline-block";
  }
  loadAllData();
});
