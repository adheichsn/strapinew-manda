'use strict';

/**
 * jasa-labuh router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::jasa-labuh.jasa-labuh',
{
    config: {
        find: {
            middlewares: [
                'api::jasa-labuh.jasalabuhs'
            ]
        },
        findOne: {
            middlewares: [
                'api::jasa-labuh.jasalabuhs'
            ]
        }
    }
}
);
