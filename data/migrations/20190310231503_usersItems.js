
exports.up = function(knex, Promise) {
  return knex.schema.createTable('usersItems', tbl => {

    tbl.increments('id')

    tbl.integer('userId').references('userId').inTable('users');
    tbl.integer('itemId').references('itemId').inTable('items');

  })
};

exports.down = function(knex, Promise) {
  
};
