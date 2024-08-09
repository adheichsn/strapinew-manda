// path: ./config/api.js
module.exports = ({ env }) => ({
  rest: {
    defaultLimit: 100,
    maxLimit: -1, // Setting to -1 to attempt to disable the limit
    withCount: true,
  },
});
