var fs = require("fs");
fs.writeFile("welcome.txt", "Hello node", function (err) {
  if (err) {
    return console.error(err);
  }
  fs.readFile("welcome.txt", function (err, data) {
    if (err) {
      console.error(err);
    }
    console.log("the text is: " + data.toString());
  });
});
