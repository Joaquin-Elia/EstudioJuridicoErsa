'use strict';

export const toggleMenu = () => {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const closeBtn = document.getElementById('closeBtn');
    const headerNav = document.querySelector('.header-nav');
    const navLink = document.querySelectorAll('.nav-link');
    
    hamburgerBtn.addEventListener('click', () => {
        headerNav.classList.toggle('isActive');
    });
    
    const closeMenu = () => headerNav.classList.remove('isActive');
    
    closeBtn.addEventListener('click', closeMenu);

    const removeActiveLink = () => {
        navLink.forEach(link => {
            link.classList.remove('active-link');
        });
    }

    navLink.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
            removeActiveLink();
            link.classList.add('active-link');
        });
    });
}