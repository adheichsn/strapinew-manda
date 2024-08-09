'use strict';

const snap = require('../../../utils/midtrans');

/**
 * order-air-bersih controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order-air-bersih.order-air-bersih', ({ strapi }) => ({
  async create(ctx) {
    const response = await super.create(ctx);

    snap.createTransaction({
      "transaction_details": {
        "order_id": `PALKA-ORDERID-${response.data.id}`,
        "gross_amount": response.data.attributes.total_tarif,
      }
    }).then(async (transaction) => {
      const entry = await strapi.entityService.update('api::order-air-bersih.order-air-bersih', response.data.id, {
        data: {
          snap_token: transaction.token,
        }
      });
    });

    return response;
  }
}));
