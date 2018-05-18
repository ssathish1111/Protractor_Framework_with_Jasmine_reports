exports.config = {

	framework: 'jasmine2',
	seleniumAddress : 'http://localhost:4444/wd/hub',
	specs :['TestCases/Spec.js'],
 
	capabilities: {
		browserName: 'chrome'
	},

	jasmineNodeOpts: {
		onComplete: null,
		isVerbose: false,
		showColors: true,
		includeStackTrace: false,
		defaultTimeoutInterval: 190000
		
	},

	onPrepare: function () {
		browser.ignoreSynchronization = false;
		browser.waitForAngularEnabled(false);
		var AllureReporter = require('jasmine-allure-reporter');
	
		jasmine.getEnv().addReporter(new AllureReporter({
			resultsDir: 'allure-results'

		
		}));
		jasmine.getEnv().afterEach(function (done) {
			browser.takeScreenshot().then(function (png) {
				allure.createAttachment('Screenshot', function () {
					return new Buffer(png, 'base64')
				}, 'image/png')();
				done();
			})
		});
	},


}

