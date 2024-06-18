'use strict';

/**
 * jasa-air-bersih router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::jasa-air-bersih.jasa-air-bersih',
{
    config: {
        find: {
            middlewares: [
                'api::jasa-air-bersih.jasaairbersihs'
            ]
        },
        findOne: {
            middlewares: [
                'api::jasa-air-bersih.jasaairbersihs'
            ]
        }
    }
}
);
