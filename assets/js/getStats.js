import { getRandomHours, getRandomPrices, getRandomFlights } from './randomNumbers.js';

export const hours = getRandomHours()
export const prices = getRandomPrices()
export const flights = getRandomFlights()

export function generateFlightHours(hour, index, n, half = false){
    hour.innerHTML = `${eval(hours[index])+n}:${half ? '30' : '00'}`
}

export function generateRandomPrices(price, index){
    price.innerHTML = `${prices[index]}`
}

export function generateRandomFlights(number, index){
    if (index > 11) return
    number.innerHTML = `GA${flights[index]}`
}

export function departureRandomHour(time, index){
    time.innerHTML = `${hours[index]}:00`
}