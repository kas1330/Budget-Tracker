let path = require("path");

module.exports = function (app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // cms route loads exercise.html
  // app.get("/exercise", function (req, res) {
  //   res.sendFile(path.join(__dirname, "../public/exercise.html"));
  // });

  // app.get("/stats", function (req, res) {
  //   res.sendFile(path.join(__dirname, "../public/stats.html"));
  // });
};
