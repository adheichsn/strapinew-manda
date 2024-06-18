'use strict';

const passwordReset = require("../controllers/password-reset");

/**
 * `passwordresets` middleware
 */

const populate = {
  passwordReset: {
    populate: "*",
    fields : ["email", "token", "create_at"],
  }
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In passwordresets middleware.');
    ctx.query = {
      populate,
      ...ctx.query,
    }

    await next();
  };
};
