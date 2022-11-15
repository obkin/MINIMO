window.addEventListener('DOMContentLoaded', () => {

// =============Logo-animation=============



// =============Logo-animation=============



// =============Slider=============

    function slider(wrapperSelector, slidesSelector, innerSelector) {

// ------------------Getting-elements----------------------

        const sliderWrapper = document.querySelector(wrapperSelector),
              slides = sliderWrapper.querySelectorAll(slidesSelector),
              sliderInner = sliderWrapper.querySelector(innerSelector),
              width = window.getComputedStyle(sliderInner).width; 

// ------------------------End-1---------------------------

// ------------------Change-slides----------------------

    let offset = 0;

    sliderInner.style.width = 100 * slides.length + '%';
    
    slides.forEach(slide => slide.style.width = width);

    function sliderSwipeRight() {
        if (offset == deleteNotDigits(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNotDigits(width);
        }

        sliderInner.style.transform = `translateX(-${offset}px)`;
    }

    setInterval(sliderSwipeRight, 5000);

    function deleteNotDigits(str) {
        return +str.replace(/\D/igm, '');
    }

// -----------------------End-2-------------------------

    }

    slider('.slider_block', '.slider_slide', '.slider_inner');

// =============Slider=============

});