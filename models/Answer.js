const mongoose = require('mongoose')
const Schema = mongoose.Schema

const answerScheme = new Schema({
	keywords: {
		type: Array,
		default: true
	},
	
	answer: {
		type: String,
		default: true
	},
})

const Answer = mongoose.model('Answer', answerScheme)

module.exports = Answer
