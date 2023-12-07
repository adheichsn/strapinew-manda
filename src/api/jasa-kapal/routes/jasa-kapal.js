'use strict';

/**
 * jasa-kapal router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::jasa-kapal.jasa-kapal',
{
    config: {
        find: {
            middlewares: [
                'api::jasa-kapal.jasa-kapal'
            ]
        },
        findOne: {
            middlewares: [
                'api::jasa-kapal.jasa-kapal'
            ]
        }
    }
}
);
