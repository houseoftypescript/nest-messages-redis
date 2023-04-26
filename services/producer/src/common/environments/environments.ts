const NODE_ENV: string = process.env.NODE_ENV || 'development';
const PORT: string = process.env.PORT || '3000';

const REDIS_HORT: string = process.env.REDIS_HORT || 'localhost';
const REDIS_PORT: string = process.env.REDIS_HORT || '6379';
const REDIS_RETRY_ATTEMPTS: string = process.env.REDIS_RETRY_ATTEMPTS || '6';
const REDIS_RETRY_DELAY: string = process.env.REDIS_RETRY_DELAY || '6000';

export default {
  environment: NODE_ENV,
  port: PORT,
  redis: {
    host: REDIS_HORT,
    port: parseInt(REDIS_PORT, 10),
    retryAttempts: parseInt(REDIS_RETRY_ATTEMPTS, 10),
    retryDelay: parseInt(REDIS_RETRY_DELAY, 10),
  },
};
