var menu = document.getElementById('menu'),
    optionLinks = document.getElementById('option-links');

menu.addEventListener('click', () => {
  optionLinks.classList.toggle('option-links--open');
})