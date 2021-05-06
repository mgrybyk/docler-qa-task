/* eslint-disable @typescript-eslint/no-var-requires */
const allureResultsDir = 'report/allure-results'

export const config: WebdriverIO.Config = {
    specs: ['./features/**/*.feature'],
    baseUrl: 'http://uitest.duodecadits.com',
    waitforTimeout: 10000,
    maxInstances: 5,
    automationProtocol: 'devtools',
    reporters: [
        'spec',
        [
            'allure',
            {
                outputDir: allureResultsDir,
                disableMochaHooks: true,
                disableWebdriverStepsReporting: true,
                useCucumberStepReporter: false,
            },
        ],
    ],
    framework: 'cucumber',
    cucumberOpts: {
        timeout: 180000,
        failFast: false,
        require: ['./test/step-definitions/**/*.ts'],
    },
    specFileRetries: 0,
    logLevel: 'warn',
    // hooks
    afterStep(test, context, { passed }) {
        if (!passed) {
            browser.takeScreenshot()
        }
    },
    afterHook(test, context, { passed }) {
        if (!passed) {
            browser.takeScreenshot()
        }
    },
    async onPrepare() {
        require('rimraf').sync(allureResultsDir)
    },
}
