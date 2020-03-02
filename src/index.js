#!/usr/bin/env node

import program from 'commander'
// https://github.com/nodejs/node/pull/31415
import {batch} from './batch.js'
// https://nodejs.org/api/esm.html#esm_experimental_json_modules
import fields from '../package.json'

const {description, name, version} = fields
console.log(name)
program
  .description(description)
  .version(version, '-v, - version')
  .option('-f, --files', 'glob pattern to include files to scan. default to all *spec.js|*test.js files')
  .option('-c, --cache', 'bypass endpoint scan and use the generated json. default to no cache')
  .option('enter', 'enter to reset all endpoint response')
  .parse(process.argv)
;(async () => {
  batch(program)
})()
