'use strict';

const satuanBayar = require("../controllers/satuan-bayar");

/**
 * `satuanbayars` middleware
 */

const populate = {
  satuanBayar: {
    populate: "*",
    fields : ["satuan_tarif"],
  }
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In satuanbayars middleware.');
    ctx.query = {
      populate,
      ...ctx.query,
    }

    await next();
  };
};
