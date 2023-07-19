const goBtn = document.querySelectorAll('.know-more-button')
const backBtn = document.querySelectorAll(".back-btn")

class ModalToggle{
    constructor(goBtn, backBtn, modals){
        this.goBtn = goBtn
        this.backBtn = backBtn
        this.modals = modals
    }

    toggleModal(element){
        element.forEach((btn, index) => {
            btn.addEventListener('click', e => {
                document.querySelector('.fade').classList.toggle('hide')
                this.modals[index].classList.toggle('hide')
            })
        })
    }

    initEvents(el1, el2){
        this.toggleModal(el1)
        this.toggleModal(el2)
    }

}

const modalSettings = new ModalToggle(goBtn, backBtn, document.querySelectorAll('.modal'))
window.onload = modalSettings.initEvents(goBtn, backBtn)