'use strict';

const satuanDetail = require("../controllers/satuan-detail");

/**
 * `satuandetails` middleware
 */

const populate = {
  satuanDetail: {
    populate: "*",
    fields : ["satuan"],
  }
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In satuandetails middleware.');
    ctx.query = {
      populate,
      ...ctx.query,
    }

    await next();
  };
};
