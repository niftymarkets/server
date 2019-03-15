
exports.up = function(knex, Promise) {
  return knex.schema.createTable('transactions', tbl => {
    tbl.increments('transactionId')
    tbl.integer('buyerId').unsigned().references('userId').inTable('users').onDelete("CASCADE").onUpdate("CASCADE");
    tbl.integer('sellerId').unsigned().references('userId').inTable('users').onDelete("CASCADE").onUpdate("CASCADE");
    tbl.integer('itemId').unsigned().references('itemId').inTable('items').onDelete("CASCADE").onUpdate("CASCADE");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('transactions');
};
