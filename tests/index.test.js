const { expect } = require('@jest/globals')
const env = require('../')

describe('nope-env', () => {
  it('validates env vars', () => {
    expect(
      () => env.config({
        schema: {
          PROJECT_ENV: env.string().required()
        }
      })
    ).not.toThrow()
  })

  it('throws for failed validation', () => {
    expect(
      () => env.config({
        schema: {
          FOO_ENV: env.string().required()
        }
      })
    ).toThrow()
  })
})
