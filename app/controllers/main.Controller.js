//On appelle notre dataMapper dans une constante
const dataMapper = require('../dataMappers/dataMapper');

//On crée notre mainController ainsi que la méthode pour afficher la homePage.
const mainController = {

        // méthode pour la page d'accueil
        homePage: async (request, response, next) => {
            //On lance la methode dans laquelle on fait appel à getAllFigurines.
            try {
                const pokemon = await dataMapper.getAllPokemon();
                response.render('home.ejs', {
                    pokemon
                });
            } catch (error) {
                //Si il y a une erreur alors on affiche un message "Il y a un problème"
                response.send("Il y a un problème dans le fichier main.Controller.js ; const mainController ; méthode homePage");
            }
        }
    };

module.exports = mainController;