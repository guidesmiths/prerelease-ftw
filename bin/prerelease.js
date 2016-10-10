#!/usr/bin/env node

var path = require('path')
var pkg = require(path.join(process.cwd(), 'package.json'))
var prerelease = require('..')

console.log(prerelease(pkg.version, process.argv[2], process.argv[3]))