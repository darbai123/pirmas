const openModalButtons = document.querySelectorAll(`[data-modal-target]`);
const closeModalButtons = document.querySelectorAll(`[data-close-button]`);
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    });
});

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal);
    });
});

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    });
});

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}


// ----------------------SLIDE SHOW------------------------------------------------------------

let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;
let itemWidth = items[0].offsetWidth; // Pasiimame vieno elemento plotį

next.addEventListener('click', function () {
    active = (active + 1) % items.length;
    reloadSlider();
});

prev.addEventListener('click', function () {
    active = (active - 1 + items.length) % items.length;
    reloadSlider();
});

let refreshSlider = setInterval(() => { next.click() }, 10000); // Pakeisti slankiklio atnaujinimo dažnumą pagal poreikį

function reloadSlider() {
    let checkLeft = -active * itemWidth; // Pritaikome vieno elemento plotį
    list.style.transform = `translateX(${checkLeft}px)`;

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
}

dots.forEach((li, key) => {
    li.addEventListener('click', function () {
        active = key;
        reloadSlider();
    });
});


