'use strict';

/**
 * service-status service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::service-status.service-status');
