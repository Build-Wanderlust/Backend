/// knex configuration

module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true, 
    connection: {
      filename: './data/wlustData.db3',
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    testing: {
      client: 'sqlite3',
      connection: {
        filename: './data/test.db3',
      },
    // needed when using foreign keys
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      },
    },
  },
};