'use strict';

/**
 * role-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::role-user.role-user');
