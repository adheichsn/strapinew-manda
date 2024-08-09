const cfPublicAccessUrl = process.env.CF_PUBLIC_ACCESS_URL ? process.env.CF_PUBLIC_ACCESS_URL.replace(/^https?:\/\//, "") : "";

module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            cfPublicAccessUrl,
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            cfPublicAccessUrl,
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
