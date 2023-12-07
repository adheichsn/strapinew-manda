'use strict';

/**
 * countrie router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::countrie.countrie', {
    config: {
        find: {
            middlewares: ['api::countrie.countrie'],
        },
        findOne: {
            middlewares: ['api::countrie.countrie'],
        }
    }
});
  