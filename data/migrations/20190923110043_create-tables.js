exports.up = function(knex) {
    return (knex.schema
        .createTable('users', tbl => {
            tbl.increments('id');
            tbl.string('firstname', 128).notNullable();
            tbl.string('lastname', 128).notNullable();
            tbl.string('email', 128).notNullable().unique();
            tbl.string('password', 128).notNullable();
        })
        .createTable('experiences', tbl => {
            tbl.increments('id');
            tbl.string('title', 128).notNullable();
            tbl.string('summary', 700).notNullable();
            
        })
)};

exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('users')
  };
