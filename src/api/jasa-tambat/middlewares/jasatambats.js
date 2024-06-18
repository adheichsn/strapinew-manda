'use strict';

const jasaTambat = require("../controllers/jasa-tambat");

/**
 * `jasatambats` middleware
 */

const populate = {
  jasaTambat: {
    populate: "*",
    fields : ["start_layanan","finish_layanan", "gt_kapal", "pandu", "total_etmal","total_tarif", "description", "name", "data_kapal", "jenis_kapal", "jenis_jasa", "detail_jenis_jasa", "jenis_pelayanan", "tarif_pandu", "status", "file", "tarif_dasar", "assign_to_id"],
  }
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In jasatambats middleware.');
    ctx.query = {
      populate,
      ...ctx.query,
    }

    await next();
  };
};
