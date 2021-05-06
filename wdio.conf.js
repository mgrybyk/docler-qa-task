const browser = 'CHROME'

require('ts-node').register({ transpileOnly: true })
module.exports = require(`./config/wdio.${browser}.conf.ts`)
