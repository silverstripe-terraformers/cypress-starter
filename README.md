# Cypress starter



## Installation

Install nvm [see docs](https://github.com/nvm-sh/nvm)
alternatively, you can install node (refer to the .nvmrc file for the current node version) directly eg if you are using windows.

Install node
```bash
nvm install
```

Set current node version
```bash
nvm use
```

Install yarn
```bash
$ npm install -g yarn
```

Install yarn dependencies
```bash
$ yarn
```

### Set up local environment

All commands are to be run from the project root directory (unless otherwise specified).


Prepare your cypress.env.json file (copy `cypress.env.json.dist` to `cypress.env.json`)

```bash
$ cp cypress.env.json.dist cypress.env.json
```

Open up your `cypress.env.json` file, and update your target website url. This is the url that tests will be run against.

```json
{
  "baseUrl": "http://my.website.goes.here/"
}
```

## Available Tools

Note: make sure to set current node version if you have restarted or opened a new shell
```bash
nvm use
```


* `yarn open` open cypress in interactive mode
* `yarn test` runs cypress tests in headless mode with chrome browser

