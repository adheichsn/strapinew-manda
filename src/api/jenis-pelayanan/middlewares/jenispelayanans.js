'use strict';

const jenisPelayanan = require("../controllers/jenis-pelayanan");

/**
 * `jenispelayanans` middleware
 */

const populate = {
  jenisPelayanan: {
    populate: "*",
    fields : ["jenis_pelayanan", "satuan_tarif"],
  }
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In jenispelayanans middleware.');
    ctx.query = {
      populate,
      ...ctx.query,
    }

    await next();
  };
};
