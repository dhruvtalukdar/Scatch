const dotenv = require('dotenv');

dotenv.config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

const { PORT, NODE_ENV } = process.env;
module.exports = {PORT, NODE_ENV};