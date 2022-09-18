#!/usr/bin/env node
const statsView = require('../')

process.stdin.pipe(statsView({ refreshRate: 100 }))
