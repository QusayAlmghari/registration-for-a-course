// open navbar begin
const header = document.querySelector('#header');
const open_nav_btn = header.querySelector('#show-nav');

open_nav_btn.addEventListener('click', (e) => {
    open_nav_btn.classList.toggle('open-nav');
})

// open navbar finish

// questions content open and close begin
const question_content = document.querySelectorAll('.question-content');

question_content.forEach((q) => {
    q.addEventListener('click', () => {
        q.classList.toggle('open');
        const icon = q.querySelector('i');
        if (icon.classList.contains('fa-plus'))
            icon.className = 'fa-solid fa-minus';
        else
            icon.className = 'fa-solid fa-plus';
    })
})

// questions content open and close finish