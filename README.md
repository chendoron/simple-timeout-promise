# Simple TimeoutPromise

This javascript module exports `TimeoutPromise` and `TimeoutError` to allow an ease-of-use usage of promises that reject after a given timeout, unless their purpose was either resolved or rejected before the given timeout.

## Motivation
I was implementing this for work, and couldn't find any good examples online, so I figured I'd publish a module.

## Installation

Simply install this module in your project with `npm`
~~~
$ npm install simple-timeout-promise --save
~~~

## Usage
Given a function that returns a promise - `promiseFunc`, and a `delay` in miliseconds, create a wrapped promise:
~~~ js
const { TimeoutPromise, TimeoutError } = require('simple-timeout-promise')

const timeoutPromise = new TimeoutPromise(delay, promiseFunc)
timeoutPromise.then(result => {
  // Enter your resolve logic here
}).catch(error => {
  if (error instanceof TimeoutError) {
    // Enter your timeout rejection logic here
  }
  // Otherwise, enter your other rejections logic here
})
~~~

## Contribution
Please see `CONTRIBUTING.md`
