'use strict';

const jenisKapal = require("../controllers/jenis-kapal");

/**
 * `jeniskapals` middleware
 */
const populate = {
  jenisKapal: {
    populate: "*",
    fields : ["jenis_kapal"],
  }
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In jeniskapals middleware.');
    ctx.query = {
      populate,
      ...ctx.query,
    }

    await next();
  };
};
