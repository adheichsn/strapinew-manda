'use strict';

const jasaLabuh = require("../controllers/jasa-labuh");

/**
 * `jasalabuhs` middleware
 */

const populate = {
  jasaLabuh: {
    populate: "*",
    fields : ["start_layanan","finish_layanan", "gt_kapal", "pandu", "total_tarif", "description", "name", "data_kapal", "jenis_kapal", "jenis_jasa", "detail_jenis_jasa", "jenis_pelayanan", "tarif_dasar", "tarif_pandu", "status", "assign_to_id", "satuan_detail", "file"],
  }
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In jasalabuhs middleware.');
    ctx.query = {
      populate,
      ...ctx.query,
    }

    await next();
  };
};
