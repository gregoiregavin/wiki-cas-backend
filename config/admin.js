module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '278b10cbb0542b22e9a39b092dbfdc27'),
  },
});
