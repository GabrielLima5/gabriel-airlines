class ResponsiveSettings{
    constructor(openButton, closeButton, menu, fadeEl){
        this.openButton = openButton
        this.closeButton = closeButton
        this.menu = menu
        this.fade = fadeEl
    }

    settings(){
        this.openButton.addEventListener('click', e => {
            this.menu.classList.add('open')
            this.fade.classList.remove('hide')
        });

        this.closeButton.addEventListener('click', e => {
            this.menu.classList.remove('open')
            this.fade.classList.add('hide')
        })
    }
}

const responsive = new ResponsiveSettings(
    document.querySelector('.open-menu'), 
    document.querySelector('.close-menu'), 
    document.querySelector('header .menu'), 
    document.querySelector('.fade'))
window.onload = responsive.settings()