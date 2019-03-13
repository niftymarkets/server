exports.up = function(knex, Promise) {
  return knex.schema.createTable('items', tbl => {
    tbl.increments('itemId');
    tbl.string('name');
    tbl.float('price');
    tbl.text('description');
    tbl.string('category');
    tbl.integer('buyerId');
    tbl.integer('userId').unsigned().references('userId').inTable('users');
    tbl.string('username').unsigned().references('username').inTable('users');
    tbl.string('img_url').defaultTo("https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png");
    tbl.bool('availability').defaultTo(true);    
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('items');
};
