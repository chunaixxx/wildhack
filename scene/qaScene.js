const { Scenes } = require('telegraf')

const getAnswer = require('../utils/getAnswer')

const baseMessage = require('../baseMessage')
const keyboard = require('../utils/keyboard')

const qaScene = new Scenes.WizardScene(
	'qa',

	ctx => {
		ctx.reply(
			'❗ Задай свой вопрос, а я постараюсь на него ответить',
			keyboard('Назад')
		)
		return ctx.wizard.next()
	},

	async ctx => {
		let msg = ctx.update.message.text

		if (msg == 'Назад' || msg == 'Нет, спасибо') {
			ctx.scene.leave()
            await ctx.reply('❗ Хорошо, всегда рад помочь')
			return baseMessage(ctx)
		}

		let answer = ''

		try {
			answer = await getAnswer(msg)

			ctx.reply(
				answer + '\n\n❗ Если хочешь еще что-то узнать, то не стесняйся — я тебя слушаю',
				{ parse_mode: "HTML" },
				keyboard('Нет, спасибо')
			)
		} catch (e) {
			answer = 

			ctx.reply(
				answer + '❗ Я тебя не понял, попробуй переформулироровать вопрос',
				{ parse_mode: "HTML" },
				keyboard('Назад')
			)
		}


	}
)

module.exports = qaScene
