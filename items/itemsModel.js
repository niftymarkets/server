const db = require("../database/dbConfig");

module.exports = {
  add,
  find,
  findById,
};

function find() {
  return db('items').select('id');
}

async function add(item) {
  const [id] = await db('items').insert(item);

  return findById(id);
}

function findById(id) {
  return db('items')
    .where({ id })
    .first();
}