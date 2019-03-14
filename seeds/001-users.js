
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: "scott", password: "scott", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "scott@test.com" },
        {username: "sam", password: "sam", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "sam@test.com" },
        {username: "jordan", password: "jordan", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "jordan@test.com" },
        {username: "tom", password: "tom", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "tom@test.com" },
        {username: "brock", password: "brock", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "brock@test.com" },
        {username: "lebron", password: "lebron", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "lebron@test.com" },
        {username: "kevin", password: "kevin", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "kevin@test.com" },
        {username: "stefan", password: "stefan", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "stefan@test.com" },
        {username: "quinn", password: "quinn", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "quinn@test.com" },
        {username: "john", password: "john", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "john@test.com" },
        {username: "lisa", password: "lisa", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "lisa@test.com" },
        {username: "samantha", password: "samantha", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "samantha@test.com" },
        {username: "ellen", password: "ellen", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "ellen@test.com" },
        {username: "mary", password: "mary", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "mary@test.com" },
        {username: "pat", password: "pat", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "pat@test.com" },
        {username: "francesca", password: "francesca", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "francesca@test.com" },
        {username: "monica", password: "monica", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "monica@test.com" },
        {username: "sarah", password: "sarah", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "sarah@test.com" },
        {username: "kim", password: "kim", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "kim@test.com" },
        {username: "lauren", password: "lauren", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "lauren@test.com" },
      ]);
    });
};
