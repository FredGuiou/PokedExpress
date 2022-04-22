//Ce fichier est un brouillon de code

//dataMapper


    //On fait de même pour une seule figurine, en spécifiant en paramètre (id) qu'on souhaite l'id
    getOnePokemon: async (id) => {
        const result = await client.query(`SELECT * FROM "pokemon" WHERE "id" = ${id}`);
        //On retourne le résultat avec [0] en paramètre car on attend une seule réponse.
        return result.rows[0];
    }