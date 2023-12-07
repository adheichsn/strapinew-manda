'use strict';

/**
 * status-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::status-service.status-service');
