const section = [...document.querySelectorAll("section")];
const passengersInput = document.querySelector(".passengers-input");
const bookTicketBtn = document.querySelector(".buy-ticket-btn");
const seatAlertSpan = document.querySelector(".seat-alert");
const priceNumber = document.querySelectorAll(".price-number");

import { addClass, removeClass, dateFormat } from './utils.js'
import { showPreload, hidePreload } from './togglePreload.js'
import { finalPrice } from './ticketsController.js'
import { getRandomInt } from './randomNumbers.js'
import { flights } from './getStats.js'

export function selectSeats(btn){
    const selectedSeatsEl = document.querySelector(".selected-seats");
    const seats = document.querySelectorAll("input[type=checkbox]");

    btn.setAttribute("disabled", "disabled")
    seatAlertSpan.innerHTML = `*Você precisa selecionar ${passengersInput.value == 1 ? `1 assento` : `${passengersInput.value} assentos`} para prosseguir!`

    seats.forEach(seat => {
        seat.addEventListener('click', e =>{

            if (seat.checked){
                let span = document.createElement("span")
                span.innerHTML = e.target.id
                selectedSeatsEl.appendChild(span)
            } else if (!seat.checked){
                let span = document.querySelectorAll(".selected-seats span")
                span.forEach(span => {
                    if (span.innerHTML == e.target.id){
                        addClass(span, "hide")
                    }
                })
            }

            toggleContinueButton(btn)
        });
    });
}

function toggleContinueButton(btn){
    if (document.querySelectorAll("input[type=checkbox]:checked").length == passengersInput.value){
        btn.removeAttribute("disabled");
        addClass(seatAlertSpan, "hide")
    } else {
        removeClass(seatAlertSpan, "hide");
        btn.setAttribute("disabled", "disabled");
    }
}

function showFinalPrice(i, index){
    const finalPriceTotalEl = document.querySelectorAll('.total-price-final')

    if (passengersInput.value == 1){
        return
    } else {
        finalPriceTotalEl[i].innerHTML = `R$${eval(parseInt(priceNumber[index].innerText) * passengersInput.value)},00 para ${passengersInput.value} passageiros`
    }
}

export function seatsMapPageContent(index){
    const goingDateEl = document.querySelector(".going-date");
    const returnDateEl = document.querySelector(".return-date");
    const flightDuration = document.querySelectorAll(".flight-duration");
    const radioRoundtrip = document.querySelector("#roundtrip");
    const departureDate = document.querySelector("#departure-date");
    const departureTime = document.querySelectorAll(".departure-time");
    const arrivalTime = document.querySelectorAll(".arrival-time")
    const from = document.querySelector("#from");
    const fromText = document.querySelectorAll(".from-text");
    const to = document.querySelector("#to");
    const toText = document.querySelectorAll(".to-text");
    const returnDate = document.querySelector("#return-date");
    const returnPanel = document.querySelector(".return-flight-info");
    const priceEl = document.querySelectorAll(".price-number");
    const totalPassengersEl = document.querySelector(".total-passengers-number");
    const finalFlightNumberEl = document.querySelectorAll(".final-flight-number");
    const durationEl = document.querySelectorAll(".duration");

    if (radioRoundtrip.checked){
        removeClass(returnPanel, "hide")
    }

    goingDateEl.innerHTML = `${dateFormat(departureDate.value)}`;
    returnDateEl.innerHTML = `${dateFormat(returnDate.value)}`;
    durationEl[12].innerHTML = flightDuration[0].innerHTML;
    durationEl[13].innerHTML = flightDuration[6].innerHTML;
    totalPassengersEl.innerHTML = passengersInput.value;
    fromText[14].innerHTML = from.value;
    fromText[15].innerHTML = to.value;
    toText[14].innerHTML = to.value;
    toText[15].innerHTML = from.value;

    switch(index){
        case 0:
            finalFlightNumberEl[0].innerHTML = `GA${flights[0]}`
            departureTime[12].innerHTML = departureTime[0].innerHTML;
            arrivalTime[12].innerHTML = arrivalTime[0].innerHTML;
            priceEl[12].innerHTML = priceNumber[0].innerHTML;
            showFinalPrice(0, 0)
            break;

        case 1:
            finalFlightNumberEl[0].innerHTML = `GA${flights[1]}`
            departureTime[12].innerHTML = departureTime[1].innerHTML;
            arrivalTime[12].innerHTML = arrivalTime[1].innerHTML;
            priceEl[12].innerHTML = priceNumber[1].innerHTML;
            showFinalPrice(0, 1)
            break;

        case 2:
            finalFlightNumberEl[0].innerHTML = `GA${flights[2]}`
            departureTime[12].innerHTML = departureTime[2].innerHTML;
            arrivalTime[12].innerHTML = arrivalTime[2].innerHTML;
            priceEl[12].innerHTML = priceNumber[2].innerHTML;
            showFinalPrice(0, 2)
            break;

        case 3:
            finalFlightNumberEl[0].innerHTML = `GA${flights[3]}`
            departureTime[12].innerHTML = departureTime[3].innerHTML;
            arrivalTime[12].innerHTML = arrivalTime[3].innerHTML;
            priceEl[12].innerHTML = priceNumber[3].innerHTML;
            showFinalPrice(0, 3)
            break;

        case 4:
            finalFlightNumberEl[0].innerHTML = `GA${flights[4]}`
            departureTime[12].innerHTML = departureTime[4].innerHTML;
            arrivalTime[12].innerHTML = arrivalTime[4].innerHTML;
            priceEl[12].innerHTML = priceNumber[4].innerHTML;
            showFinalPrice(0, 4)
            break;

        case 5:
            finalFlightNumberEl[0].innerHTML = `GA${flights[5]}`
            departureTime[12].innerHTML = departureTime[5].innerHTML;
            arrivalTime[12].innerHTML = arrivalTime[5].innerHTML;
            priceEl[12].innerHTML = priceNumber[5].innerHTML;
            showFinalPrice(0, 5)
            break;

        case 6:
            finalFlightNumberEl[1].innerHTML = `GA${flights[6]}`
            departureTime[13].innerHTML = departureTime[6].innerHTML;
            arrivalTime[13].innerHTML = arrivalTime[6].innerHTML;
            priceEl[13].innerHTML = priceNumber[6].innerHTML;
            showFinalPrice(1, 6)
            break;

        case 7:
            finalFlightNumberEl[1].innerHTML = `GA${flights[7]}`
            departureTime[13].innerHTML = departureTime[7].innerHTML;
            arrivalTime[13].innerHTML = arrivalTime[7].innerHTML;
            priceEl[13].innerHTML = priceNumber[7].innerHTML;
            showFinalPrice(1, 7)
            break;

        case 8:
            finalFlightNumberEl[1].innerHTML = `GA${flights[8]}`
            departureTime[13].innerHTML = departureTime[8].innerHTML;
            arrivalTime[13].innerHTML = arrivalTime[8].innerHTML;
            priceEl[13].innerHTML = priceNumber[8].innerHTML;
            showFinalPrice(1, 8)
            break;

        case 9:
            finalFlightNumberEl[1].innerHTML = `GA${flights[9]}`
            departureTime[13].innerHTML = departureTime[9].innerHTML;
            arrivalTime[13].innerHTML = arrivalTime[9].innerHTML;
            priceEl[13].innerHTML = priceNumber[9].innerHTML;
            showFinalPrice(1, 9)
            break; 

        case 10:
            finalFlightNumberEl[1].innerHTML = `GA${flights[10]}`
            departureTime[13].innerHTML = departureTime[10].innerHTML;
            arrivalTime[13].innerHTML = arrivalTime[10].innerHTML;
            priceEl[13].innerHTML = priceNumber[10].innerHTML;
            showFinalPrice(1, 10)
            break;

        case 11:
            finalFlightNumberEl[1].innerHTML = `GA${flights[11]}`
            departureTime[13].innerHTML = departureTime[11].innerHTML;
            arrivalTime[13].innerHTML = arrivalTime[11].innerHTML;
            priceEl[13].innerHTML = priceNumber[11].innerHTML;
            showFinalPrice(1, 11)
            break;
    }
}

