document.addEventListener("DOMContentLoaded", function () {

    let images = document.querySelectorAll('img');
    let buttons = document.querySelectorAll('button');
    let input = document.querySelector('#tagInput');

    buttons[0].addEventListener('click', function () {
        for (let i = 0; i < images.length; i++) {
            if (images[i].dataset.tag.indexOf(input.value) != -1) {
                images[i].classList.remove('invisible')
                console.log(images[i].dataset.tag);
            }
        }
        input.value = '';
    });

    buttons[1].addEventListener('click', function () {
        for (let i = 0; i < images.length; i++) {
            if (images[i].dataset.tag.indexOf(input.value) != -1) {
                console.log(images[i].dataset.tag);
                images[i].classList.add('invisible')
            }
        }
        input.value = '';
    });
});