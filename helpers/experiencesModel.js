const db = require('../data/dbConfig.js');

module.exports = {
    find,
    add,
    change,
    remove
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
    console.log(experience)
    return db('experiences')
        .insert(experience, 'id')
        .then(ids => {
            const [id] = ids;
            return findById(id);
        });
    }

function change(experience_id, experience) {
    
    return db('experiences')
        .where({id: experience_id})
        .update(
        {...experience},
        )
        .then(ids => {
            const [id] = ids;
            return findById(id);
        })
    }

const remove = async (experience_id, experience) => {
    const deleted = await findById(experience_id);
  
    await db('experiences')
      .where({id: experience_id})
      .first()
      .del()
  
    return deleted.title;
  };