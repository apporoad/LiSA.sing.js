#!/usr/bin/env node
const program = require('commander')
const path = require('path')
const LiSA = require('./')



program.version(require('./package.json').version)
    .usage(' songPath')
    .parse(process.argv)

if(program.args.length>0){
    var song = path.resolve(process.cwd() ,program.args[0])
    LiSA.sing(song)
}else{
    LiSA.sing(['hello','我斯LiSA'])
}