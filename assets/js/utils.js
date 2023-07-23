export function dateFormat(date){
    return (new Date(date).getDate()+1) + '/' + (new Date(date).getMonth()+1) + '/' + new Date(date).getFullYear()
}

export function removeClass(element, name){
    element.classList.remove(name)
}

export function addClass(element, name){
    element.classList.add(name)
}