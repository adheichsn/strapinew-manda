'use strict';

/**
 * jasa-yatch router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::jasa-yatch.jasa-yatch',
{
    config: {
        find: {
            middlewares: [
                'api::jasa-yatch.jasayatchs'
            ]
        },
        findOne: {
            middlewares: [
                'api::jasa-yatch.jasayatchs'
            ]
        }
    }
}
);
