const env = require('nope-env')

env.config({
  // dotenv configuration can go here...
  schema: {
    PROJECT_ENV: env.string().oneOf(['dev', 'staging', 'uat']),
    NEXT_PUBLIC_API_URL: env.string().required().url(),
    NEXT_PUBLIC_SENTRY_DSN: env.string().url(),
    ADMIN_EMAIL: env.string().email().required()
  }
})
