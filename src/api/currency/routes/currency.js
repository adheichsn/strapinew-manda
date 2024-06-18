'use strict';

/**
 * currency router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::currency.currency',
{
    config: {
        find: {
            middlewares: [
                'api::currency.currencies'
            ]
        },
        findOne: {
            middlewares: [
                'api::currency.currencies'
            ]
        }
    }
}
);
