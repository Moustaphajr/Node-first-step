const generator = require("generate-password");

function genreatepassword() {
  let password = generator.generate({
    length: 8,
    numbers: true,
  });
  console.log(password);
}
genreatepassword();
