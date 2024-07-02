import { defineConfig } from "cypress";
var fs = require("fs");

export default defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        readFileMaybe: (filename) => {
          if (fs.existsSync(filename)) {
            return fs.readFileSync(filename, "utf-8");
          }
          return null;
        },
      });
    },
    baseUrl: null,
  },

  env: {
    indexUrl: "./build/task.html",
  },
});
