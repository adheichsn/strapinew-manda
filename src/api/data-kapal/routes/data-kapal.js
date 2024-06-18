'use strict';

/**
 * data-kapal router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::data-kapal.data-kapal',
{
    config: {
        find: {
            middlewares: [
                'api::data-kapal.datakapals'
            ]
        },
        findOne: {
            middlewares: [
                'api::data-kapal.datakapals'
            ]
        }
    }
}
);
