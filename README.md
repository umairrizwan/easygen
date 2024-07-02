<h2> Easy Gen </h2>
# A sample framework created using cypress, typescript 

Pre-requisite Tools
Node version 12 or above
Visual Studio Code <br />
<h2>Quickstart</h2>
You know setting up framework is very quick!

npm install<br />
<h2>Set file path for alert file</h2><br />


<img width="458" alt="github" src="https://github.com/umairrizwan/easygen/assets/63503754/48648150-2076-4e3d-9f10-63340e795d9b"><br />
Right click on alert-text.txt and copy path <br />
Now paste that path in the example.json highlighted on the right side of the snapshot <br />

<h2>Script to execute test cases</h2><br />
# Open Terminal and write command [npm run "ui:test"] <br />
Dashboard execution<br />
Go to project root,<br />
npx cypress open or npm run cy:open<br />
click specific feature<br />
cmmd line Execution<br />
npm run cy:run # for a full run<br />
npm run dev-cy:run # for a full run on dev environment, need to change baseUrls accordingly<br />
and refer to more other npm scripts added in package.json<br />
