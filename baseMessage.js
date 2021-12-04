const keyboard = require('./utils/keyboard')
const gRAE = require('./utils/getRandomAnimalEmoji')

const baseMessage = async ctx => {
    await ctx.reply(`${ gRAE() } Выбери действие которое хочешь сделать`, keyboard('Задать вопрос', 'Кордоны' ))
}

module.exports = baseMessage