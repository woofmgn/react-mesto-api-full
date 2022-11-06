const allowedCors = [
  'https://vden.mesto.nomoredomains.icu',
  'http://vden.mesto.nomoredomains.icu',
  'https://www.vden.mesto.nomoredomains.icu',
  'http://www.vden.mesto.nomoredomains.icu',
  'localhost:3000',
  'http://localhost:3000',
  'https://localhost:3000',
];

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  const { origin } = req.headers;
  const { method } = req;
  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
  const requestHeaders = req.headers['access-control-request-headers'];

  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }

  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    return res.end();
  }
  next();
};
