const radioOneWay = document.querySelector("#one-way");
const radioRoundtrip = document.querySelector("#roundtrip");
const from = document.querySelector("#from");
const to = document.querySelector("#to");
const returnDate = document.querySelector("#return-date");
const spanError = document.querySelector(".error-span")
const sameValueError = document.querySelector(".same-value-span")
const dateError = document.querySelector(".date-error-span")
const inputs =  document.querySelectorAll(".other-inputs input");
const departureDate = document.querySelector("#departure-date");
const loadingScreen = document.querySelector(".loading");
const spans = document.querySelectorAll(".inputs span");

let isValid = true

import { addClass, removeClass } from "./utils.js";
import { hideAll, hidePreload, showAll } from "./togglePreload.js";
import { ticketsPageContent } from './ticketsController.js'

export function inputRadioEvents(){
    radioOneWay.addEventListener('change', () => {
        if (radioOneWay.checked){
            returnDate.setAttribute("disabled", "disabled")
        }
    });
    
    radioRoundtrip.addEventListener('change', () => {
        if (radioRoundtrip.checked){
            returnDate.removeAttribute("disabled")
        } 
    }); 
}

export function clearErrors(){
    inputs.forEach(input => {
        removeClass(input, 'has-error')
    });

    removeClass(from, 'has-error')
    removeClass(to, 'has-error')

    spans.forEach(span => {
        addClass(span, 'hide')
    });
}

export function validateCityInputs(){
    clearErrors()
    const cities = ["SP - Guarulhos (GRU)", "SP - Congonhas (CGH)", "Campinas (VCP)", "RJ - Galeão (GIG)", "RJ - Santos Dumont (SDU)", "Curitiba (CWB)", "Florianópolis (FLN)", "Porto Alegre (POA)", "Vitória (VIX)", "BH - Confins (CNF)", "Goiânia (GYN)", "Brasília (BSB)", "Campo Grande (CGR)", "Cuiabá (CGB)", "Manaus (MAO)", "Rio Branco (RBR)", "Porto Velho (PVH)", "Boa Vista (BVB)", "Macapá (MCP)", "Belém (BEL)", "Palmas (PMW)", "São Luís (SLZ)", "Fortaleza (FOR)", "Natal (NAT)", "Teresina (THE)", "João Pessoa (JPA)", "Recife (REC)", "Maceió (MCZ)", "Aracaju (AJU)", "Salvador (SSA)"]

    if (from.value === 'Selecionar' || to.value === 'Selecionar'){
        isValid = false;
        addClass(from.value === 'Selecionar' ? from : to, "has-error");
        removeClass(from.value === 'Selecionar' ? document.querySelector(".invalid-from") : document.querySelector('.invalid-to'), "hide");
    } else{
        isValid = true;
    }
}

function validate(el1, spanEl, el2 = false){
    clearErrors()
    addClass(el1, "has-error")
    el2 ? addClass(el2, 'has-error') : ''
    removeClass(spanEl, "hide")
    isValid = false
}

function validateReturnInput(input){
    clearErrors()

    if (['return-date'].indexOf(input.name) > -1 && !input.value){
        validate(input, spanError)
    }
    if (departureDate.value > returnDate.value){
        validate(departureDate, dateError)
    } else if (departureDate.value == '' || returnDate.value == ''){
        validate(returnDate, spanError, departureDate)
    }
}

export function validateTravelDate(){
    const elements = [departureDate, returnDate]
    elements.forEach(el => {
        const date = el.value.split('-')
        const year = parseInt(date[0])
        const month = parseInt(date[1])
        const day = parseInt(date[2])

        const yearNow = new Date().getFullYear()
        if (yearNow > year){
            validate(el, dateError)
        }

        const monthNow = new Date().getMonth()+1
        if (yearNow >= year && monthNow > month){
            validate(el, dateError)
        }

        const dayNow = new Date().getDate()
        if (yearNow >= year && monthNow >= month && dayNow > day){
            validate(el, dateError)
        }
    })
}

export function validateGeneralInputs(){
    inputs.forEach(input => {
        if (['from', 'to', 'departure-date'].indexOf(input.name) > -1 && !input.value){
            validate(input, spanError)
        } else if (from.value == to.value){
            validate(from, sameValueError, to)
        } else if (radioRoundtrip.checked){
            validateReturnInput(input)
        } else if (radioOneWay.checked){
            if (departureDate.value === ''){
                validateEmpty(departureDate)
            }
        }
    })
}

export function confirmValidInputs(){
    if (isValid){
        hideAll()
        clearErrors()
        removeClass(loadingScreen, "hide");

        setTimeout(function(){
            hidePreload(1)
            showAll()
            ticketsPageContent(true)
        }, 7000);
    };
}