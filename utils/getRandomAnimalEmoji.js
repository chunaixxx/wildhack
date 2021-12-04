const gRAE = () => {
	const animals = ['🐻', '🦌', '🐏', '🐰', '🦦', '🦊', '🐺']
	const index = Math.floor(Math.random() * animals.length)
    
	return animals[index]
}

module.exports = gRAE