'use strict';

const tarifPandu = require("../controllers/tarif-pandu");

/**
 * `tarifpandus` middleware
 */

const populate = {
  tarifPandu: {
    populate: "*",
    fields : ["name", "price"],
  }
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In tarifpandus middleware.');
    ctx.query = {
      populate,
      ...ctx.query,
    }

    await next();
  };
};
