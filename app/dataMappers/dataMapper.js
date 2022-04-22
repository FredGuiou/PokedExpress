//On appelle notre BDD dataBase.js dans une constante.
const client = require("../data/dataBase");

const dataMapper = {
    //On crée une permière méthode (getAllPokemon) qui appelle une requête sql dans la Bdd.
    //On oublie pas que si la méthode est async, elle attend un await.
    getAllPokemon: async () => {
        const result = await client.query(`SELECT * FROM "pokemon"`);
        return result.rows;
    }
};

module.exports = dataMapper;