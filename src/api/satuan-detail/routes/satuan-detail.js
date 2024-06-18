'use strict';

/**
 * satuan-detail router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::satuan-detail.satuan-detail',
{
    config: {
        find: {
            middlewares: [
                'api::satuan-detail.satuandetails'
            ]
        },
        findOne: {
            middlewares: [
                'api::satuan-detail.satuandetails'
            ]
        }
    }
}
);
