'use strict';

/**
 * tarif-dasar router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::tarif-dasar.tarif-dasar',
{
    config: {
        find: {
            middlewares: [
                'api::tarif-dasar.tarifdasars'
            ]
        },
        findOne: {
            middlewares: [
                'api::tarif-dasar.tarifdasars'
            ]
        }
    }
}
);
