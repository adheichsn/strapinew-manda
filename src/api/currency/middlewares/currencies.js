'use strict';

const currency = require("../controllers/currency");

/**
 * `currencies` middleware
 */

const populate = {
  currency: {
    populate: "*",
    fields : ["amount", "date", "rate_dollar"],
  }
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In currencies middleware.');
    ctx.query = {
      populate,
      ...ctx.query,
    }

    await next();
  };
};
