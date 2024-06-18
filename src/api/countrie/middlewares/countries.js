'use strict';

const countrie = require("../controllers/countrie");

/**
 * `countries` middleware
 */

const populate = {
  countrie: {
    populate: "*",
    fields : ["name","short_code"],
  }
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In countries middleware.');
    ctx.query = {
      populate,
      ...ctx.query,
    }

    await next();
  };
};
