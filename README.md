
# nope-env
[![package version](https://img.shields.io/npm/v/nope-env.svg?style=flat-square)](https://npmjs.org/package/nope-env)
[![package downloads](https://img.shields.io/npm/dm/nope-env.svg?style=flat-square)](https://npmjs.org/package/nope-env)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/nope-env.svg?style=flat-square)](https://npmjs.org/package/nope-env)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Environment variable validation using [dotenv](https://github.com/motdotla/dotenv) & [nope-validator](https://github.com/bvego/nope-validator)

## Table of Contents

- [About](#about)
- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## About

This package is a small wrapper around [dotenv](https://github.com/motdotla/dotenv) & [nope-validator](https://github.com/bvego/nope-validator) which allows you to validate your environment variables based on a schema. It also includes [dotenv-expand](https://github.com/motdotla/dotenv-expand) for variable expansion.

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install nope-env
$ # OR
$ yarn add nope-env
```

## Usage

Given we want the following environment variables to exist:

```bash
PROJECT_ENV=dev
# NOTE: We are using the ${} syntax from dotenv-expand here
NEXT_PUBLIC_API_URL=https://${PROJECT_ENV}.api.example.com
NEXT_PUBLIC_SENTRY_DSN=https://sentrydsn.com
ADMIN_EMAIL=admin@example.com
```

The following schema can be provided to `config`

```js
const env = require('nope-env')

env.config({
    // dotenv configuration can go here...
    schema: {
        // env.string() === Nope.string()
        PROJECT_ENV: env.string().oneOf(['dev', 'staging', 'uat']),
        NEXT_PUBLIC_API_URL: env.string().required().url(),
        NEXT_PUBLIC_SENTRY_DSN: env.string().url(),
        ADMIN_EMAIL: env.string().email().required()
    }
})
```

This package exposes all of the `nope-validator` API. Please see [their docs](https://github.com/bvego/nope-validator#api) for validation options.

## Contribute

1. Fork it and create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am "Add some feature"`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request

## License

MIT 
    