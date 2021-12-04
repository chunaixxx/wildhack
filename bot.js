require('dotenv').config()
// require('./commonDB.js')

const { Telegraf, session, Scenes } = require('telegraf')

// markups
const menuMarkup = require('./markup/menuMarkup.js')

// scenes
const qaScene = require('./scene/qaScene.js')

const stage = new Scenes.Stage([qaScene])
const { enter } = Scenes.Stage

// initial bot
const bot = new Telegraf(process.env.TOKEN)

// middleware
bot.use(session())
bot.use(stage.middleware())

bot.on('message', ctx => 
	ctx.reply('Выберите действие.', menuMarkup)
)

bot.action('qa', enter('qa'))

bot.launch()
	.then(() => console.log('Бот запущен'))

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))