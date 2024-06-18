'use strict';

const hitunganEtmal = require("../controllers/hitungan-etmal");

/**
 * `hitunganetmals` middleware
 */

const populate = {
  hitunganEtmal: {
    populate: "*",
    fields : ["name","dasar_etmal"],
  }
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In hitunganetmals middleware.');
    ctx.query = {
      populate,
      ...ctx.query,
    }

    await next();
  };
};
