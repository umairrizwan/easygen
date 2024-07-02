

# _Cypress Automation Framework_

Welcome to the Cypress Automation Framework repository! This framework is designed to simplify and streamline your UI,  testing using Cypress, a powerful end-to-end testing framework.
<h2> Easy Generator </h2>
# A sample framework created using cypress, typescript for the client Easy Generator

### Pre-requisite Tools
Node version 12 or above <br />
Visual Studio Code <br />

## Installation and Setup

To get started with this framework, follow these steps:

### 1. Install Cypress

```bash
npm install cypress --save-dev
```
### 2. Code Structure
This Cypress Automation Framework follows a structured approach for better maintainability and scalability. Below is an overview of the code structure:

### 3. Comprehensive Testing
This framework is designed to support UI testing:

- UI Testing: UI tests are located under the cypress/e2e folder. Each test file typically follows the naming convention Test ui-tests.cy.ts, where "ui-tests" represents the UI being tested.


### 4. Folder Structure
- Project uses ui-config.ts which can be found under cypress/config/ folder: It Contains script to execute script both in ui and headless mode
- support: Contains command.ts file in which there are couple of custom commands for Alerts

### 5.Set file path for alert file


<img width="458" alt="github" src="https://github.com/umairrizwan/easygen/assets/63503754/48648150-2076-4e3d-9f10-63340e795d9b"><br />
Right click on alert-text.txt and copy path <br />
Now paste that path in the example.json highlighted on the right side of the snapshot <br />

### 6. Command for execution of test scripts on cypress runner
Open Terminal and write command in order to execute tests on cypress runner
```bash
npm run "ui:test"
```

### 7. Command for execution of test scripts in headless mode
Open Terminal and write command in order to execute tests in headless mode
```bash
npm run ui:test:headless
```

