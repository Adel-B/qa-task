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
│   │   │   └── cart.feature
│   │   ├── home-page.feature
│   │   ├── product
│   │   │   └── product.feature
│   │   ├── shared
│   │   │   └── header.feature
│   │   └── users
│   │       ├── account
│   │       │   ├── address.feature
│   │       │   ├── credit-slip.feature
│   │       │   ├── order-history.feature
│   │       │   ├── personal-information.feature
│   │       │   └── wish-list.feature
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
├── support
│   ├── commands.js
│   └── index.js
└── workflows

```

## Todo / to continue:

See [the list here](https://github.com/Adel-B/qa-task/issues)
