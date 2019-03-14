// Update with your config settings.


const localPgConnection = {
  host: 'localhost',
  database: 'nifty',
  username: 'scott',
  password: 'scott'
}
const prodDbConnection = process.env.DATABASE_URL || localPgConnection;

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/nifty.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    }
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/nifty.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    }
  },

  production: {
    client: 'pg',
    connection: prodDbConnection,   //an object or a string
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },


};
