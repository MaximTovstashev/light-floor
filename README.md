# Light Floor

> Open Source Skating System

NB! At this point work is pretty much in progress, don't expect it working or be of any use.

![Travis CI Build Status](https://travis-ci.org/MaximTovstashev/light-floor.svg?branch=master)

#### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build

# run unit & end-to-end tests
npm test


# lint all JS/Vue component files in `src/`
npm run lint

```

SQLite requires MSBuild and Python27. Use

``` bash
npm install –global –production windows-build-tools
node_modules\.bin\electron-rebuild
```

when building for Windows
