const core = require('@actions/core')

try {
	const file = core.getInput('file')
	const secrets = JSON.parse(core.getInput('secrets'))
	const fs = require('fs')
	fs.readFile(file, {encoding: 'utf8'}, function (readError, data) {
		if (readError) {
			console.log('Error reading file: ' + readError)
			return
		}
		let result = data
		for (let key in secrets) {
			result = result.replace('SECRET_' + key, secrets[key])
		}
		result = result.replace('TEST_ACTION=', 'TEST_ACTION_CHANGED2=')
		fs.writeFile(file, result, function (writeError) {
			if (writeError) {
				console.log('Error writing file: ' + writeError)
			}
		})
	})
} catch (error) {
	core.setFailed(error.message)
}
