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
            tbl.string('description', 700).notNullable();
            tbl.string('backgroundImg', 255).notNullable();
            tbl.string('reviews', 128).notNullable();
            tbl.string('location', 128).notNullable();
            tbl.string('share', 128);
            tbl.integer('ratings', 10).notNullable();
            tbl.integer('reviews', 10).notNullable();
            tbl.string('faveIt', 10);
        })
)};

exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('users')
      .dropTableIfExists('experiences')
  };
