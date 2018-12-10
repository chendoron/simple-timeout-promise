/**
 * A custom error for when a TimeoutPromise rejects
 * @param {number} delay - The delay which caused this error to be thrown
 */
class TimeoutError extends Error {
  constructor(delay) {
    super(`timeout after ${delay}ms`)
    this.delay = delay
    this.name = 'TimeoutError'
  }
}

/**
 * Wraps a Promise to rejects automatically after a certain
 * amount of time, unless it already has been resolved or rejected.
 * @param {number} delay - The delay in ms in which to reject the promise.
 * @param {Promise} promise - The promise to wrap in a timeout rejection.
 * @returns {Promise}
 */
class TimeoutPromise {
  constructor(delay, promise) {
    this.promise = new Promise((resolve, reject) => {
      const timeout = setTimeout(() => reject(new TimeoutError(delay)), delay)
      promise
        .then((response) => {
          clearTimeout(timeout)
          return resolve(response)
        })
        .catch((rejection) => {
          clearTimeout(timeout)
          return reject(rejection)
        })
    })
    return this.promise
  }
}

module.exports = {
  TimeoutError,
  TimeoutPromise
}
