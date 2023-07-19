class ResponsiveSettings{
    constructor(openButton, closeButton, menu){
        this.openButton = openButton
        this.closeButton = closeButton
        this.menu = menu
    }

    settings(){
        this.openButton.addEventListener('click', e => {
            this.menu.classList.add('open')
        });

        this.closeButton.addEventListener('click', e => {
            this.menu.classList.remove('open')
        })
    }
}

const responsive = new ResponsiveSettings(document.querySelector('.open-menu'), document.querySelector('.close-menu'), document.querySelector('header .menu'))
window.onload = responsive.settings()