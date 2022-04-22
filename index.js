//On appelle le dotenv pour avoir des variables d'environnement dans un .env
require('dotenv').config();

//On appelle Express
const express = require('express');

//On appelle notre router
const router = require("./app/router");

//On définit le Port qui sera choisi dans le .env et on met un port optionnel
const SERVER_PORT = process.env.SERVER_PORT || 5000;

//on lance express
const app = express();

//On spécifie à express le moteur de rendu
app.set("view engine", "ejs");
// et le répertoire des views
app.set("views", `${__dirname}/app/views`);

//On sert les fichiers statiques qui sont dans public
app.use(express.static("public"));

//Lancement du router
app.use(router);

//On lance le serveur
app.listen(SERVER_PORT, () => {
    console.log(`Listening on http://localhost:${SERVER_PORT}`);
});