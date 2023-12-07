'use strict';

/**
 * `jasa-kapal` middleware
 */
const populate = {
  data_kapal: {
  populate: "*",
  }
  };

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In jasa-kapal middleware.');
    ctx.query = {
      populate, 
      ...ctx.query,
    }

    await next();
  };
};
