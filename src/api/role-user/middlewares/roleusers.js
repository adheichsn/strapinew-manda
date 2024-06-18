'use strict';

const roleUser = require("../controllers/role-user");

/**
 * `roleusers` middleware
 */
const populate = {
  roleUser: {
    populate: "*",
    fields : ["users", "roles"],
  }
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In roleusers middleware.');
    ctx.query = {
      populate,
      ...ctx.query,
    }

    await next();
  };
};
