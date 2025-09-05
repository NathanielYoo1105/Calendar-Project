const myButton = document.getElementById('myButton');
const messageParagraph = document.getElementById('message');
myButton.addEventListener('click', function() {
    messageParagraph.textContent = 'Button was clicked!';
});
myButton.addEventListener('click', function() {
    myButton.style.backgroundColor = 'blue';
    myButton.style.color = 'white';
});
