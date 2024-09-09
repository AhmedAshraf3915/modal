'use strict';

const showModal = document.querySelectorAll('.show-modal')
const modal = document.querySelector('.modal')
const closeModalBtn = document.querySelector('.close-modal')
const overlay = document.querySelector('.overlay')

for (let i = 0; i < showModal.length; i++) {
    showModal[i].addEventListener('click', function () {
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
    })
}

const closeModalFunc = function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

closeModalBtn.addEventListener('click', closeModalFunc)
overlay.addEventListener('click', closeModalFunc)

document.addEventListener('keydown', function (e) {
    console.log(e)
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModalFunc();
    }
})

