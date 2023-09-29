'use strict';

export const wspBtn = () => {
    window.addEventListener('scroll', () => {
        const whatsappButton = document.getElementById('whatsappButton');
        window.pageYOffset > 400 
            ?   whatsappButton.style.display = 'flex'
            :   whatsappButton.style.display = 'none'
        
    });
}