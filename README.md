## Nifty Markets Server
 
### About

This is the back-end for the Nifty Markets project, which is part of Lambda School Build Week.

### How to start

Clone this repository locally. Do not fork it. Once you clone the repo locally:

```
git checkout -b <lastname-firstname>
git push -u origin <lastname-firstname>
```

You will now be switched to Your branch, that you can start working on. You can do git push to send your commits to your remote on the server.

### Basic git flow

When you want to get your branch merged into the master branch, do the following:

```
git pull origin master
```

Look at your terminal messages. If there is a merge conflict, you will need to resolve it. If you don't know how to resolve it, please request assistance from Your Team Leader or PM

If there was no merge conflict, then proceed:

```
git push
```

And then go to your branch on github and create a pull request into the master branch. Remember to include Your Full Name in the branch title along with short notice with these info:

- what did You work on
- what feature was implemented
- what bug was fixed (if any)
- are there any issues with this code that needs to be addressed?


## API ##


## GENERAL ##
* server url: https://nifty-markets.herokuapp.com/.
* For `/:itemId` and `/:userId`, use the `itemId` and `userId` respectively properties on the item/user objects. Both of these are integer numbers.
* TRUE/FALSE: The database will return 0 for false, and 1 for true. It takes in true and false no problem, just a quirk of SQLite
* WishlistId will not necessarily coordinate to the number of wishlist items a user has. For instance, user 1's 4th wishlist item WILL NOT NECCESSARILY have a wishlistId of 4, although it may on coincidence



## Items Routes ##

## GET Items ##

URL: /api/items

If Successful, response should be 200 (OK). If unsuccessful, response should be 500. Example item data:

```
[
    {
        "itemId": 1,
        "name": "Love Ranger",
        "price": 10,
        "description": "Aim for the heart.",
        "category": "outfits",
        "buyerId": null,
        "userId": 1,  //---SELLER-------
	"username": "scott"
        "img_url": "https://cdn.thetrackernetwork.com/cdn/fortnite/93062_large.png",
        "availability": 1    //-----AVAILABLE BOOLEAN, TRUE
    },
    {
        "itemId": 19,
        "name": "Squirtle",
        "price": 100,
        "description": "One part squirrel, one part turtle",
        "category": "pets",
        "buyerId": 4,
        "userId": "9",
	"username": "quinn"
        "img_url": "https://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/500px-007Squirtle.png",
        "availability": 0
    },
]
```

## GET Item by ID ##

URL: /api/items/:id

Example Data for /api/items/2:

```
[
    {
        "itemId": 2,
        "name": "Cuddle Team Leader",
        "price": 25,
        "description": "Hug it out.",
        "category": "outfits",
        "buyerId": 3,
        "userId": 1,
        "img_url": "https://cdn.thetrackernetwork.com/cdn/fortnite/22163_large.png",
        "availability": 0
    }
]
```

## POST Items ##

URL: /api/items

The API does not _require_ every section to be provided. Front End architects may choose what is required on their descretion. Here is what a full item post looks like.

```
{
    "name": "Eevee",
    "price": 800,
    "description": "Wow so cute",
    "category": "pets",
    "buyerId": null,
    "userId": 8,
    "img_url": "https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/800px-001Bulbasaur.png",
    "availability": "available"
}
```

A successfully created item will return a message, along with an array of the updated item list:
```
{
    "message": "Item created successfully",
     "newItemList": [
        {
            "itemId": 1,
            "name": "Love Ranger",
            "price": 10,
            "description": "Aim for the heart.",
            "category": "outfits",
            "buyerId": null,
            "userId": 1,
            "username": "scott",
            "img_url": "https://cdn.thetrackernetwork.com/cdn/fortnite/93062_large.png",
            "availability": 1
        },
        {
            "itemId": 2,
            "name": "Cuddle Team Leader",
            "price": 25,
            "description": "Hug it out.",
            "category": "outfits",
            "buyerId": 3,
            "userId": 1,
            "username": "scott",
            "img_url": "https://cdn.thetrackernetwork.com/cdn/fortnite/22163_large.png",
            "availability": 0
        },
      ]
}
```

## EDIT (PUT) Items ##

URL: /api/items/:id

The API does not _require_ every section to be provided. Front End architects may choose what is required on their descretion. Here is what a an edit with only the name changed will look like for user 2. Name is being changed to Test:

```
  {
      "name": "Cuddle Team Leader",
      "price": 25,
      "description": "Hug it out.",
      "category": "outfits",
      "buyerId": 3,
      "userId": 1,
      "img_url": "https://cdn.thetrackernetwork.com/cdn/fortnite/22163_large.png",
      "availability": 0
  }
```

The entire edited user will be returned:

```
{
    "itemId": 2,
    "name": "Test",
    "price": 25,
    "description": "Hug it out.",
    "category": "outfits",
    "buyerId": 3,
    "userId": 1,
    "img_url": "https://cdn.thetrackernetwork.com/cdn/fortnite/22163_large.png",
    "availability": 0
}
```

