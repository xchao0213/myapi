module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '106.15.180.7'),
      port: env.int('DATABASE_PORT', 3308),
      database: env('DATABASE_NAME', 'myapi'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', '15A0dce1'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
