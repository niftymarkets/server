
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {userId: 1, username: "Scott", password: "scott", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "scott@test.com" },
        {userId: 2, username: "Sam", password: "sam", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "sam@test.com" },
        {userId: 3, username: "Jordan", password: "jordan", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "jordan@test.com" },
        {userId: 4, username: "Dom", password: "dom", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "dom@test.com" },
        {userId: 5, username: "Brock", password: "brock", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "brock@test.com" },
        {userId: 6, username: "LeBron", password: "lebron", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "lebron@test.com" },
        {userId: 7, username: "Kevin", password: "kevin", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "kevin@test.com" },
        {userId: 8, username: "Stefan", password: "stefan", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "stefan@test.com" },
        {userId: 9, username: "Quinn", password: "quinn", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "quinn@test.com" },
        {userId: 10, username: "John", password: "john", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "john@test.com" },
        {userId: 11, username: "Lisa", password: "lisa", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "lisa@test.com" },
        {userId: 12, username: "Samantha", password: "samantha", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "samantha@test.com" },
        {userId: 13, username: "Ellen", password: "ellen", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "ellen@test.com" },
        {userId: 14, username: "Mary", password: "mary", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "mary@test.com" },
        {userId: 15, username: "Pat", password: "pat", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "pat@test.com" },
        {userId: 16, username: "Francesca", password: "francesca", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "francesca@test.com" },
        {userId: 17, username: "Monica", password: "monica", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "monica@test.com" },
        {userId: 18, username: "Sarah", password: "sarah", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "sarah@test.com" },
        {userId: 19, username: "Kim", password: "kim", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "kim@test.com" },
        {userId: 20, username: "Lauren", password: "lauren", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png", email: "lauren@test.com" },
      ]);
    });
};
