
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {userId: 1, username: "scott", password: "scott", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png" },
        {userId: 2, username: "sam", password: "sam", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png" },
        {userId: 3, username: "jordan", password: "jordan", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png" },
        {userId: 4, username: "tom", password: "tom", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png" },
        {userId: 5, username: "brock", password: "brock", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png" },
        {userId: 6, username: "lebron", password: "lebron", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png" },
        {userId: 7, username: "kevin", password: "kevin", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png" },
        {userId: 8, username: "stefan", password: "stefan", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png" },
        {userId: 9, username: "quinn", password: "quinn", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png" },
        {userId: 10, username: "john", password: "john", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png" },
        {userId: 11, username: "lisa", password: "lisa", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png" },
        {userId: 12, username: "samantha", password: "samantha", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png" },
        {userId: 13, username: "ellen", password: "ellen", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png" },
        {userId: 14, username: "mary", password: "mary", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png" },
        {userId: 15, username: "pat", password: "pat", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png" },
        {userId: 16, username: "francesca", password: "francesca", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png" },
        {userId: 17, username: "monica", password: "monica", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png" },
        {userId: 18, username: "sarah", password: "sarah", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png" },
        {userId: 19, username: "kim", password: "kim", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png" },
        {userId: 20, username: "lauren", password: "lauren", funds_balance: 0, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png" },

      ]);
    });
};
