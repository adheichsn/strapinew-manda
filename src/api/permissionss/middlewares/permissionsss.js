'use strict';

const permissionss = require("../controllers/permissionss");

/**
 * `permissionsss` middleware
 */

const populate = {
  permissionss: {
    populate: "*",
    fields : ["title"],
  }
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In permissionsss middleware.');
    ctx.query = {
      populate,
      ...ctx.query,
    }

    await next();
  };
};
