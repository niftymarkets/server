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


#### API ####


## GENERAL ##
-server url: tbd, not deployed to heroku yet.
-For `/:itemId` and `/:userId`, use the `itemId` and `userId` respectively properties on the item/user objects. Both of these are integer numbers.



#### Items Routes ####

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
        "buyerId": 1,
        "userId": 1,  //---SELLER-------
        "img_url": "https://cdn.thetrackernetwork.com/cdn/fortnite/93062_large.png",
        "availability": "available"
    },
    {
        "itemId": 19,
        "name": "Squirtle",
        "price": 100,
        "description": "One part squirrel, one part turtle",
        "category": "pets",
        "buyerId": 4,
        "userId": "9",
        "img_url": "https://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/500px-007Squirtle.png",
        "availability": "available"
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
        "availability": "sold"
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

A successfully created item will return:
```
{
    "message": "Item created successfully"
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
      "availability": "sold"
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
    "availability": "sold"
}
```

## DELETE Items ##

URL: /api/items/:id
    
A successful delete will return a message, for example deleting item 1 will return:
```
"Your item Love Ranger has been deleted."
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
    },
    {
        "userId": 2,
        "username": "sam",
        "password": "sam",
        "funds_balance": 0,
        "img_url": "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png"
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
        "availability": "available"
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
        "availability": "sold"
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
        "availability": "available"
    }
]
```

## GET Users Purchases ##

URL: /api/users/:id/purchases

Example Data for /api/users/1/purchases:
```
[
    {
        "itemId": 6,
        "name": "Floss",
        "price": 29,
        "description": "Express yourself on the battlefield.",
        "category": "emotes",
        "buyerId": 1,
        "userId": 2,
        "img_url": "https://cdn.thetrackernetwork.com/cdn/fortnite/9AB75723_large.png",
        "availability": "sold"
    },
    {
        "itemId": 19,
        "name": "Squirtle",
        "price": 100,
        "description": "One part squirrel, one part turtle",
        "category": "pets",
        "buyerId": 1,
        "userId": 9,
        "img_url": "https://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/500px-007Squirtle.png",
        "availability": "sold"
    }
]
```

## GET Users Sold Items ##

URL: /api/users/:id/sold

Example Data for /api/users/1/sold:

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
        "availability": "sold"
    }
]
```

## REGISTER (POST) User

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

## LOGIN (POST) User

URL: /api/users/login

Form will need `username` and `password`. If posted correctly, should get a response of:

```
{
    "message": "Welcome TestUser! token:",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im9uIiwiaWF0IjoxNTUyMzQwOTM5LCJleHAiOjE1NTI0MjczMzl9.MHAPDdABRAJuiGLr8-              P1ur5e4DAcGcN0gEtNJFR_sdA"
}
```
The token in the response will be removed for production, is there for developmental purposes only.

## EDIT (PUT) User

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

## DELETE User

URL: /api/users/:id

A successful delete will return a goodbye message, for example deleting user 1 will return:
```
"Sorry to see you go, scott"
```


