const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

const navToggle = document.querySelector('.nav-toggle');
const navItems = document.querySelector('.nav-items');

navToggle.addEventListener('click', () => {
    navItems.classList.toggle('show-items');
});