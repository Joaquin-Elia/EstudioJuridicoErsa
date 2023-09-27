'use strict';

export const carousel = () => {
    const slider = document.querySelector('.testimonials');
    const firstCard = slider.querySelectorAll('article')[0];
    const arrowIcons = document.querySelectorAll('.arrow-slider');
    let isDragStart = false, isDragging = false, prevScrollLeft, prevPageX, prevPageY, positionDiffX, positionDiffY;

    const showHideIcons = () => {
        let scrollWidth = slider.scrollWidth - slider.clientWidth; // getting max scroll width
        arrowIcons[0].style.display = slider.scrollLeft === 0 ? 'none' : 'block';
        arrowIcons[1].style.display = slider.scrollLeft === scrollWidth ? 'none' : 'block';
    }

    arrowIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            let firstCardWidth = firstCard.clientWidth + 16; // getting first card
            slider.scrollLeft += icon.id === 'iconLeft' ? -firstCardWidth : firstCardWidth;
            showHideIcons();
        });
    });

    const dragStart = (e) => {
        isDragStart = true;
        prevPageX = e.pageX || e.touches[0].pageX;
        prevPageY = e.pageY || e.touches[0].pageY;
        prevScrollLeft = slider.scrollLeft;
        slider.style.cursor = 'grabbing';
    }

    const dragging = (e) => {
        if (!isDragStart) return;
        e.preventDefault();
        isDragging = true;
        slider.classList.add("dragging-slider");
        const pageX = e.pageX || e.touches[0].pageX;
        const pageY = e.pageY || e.touches[0].pageY;
        positionDiffX = (pageX - prevPageX) * 1.8;
        positionDiffY = (pageY - prevPageY);

        if (Math.abs(positionDiffX) > Math.abs(positionDiffY)) {
            // Horizontal scroll detected, allow it
            slider.scrollLeft = prevScrollLeft - positionDiffX;
            slider.style.cursor = 'grabbing';
            showHideIcons();
        } else {
            // Vertical scroll detected, allow the default behavior
            isDragStart = false; // Disable dragging to allow vertical scroll
        }
    }

    const dragStop = () => {
        isDragStart = false;
        slider.classList.remove("dragging-slider");
        slider.style.cursor = 'grab';

        if (!isDragging) return;
        isDragging = false;
    }

    slider.addEventListener("mousedown", dragStart);
    slider.addEventListener("touchstart", dragStart);

    slider.addEventListener("mousemove", dragging);
    slider.addEventListener("touchmove", dragging);

    slider.addEventListener("mouseup", dragStop);
    slider.addEventListener("mouseleave", dragStop);
    slider.addEventListener("touchend", dragStop);
}