## DELETE Items ##

URL: /api/items/:id
    
A successful delete will return a message as well as the updated item list, for example deleting item 1 will return:
```
{
    "message": "Your item Blue Swuire has been deleted.",
    "newItemList": [
        {
            "itemId": 1,
            "name": "Love Ranger",
            "price": 10,
            "description": "Aim for the heart.",
            "category": "outfits",
            "buyerId": null,
            "userId": 1,
            "username": "scott",
            "img_url": "https://cdn.thetrackernetwork.com/cdn/fortnite/93062_large.png",
            "availability": 1
        },
        {
            "itemId": 2,
            "name": "Cuddle Team Leader",
            "price": 25,
            "description": "Hug it out.",
            "category": "outfits",
            "buyerId": 3,
            "userId": 1,
            "username": "scott",
            "img_url": "https://cdn.thetrackernetwork.com/cdn/fortnite/22163_large.png",
            "availability": 0
        },
    ]
}
```

#### Users Routes ####

## GET Users ##

URL: /api/users

If Successful, response should be 200 (OK). If unsuccessful, response should be 500. Example users data:

```
[
    {
        "userId": 1,
        "username": "scott",
        "password": "scott",
        "funds_balance": 0,
        "img_url": "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png"
	"email": "scott@test.com"
    },
    {
        "userId": 2,
        "username": "sam",
        "password": "sam",
        "funds_balance": 0,
        "img_url": "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png"
	"email": "sam@test.com"
    },
]
```

## GET User by ID ##

URL: /api/users/:id

Example Data for /api/users/1:

```
[
    {
        "userId": 1,
        "username": "scott",
        "password": "scott",
        "funds_balance": 0,
        "img_url": "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png"
    }
]
```

## GET User's Items ##

URL: /api/users/:id/items

Example Data for /api/users/1/items:

```
[
    {
        "itemId": 1,
        "name": "Love Ranger",
        "price": 10,
        "description": "Aim for the heart.",
        "category": "outfits",
        "buyerId": null,
        "userId": 1,
        "img_url": "https://cdn.thetrackernetwork.com/cdn/fortnite/93062_large.png",
        "availability": 1
    },
    {
        "itemId": 2,
        "name": "Cuddle Team Leader",
        "price": 25,
        "description": "Hug it out.",
        "category": "outfits",
        "buyerId": 3,
        "userId": 1,
        "img_url": "https://cdn.thetrackernetwork.com/cdn/fortnite/22163_large.png",
        "availability": 0
    },
    {
        "itemId": 3,
        "name": "Blue Squire",
        "price": 15,
        "description": "The bold warrior of Moisty Mire",
        "category": "outfits",
        "buyerId": null,
        "userId": 1,
        "img_url": "https://cdn.thetrackernetwork.com/cdn/fortnite/1C0C4_large.png",
        "availability": 1
    }
]
```

## GET Users Transactions ##

URL: /api/users/:id/transactions

Example return from /api/users/1/transactions:

```
[
    {
        "transactionId": 1,
        "buyer": "scott",
        "buyerId": 1,
        "seller": "lauren",
        "sellerId": 20,
        "itemId": 1,
        "name": "Love Ranger",
        "price": 10,
        "description": "Aim for the heart.",
        "img_url": "https://cdn.thetrackernetwork.com/cdn/fortnite/93062_large.png",
        "availability": 1
    },
    {
        "transactionId": 2,
        "buyer": "scott",
        "buyerId": 1,
        "seller": "john",
        "sellerId": 10,
        "itemId": 20,
        "name": "Magikarp",
        "price": 1,
        "description": "Utterly useless",
        "img_url": "https://cdn.bulbagarden.net/upload/0/02/129Magikarp.png",
        "availability": 0
    }
]
```


## GET Users Transaction by Transaction ID ##

URL: /api/users/:id/transasctions/:transactionId

NOTE: notice there is no 's' in `transactionId`

Example return from /api/users/1/transactions/1

```
{
    "transactionId": 1,
    "buyer": "scott",
    "buyerId": 1,
    "seller": "lauren",
    "sellerId": 20,
    "itemId": 1,
    "name": "Love Ranger",
    "price": 10,
    "description": "Aim for the heart.",
    "img_url": "https://cdn.thetrackernetwork.com/cdn/fortnite/93062_large.png",
    "availability": 1
}
```

## POST Transaction to Transaction List ##

Here, the front end hardly has to do with updating state, the POST will do it all. When a POST is made, the transaction is recorded, noting who the buyer and the seller are, and for what price. After the POST is done, the buyer and seller will both have a new transaction on their transaction list, with all the details of the transaction. Also, the item will be automatically updated, giving the item a new `userId` and `username` of the buyer, as well as setting the availability to false.

URL: /api/users/:id/transactions

Example POST, user 1 (scott) will buy item 19 from quinn:

