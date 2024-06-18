'use strict';

/**
 * satuan-bayar router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::satuan-bayar.satuan-bayar',
{
    config: {
        find: {
            middlewares: [
                'api::satuan-bayar.satuanbayars'
            ]
        },
        findOne: {
            middlewares: [
                'api::satuan-bayar.satuanbayars'
            ]
        }
    }
}
);
