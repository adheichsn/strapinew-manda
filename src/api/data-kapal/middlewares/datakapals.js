'use strict';

const dataKapal = require("../controllers/data-kapal");

/**
 * `datakapals` middleware
 */

const populate = {
  dataKapal: {
    populate: "*",
    fields : ["nama_kapal", "milik", "panjang_kapal", "sarat_muka_kapal", "sarat_belakang_kapal", "dwt", "datang_dari", "tujuan", "bendera_kebangsaan", "jenis_kapal"],
  }
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In datakapals middleware.');
    ctx.query = {
      populate,
      ...ctx.query,
    }

    await next();
  };
};
