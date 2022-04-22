//Ici on va créer l'association avec la BDD.

// 1. require le module
const pg = require('pg');

// 2. Créer un client
const client = new pg.Client();

// 3. Connecter le client
client.connect();

// 4. Exporter le client connecté
module.exports = client;