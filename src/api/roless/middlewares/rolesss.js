'use strict';

const roless = require("../controllers/roless");

/**
 * `rolesss` middleware
 */

const populate = {
  roless: {
    populate: "*",
    fields : ["title"],
  }
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In rolesss middleware.');
    ctx.query = {
      populate,
      ...ctx.query,
    }

    await next();
  };
};
