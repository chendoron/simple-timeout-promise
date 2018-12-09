const empty = require('.')

describe('index.js', () => {
  it('exports a function', () => {
    expect(empty).toBeInstanceOf(Function)
  })

  it('returns nothing', () => {
    expect(empty()).toBeUndefined()
  })
})
