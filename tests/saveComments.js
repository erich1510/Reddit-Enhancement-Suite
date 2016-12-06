module.exports = {
	'save two comments': browser => {
		const first = '.thing.id-t1_datqb30';
		const second = '.thing.id-t1_datqbao';

		browser
			.url('https://www.reddit.com/r/RESIntegrationTests/comments/5go51r/ressaving_comments/')
			.waitForElementVisible('.commentarea', 1000)

			// save first comment
			.click(`${first} .saveComments`)
			.assert.elementPresent(`${first} .unsaveComments`)

			.refresh()
			.waitForElementVisible('.commentarea', 1000)
			.assert.elementPresent(`${first} .RES-saved`)

			// save second comment
			.click(`${second} .saveComments`)
			.assert.elementPresent(`${second} .unsaveComments`)

			.refresh()
			.waitForElementVisible('.commentarea', 1000)
			.assert.elementPresent(`${second} .RES-saved`)

			.end();
	},
};