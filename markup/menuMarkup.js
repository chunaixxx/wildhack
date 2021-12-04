const { Markup } = require('telegraf')

const menuMarkup = Markup.inlineKeyboard([
    Markup.button.callback('Задать вопрос', 'qa')
])

module.exports = menuMarkup