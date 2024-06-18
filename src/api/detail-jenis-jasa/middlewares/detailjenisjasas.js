'use strict';

const detailJenisJasa = require("../controllers/detail-jenis-jasa");

/**
 * `detailjenisjasas` middleware
 */

const populate = {
  detailJenisJasa: {
    populate: "*",
    fields : ["detail_jenis_jasa", "jenis_pelayanan", "nama_jasa"],
  }
}

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In detailjenisjasas middleware.');
    ctx.query = {
      populate,
      ...ctx.query,
    }

    await next();
  };
};
