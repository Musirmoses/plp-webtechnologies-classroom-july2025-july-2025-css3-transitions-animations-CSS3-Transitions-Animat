// Part 2: JavaScript functions demonstrating scope, parameters, and return values

// Global variable example (avoid polluting in real projects; here for clarity)
let globalMultiplier = 2;

/**
 * Calculates the area of a rectangle.
 * Takes width and height parameters.
 * Returns the numeric area.
 */
function calculateArea(width, height) {
  // Local variable inside function
  let area = width * height;
  // Using global variable to multiply (demonstrating scope access)
  return area * globalMultiplier;
}

/**
 * Updates the result paragraph with area calculation.
 */
function displayArea() {
  let width = 5;
  let height = 10;
  // Call function with parameters and get return value
  const area = calculateArea(width, height);
  const resultParagraph = document.getElementById('calcResult');
  resultParagraph.textContent = `Area of ${width}x${height} rectangle (multiplied by ${globalMultiplier}): ${area}`;
}

// Attach event listener to button for calculation
document.getElementById('calculateBtn').addEventListener('click', displayArea);


// Part 3: JavaScript triggering CSS animations dynamically

const box = document.getElementById('animateBox');
const toggleAnimBtn = document.getElementById('toggleAnimBtn');

/**
 * Toggles bounce animation on the box element.
 * Demonstrates adding/removing a class dynamically.
 */
function toggleBounceAnimation() {
  box.classList.toggle('bounce-animation');
}

// Set up event listener on toggle button
toggleAnimBtn.addEventListener('click', toggleBounceAnimation);

// Also allow clicking the box itself to toggle animation
box.addEventListener('click', toggleBounceAnimation);


// Part 3: Flip card logic
const flipCard = document.getElementById('flipCard');
const flipCardBtn = document.getElementById('flipCardBtn');

/**
 * Flips the card by toggling the 'flipped' class.
 * This triggers a CSS transition.
 */
function flipTheCard() {
  flipCard.classList.toggle('flipped');
}

flipCardBtn.addEventListener('click', flipTheCard);
flipCard.addEventListener('click', flipTheCard);
