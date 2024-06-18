'use strict';

const terminalPelabuhan = require("../controllers/terminal-pelabuhan");

/**
 * `terminalpelabuhans` middleware
 */

const populate = {
  terminalPelabuhan: {
    populate: "*",
    fields : ["name"],
  }
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In terminalpelabuhans middleware.');
    ctx.query = {
      populate,
      ...ctx.query,
    }

    await next();
  };
};
