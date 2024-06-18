'use strict';

/**
 * terminal-pelabuhan router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::terminal-pelabuhan.terminal-pelabuhan',
{
    config: {
        find: {
            middlewares: [
                'api::terminal-pelabuhan.terminalpelabuhans'
            ]
        },
        findOne: {
            middlewares: [
                'api::terminal-pelabuhan.terminalpelabuhans'
            ]
        }
    }
}
);
