'use strict';
import { toggleMenu } from './modules/menu.js';
import { btnsShowCalculators } from './modules/showCalculators.js';
import { wspBtn } from './modules/wspBtn.js';
import { Observer } from './modules/intersectionObserver.js';


window.addEventListener('DOMContentLoaded', () => { 
    toggleMenu();
    btnsShowCalculators();
    new Observer()
    wspBtn();
});

