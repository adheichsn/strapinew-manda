'use strict';

const statusService = require("../controllers/status-service");

/**
 * `statusservices` middleware
 */

const populate = {
  statusService: {
    populate: "*",
    fields : ["status"],
  }
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In statusservices middleware.');
    ctx.query = {
      populate,
      ...ctx.query,
    }

    await next();
  };
};
