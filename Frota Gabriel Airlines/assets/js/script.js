// MODAL BUTTONS
const modalButtons = document.querySelectorAll('.know-more-button');
const modals = document.querySelectorAll('.modal');
const fade = document.querySelector(".fade");
const backBtn = document.querySelectorAll(".back-btn")

function toggleModal(element){
    element.forEach((button, index) => {
        button.addEventListener('click', e => {

            fade.classList.toggle("hide")

            switch(index){
                case 0:
                    modals[0].classList.toggle("hide");
                    break;

                case 1:
                    modals[1].classList.toggle("hide");
                    break;

                case 2:
                    modals[2].classList.toggle("hide");
                    break;

                case 3:
                    modals[3].classList.toggle("hide");
                    break;
            }
        });
    });
}

toggleModal(modalButtons);
toggleModal(backBtn);

// RESPONSIVE SETTINGS
document.querySelector('.open-menu').addEventListener('click', e => {
    document.querySelector('header .menu').classList.add('open');
});

document.querySelector('.close-menu').addEventListener('click', e => {
    document.querySelector('header .menu').classList.remove('open');
});
