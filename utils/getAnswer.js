const natural = require('natural')
const RU = natural.PorterStemmerRu

const answers = require('../data/answers.json')

const getAnswer = message => {
	return new Promise((res, rej) => {
		natural.BayesClassifier.load(
			'./data/classifier.json',
			RU,
			(err, classifier) => {
				const values = classifier.getClassifications(message)
				const answer = values.sort((a, b) => a - b)[0].label
				if (err) rej()
				res(answers[answer])
			}
		)
	})
}

module.exports = getAnswer;