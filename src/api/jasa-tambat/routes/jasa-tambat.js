'use strict';

/**
 * jasa-tambat router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::jasa-tambat.jasa-tambat',
{
    config: {
        find: {
            middlewares: [
                'api::jasa-tambat.jasatambats'
            ]
        },
        findOne: {
            middlewares: [
                'api::jasa-tambat.jasatambats'
            ]
        }
    }
}
);
