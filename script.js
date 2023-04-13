//your code here
// Get the header element
const header = document.querySelector('header');

// Change the text of the h1 element
header.querySelector('h1').textContent = 'The Dark Knight Rises';

// Get the nav element
const nav = document.querySelector('nav');

// Add a new list item to the nav element
const listItem = document.createElement('li');
const link = document.createElement('a');
link.href = '#reviews';
link.textContent = 'Reviews';
listItem.appendChild(link);
nav.querySelector('ul').appendChild(listItem);

// Get the summary element
const summary = document.querySelector('summary');

// Add a click event listener to the summary element
summary.addEventListener('click', () => {
  // Toggle the visibility of the actors section
  const actorsSection = document.querySelector('#actors');
  actorsSection.style.display = actorsSection.style.display === 'none' ? 'block' : 'none';
});

// Get all of the blockquote elements
const blockquotes = document.querySelectorAll('blockquote');

// Loop through each blockquote element and add a click event listener
blockquotes.forEach(blockquote => {
  blockquote.addEventListener('click', () => {
    // Change the text of the blockquote element
    blockquote.textContent = 'You clicked me!';
  });
});