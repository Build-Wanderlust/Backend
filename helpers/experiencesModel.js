const db = require('../data/dbConfig.js');

module.exports = {
    find,
    add
}
/// knex SQL functions for the experiences database

function find() {
    return db('experiences')
    .select('id', 'title', 'description', 'backgroundImg', 'location', 'share', 'ratings', 'reviews', 'faveIt');
}

function findById(id) {
    return db('experiences').where({ id }).first();
}

function add(experience) {
    return db('experiences')
        .insert(experience, 'id')
        .then(ids => {
            const [id] = ids;
            return findById(id);
        });
    }