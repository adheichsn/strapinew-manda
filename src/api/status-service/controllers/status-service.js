'use strict';

/**
 * status-service controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::status-service.status-service');
