const natural = require('natural')
const RU = natural.PorterStemmerRu

const answers = require('../data/answers.json')

const getAnswer = message => {
	return new Promise((res, rej) => {
		natural.BayesClassifier.load(
			'./data/classifier.json',
			RU,
			(err, classifier) => {
				const values = classifier.getClassifications(message).sort((a, b) => b.value - a.value)
				let sum = 0;
				for (let val of values) {
					sum += val.value
				}
				if (sum > 1) rej()
				else res(answers[values[0].label])
			}
		)
	})
}

module.exports = getAnswer;