'use strict';

/**
 * role-user router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::role-user.role-user',
{
    config: {
        find: {
            middlewares: [
                'api::role-user.roleusers'
            ]
        },
        findOne: {
            middlewares: [
                'api::role-user.roleusers'
            ]
        }
    }
}
);
