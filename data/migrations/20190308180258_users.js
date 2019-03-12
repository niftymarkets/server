exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments('userId');

    tbl.string('username', 24).unique();
    tbl.string('password');
    tbl.float('funds_balance');
    // tbl.integer('items_for_sale').unsigned().references('itemId').inTable('items');
    // tbl.integer('wish_list').unsigned().references('itemId').inTable('items');
    // tbl.integer('transactions').unsigned().references('itemId').inTable('items');
    tbl.string('img_url');
    tbl.string('email', 255);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
