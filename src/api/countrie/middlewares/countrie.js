'use strict';

/**
 * `countrie` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In countrie middleware.');

    await next();
  };
};
