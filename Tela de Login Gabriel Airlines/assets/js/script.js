const sendBtn = document.querySelector(".submit")

sendBtn.addEventListener('click', e => {

    let isValid = true;

    e.preventDefault();
    
    document.querySelectorAll("input").forEach(input => {
        if (['email', 'senha'].indexOf(input.name) > -1 && !input.value){
            input.classList.add("has-error");
            isValid = false;
        }
    });

    if (isValid){
        alert('Login realizado com sucesso!');
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