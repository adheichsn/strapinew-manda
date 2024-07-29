'use strict';

/**
 * service-status controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::service-status.service-status');
