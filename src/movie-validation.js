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
  return value && typeof value === 'object' && value !== null;
  // Check if the value is an object and not null.
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
  return obj && typeof obj[prop] === expectedType;
  // Check if the property exists and is of the expected type.
}

/**
 * Retrieves the movie title.
 * @param {object} movie - The movie object.
 * @returns {string} - The movie title, or an empty string if invalid.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
 */
export function getMovieTitle(movie) {
  if (movie && typeof movie.title === 'string') {
    return movie.title;
  } else {
    console.error("Error: Invalid movie object or missing title.");
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
  return movie && typeof movie.year === 'number' ? movie.year : 0;
  // Use bracket notation as an alternative approach to property access.
  // While dot notation is common for fixed property names, bracket notation is useful when property names are dynamic.
}

/**
 * Determines whether the movie is considered classic (released before 2000).
 * @param {object} movie - The movie object.
 * @returns {boolean} - True if the movie is classic, false otherwise.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators
 */
export function isMovieClassic(movie) {
  return movie && movie.year < 2000;
  // Determine if the movie is considered classic based on its release year.
}

/**
 * Returns an array of all property names of the movie object.
 * @param {object} movie - The movie object.
 * @returns {Array} - An array of property names.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 */
export function getMovieKeys(movie) {
  return movie ? Object.keys(movie) : [];
  // Return the list of property names for the movie object.
}

/**
 * Returns the count of properties in the movie object.
 * @param {object} movie - The movie object.
 * @returns {number} - The number of properties.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 */
export function getMoviePropertiesCount(movie) {
  return movie ? Object.keys(movie).length : 0;
  // Return the number of properties in the movie object.
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
