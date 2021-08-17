const core = require('@actions/core')

try {
	const file = core.getInput('file')
	const secrets = core.getInput('secrets')
	const fs = require('fs')
	fs.readFile(file, {encoding: 'utf8'}, function (readError, data) {
		if (readError) {
			console.log('Error reading file: ' + readError)
			return
		}
		for (let key in secrets) {
			data = data.replace('SECRET_' + key, secrets[key])
		}
		fs.writeFile(file, data, function (writeError) {
			if (writeError) {
				console.log('Error writing file: ' + writeError)
			}
		})
	})
} catch (error) {
	core.setFailed(error.message)
}
