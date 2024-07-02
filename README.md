<h2> Easy Gen </h2>h2>
# A sample framework created using cypress, javascript and docker

Pre-requisite Tools
Node version 12 or above
Visual Studio Code
Quickstart
You know setting up framework is very quick!

npm install
set env vars in cypress.config.js
go to cypress.config.js file
set baseurl, apiKey, login and password
Dashboard execution
Go to project root,
npx cypress open or npm run cy:open
click specific feature
cmmd line Execution
npm run cy:run # for a full run
npm run dev-cy:run # for a full run on dev environment, need to change baseUrls accordingly
and refer to more other npm scripts added in package.json
