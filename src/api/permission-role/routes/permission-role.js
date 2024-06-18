'use strict';

/**
 * permission-role router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::permission-role.permission-role',
{
    config: {
        find: {
            middlewares: [
                'api::permission-role.permissionroles'
            ]
        },
        findOne: {
            middlewares: [
                'api::permission-role.permissionroles'
            ]
        }
    }
}
);
