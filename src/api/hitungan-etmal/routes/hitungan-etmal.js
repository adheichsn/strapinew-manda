'use strict';

/**
 * hitungan-etmal router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::hitungan-etmal.hitungan-etmal',
{
    config: {
        find: {
            middlewares: [
                'api::hitungan-etmal.hitunganetmals'
            ]
        },
        findOne: {
            middlewares: [
                'api::hitungan-etmal.hitunganetmals'
            ]
        }
    }
}
);
