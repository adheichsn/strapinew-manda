'use strict';

/**
 * service-status router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::service-status.service-status');
