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
            console.error(error);
            response.status(500).send("Il y a un problème dans le fichier main.Controller.js ; const mainController ; méthode homePage");
        }
    },

    //Méthode pour la page détail.
    pokemonDetail: async (request, response, next) => {
        const pokemonId = parseInt(request.params.numero, 10);
        try {
            const pokemon = await dataMapper.getOnePokemon(pokemonId);
            //Si il trouve l'article alors il rend la vue de l'article correspondant
            if (pokemon) {
                response.render('detail', {
                    pokemon
                });
            } else {
                //Sinon il renvoie le message "la figurine n'existe pas"
                response.send("Ce pokemon n'existe pas");
            }
        } catch (error) {
            //Si le try ne fonctionne pas alors il affiche "Il y a un problème ce pokemon n'existe pas"
            console.error(error);
            response.status(500).send("Il y a un problème ce pokemon n'existe pas");
        }
    }
};

module.exports = mainController;