'use strict';

/**
 * jenis-kapal router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::jenis-kapal.jenis-kapal',
{
    config: {
        find: {
            middlewares: [
                'api::jenis-kapal.jeniskapals'
            ]
        },
        findOne: {
            middlewares: [
                'api::jenis-kapal.jeniskapals'
            ]
        }
    }
}
);
