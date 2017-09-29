# _Club Manager_

#### _A web app that manages the roster of a club, team, or group, Sept 29, 2017_

#### By _**Charlie Kelson**_



### User Story

| User Story |
|----|
| As a user, I'd like to visit a page to see a list of all team or club members.|
| As a user, I'd like to click a team or club member's entry in the list to visit their profile page, which should include more details about them.|
| As a user, I'd like the option to visit an "About" page that explains what the club is, and what they do.|
| As a user, I'd like all data persisted in a database, so it's always there when I need it.|
| As an administrator, I want to add new users to the club. (User authentication is not required)|
| As an administrator, I want to edit user profiles, in case I make a mistake, or need to update their details|
| As an administrator, need the option to delete a user, in case they leave the club or team|





## Setup/Installation Requirements

* _Clone repo and install npm and bower from terminal `install npm` & `install bower`_
* _Sign up for Firebase and create own project to retrieve API key_
* _Create an `api-keys.ts` file in your `app/` directory and format your keys like below_
```
export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };
```
* _Add `api-keys.ts` to your `.gitignore` file_



## Known Bugs

_No known Bugs_



## Technologies Used

* _AngularJS_
* _npm, Bower_
* _Firebase_


### License

MIT License

Copyright (c) 2017 **_Charlie Kelson_**
