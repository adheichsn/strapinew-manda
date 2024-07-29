'use strict';

/**
 * order-yatch service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::order-yatch.order-yatch');
