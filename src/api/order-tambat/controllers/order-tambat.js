'use strict';

const snap = require('../../../utils/midtrans');

/**
 * order-tambat controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order-tambat.order-tambat', ({ strapi }) => ({
  async create(ctx) {
    const response = await super.create(ctx);

    snap.createTransaction({
      "transaction_details": {
        "order_id": `PALKA-ORDERID-${response.data.id}`,
        "gross_amount": response.data.attributes.total_tarif,
      }
    }).then(async (transaction) => {
      const entry = await strapi.entityService.update('api::order-tambat.order-tambat', response.data.id, {
        data: {
          snap_token: transaction.token,
        }
      });
    });

    return response;
  }
}));
