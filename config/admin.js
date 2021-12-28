module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9399156871e3fb8b0dee000905c5850a'),
  },
});
