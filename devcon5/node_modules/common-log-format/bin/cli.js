#!/usr/bin/env node

const clf = require('../')

process.stdin.pipe(clf()).pipe(process.stdout)
