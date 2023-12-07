'use strict';

/**
 * status-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::status-service.status-service');
