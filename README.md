# ITF20319-Software-Engingeering-og-Testing

## Prerequisites and getting started

Requires Node.js and npm installed. Tested on Node.js v14, v16 and v18.

`npm ci` to install dependencies and packages.

`npm start` or `node ./index.js` to run the program. You can also specify a year to check, e.g. with `node ./index.js 2024`.

## Oblig 2 og 3

I made the folder `.github/workflows` where I created `node.js.yml`.

Continuous Integration (CI) is setup so that every time someone pushes to main branch or make a pull request to main, the workflow will run.

The workflow will run all `run:` commands on Node.js version 14, 16 and 18. This is to ensure wide compatability and test coverage.

The first command will run `npm install -g npm`, to ensure that the following `npm` commands will work.

Then `npm ci` will install dependencies and packages from `package-lock.json`. This is chosen over `npm install`, which can lead to a different package structure, and that is not something we want in a production environment. `npm ci` will ensure that you get the same package structure, and it is important to ensure that the tests reflect the production environment as much as possible.

Lastly the command `npm test` will be run which is an alias for the command `mocha` defined in `package.json`. Mocha will then find the folder `/test` and run all tests specified in the folder

If some of the tests would fail, on either version 14, 16 or 18 of Node.js, then the checks will fail alltogether.
