module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b31436d47a35663708bd0e9d961973c9'),
  },
});
