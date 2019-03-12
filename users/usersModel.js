// const db = require("../database/dbConfig");
const db = require("../data/dbConfig")

module.exports = {
  add,
  find,
  findById,
  getUsersItems,
  get,
  update
};


function find() {
  return db('users').select('id', 'username', 'password');
}

async function add(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}

function findById(id) {
  return db('users')
    .where({ userId: id })
    .first();
}

function getUsersItems() {
  return db("items")
    .join("users", "userId", "=", "items.userId")
    .select("items.name as name", "items.seller as seller", "")
}

function get(id) {
  return db('users').where({ id }).first();
}

function update(id, changes) {
  return db('users').where({ id }).update(changes).then(count => (count > 0 ? this.get(id) : null));
}