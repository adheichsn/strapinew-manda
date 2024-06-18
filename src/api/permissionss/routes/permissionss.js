'use strict';

/**
 * permissionss router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::permissionss.permissionss',
{
    config: {
        find: {
            middlewares: [
                'api::permissionss.permissionsss'
            ]
        },
        findOne: {
            middlewares: [
                'api::permissionss.permissionsss'
            ]
        }
    }
}
);
