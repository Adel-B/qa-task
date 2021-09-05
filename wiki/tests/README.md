# About the tests

## What ?
Integration/e2e ...

## How ?
The tests are written with [Cypress](https://docs.cypress.io/guides/overview/why-cypress) + [Cucumber](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor).


## Where ?

Tests are located under `./cypress` :
```
./cypress
├── downloads
├── fixtures
│   └── cookie.json
├── helpers
│   └── selectors.js
├── integration
│   ├── features
│   │   ├── cart
│   │   ├── homePage.feature
│   │   ├── shared
│   │   │   └── header.feature
│   │   └── users
│   │       ├── account
│   │       │   ├── addresses.feature
│   │       │   ├── creditSlips.feature
│   │       │   ├── orderHistory.feature
│   │       │   ├── personalInformation.feature
│   │       │   └── wishlists.feature
│   │       ├── login.feature
│   │       └── register.feature
│   └── step_definitions
│       └── common
│           ├── Given.js
│           ├── Hooks.js
│           ├── Then.js
│           └── When.js
├── plugins
│   └── index.js
└── support
    ├── commands.js
    └── index.js

```

## Todo / to continue:

See [the list here](https://github.com/Adel-B/qa-task/issues)
