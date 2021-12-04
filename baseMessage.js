const keyboard = require('./utils/keyboard')

const baseMessage = async ctx => {
    await ctx.reply('Выбери действие которое хочешь сделать', keyboard('Задать вопрос', 'Мемчики'))
}

module.exports = baseMessage