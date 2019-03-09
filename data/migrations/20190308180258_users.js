exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments('userId');

    tbl.string('username', 24).notNullable().unique();
    tbl.string('password').notNullable();
    tbl.float('funds_balance');
    tbl.integer('items_for_sale').unsigned().references('itemId').inTable('items').defaultTo(null);
    tbl.integer('wish_list').unsigned().references('itemId').inTable('items').defaultTo(null);
    tbl.integer('transactions').unsigned().references('itemId').inTable('items').defaultTo(null);
    tbl.string('img_url').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
