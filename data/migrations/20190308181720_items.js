exports.up = function(knex, Promise) {
  return knex.schema.createTable('items', tbl => {
    tbl.increments('itemId');

    tbl.string('name').notNullable();
    tbl.float('price').notNullable();
    tbl.text('description').notNullable();
    tbl.string('category');
    tbl.string('seller').unsigned().references('userId').inTable('users').notNullable();
    tbl.string('img_url').notNullable();
  })
};

exports.down = function(knex, Promise) {
  
};
