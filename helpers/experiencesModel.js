const db = require('../data/dbConfig.js');

module.exports = {
    find
}
/// knex SQL functions for the users database

function find() {
    return db('experiences').select('id', 'title', 'summary');
}
