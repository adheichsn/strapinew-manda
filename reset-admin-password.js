// @ts-ignore
const strapi = require('strapi');
// @ts-ignore

const strapiAdmin = require('strapi-admin');

(async () => {
  await strapi().load();

  const user = await strapi.query('user', 'users-permissions').findOne({ username: 'amandaputri@gmail.com' }); // Ganti dengan email atau username admin yang sesuai

  if (user) {
    const bcrypt = require('bcrypt');
    const saltRounds = 10;
    const plainPassword = '';

    bcrypt.hash(plainPassword, saltRounds, async function(err, hash) {
      if (err) throw err;
      await strapi.query('user', 'users-permissions').update({ id: user.id }, { password: hash });
      console.log('Password updated');
    });
  } else {
    console.log('Admin user not found');
  }
})();
