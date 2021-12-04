const { Scenes } = require('telegraf')

const getAnswer = require('../utils/getAnswer')

const baseMessage = require('../baseMessage')
const keyboard = require('../utils/keyboard')

const qaScene = new Scenes.WizardScene(
	'qa',

	ctx => {
		ctx.reply(
			'❗ Задай свой вопрос, я тебя внимательно слушаю',
			keyboard('Назад')
		)
		return ctx.wizard.next()
	},

	async ctx => {
		const msg = ctx.update.message.text

		if (msg == 'Назад' || msg == 'Нет, спасибо') {
			ctx.scene.leave()
            await ctx.reply('❗ Хорошо, всегда рад помочь')
			return baseMessage(ctx)
		}

		let answer = ''

		try {
			answer = await getAnswer(msg)
		} catch (error) {
			answer = '❗ Я тебя не понял, попробуй переформулироровать вопрос'
		}

		ctx.reply(
			answer + '\n\n❗ Если хочешь еще что-то узнать, то не стесняйся — я тебя слушаю',
			{ parse_mode: "HTML" },
			keyboard('Нет, спасибо')
		)
	}
)

module.exports = qaScene
