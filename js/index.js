'use strict';

const hamburgerBtn = document.getElementById('hamburgerBtn');
const closeBtn = document.getElementById('closeBtn');
const headerNav = document.querySelector('.header-nav');
const navLink = document.querySelectorAll('.nav-link');

hamburgerBtn.addEventListener('click', () => {
    headerNav.classList.toggle('isActive');
});

const closeMenu = () => headerNav.classList.remove('isActive');

closeBtn.addEventListener('click', closeMenu);

navLink.forEach(link => {
    link.addEventListener('click', closeMenu)
});
