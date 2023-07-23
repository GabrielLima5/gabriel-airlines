const passengersInput = document.querySelector(".passengers-input");
const radioRoundtrip = document.querySelector("#roundtrip");
const priceNumber = document.querySelectorAll(".price-number");

let showAgain = true

import { prices } from './getStats.js'
import { seatsMapPageContent, selectSeats } from './seatsController.js';
import { validateCityInputs, validateGeneralInputs, confirmValidInputs, validateTravelDate } from './validateInputs.js';
import { generateRandomFlights, generateRandomPrices, departureRandomHour } from './getStats.js';
import { removeClass, addClass, dateFormat } from './utils.js'
import { arrivalHour } from './calcArrivalTime.js'
import { showPreload, hidePreload, hideAll } from './togglePreload.js';

function showTotalPrice(el, index){
    if (passengersInput.value == 1){
        return
    } else {
        el.innerHTML = `R$${eval(prices[index] * passengersInput.value)},00 para ${passengersInput.value} passageiros`    
    }
}

export function ticketsPageContent(going = true){
    const reDoSearch = document.querySelector(".redo-search");
    const from = document.querySelector("#from");
    const fromText = document.querySelectorAll(".from-text");
    const to = document.querySelector("#to");
    const toText = document.querySelectorAll(".to-text");
    const flightNumber = document.querySelectorAll(".flight-number");
    const travelDate = document.querySelectorAll(".travel-date");
    const departureDate = document.querySelector("#departure-date");
    const departureTime = document.querySelectorAll(".departure-time");
    const returnDate = document.querySelector("#return-date");
    const arrivalTime = document.querySelectorAll(".arrival-time")
    const totalPriceEl = document.querySelectorAll('.total-price')

    reDoSearch.addEventListener('click', e => {
        document.location.reload(true);
    });

    fromText.forEach((text) => {
        text.innerHTML = going ? from.value : to.value
    });

    toText.forEach((text) => {
        text.innerHTML = going ? to.value : from.value
    });

    flightNumber.forEach((number, index) => {
        generateRandomFlights(number, index)
    });

    priceNumber.forEach((price, index) => {
        if (index > 11) return
        generateRandomPrices(price, index)
    });

    totalPriceEl.forEach((el, index) => {
        showTotalPrice(el, index)
    })

    departureTime.forEach((time, index) => {
        if (index > 11) return
        departureRandomHour(time, index)
    });

    arrivalTime.forEach((time, index) => {
        if (index > 11) return
        index < 6 ? arrivalHour(time, index, from, to, false) : arrivalHour(time, index, to, from, true)
    });

    travelDate.forEach((travelDate, index) => {
        travelDate.innerHTML = index === 0 ? `${dateFormat(departureDate.value)}` : `${dateFormat(returnDate.value)}`
    }) 
}

export function finalPrice(){
    const finalPriceNumberEl = document.querySelector(".final-price-number");
    const goingValueEl = document.querySelector('.going-value')
    const returnValueEl = document.querySelector('.return-value')

    if (radioRoundtrip.checked){
        goingValueEl.innerHTML = `R$${eval(parseInt(priceNumber[12].innerHTML) * passengersInput.value)},00`
        returnValueEl.innerHTML = `R$${eval(parseInt(priceNumber[13].innerHTML) * passengersInput.value)},00`
        finalPriceNumberEl.innerHTML = `R$ ${eval((priceNumber[12].innerHTML * passengersInput.value) + (priceNumber[13].innerHTML * passengersInput.value))}`
    
    } else {
        document.querySelector('.calc-price').style.display = 'none'
        finalPriceNumberEl.innerHTML = `R$ ${eval(priceNumber[12].innerHTML * passengersInput.value)}`
    }
}

export function searchBtnEvents(){
    const searchBtn = document.querySelector(".search-button");

    searchBtn.addEventListener('click', e => {
        e.preventDefault()
        validateCityInputs()
        validateGeneralInputs()
        validateTravelDate()
        confirmValidInputs()
    });
}

export function selectTicketEvent(btn, index){
    const radioOneWay = document.querySelector("#one-way");
    const bookTicketBtn = document.querySelector(".buy-ticket-btn");
    const goingPage = document.querySelector("#going-page");
    const returnPage = document.querySelector("#return-page")
    const finalPriceDiv = document.querySelector(".final-price");
    const passengersDiv = document.querySelector(".passengers")
    const selectSeatsReturnBtn = document.querySelector(".select-seats-return");
    const returnInfo = document.querySelector(".return-flight-info");

    btn.addEventListener('click', e => {
        if (radioOneWay.checked){
            showAgain = false;
        }

        hideAll();
        showPreload(1);

        if (showAgain == true){
            setTimeout(function(){
                seatsMapPageContent(index)
                hidePreload(1);
                ticketsPageContent(false);
                removeClass(returnPage, "hide");
                addClass(goingPage, "hide")
            }, 7000)

            showAgain = false;

        } else {
            setTimeout(function(){
                if (radioRoundtrip.checked){
                    selectSeatsReturnBtn.classList.remove("hide");
                    bookTicketBtn.classList.add("hide");
                    returnInfo.style.display = "none";
                    addClass(passengersDiv, "hide");
                    addClass(finalPriceDiv, "hide");
                    selectSeats(selectSeatsReturnBtn);
                }

                seatsMapPageContent(index)

                if (radioOneWay.checked){
                    selectSeats(bookTicketBtn);
                }

                finalPrice();
                hidePreload(3);
            }, 7000)

        }
    });
}

