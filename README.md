# elections-app

Elections-app is a React Single Page App (SPA)

[![Build Status](https://travis-ci.org/citizenlabsgr/elections-app.svg?branch=master)](https://travis-ci.org/citizenlabsgr/elections-app)

## Goals
1. Determine if an end user is Registered to Vote
1. If Registered, show what a Ballot will contain
1. If not Registered, link to the Michigan Voter Registration Information

## Decisions
1. [React](https://reactjs.org/) to Manage Javascript and HTML Components
1. [SCSS](https://sass-lang.com/) to give CSS a boost
1. [BEM](http://getbem.com/) to help organize the CSS
1. [Riteway](https://github.com/ericelliott/riteway) for Testing

### Prerequisites

1. Install git [Link to Install git instructions](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
1. Install Node [Link to Install Node instructions](https://nodejs.org)
1. If planning to contribute you will need to be added to [the project](https://github.com/citizenlabsgr/elections-app)

### Install Dependencies
```shell script
$ npm install
```

### For Development
```shell script
$ npm run watch # This will do build every time you make a change
```

### Build Project
```shell script
$ npm run build-dev # This will build a non-minified version of the project
$ npm run build # This will build a minified version of the project
```

### View Local
After running one of the builds you will have a dist folder.
1. Navigate to that folder
2. Open index.html with your web browser

### Run Tests
```shell script
$ npm run test # Run the tests once
$ npm run watch-test # Run the tests every time you make a change
```

