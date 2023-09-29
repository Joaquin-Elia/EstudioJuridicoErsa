'use strict'

export class Observer {
    constructor(id, callback) {
        this.element = document.getElementById(id);
        this.callback = callback;
        this.observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                this.callback();
            }
        }, {
            rootMargin: '200px'
        });
    }

    observe() {
        this.observer.observe(this.element);
    }
}

let testimonialsInitialized = false;
const testimonialsCallback = () => {
    if(!testimonialsInitialized){
        import('./testimonials.js')
        .then((module) => {
            module.testimonials();
            testimonialsInitialized = true;
        })
        .catch((error) => {
            console.error(`Error loading module: ${error}`);
        });

        import('./carousel.js')
        .then((module) => {
            module.carousel();
        })
        .catch((error) => {
            console.error(`Error loading module: ${error}`);
        });
    }
}

let mapInitialized = false;
const mapCallback = () => {
    if(!mapInitialized){
        import('./map.js')
        .then((module) => {
            module.map()
            mapInitialized = true;
        })
        .catch((error) => {
            console.log(`Error loading module ${error}`);
        })
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const testimonialsObserver = new Observer('testimonialsContainer', testimonialsCallback);
    testimonialsObserver.observe();

    const mapObserver = new Observer('map', mapCallback);
    mapObserver.observe();
});