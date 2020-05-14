const bodyParser = require("body-parser");
const cors = require("cors");

// O 'app' é o mesmo da chamadada do index.js
module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(cors());
};
