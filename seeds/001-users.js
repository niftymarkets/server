
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {userId: 1, username: "scott", password: "scott", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "scott@test.com" },
        {userId: 2, username: "sam", password: "sam", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "sam@test.com" },
        {userId: 3, username: "jordan", password: "jordan", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "jordan@test.com" },
        {userId: 4, username: "tom", password: "tom", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "tom@test.com" },
        {userId: 5, username: "brock", password: "brock", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "brock@test.com" },
        {userId: 6, username: "lebron", password: "lebron", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "lebron@test.com" },
        {userId: 7, username: "kevin", password: "kevin", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "kevin@test.com" },
        {userId: 8, username: "stefan", password: "stefan", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "stefan@test.com" },
        {userId: 9, username: "quinn", password: "quinn", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "quinn@test.com" },
        {userId: 10, username: "john", password: "john", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "john@test.com" },
        {userId: 11, username: "lisa", password: "lisa", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "lisa@test.com" },
        {userId: 12, username: "samantha", password: "samantha", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "samantha@test.com" },
        {userId: 13, username: "ellen", password: "ellen", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "ellen@test.com" },
        {userId: 14, username: "mary", password: "mary", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "mary@test.com" },
        {userId: 15, username: "pat", password: "pat", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "pat@test.com" },
        {userId: 16, username: "francesca", password: "francesca", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "francesca@test.com" },
        {userId: 17, username: "monica", password: "monica", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "monica@test.com" },
        {userId: 18, username: "sarah", password: "sarah", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "sarah@test.com" },
        {userId: 19, username: "kim", password: "kim", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "kim@test.com" },
        {userId: 20, username: "lauren", password: "lauren", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "lauren@test.com" },
      ]);
    });
};
