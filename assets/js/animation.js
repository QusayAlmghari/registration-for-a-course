const revealableTextElements = document.querySelectorAll('.hidden-item');
const revealableImageElements = document.querySelectorAll('.hidden-img');
const revealableElements = [...revealableTextElements, ...revealableImageElements];

function revealElements() {
    revealableElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100)
            element.classList.add('reveal');
        else
            element.classList.remove('reveal');
    });
}

document.addEventListener('DOMContentLoaded', revealElements);

window.addEventListener('scroll', revealElements);

