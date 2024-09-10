export const config = {
    // runner: 'local',
    // port: 4723,
    user: 'oauth-analuisaaugustob-7ca2a',
    key: '68fc44c9-7450-4d3b-a445-ac6cc9f561e1',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',
    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:app': 'storage:filename=ebacshop.aab',
        'appium:deviceName': 'Android GoogleAPI Emulator',
        'appium:platformVersion': '10',
        "appium:disableIdLocatorAutocompletion": true,
        'appium:automationName': 'UiAutomator2',
        'sauce:options': {
            build: 'appium-build-teste-ebacshop',
            name: 'Ebac Shop Teste',
            deviceOrientation: 'PORTRAIT',
            appiumVersion: '2.11.0',
        }
    //     platformName: 'Android',
    //     'appium:deviceName': 'ebac',
    //     'appium:platformVersion': '9.0',
    //     'appium:automationName': 'UiAutomator2',
    //     'appium:app': `${process.cwd()}/app/ebacshop.apks`,
    //     'appium:appWaitActivity': '.MainActivity',
    //     'appium:DisableIdLocatorAutocompletion': true
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        await driver.takeScreenshot();
    }   
}