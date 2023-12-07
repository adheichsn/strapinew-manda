'use strict';

/**
 * `currency` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In currency middleware.');

    await next();
  };
};
