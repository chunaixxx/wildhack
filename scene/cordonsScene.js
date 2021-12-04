const { Scenes } = require('telegraf')

const baseMessage = require('../baseMessage')
const keyboard = require('../utils/keyboard')

const cordonsData = require('../data/cordons.json')

const cordonsName = []
for (cordon in cordonsData)
	cordonsName.push(cordon)

const cordonsScene = new Scenes.WizardScene(
	'cordons',

	ctx => {
		ctx.reply(
			'❗ Выберите кордон, чтобы поближе с ним ознакомиться',
			keyboard('👈🏻 Назад', ...cordonsName)
		)
		
		ctx.wizard.next()
	},

	async ctx => {
		const msg = ctx.update.message.text

		if (msg == '👈🏻 Назад') {
			await ctx.reply('❗ Хорошо, всегда рад помочь')
			await baseMessage(ctx)
			return ctx.scene.leave()
		}


		if (cordonsName.includes(msg)) {
			const title = msg
			const { infra, work } = cordonsData[msg]

			let sendString = `<i>${ title }</i>\n\n<b>Инфраструктура кордона</b>\n${ infra }\n\n<b>Добровольческие работы</b>\n${ work }`

			ctx.reply(sendString, { parse_mode: "HTML" })
		} else {
			return ctx.reply(
				'❗ Выберите кордон из предложенного списка',
				keyboard('👈🏻 Назад', ...cordonsName)
			)
		}
	}
)

module.exports = cordonsScene
