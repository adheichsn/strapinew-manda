'use strict';

const jasaAirBersih = require("../controllers/jasa-air-bersih");

/**
 * `jasaairbersihs` middleware
 */

const populate = {
  jasaAirBersih: {
    populate: "*",
    fields : ["start_layanan","finish_layanan", "qty", "total_tarif", "keterangan", "data_kapal", "jenis_pelayanan", "tarif_dasar", "status", "assign_to_id", "satuan_details", "file"],
  }
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In jasaairbersihs middleware.');
    ctx.query = {
      populate,
      ...ctx.query,
    }

    await next();
  };
};
