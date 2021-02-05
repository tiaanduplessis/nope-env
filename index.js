const dotenv = require('dotenv')
const dotenvExpand = require('dotenv-expand')
const Nope = require('nope-validator')

module.exports = {
  config ({ schema = {}, ...envConfig } = {}) {
    const env = dotenv.config(envConfig)

    if (typeof schema !== 'object' || Object.keys(schema).length === 0) {
      throw new Error('No valid nope-validation schema provided')
    }

    const envSchema = Nope.object().shape(schema)

    if (env.parsed) {
      dotenvExpand(env)
    }

    const result = envSchema.validate(env.parsed || process.env)

    if (result) {
      const message = Object.entries(result).reduce((str, [key, error]) => `${str}\n${key}: ${error}`, 'Validation on environment variables failed')
      throw new TypeError(message)
    }
  },
  ...Nope
}
