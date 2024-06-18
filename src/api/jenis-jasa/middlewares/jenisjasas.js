'use strict';

const jenisJasa = require("../controllers/jenis-jasa");

/**
 * `jenisjasas` middleware
 */

const populate = {
  jenisJasa: {
    populate: "*",
    fields : ["nama_jasa"],
  }
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In jenisjasas middleware.');
    ctx.query = {
      populate,
      ...ctx.query,
    }

    await next();
  };
};
