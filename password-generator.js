var password = require("generate-password");
var pass = password.generate({
  length: 8,
  numbers: true,
  symbols: true,
});
console.log(pass);
