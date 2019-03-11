exports.up = function(knex, Promise) {
  return knex.schema.createTable('items', tbl => {
    tbl.increments('itemId');

    tbl.string('name');
    tbl.float('price');
    tbl.text('description');
    tbl.string('category');
    tbl.integer('seller').unsigned().references('userId').inTable('users');
    tbl.string('img_url');
    tbl.string('availability');    //bought, sold, available
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('items');
};
