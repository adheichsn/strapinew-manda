'use strict';

/**
 * tarif-pandu router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::tarif-pandu.tarif-pandu',
{
    config: {
        find: {
            middlewares: [
                'api::tarif-pandu.tarifpandus'
            ]
        },
        findOne: {
            middlewares: [
                'api::tarif-pandu.tarifpandus'
            ]
        }
    }
}
);
