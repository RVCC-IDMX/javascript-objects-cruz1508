/**
 * @file movie-validation.js
 * @fileoverview Demonstrates movie object validation and property access techniques.
 * Provides functions to validate a movie object and retrieve its properties using both dot and bracket notations.
 * @module movie-validation
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 */

// Toggle examples on or off.
const SHOW_EXAMPLES = false;

function isObject(value) {
  // Check if the value is an object and not null.
  return value !== null && typeof value === 'object';
}

/**
 * Checks whether an object has a property of the expected type.
 * @param {object} obj - The object to check.
 * @param {string} prop - The property name.
 * @param {string} expectedType - The expected type (e.g., "string", "number").
 * @returns {boolean} - True if the property exists and is of the expected type.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 */
export function hasPropertyOfType(obj, prop, expectedType) {
  return obj.hasOwnProperty(prop) && typeof obj[prop] === expectedType;
}

/**
 * Retrieves the movie title.
 * @param {object} movie - The movie object.
 * @returns {string} - The movie title, or an empty string if invalid.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
 */
export function getMovieTitle(movie) {
  // Use dot notation to retrieve the movie title.
  if (isObject(movie) && movie.title) {
    return movie.title;
  } else {
    console.log("getMovieTitle: Invalid movie object or title missing.");
    return '';
  }
}

/**
 * Retrieves the movie year.
 * @param {object} movie - The movie object.
 * @returns {number} - The movie year, or 0 if invalid.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
 */
export function getMovieYear(movie) {
  // Use bracket notation as an alternative approach to property access.
  if (isObject(movie) && movie['year']) {
    return movie['year'];
  } else {
    console.log("getMovieYear: Invalid movie object or year missing.");
    return 0;
  }
}
/**
 * Determines whether the movie is considered classic (released before 2000).
 * @param {object} movie - The movie object.
 * @returns {boolean} - True if the movie is classic, false otherwise.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators
 */
export function isMovieClassic(movie) {
  // Check if the movie year is before 2000.
  if (isObject(movie) && movie.year) {
    return movie.year < 2000;
  } else {
    console.log("isMovieClassic: Movie object invalid or missing year.");
    return false;
  }
}

/**
 * Returns an array of all property names of the movie object.
 * @param {object} movie - The movie object.
 * @returns {Array} - An array of property names.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 */
export function getMovieKeys(movie) {
  // Return the list of property names of the movie object.
  if (isObject(movie)) {
    return Object.keys(movie);
  } else {
    console.log("getMovieKeys: Provided input is not a valid object.");
    return [];
  }
}

/**
 * Returns the count of properties in the movie object.
 * @param {object} movie - The movie object.
 * @returns {number} - The number of properties.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 */
export function getMoviePropertiesCount(movie) {
  // Return the number of properties in the movie object.
  if (isObject(movie)) {
    return Object.keys(movie).length;
  } else {
    console.log("getMoviePropertiesCount: Provided input is not a valid object.");
    return 0;
  }
}

// --------------------
// Example Code Section
// --------------------
if (SHOW_EXAMPLES) {
  const sampleMovie = {
    id: 1,
    title: "Toy Story",
    director: "John Lasseter",
    year: 1995,
    genre: "Animation",
    rating: 8.3,
    cast: ["Tom Hanks", "Tim Allen", "Don Rickles"]
  };

  console.log("Movie Title:", getMovieTitle(sampleMovie));
  // Explanation: Displays the movie title.

  console.log("Movie Year:", getMovieYear(sampleMovie));
  // Explanation: Displays the release year of the movie.

  console.log("Is Classic:", isMovieClassic(sampleMovie));
  // Explanation: Indicates whether the movie is considered classic.

  console.log("Movie Keys:", getMovieKeys(sampleMovie));
  // Explanation: Lists all the property names of the movie object.

  console.log("Properties Count:", getMoviePropertiesCount(sampleMovie));
  // Explanation: Shows the total number of properties in the movie object.
}
