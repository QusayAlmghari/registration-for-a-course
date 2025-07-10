document.addEventListener('DOMContentLoaded', () => {

    //  slider function begin
    let cardsToShow = (window.innerWidth >= 992) ? 3 : (window.innerWidth >= 768) ? 2 : 1;;

    const currentSliderSection = (current_section = '') => (btn_way = '') => (current_index = 0) => {
        const sliderSection = document.querySelector(`.${current_section}`);
        const cardsContainer = sliderSection.querySelector('.slider-wrapper .cards');
        const cards = cardsContainer ? cardsContainer.querySelectorAll('.card') : [];
        const totalCards = cards.length;
        const dotsButtons = document.querySelectorAll(`.${current_section} .slider-controls .controls-dots span`) || [];

        if (btn_way == 'next') {
            if ((current_index + cardsToShow) <= totalCards - 1) {
                current_index++;
            } else {
                current_index = 0;
            }
        } else if (btn_way == 'prev') {
            if (current_index > 0) {
                current_index--;
            } else {
                current_index = totalCards - cardsToShow;
            }
        }

        save_current_index(current_section, current_index);

        const cardFullWidth = cards[0].offsetWidth
            + Number.parseFloat(window.getComputedStyle(cards[0]).marginLeft)
            + Number.parseFloat(window.getComputedStyle(cards[0]).marginRight);
        const scrollDistance = current_index * cardFullWidth;
        cardsContainer.style.transform = `translateX(-${scrollDistance}px)`;

        dotsButtons.forEach((dot) => {
            dot.removeAttribute('class');
        })

        if (dotsButtons.length != 0) {
            dotsButtons[current_index].setAttribute('class', 'active');
        }

    }

    // add dots buttons begin
    const addDotsButtons = (current_section) => {
        const cards = document.querySelectorAll(`.${current_section} .slider-wrapper .cards .card`) || [];
        const dotsContainer = document.querySelector(`.${current_section} .slider-controls .controls-dots`) || `<div></div>`;
        dotsContainer.innerHTML = ''; // Clear existing dots;

        for (let i = 0; i <= (cards.length - cardsToShow); i++) {
            const dot = document.createElement('span');
            dotsContainer.appendChild(dot);
        }
    }
    // add dots buttons finish

    // saved slider current index begin
    const save_current_index = (current_section, current_index) => {
        switch (current_section) {
            case 'our-best-instructor-section':
                OBI_section_current_index = current_index;
                break;
            case 'most-popular-course-section':
                MPC_section_current_index = current_index;
                break;
        }
    }

    // saved slider current index finish


    // get slider button move begon 
    const getButtonMove = (currentSection) => (btnWay) => {
        if (btnWay === 'next') {
            return document.querySelector(`.${currentSection} .slider-controls .controls-buttons #button-next`);
        }
        else {
            return document.querySelector(`.${currentSection} .slider-controls .controls-buttons #button-prev`);
        }
    }
    // get slider button move finish 

    //  slider function finish

    // our best instructor section move buttons begin 
    const update_OBI_section_slider = currentSliderSection('our-best-instructor-section');
    const get_OBI_section_btn = getButtonMove('our-best-instructor-section');
    let OBI_section_current_index = 0;

    get_OBI_section_btn('next').addEventListener('click', () => {
        update_OBI_section_slider('next')(OBI_section_current_index);
    })

    get_OBI_section_btn('prev').addEventListener('click', () => {
        update_OBI_section_slider('prev')(OBI_section_current_index);
    })

    // our best instructor section move buttons finish 

    // most popular course section move buttons begin 

    const update_MPC_section_slider = currentSliderSection('most-popular-course-section');
    const get_MPC_section_btn = getButtonMove('most-popular-course-section');
    let MPC_section_current_index = 0;

    get_MPC_section_btn('next').addEventListener('click', () => {
        update_MPC_section_slider('next')(MPC_section_current_index);
    })

    get_MPC_section_btn('prev').addEventListener('click', () => {
        update_MPC_section_slider('prev')(MPC_section_current_index);
    })

    // most popular course section move buttons  finish 


    window.addEventListener('resize', () => {
        cardsToShow = (window.innerWidth >= 992) ? 3 : (window.innerWidth >= 768) ? 2 : 1;;

        addDotsButtons('our-best-instructor-section'); // our best instructor section
    })

    addDotsButtons('our-best-instructor-section'); // our best instructor section
})



