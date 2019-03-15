exports.up = function(knex, Promise) {
  return knex.schema.createTable('items', tbl => {
    tbl.increments('itemId');
    tbl.integer('userId').unsigned().references('userId').inTable('users');
    tbl.string('username').unsigned().references('username').inTable('users');
    tbl.string('name');
    tbl.float('price');
    tbl.text('description');
    tbl.string('category');
    tbl.string('img_url');
    tbl.bool('availability').defaultTo(true);    
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('items');
};