```
{
	"buyerId": 1,
	"sellerId": 9,     //---This is the userId on the item that's for sale
	"itemId": 19
}
```

If successfully, you will receive a success message, along with a `newTransactionsList`. Example:

```
{
    "message": "Congratulations on your new purchase!",
    "newTransactionsList": [
        {
            "transactionId": 3,
            "buyerId": 1,
            "sellerId": 9,
            "itemId": 19,
        }
    ]
}
```

## DELETE Transaction from Transaction List ##

I imagine this would only be used for testing, but it's available if needed.

URL: /api/users/:id/:transactionId


If successfully, you will receive a success message, along with a `newTransactionsList`. Example:

```
{
    "message": "Transaction removed from transactions list",
    "newTransactionsList": [
        {
            "transactionId": 1,
            "buyerId": 1,
            "sellerId": 20,
            "itemId": 1,
        },
        {
            "transactionId": 2,
            "buyerId": 1,
            "sellerId": 10,
            "itemId": 20,
        }
    ]
}
```

## GET Users Wishlist ##

URL: /api/users/:id/wishlist

Example data from /api/users/1/wishlist:

```
[
   {
        "username": "scott",
        "wishlistId": 3,
        "sellerId": 2,
        "itemId": 5,
        "name": "Brite Bomber",
        "price": 50,
        "description": "The future looks bright...",
        "img_url": "https://cdn.thetrackernetwork.com/cdn/fortnite/2FD88_large.png",
        "availability": 1
    },
    {
        "username": "scott",
        "wishlistId": 13,
        "sellerId": 7,
        "itemId": 15,
        "name": "Bouncy Ball",
        "price": 8,
        "description": "Boing boing!",
        "img_url": "https://cdn.thetrackernetwork.com/cdn/fortnite/0C2110971_large.png",
        "availability": 0
    },
]
```

## GET Users Wishlist Item by ID ##

URL: /api/users/:id/wishlist/:wishlistId

Example data from /api/users/1/wishlist/17

```
[
    {
        "username": "scott",
        "wishlistId": 17,
        "sellerId": 4,
        "itemId": 11,
        "name": "Basketball",
        "price": 2,
        "description": "Kobe!",
        "img_url": "https://cdn.thetrackernetwork.com/cdn/fortnite/3A625901_large.png",
        "availability": 1
    }
]
```

## POST Item to Users Wishlist ##

URL: /api/users/:id/wishlist

Example post requirements:

```
{
    "userId": 1,
    "itemId": 12
}
```
If successful, you will get a message and the updated wishlist. Example:
```
{
    "message": "Item added to wishlist!",
     "newWishlist": [
        {
            "wishlistId": 1,
            "userId": 1,
            "itemId": 20
        },
        {
            "wishlistId": 2,
            "userId": 1,
            "itemId": 14
        },
        {
            "wishlistId": 3,
            "userId": 1,
            "itemId": 5
        },
     ]
}
```
If the item is already on the users wishlist, you will get:
```
{
    "error": "This item is already on your wishlist"
}
```

## DELETE Item from Users Wishlist ##

URL: /api/users/:id/wishlist/:wishlistId

Example delete from /api/users/1/wishlist/12. A successful delete will return a message along with the updated wishlist:
```
{
    "message": "Item removed from wishlist",
     "newWishlist": [
        {
            "wishlistId": 1,
            "userId": 1,
            "itemId": 20
        },
        {
            "wishlistId": 2,
            "userId": 1,
            "itemId": 14
        },
        {
            "wishlistId": 3,
            "userId": 1,
            "itemId": 5
        },
      ]
}
```


## REGISTER (POST) User ##

URL: /api/users/register

Example data:
```
{
	"username": "hello",
	"password": "world"
}
```
If posted succesfully, the username will be returned. Example:
```
"hello"
```

## LOGIN (POST) User ##

URL: /api/users/login

Form will need `username` and `password`. If posted correctly, should get a response of:

```
{
    "message": "Welcome TestUser!",
    "userId": 15,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im9uIiwiaWF0IjoxNTUyMzQwOTM5LCJleHAiOjE1NTI0MjczMzl9.MHAPDdABRAJuiGLr8-              P1ur5e4DAcGcN0gEtNJFR_sdA"
}
```
The token in the response will be removed for production, is there for developmental purposes only.

## EDIT (PUT) User ##

URL: /api/users/:id

Nothing required, can change as few or as many things as wanted. 

Example: Changing user 2's `username` from Sam to test, and `funds_balance` from 0 to 25:
```
{
	"username": "test",
	"funds_balance": 25
}
```
A successful post will return the edited user. For example, the above edit will return:
```
{
    "userId": 2,
    "username": "test",
    "password": "sam",
    "funds_balance": 25,
    "img_url": "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png"
}
```

## DELETE User ##

URL: /api/users/:id

A successful delete will return a goodbye message, for example deleting user 1 will return:
```
"Sorry to see you go, scott"
```


