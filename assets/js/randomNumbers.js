export function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    let finalNumber = Math.floor(Math.random() * (max - min) + min)

    return finalNumber
}

export function getRandomFlights(){
    const randomFlights = []
    for(let i = 0; i < 12; i++){
        randomFlights.push(getRandomInt(1000, 9999))
    }

    return randomFlights
}

export function getRandomHours(){
    const randomHours = []
    for(let i = 0; i < 12; i++){
        randomHours.push(getRandomInt(0, 18))
    }

    return randomHours
}

export function getRandomPrices(){
    const randomPrices = []
    for(let i = 0; i < 12; i++){
        randomPrices.push(getRandomInt(100, 3000))
    }
    return randomPrices
}