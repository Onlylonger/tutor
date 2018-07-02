#! /usr/bin/env node

const argv = require('yargs')
  .command('get', '这里描述get', {
    url: {
      alias: 'u',
      default: 'http://yargs.js.org/'
    }
  })
  .command('post', 'post描述', yargs => {
    console.log('Good Morning')
    var argv = yargs
      // .reset()
      .option('m', {
        alias: 'message',
        description: 'provide any sentence'
      })
      .help('h')
      .alias('h', 'help').argv

    console.log(argv)
  })
  .help().argv
// const argv = require('yargs')
//   .command('init', 'bangzhu', argv => {
//     console.log('shen me gui', argv)
//   })
//   .option('n', {
//     alias: 'name',
//     demand: true,
//     describe: 'My name',
//     type: 'string'
//   }).argv

// console.log(argv)
