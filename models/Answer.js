import mongoose from 'mongoose'
const Schema = mongoose.Schema

const answerScheme = new Schema({
	keywords: {
		type: Array,
		required: true
	},
	
	answer: {
		type: String,
		required: true
	},
})

const Answer = mongoose.model('Answer', answerScheme)

export default Answer
