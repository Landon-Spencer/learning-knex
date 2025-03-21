// Update with your config settings.
import 'dotenv/config';
// require('dotenv').config();

const connectionString = process.env.DB_CONNECTION_STRING;

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export const development = {
  client: 'postgresql',
  connection: connectionString
  // connection: {
  //   host: '127.0.0.1',
  //   user: 'postgres',
  //   password: 'docker',
  //   port: 5432,
  //   database: 'pet_store'
  // }
};
export const staging = {
  client: 'postgresql',
  connection: {
    database: 'my_db',
    user: 'username',
    password: 'password'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
export const production = {
  client: 'postgresql',
  connection: {
    database: 'my_db',
    user: 'username',
    password: 'password'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
