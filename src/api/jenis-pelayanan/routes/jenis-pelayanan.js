'use strict';

/**
 * jenis-pelayanan router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::jenis-pelayanan.jenis-pelayanan',
{
    config: {
        find: {
            middlewares: [
                'api::jenis-pelayanan.jenispelayanans'
            ]
        },
        findOne: {
            middlewares: [
                'api::jenis-pelayanan.jenispelayanans'
            ]
        }
    }
}
);
