# Master Testaufgabe Onur Özkan


## 1)  Dependencies installieren
1. Navigieren in deiner console mit `cd server` in den server Ordner. Führe nun `npm install` aus. 
2. Navigieren in deiner console mit `cd client` in den client Ordner. Führe nun `npm install` aus. 
3. Navigieren wieder zum root Ordner des Projekts und führe `npm run dev` aus um die Server und den Client zu starten

Die Server und Clients sind erreichbar unter:

REST API --> `localhost:3000`

GRAPHQL API --> `localhost:4000`

GRAPHQL API Testumgebung (wenn graphiql = true) --> `localhost:4000/graphql`

Client (Vue.js App) --> `localhost:8080`


## 2)  Aufgabe Server-Side

Die Aufgabe besteht darin eine REST API und GraphQL API in das bestehende Projekt zu implementieren. Unter `server/index.js` kannst du die APIs implementieren. In diesem Projekt wird express.js für die Erstellung der APIs verwendet. Das Grundgerüst der API ist implementiert du musst nur noch die Endpoints anlegen. Die Datenbanken sind bereits angelegt und in der index.js impelementiert. Du kannst sie mit `shops` und `products` ansprechen. Die Datenbank selbst findest du unter server/db.js. 

Zur unterstützung kannst du dir folgende Tutorials anschauen:

- GraphQL API erstellen: https://www.youtube.com/watch?v=Y0lDGjwRYKw&list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f&index=1
- REST API erstellen:  https://www.youtube.com/watch?v=fgTGADljAeg

## 3)  Aufgabe Client-Side

Unter dem Order `client/src/components/HelloWorld.vue` findest du das Frontend. Für das Frontend wird Vue.js verwendet. Das Projekt ist soweit vorbereitet, dass du nur noch die Request anlegen und die Daten verarbeiten musst. 

Die Aufgabe besteht darin die Daten eines Shops und die dazu gehörigen Produkte anzuzeigen.

Für den Shop sollen folgende Daten angezeigt werden:

- Name
- Adresse
- Stadt

Für ein Produkt sollen folgende Daten angezeigt werden:

- Name
- Gewicht
- Preis
- Menge
- Hersteller

Fetche die Daten des Shops "Oma Lise" und zeige die Produkte, die dieser Shop anbietet, an. 

## 3) Umfrage

Bitte beantworte zum Schluss folgende Umfrage: https://forms.gle/k4Ds46UnaS5SNe6z9

Danke für deine Teilnahme! :)

Bei Fragen kannst du mich unter onur-ozkan@hotmail.de kontaktieren.
