const { Markup } = require('telegraf')

const keyboard = (...args) => {
    return Markup.keyboard([...args]).oneTime().resize()
}

module.exports = keyboard