'use strict';

/**
 * detail-jenis-jasa router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::detail-jenis-jasa.detail-jenis-jasa',
{
    config: {
        find: {
            middlewares: [
                'api::detail-jenis-jasa.detailjenisjasas'
            ]
        },
        findOne: {
            middlewares: [
                'api::detail-jenis-jasa.detailjenisjasas'
            ]
        }
    }
}
);
