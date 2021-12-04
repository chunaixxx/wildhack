const { Scenes } = require('telegraf')

const getAnswer = require('../utils/getAnswer');

const qaScene = new Scenes.WizardScene(
	'qa',

	ctx => {
		ctx.reply('Задай свой вопрос, я тебя внимательно слушаю')
        ctx.wizard.state.question = null;
        return ctx.wizard.next();
	},

    async ctx => {
        let answer = await getAnswer(ctx.update.message.text)

        console.log(answer)

        ctx.reply(answer)

        // return ctx.scene.leave();
    }
)

module.exports = qaScene
