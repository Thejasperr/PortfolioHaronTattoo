const boxes = document.querySelectorAll('.box');
const popup = document.querySelector('.popup');
const popupImg = document.querySelector('.popup img');

boxes.forEach((box) => {
    box.addEventListener('click',() => {
        const src = box.querySelector('img').src;
        popupImg.src = src;
        popup.classList.toggle('fade-in');
        },
    );
});

popup.addEventListener('click',() => {
    popup.classList.toggle('fade-in');
}
);

