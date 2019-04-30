exports.config = {
  tests: './test/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome'
    }
  },
  include: {
    I: './steps_file.js'
  },
  //
  // "helpers": {
  //   "WebDriverIO": {
  //     "url": "https://cmc-citizen-frontend-aat.service.core-compute-aat.internal/dashboard",
  //     "browser": "chrome",
  //     "desiredCapabilities": {
  //       "proxy": {
  //         "proxyType": "manual",
  //         "httpProxy": "http://proxyout.reform.hmcts.net:8080",
  //         "sslProxy": "http://proxyout.reform.hmcts.net:8080"
  //         // "socksUsername": "my username",
  //         // "socksPassword": "my password"
  //       }
  //     }
  //   }
  // },
  bootstrap: null,
  mocha: {},
  name: 'CodeceptJS'
}


