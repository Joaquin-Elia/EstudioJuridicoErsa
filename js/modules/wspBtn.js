'use strict';

export const wspBtn = () => {
    window.addEventListener('scroll', () => {
        const whatsappButton = document.getElementById('whatsappButton');
        if (window.pageYOffset > 400) {
            whatsappButton.style.display = 'flex';
        } else {
            whatsappButton.style.display = 'none';
        }
    });
}