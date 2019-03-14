
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items')
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        //USER 2 BOUGHT NOTHING
        {userId: 1, name: "Love Ranger", price: 10, description: "Aim for the heart.", category: "outfits", availability: true, img_url: "https://cdn.thetrackernetwork.com/cdn/fortnite/93062_large.png", userId: 1, username: "scott", buyerId: null },
        {userId: 2, name: "Cuddle Team Leader", price: 25, description: "Hug it out.", category: "outfits", availability: true, img_url: "https://cdn.thetrackernetwork.com/cdn/fortnite/22163_large.png", userId: 1, username: "scott", buyerId: null },
        {userId: 3, name: "Blue Squire", price: 15, description: "The bold warrior of Moisty Mire", category: "outfits", availability: true, img_url: 'https://cdn.thetrackernetwork.com/cdn/fortnite/1C0C4_large.png', userId: 1, username: "scott", buyerId: null },
        {userId: 4, name: "Royale Knight", price: 5, description: "The dauntless champion of Tomato Town", category: "outfits", availability: true, img_url: 'https://cdn.thetrackernetwork.com/cdn/fortnite/AF497_large.png', userId: 2, username: "sam", buyerId: null },
        {userId: 5, name: "Brite Bomber", price: 50, description: "The future looks bright...", category: "outfits", availability: true, img_url: "https://cdn.thetrackernetwork.com/cdn/fortnite/2FD88_large.png", userId: 2, username: "sam", buyerId: null },
        {userId: 6, name: "Floss", price: 29, description: "Express yourself on the battlefield.", category: "emotes", availability: true, img_url: "https://cdn.thetrackernetwork.com/cdn/fortnite/9AB75723_large.png", userId: 2, username: "sam", buyerId: null },
        {userId: 7, name: "Bring It", price: 17, description: "Let's see what you've got.", category: "emotes", availability: true, img_url: "https://cdn.thetrackernetwork.com/cdn/fortnite/E7535436_large.png", userId: 3, username: "jordan", buyerId: null },
        {userId: 8, name: "Infinite Dab", price: 55, description: "Can't stop, won't stop.", category: "emotes", availability: true, img_url: "https://cdn.thetrackernetwork.com/cdn/fortnite/9C8D5428_large.png", userId: 3, username: "jordan", buyerId: null },
        {userId: 9, name: "Hype", price: 80, description: "Get hyped.", category: "emotes", availability: true, img_url: "https://cdn.thetrackernetwork.com/cdn/fortnite/DD585730_large.png", userId: 3, username: "jordan", buyerId: null },
        {userId: 10, name: "Take the L", price: 3, description: "Savor the W.", category: "emotes", availability: true, img_url: "https://cdn.thetrackernetwork.com/cdn/fortnite/ACC45741_large.png", userId: 4, username: "tom", buyerId: null },
        {userId: 11, name: "Basketball", price: 2, description: "Kobe!", category: "toys", availability: true, img_url: "https://cdn.thetrackernetwork.com/cdn/fortnite/3A625901_large.png", userId: 4, username: "tom", buyerId: null },
        {userId: 12, name: "Beach Ball", price: 3, description: "Summer fun!", category: "toys", availability: true, img_url: "https://cdn.thetrackernetwork.com/cdn/fortnite/80105903_large.png", userId: 5, username: "brock", buyerId: null },
        {userId: 13, name: "Tomato", price: 5, description: "Splat!", category: "toys", availability: true, img_url: "https://cdn.thetrackernetwork.com/cdn/fortnite/A0396250_large.png", userId: 6, username: "lebron", buyerId: null},
        {userId: 14, name: "Football", price: 4, description: "Go long...", category: "toys", availability: true, img_url: "https://cdn.thetrackernetwork.com/cdn/fortnite/436D6920_large.png", userId: 6, username: "lebron", buyerId: null },
        {userId: 15, name: "Bouncy Ball", price: 8, description: "Boing boing!", category: "toys", availability: true, img_url: "https://cdn.thetrackernetwork.com/cdn/fortnite/0C2110971_large.png", userId: 7, username: "kevin", buyerId: null },
        {userId: 16, name: "Pikachu", price: 150, description: "Pika Pika!", category: "pets", availability: true, img_url: "https://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/800px-025Pikachu.png", userId: 8, username: "stefan", buyerId: null },
        {userId: 17, name: "Bulbasaur", price: 80, description: "Watch for poison ivy!", category: "pets", availability: true, img_url: "https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/800px-001Bulbasaur.png", userId: 8, username: "stefan", buyerId: null },
        {userId: 18, name: "Charmander", price: 120, description: "Fire for smores anytime!", category: "pets", availability: true, img_url: "https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/800px-004Charmander.png", userId: 9, username: "quinn", buyerId: null },
        {userId: 19, name: "Squirtle", price: 100, description: "One part squirrel, one part turtle", category: "pets", availability: true, img_url: "https://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/500px-007Squirtle.png", userId: 9, username: "quinn", buyerId: null },
        {userId: 20, name: "Magikarp", price: 1, description: "Utterly useless", category: "pets", availability: true, img_url: "https://cdn.bulbagarden.net/upload/0/02/129Magikarp.png", userId: 10, username: "john", buyerId: null },
      ]);
    });
};