export function validateSeats(){
    document.querySelectorAll("input[type=checkbox]:checked").forEach(input => {
        input.click();
    });

    bookTicketBtn.setAttribute("disabled", "disabled");

    const seats = document.querySelectorAll("input[type=checkbox]");
    seats.forEach(seat => {
        seat.addEventListener('change', e => {
            if (document.querySelectorAll("input[type=checkbox]:checked").length == passengersInput.value){
                bookTicketBtn.removeAttribute("disabled");
                addClass(seatAlertSpan, "hide")
            } else {
                removeClass(seatAlertSpan, "hide");
                bookTicketBtn.setAttribute("disabled", "disabled");
            }

        })
    })
}

export function selectSeatsReturnEvents(){
    const finalPriceDiv = document.querySelector(".final-price")
    const passengersDiv = document.querySelector(".passengers")
    const selectSeatsReturnBtn = document.querySelector(".select-seats-return");
    const goingInfo = document.querySelector(".going-flight-info");
    const returnInfo = document.querySelector(".return-flight-info");

    selectSeatsReturnBtn.addEventListener('click', e => {
        section.forEach((section, index) => {
            showPreload(index);
        });
    
        setTimeout(function (){
            addClass(selectSeatsReturnBtn, "hide");
            removeClass(bookTicketBtn, "hide");
            addClass(goingInfo, "hide");
            removeClass(passengersDiv, "hide");
            removeClass(finalPriceDiv, "hide");
            returnInfo.style.display = 'flex';
            returnInfo.style.marginTop = 'unset';
    
            validateSeats()
            finalPrice();
            hidePreload(3);
        }, 7000)
    
    })
}

export function bookTicketBtnEvents(){
    const ticketId = document.querySelector(".ticket-id");
    const modal = document.querySelector(".modal");
    const fade = document.querySelector(".fade")
    const backBtnModal = document.querySelector(".back-button");

    bookTicketBtn.addEventListener('click', e => {
        section.forEach((section, index) => {
            showPreload(index)
        });
    
        setTimeout(function(){
            hidePreload(0);
            removeClass(modal, "hide");
            removeClass(fade, "hide")
    
            backBtnModal.addEventListener('click', e => {
                document.location.reload(true);
            });
    
            document.querySelectorAll(".modal span").forEach(span => {
                removeClass(span, "hide")
            });
    
            ticketId.innerHTML = `ID da reserva: ${getRandomInt(10000000000, 99999999999)}`
        }, 7000)
    })
}