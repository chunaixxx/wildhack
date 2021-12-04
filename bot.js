require('dotenv').config()
// require('./commonDB.js')

const baseMessage = require('./baseMessage')

const { Telegraf, session, Scenes } = require('telegraf')

// scenes
const qaScene = require('./scene/qaScene.js')

const stage = new Scenes.Stage([qaScene])
const { enter } = Scenes.Stage

// initial bot
const bot = new Telegraf(process.env.TOKEN)

// middleware
bot.use(session())
bot.use(stage.middleware())

bot.hears(/Задать вопрос/i, enter('qa'))

bot.on('message', ctx => baseMessage(ctx))

bot.launch()
	.then(() => console.log('Бот запущен'))

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))