
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {userId: 1, username: "scott", password: "scott", funds_balance: 0, items_for_sale: 1, wish_list: 2, transactions: null, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png" },
        {userId: 2, username: "sam", password: "sam", funds_balance: 0, items_for_sale: 2, wish_list: 3, transactions: null, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png" },
        {userId: 3, username: "jordan", password: "jordan", funds_balance: 0, items_for_sale: 3, wish_list: 4, transactions: null, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png" },
        {userId: 4, username: "tom", password: "tom", funds_balance: 0, items_for_sale: 4, wish_list: 5, transactions: null, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png" },
        {userId: 5, username: "brock", password: "brock", funds_balance: 0, items_for_sale: 5, wish_list: 6, transactions: null, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png" },
        {userId: 6, username: "lebron", password: "lebron", funds_balance: 0, items_for_sale: 6, wish_list: 7, transactions: null, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png" },
        {userId: 7, username: "kevin", password: "kevin", funds_balance: 0, items_for_sale: 7, wish_list: 8, transactions: null, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png" },
        {userId: 8, username: "stefan", password: "stefan", funds_balance: 0, items_for_sale: 8, wish_list: 9, transactions: null, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png" },
        {userId: 9, username: "quinn", password: "quinn", funds_balance: 0, items_for_sale: 9, wish_list: 10, transactions: null, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png" },
        {userId: 10, username: "john", password: "john", funds_balance: 0, items_for_sale: 10, wish_list: 11, transactions: null, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png" },
        {userId: 11, username: "lisa", password: "lisa", funds_balance: 0, items_for_sale: 11, wish_list: 12, transactions: null, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png" },
        {userId: 12, username: "samantha", password: "samantha", funds_balance: 0, items_for_sale: 12, wish_list: 13, transactions: null, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png" },
        {userId: 13, username: "ellen", password: "ellen", funds_balance: 0, items_for_sale: 13, wish_list: 14, transactions: null, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png" },
        {userId: 14, username: "mary", password: "mary", funds_balance: 0, items_for_sale: 14, wish_list: 15, transactions: null, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png" },
        {userId: 15, username: "pat", password: "pat", funds_balance: 0, items_for_sale: 15, wish_list: 16, transactions: null, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png" },
        {userId: 16, username: "francesca", password: "francesca", funds_balance: 0, items_for_sale: 16, wish_list: 17, transactions: null, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png" },
        {userId: 17, username: "monica", password: "monica", funds_balance: 0, items_for_sale: 17, wish_list: 18, transactions: null, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png" },
        {userId: 18, username: "sarah", password: "sarah", funds_balance: 0, items_for_sale: 18, wish_list: 19, transactions: null, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png" },
        {userId: 19, username: "kim", password: "kim", funds_balance: 0, items_for_sale: 19, wish_list: 20, transactions: null, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png" },
        {userId: 20, username: "lauren", password: "lauren", funds_balance: 0, items_for_sale: 20, wish_list: 1, transactions: null, img_url: "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png" },

      ]);
    });
};
