class Validator{
    constructor(sendBtn){
        this.sendBtn = sendBtn
        this.isValid = true
    }

    checkValidInputs(){
        document.querySelectorAll('input').forEach(input => {
            if (!input.value){
                input.classList.add('has-error')
                this.isValid = false
            } else {
                input.classList.remove('has-error')
                this.isValid = true
            }
        })

        if (this.isValid === true){
            alert('Dados enviados com sucesso!')
            document.location.reload()
        }
    }

    initEvents(){
        this.sendBtn.addEventListener('click', this.checkValidInputs)
    }
}

const validator = new Validator(document.querySelector('.submit'))
window.onload = validator.initEvents()