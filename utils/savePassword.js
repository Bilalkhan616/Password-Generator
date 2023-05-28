const fs = require('fs')
const path = require('path')
const os = require('os')
const chalk = require('chalk')

// Note: Function to save password in a txt file...!
const savePassword = (password) => {
    fs.open(path.join(__dirname, '../', 'password.txt'), 'a', 666,
        (e, id) => {
            fs.write(id, password + os.EOL, null, 'utf-8', () => {
                fs.close(id, () => {
                    console.log(chalk.yellow('Password saved to password.txt'))
                })
            })
        })
}

module.exports = savePassword