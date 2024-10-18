const hamburger = document.querySelector('.hamburger') as HTMLButtonElement;
const menu = document.querySelector('.menu') as HTMLUListElement;

hamburger.addEventListener('click', () => {
    menu.classList.toggle('show'); // Toggle the menu visibility
});
