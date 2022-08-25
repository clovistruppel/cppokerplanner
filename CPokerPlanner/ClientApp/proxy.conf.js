const { env } = require('process');

const target = env.ASPNETCORE_HTTPS_PORT ? `https://0.0.0.0:${env.ASPNETCORE_HTTPS_PORT}` :
  env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'https://0.0.0.0:5001';

const PROXY_CONFIG = [
  {
    context: [
      "/player",
   ],
    target: target,
    secure: false,
    headers: {
      Connection: 'Keep-Alive'
    }
  }
]

module.exports = PROXY_CONFIG;
