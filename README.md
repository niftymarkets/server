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

server url: tbd, not deployed to heroku yet.


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
        "seller": "1",
        "img_url": "https://cdn.thetrackernetwork.com/cdn/fortnite/93062_large.png",
        "availability": "available"
    },
    {
        "itemId": 6,
        "name": "Floss",
        "price": 29,
        "description": "Express yourself on the battlefield.",
        "category": "emotes",
        "seller": "6",
        "img_url": "https://cdn.thetrackernetwork.com/cdn/fortnite/9AB75723_large.png",
        "availability": "available"
    },
]
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
        "items_for_sale": 1,
        "wish_list": 2,
        "transactions": null,
        "img_url": "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png"
    },
    {
        "userId": 2,
        "username": "sam",
        "password": "sam",
        "funds_balance": 0,
        "items_for_sale": 2,
        "wish_list": 3,
        "transactions": null,
        "img_url": "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png"
    },
]
```

