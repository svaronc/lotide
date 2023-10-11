# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @svaronc/lotide`

**Require it:**

`const _ = require('@svaronc/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: Returns the first element of an array.
* `tail(...)`: Returns all elements of an array except the first one.
* `middle(...)`:Returns the middle elements of an array.
* `countLetters(...)`: Count the occurrences of a specific letter in a string.
* `countOnly(...)`: Counts occurrences of specific elements in an array. 
* `flatten(...)`: Flattens a nested array, converting it into a one-dimensional array
* `findKey(...)`: Find a key in an object based on a provided value.
* `findKeyByValue(...)`: Searches for a key in an object based on a given value
* `map(...)`: Apply a given function to each element of an array and return a new array with the results
* `letterPositions(...)`: Return the positions of each letter in a string.
* `without(...)`: Returns an array with elements removed based on a specified condition.
* `eqArrays(...)`: Compare two arrays and check if they are equal.
* `eqObjects(...)`: Compare two objects for equality.
* `takeUntil(...)`: Extracts elements from an array until a certain condition is met.




