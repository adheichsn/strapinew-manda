'use strict';

const tarifDasar = require("../controllers/tarif-dasar");

/**
 * `tarifdasars` middleware
 */

const populate = {
  tarifDasar: {
    populate: "*",
    fields : ["tarif_dasar", "currency", "currency_usd", "jenis_jasa", "jenis_pelayanan", "jenis_kapal", "satuan_bayar", "detail_jenis_jasa"],
  }
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In tarifdasars middleware.');
    ctx.query = {
      populate,
      ...ctx.query,
    }

    await next();
  };
};
