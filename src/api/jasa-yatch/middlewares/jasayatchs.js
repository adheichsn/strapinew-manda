'use strict';

const jasaYatch = require("../controllers/jasa-yatch");

/**
 * `jasayatchs` middleware
 */

const populate = {
  jasaYatch: {
    populate: "*",
    fields : ["start_layanan","finish_layanan", "gt_kapal", "total_tarif", "description", "name", "data_kapal", "jenis_kapal", "jenis_jasa", "detail_jenis_jasa", "jenis_pelayanan",  "tarif_dasar", "status", "assign_to_id", "satuan_detail", "file"],
  }
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In jasayatchs middleware.');
    ctx.query = {
      populate,
      ...ctx.query,
    }

    await next();
  };
};
