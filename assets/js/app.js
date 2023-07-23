import { selectTicketEvent, searchBtnEvents } from "./ticketsController.js";
import { selectSeatsReturnEvents, bookTicketBtnEvents } from "./seatsController.js";
import { inputRadioEvents } from './validateInputs.js'

function initEvents(){
    const selectTicketBtn = document.querySelectorAll(".select-ticket");

    selectTicketBtn.forEach((btn, index) => {
        selectTicketEvent(btn, index)
    });

    searchBtnEvents()
    selectSeatsReturnEvents()
    bookTicketBtnEvents()
    inputRadioEvents()
}

window.onload = initEvents()