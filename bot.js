import dotenv from 'dotenv'
dotenv.config()

import './commonDB.js'

import TelegramBot from 'node-telegram-bot-api'

const token = process.env.TOKEN

const bot = new TelegramBot(token, { polling: true })

bot.on('message', msg => {
	const chatId = msg.chat.id
	bot.sendMessage(chatId, 'Received your message')
})
