//On importe Express
const express = require('express');

// on importe nos controllers
const mainController = require('./controllers/main.Controller');

//On créé notre routeur express.
const router = express.Router();

//La route de la page d'accueil
router.get('/', mainController.homePage);

//La route vers le détail d'un pokemon
router.get('/detail/:numero', mainController.pokemonDetail);

//On exporte notre module router.
module.exports = router;