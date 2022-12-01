const core = require('@actions/core')

try {
	const file = core.getInput('file')
	const secrets = JSON.parse(core.getInput('secrets'))
	const fs = require('fs')
	fs.readFile(file, {encoding: 'utf8'}, function (readError, data) {
		if (readError) {
			throw new Error('Error reading file: ' + readError)
		}
		let result = data
		for (let key in secrets) {
			if (secrets[key] === 'SECRET_' + key) continue
			while (result.indexOf('SECRET_' + key) >= 0)
				result = result.replace('SECRET_' + key, secrets[key])
		}
		fs.writeFile(file, result, function (writeError) {
			if (writeError) {
				console.log('Error writing file: ' + writeError)
			}
		})
	})
} catch (error) {
	core.setFailed(error.message)
}
