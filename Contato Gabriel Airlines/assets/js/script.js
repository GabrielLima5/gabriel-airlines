const sendBtn = document.querySelector(".submit")

sendBtn.addEventListener('click', e => {
    let isValid = true

    e.preventDefault();

    document.querySelectorAll("input").forEach(input => {
        if (!input.value){
            input.classList.add("has-error");
            isValid = false
        } 
    });

    if (isValid == true){
        alert('Mensagem enviada, obrigado!')
        document.location.reload(true)
    }
})


// RESPONSIVE SETTINGS
document.querySelector('.open-menu').addEventListener('click', e => {
    document.querySelector('header .menu').classList.add('open');
});

document.querySelector('.close-menu').addEventListener('click', e => {
    document.querySelector('header .menu').classList.remove('open');
});