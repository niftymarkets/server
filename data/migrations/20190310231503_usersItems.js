
exports.up = function(knex, Promise) {
  return knex.schema.createTable('usersItems', tbl => {

    tbl.increments('id')

    tbl.integer('userId').notNullable().references('userId').inTable('users');
    tbl.integer('itemId').notNullable().references('itemId').inTable('items');

  })
};

exports.down = function(knex, Promise) {
  
};
