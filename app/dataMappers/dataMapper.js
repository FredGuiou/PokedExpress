//On appelle notre BDD dataBase.js dans une constante.
const client = require("../data/dataBase");

const dataMapper = {
    //On crée une permière méthode (getAllPokemon) qui appelle une requête sql dans la Bdd.
    //On oublie pas que si la méthode est async, elle attend un await.
    getAllPokemon: async () => {
        const result = await client.query(`SELECT * FROM "pokemon"`);
        return result.rows;
    },

    //On crée une seconde méthode qui permet d'afficher le détail d'un pokemon (getOnePokemon).
    getOnePokemon: async (numero) => {
        const result = await client.query(`SELECT * FROM "pokemon" WHERE "numero" = ${numero}`);
        //On retourne le résultat avec [0] en paramètre car on attend une seule réponse.
        return result.rows[0];
    }
};

module.exports = dataMapper;