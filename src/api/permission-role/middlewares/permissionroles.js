'use strict';

const permissionRole = require("../controllers/permission-role");

/**
 * `permissionroles` middleware
 */

const populate = {
  permissionRole: {
    populate: "*",
    fields : ["roles"],
  }
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In permissionroles middleware.');
    ctx.query = {
      populate,
      ...ctx.query,
    }

    await next();
  };
};
