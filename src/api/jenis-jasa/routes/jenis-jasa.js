'use strict';

/**
 * jenis-jasa router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::jenis-jasa.jenis-jasa',
{
    config: {
        find: {
            middlewares: [
                'api::jenis-jasa.jenisjasas'
            ]
        },
        findOne: {
            middlewares: [
                'api::jenis-jasa.jenisjasas'
            ]
        }
    }
}
);
