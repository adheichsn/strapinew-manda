'use strict';

/**
 * roless router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::roless.roless',
{
    config: {
        find: {
            middlewares: [
                'api::roless.rolesss'
            ]
        },
        findOne: {
            middlewares: [
                'api::roless.rolesss'
            ]
        }
    }
}
);
