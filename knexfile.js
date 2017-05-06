const {app} = require('electron');
const path = require('path');

const basePath = path.dirname(app.getPath('exe'));

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: path.join('.','db','main.sqlite3')
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: path.join('.','db','main.sqlite3')
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    useNullAsDefault: true
  },

  packed: {
    client: 'sqlite3',
    connection: {
      filename: path.join(basePath, '..', '..','db','main.sqlite3')
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    useNullAsDefault: true
  }

};
