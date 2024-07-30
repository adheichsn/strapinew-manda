const bcrypt = require('bcrypt');
const saltRounds = 10;
const plainPassword = 'Filipi%46'; // Ganti dengan password baru

bcrypt.hash(plainPassword, saltRounds, function(err, hash) {
  if (err) throw err;
  console.log(hash);
});
