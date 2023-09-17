const { test, expect } = require('./lib/tiny')

test("it should be TRUE", () => {
  expect(true).toBe(true)
})

test("it should be FALSE", () => {
  expect(true).toBe(false)
})
