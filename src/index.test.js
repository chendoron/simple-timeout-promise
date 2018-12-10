jest.useFakeTimers()

const { TimeoutError, TimeoutPromise } = require('.')

describe('utils/timeout-promise', () => {
  describe('TimeoutError', () => {
    const delay = 1000

    it('is an error', () => {
      const error = new TimeoutError(delay)

      expect(error).toBeInstanceOf(Error)
    })

    it('has the correct properties', () => {
      const error = new TimeoutError(delay)

      expect(error.delay).toBe(delay)
      expect(error.message).toBe(`timeout after ${delay}ms`)
    })
  })

  describe('TimeoutPromise', () => {
    const expectedValue = 'test value'
    const asyncFunctionDelay = 5000
    describe('wrap a resolving Promise with a TimeoutPromise', () => {
      const resolvingPromiseFunction = jest.fn(
        () =>
          new Promise((resolve) =>
            setTimeout(() => resolve(expectedValue), asyncFunctionDelay)
          )
      )

      it('rejects with a timeout error', async () => {
        expect.assertions(1)
        const timeoutPromiseDelay = 1000

        const timeoutPromise = new TimeoutPromise(
          timeoutPromiseDelay,
          resolvingPromiseFunction()
        )

        jest.advanceTimersByTime(asyncFunctionDelay)

        try {
          await timeoutPromise
        } catch (error) {
          const expectedError = new TimeoutError(timeoutPromiseDelay)
          expect(error).toEqual(expectedError)
        }
      })

      it('resolves with a correct value', async () => {
        expect.assertions(1)
        const timeoutPromiseDelay = 10000

        const timeoutPromise = new TimeoutPromise(
          timeoutPromiseDelay,
          resolvingPromiseFunction()
        )

        jest.advanceTimersByTime(asyncFunctionDelay)

        expect(await timeoutPromise).toEqual(expectedValue)
      })
    })

    describe('wrap a rejecting Promise with a TimeoutPromise', () => {
      const rejectingPromiseFunction = jest.fn(
        () =>
          new Promise((resolve, reject) =>
            setTimeout(() => reject(expectedValue), asyncFunctionDelay)
          )
      )

      it('rejects with a timeout error', async () => {
        expect.assertions(1)
        const timeoutPromiseDelay = 1000

        const timeoutPromise = new TimeoutPromise(
          timeoutPromiseDelay,
          rejectingPromiseFunction()
        )

        jest.advanceTimersByTime(asyncFunctionDelay)

        try {
          await timeoutPromise
        } catch (error) {
          const expectedError = new TimeoutError(timeoutPromiseDelay)
          expect(error).toEqual(expectedError)
        }
      })

      it('resolves with a correct value', async () => {
        expect.assertions(1)
        const timeoutPromiseDelay = 10000

        const timeoutPromise = new TimeoutPromise(
          timeoutPromiseDelay,
          rejectingPromiseFunction()
        )

        jest.advanceTimersByTime(asyncFunctionDelay)

        try {
          await timeoutPromise
        } catch (error) {
          expect(error).toEqual(expectedValue)
        }
      })
    })
  })
})
