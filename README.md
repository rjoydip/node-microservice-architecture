# fastimo

[![Build Status](https://travis-ci.org/rjoydip/fastimo.svg?branch=master)](https://travis-ci.org/rjoydip/fastimo)
[![Build status](https://ci.appveyor.com/api/projects/status/qe5x7i3ift8q7rkv/branch/master?svg=true)](https://ci.appveyor.com/project/rjoydip/fastimo/branch/master)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![License](https://img.shields.io/npm/l/make-coverage-badge.svg)](https://github.com/rjoydip/fastimo/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)

> Scalable monorepo based node project structure with fastify.

## Install

```
$ git clone https://github.com/rjoydip/fastimo.git
$ cd fastimo
$ npm install
```

## Setup

Run following command for setup.

```
$ npm run setup
$ npm run app
```

## Features

- Scalable and Monorepo based project structure.
- Fully working on [fastify](https://www.fastify.io/) ecosystem.
- Extend functionalities with [fastify](https://www.fastify.io/docs/latest/Plugins/) plugins.
- Add functionality to the Fastify instance with [decorate](https://www.fastify.io/docs/latest/Decorators/) API.
- [Jest](https://jestjs.io/) for testing.
- [prettier](https://prettier.io/) and [eslint](https://eslint.org/) for linting utility
- [lerna](https://lernajs.io/) for splitting up large codebases.
- [EJS]() default templating.

## Scripts

- [lerna](#scripts) ***>>*** `npm run lerna` - Execute lerna locally
- [lerna help](#scripts) ***>>*** `npm run help` - Show lerna help
- [test](#scripts) ***>>*** `npm test` or `npm run test` - Test your code
- [lint](#scripts) ***>>*** `npm run lint` - Cheeck linting and prettier your code
- [clean](#scripts) ***>>*** `npm run clean` - Cleanup project
- [global](#scripts) ***>>*** `npm run global`- Install project CLI globally
- [app](#scripts) ***>>*** `npm run app` - Run your project

## Generate `package` and `module`

- `package`: `npm run gen:pkg <PACKAGE_NAME>`
- `module`: `npm run gen:mod <MODULE_NAME>`

## Configuration

There are three types of configuration format supported.

- `fastimo.config.js`
- `fastimo.config.json`
- `fastimo.config.yml`

## CLI

```
$ npm run global
```

```
$ fastimo
Welcome to fastimo
```

## Directory Structure

```
fastimo
├── appveyor.yml
├── core
|  ├── cli
|  |  ├── index.js
|  |  ├── package-lock.json
|  |  ├── package.json
|  |  └── __tests__
|  |     └── index.spec.js
|  ├── config
|  |  ├── index.js
|  |  ├── package.json
|  |  ├── package-lock.json
|  |  └── __tests__
|  |     └── index.spec.js
|  ├── fastimo
|  |  ├── index.js
|  |  ├── package-lock.json
|  |  ├── package.json
|  |  └── __tests__
|  |     └── index.spec.js
|  ├── register
|  |  ├── index.js
|  |  ├── package-lock.json
|  |  ├── package.json
|  |  └── __tests__
|  |     └── index.spec.js
|  ├── render
|  |  ├── index.js
|  |  ├── package-lock.json
|  |  ├── package.json
|  |  └── __tests__
|  |     └── index.spec.js
|  └── utils
|     ├── index.js
|     ├── package-lock.json
|     ├── package.json
|     └── __tests__
|        └── index.spec.js
├── modules
|  ├── hello
|  |  ├── config.js
|  |  ├── index.js
|  |  ├── package-lock.json
|  |  ├── package.json
|  |  ├── views
|  |  |  └── index.ejs
|  |  └── __tests__
|  |     └── index.spec.js
|  └── index
|    ├── config.js
|    ├── index.js
|    ├── package.json
|    ├── views
|    |  └── index.ejs
|    └── __tests__
|        └── index.spec.js
├── jest.config.js
├── lerna.json
├── LICENSE
├── package-lock.json
├── package.json
├── readme.md
└── scripts
   ├── generate.js
   └── index.js
```

## Benchmark

***options:***

```
-c/--connections NUM
  The number of concurrent connections to use. default: 10.
-p/--pipelining NUM
  The number of pipelined requests to use. default: 1.
-d/--duration SEC
  The number of seconds to run the autocannnon. default: 10.
```

### Root benchmark

```
$ autocannon -c 100 -d 5 -p 10 localhost:3000
Running 5s test @ http://localhost:3000
100 connections with 10 pipelining factor

Stat         Avg     Stdev   Max
Latency (ms) 3.67    11.4    122.88
Req/Sec      26606.4 2711.19 29236
Bytes/Sec    4.25 MB 417 kB  4.65 MB

135k requests in 5s, 21.2 MB read
```

> Note: Fastimo root serves 135k(max)/110-131k(avg) request in 5sec. (Response type is simple string)

### View benchmark

```
$ autocannon -c 100 -d 5 -p 10 localhost:3000/hello?name=fastimo
Running 5s test @ http://localhost:3000/hello?name=fastimo
100 connections with 10 pipelining factor

Stat         Avg    Stdev   Max
Latency (ms) 18.2   54.81   242.32
Req/Sec      5371.6 415.82  5980
Bytes/Sec    757 kB 53.2 kB 843 kB

28k requests in 5s, 3.79 MB read
```

> Note: Fastimo view serves 28k(max)/23-27k(avg) request in 5sec. (Response type is ejs view)

## TODO

- Test
- CLI

## License

MIT © [Joydip Roy](https://github.com/rjoydip)
