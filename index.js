#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk')
const clipboard = require('clipboardy')
const createPassword = require('./utils/createPassword')
const savePassword = require('./utils/savePassword')

program.version('1.0.0').description('Password Generator')

program
    .option('-l,--length <length>', 'length of password', '8')
    .option('-s,--save', 'save passwords to password.txt',)
    .option('-nn,--no-numbers', 'remove numbers')
    .option('-ns,--no-symbols', 'remove symbols')
    .parse()

const { length, save, numbers, symbols } = program.opts()

// Note: Gets generated passwords...!
const passwordGenerated = createPassword(length, numbers, symbols)

// Note: calling function to save file
if (save) {
    savePassword(passwordGenerated)
}

// Note: copying to clipboard...!
clipboard.writeSync(passwordGenerated)

// Note: will output generated password...!
console.log(chalk.blue('Generated Password: ') + chalk.bold(passwordGenerated))
console.log(chalk.green('Password copied to clipboard'))