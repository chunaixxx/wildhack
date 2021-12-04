const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(
	process.env.MONGO_URL,
	{
		useUnifiedTopology: true,
		useNewUrlParser: true,
	},
	e => {
		if (e)
			console.log(e)
		else
			console.log('БД запущена')
	}
)