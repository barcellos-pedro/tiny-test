class Tiny {
  static TEST_FAILED_MESSAGE = "Test failed 🚫\n"
  static TEST_PASSED_MESSAGE = "Test OK ✅\n"

  static trace() {
    console.trace()
    return "" // return empty string, so we do not get an 'undefined' on log
  }

  static test(testName, testCase) {
    console.log(`${testName}...`)
    testCase()
  }

  static expect(expected) {
    return {
      toBe(actual) {
        const assertion = expected === actual

        // Passed
        assertion && console.log(Tiny.TEST_PASSED_MESSAGE)

        // Failed
        const props = [
          assertion,
          Tiny.TEST_FAILED_MESSAGE,
          { expected, actual },
        ]

        // TODO: log trace after (below) the failed message
        // !assertion && this.trace

        console.assert(...props)
      },
    }
  }
}

module.exports = Tiny
exports.test = Tiny.test
exports.expect = Tiny.expect
