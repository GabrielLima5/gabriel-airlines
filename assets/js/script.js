<<<<<<< HEAD
const header = document.querySelector("header");
const section = [...document.querySelectorAll("section")];
const footer = document.querySelector("footer");
const reDoSearch = document.querySelector(".redo-search");
const loadingScreen = document.querySelector(".loading");
const radioOneWay = document.querySelector("#one-way");
const radioRoundtrip = document.querySelector("#roundtrip");
const searchBtn = document.querySelector(".search-button");
const selectTicketBtn = document.querySelectorAll(".select-ticket");
const bookTicketBtn = document.querySelector(".buy-ticket-btn");
const from = document.querySelector("#from");
const fromText = document.querySelectorAll(".from-text");
const to = document.querySelector("#to");
const toText = document.querySelectorAll(".to-text");
const flightNumber = document.querySelectorAll(".flight-number");
const priceNumber = document.querySelectorAll(".price-number");
const travelDate = document.querySelector(".travel-date");
const departureDate = document.querySelector("#departure-date");
const departureTime = document.querySelectorAll(".departure-time");
const goingPage = document.querySelector("#going-page");
const returnPage = document.querySelector("#return-page")
const returnDate = document.querySelector("#return-date");
const arrivalTime = document.querySelectorAll(".arrival-time")
const spans = document.querySelectorAll(".inputs span");
const inputs =  document.querySelectorAll(".other-inputs input");
const flightDuration = document.querySelectorAll(".flight-duration");
const goingDateEl = document.querySelector(".going-date");
const returnDateEl = document.querySelector(".return-date");
const returnPanel = document.querySelector(".return-flight-info");
const selectedSeatsEl = document.querySelector(".selected-seats");
const priceEl = document.querySelectorAll(".price-number");
const finalPriceDiv = document.querySelector(".final-price");
const passengersDiv = document.querySelector(".passengers")
const finalPriceNumberEl = document.querySelector(".final-price-number");
const totalPassengersEl = document.querySelector(".total-passengers-number");
const finalFlightNumberEl = document.querySelectorAll(".final-flight-number");
const durationEl = document.querySelectorAll(".duration");
const passengersInput = document.querySelector(".passengers-input");
const modal = document.querySelector(".modal");
const fade = document.querySelector(".fade")
const backBtnModal = document.querySelector(".back-button");
const ticketId = document.querySelector(".ticket-id");
const selectSeatsReturnBtn = document.querySelector(".select-seats-return");
const goingInfo = document.querySelector(".going-flight-info");
const returnInfo = document.querySelector(".return-flight-info");
const seats = document.querySelectorAll("input[type=checkbox]");
const calcPrice = document.querySelector(".calc-price");
const seatAlertSpan = document.querySelector(".seat-alert");
const totalPriceEl = document.querySelectorAll('.total-price')

let randomFlight1 = getRandomInt(1000, 9999);
let randomFlight2 = getRandomInt(1000, 9999);
let randomFlight3 = getRandomInt(1000, 9999);
let randomFlight4 = getRandomInt(1000, 9999);
let randomFlight5 = getRandomInt(1000, 9999);
let randomFlight6 = getRandomInt(1000, 9999);
let randomFlight7 = getRandomInt(1000, 9999);
let randomFlight8 = getRandomInt(1000, 9999);
let randomFlight9 = getRandomInt(1000, 9999);
let randomFlight10 = getRandomInt(1000, 9999);
let randomFlight11 = getRandomInt(1000, 9999);
let randomFlight12 = getRandomInt(1000, 9999);

let randomPrice1 = getRandomInt(100, 3000);
let randomPrice2 = getRandomInt(100, 3000);
let randomPrice3 = getRandomInt(100, 3000);
let randomPrice4 = getRandomInt(100, 3000);
let randomPrice5 = getRandomInt(100, 3000);
let randomPrice6 = getRandomInt(100, 3000);
let randomPrice7 = getRandomInt(100, 3000);
let randomPrice8 = getRandomInt(100, 3000);
let randomPrice9 = getRandomInt(100, 3000);
let randomPrice10 = getRandomInt(100, 3000);
let randomPrice11 = getRandomInt(100, 3000);
let randomPrice12 = getRandomInt(100, 3000);

let randomHour1 = getRandomInt(0, 18);
let randomHour2 = getRandomInt(0, 18);
let randomHour3 = getRandomInt(0, 18);
let randomHour4 = getRandomInt(0, 18);
let randomHour5 = getRandomInt(0, 18);
let randomHour6 = getRandomInt(0, 18);
let randomHour7 = getRandomInt(0, 18);
let randomHour8 = getRandomInt(0, 18);
let randomHour9 = getRandomInt(0, 18);
let randomHour10 = getRandomInt(0, 18);
let randomHour11 = getRandomInt(0, 18);
let randomHour12 = getRandomInt(0, 18);

function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    let finalNumber = Math.floor(Math.random() * (max - min) + min)

    return finalNumber
}

function removeClass(element, name){
    element.classList.remove(name)
}

function addClass(element, name){
    element.classList.add(name)
}

function hideAll(){
    addClass(header, "hide")
    addClass(footer, "hide")

    section.forEach(screen => {
        addClass(screen, "hide")
    });
}

function showAll(){
    removeClass(header, "hide")
    removeClass(footer, "hide")
}

function dateFormat(date){
    return (new Date(date).getDate()+1) + '/' + (new Date(date).getMonth()+1) + '/' + new Date(date).getFullYear()
}

function flightTime(hours, minutes){
    flightDuration.forEach((time) => {
        if (minutes == 0){
            time.innerHTML = `Duração: ${hours}h`
        } else {
            time.innerHTML = `Duração: ${hours}h${minutes}m`
        }  
    });
}

function flightTimeReturn(hours, minutes){
    flightDuration.forEach((time, index) => {
        if (index >= 6 && index <= 11){
            if (minutes == 0){
                time.innerHTML = `Duração: ${hours}h`
            } else {
                time.innerHTML = `Duração: ${hours}h${minutes}m`
            } 
        }
   
    });
}


function flight1Hour(hour, index){


    switch(index){
        case 0:
            hour.innerHTML = `${eval(randomHour1+1)}:00`
            break;

        case 1:
            hour.innerHTML = `${eval(randomHour2+1)}:00`
            break;

        case 2:
            hour.innerHTML = `${eval(randomHour3+1)}:00`
            break;

        case 3:
            hour.innerHTML = `${eval(randomHour4+1)}:00`
            break;

        case 4:
            hour.innerHTML = `${eval(randomHour5+1)}:00`
            break;

        case 5:
            hour.innerHTML = `${eval(randomHour6+1)}:00`
            break;

        case 6:
            hour.innerHTML = `${eval(randomHour7+1)}:00`
            break;

        case 7:
            hour.innerHTML = `${eval(randomHour8+1)}:00`
            break;

        case 8:
            hour.innerHTML = `${eval(randomHour9+1)}:00`
            break;

        case 9:
            hour.innerHTML = `${eval(randomHour10+1)}:00`
            break;

        case 10:
            hour.innerHTML = `${eval(randomHour11+1)}:00`
            break;

        case 11:
            hour.innerHTML = `${eval(randomHour12+1)}:00`
            break;
    }
} 

function flight1Hour30Minutes(hour, index){
    switch(index){
        case 0:
            hour.innerHTML = `${eval(randomHour1+1)}:30`
            break;

        case 1:
            hour.innerHTML = `${eval(randomHour2+1)}:30`
            break;

        case 2:
            hour.innerHTML = `${eval(randomHour3+1)}:30`
            break;

        case 3:
            hour.innerHTML = `${eval(randomHour4+1)}:30`
            break;

        case 4:
            hour.innerHTML = `${eval(randomHour5+1)}:30`
            break;

        case 5:
            hour.innerHTML = `${eval(randomHour6+1)}:30`
            break;

        case 6:
            hour.innerHTML = `${eval(randomHour7+1)}:30`
            break;

        case 7:
            hour.innerHTML = `${eval(randomHour8+1)}:30`
            break;

        case 8:
            hour.innerHTML = `${eval(randomHour9+1)}:30`
            break;

        case 9:
            hour.innerHTML = `${eval(randomHour10+1)}:30`
            break;

        case 10:
            hour.innerHTML = `${eval(randomHour11+1)}:30`
            break;

        case 11:
            hour.innerHTML = `${eval(randomHour12+1)}:30`
            break;
    }
}

function flight2Hours(hour, index){

    switch(index){
        case 0:
            hour.innerHTML = `${eval(randomHour1+2)}:00`
            break;

        case 1:
            hour.innerHTML = `${eval(randomHour2+2)}:00`
            break;

        case 2:
            hour.innerHTML = `${eval(randomHour3+2)}:00`
            break;

        case 3:
            hour.innerHTML = `${eval(randomHour4+2)}:00`
            break;

        case 4:
            hour.innerHTML = `${eval(randomHour5+2)}:00`
            break;

        case 5:
            hour.innerHTML = `${eval(randomHour6+2)}:00`
            break;

        case 6:
            hour.innerHTML = `${eval(randomHour7+2)}:00`
            break;

        case 7:
            hour.innerHTML = `${eval(randomHour8+2)}:00`
            break;

        case 8:
            hour.innerHTML = `${eval(randomHour9+2)}:00`
            break;

        case 9:
            hour.innerHTML = `${eval(randomHour10+2)}:00`
            break;

        case 10:
            hour.innerHTML = `${eval(randomHour11+2)}:00`
            break;

        case 11:
            hour.innerHTML = `${eval(randomHour12+2)}:00`
            break;
    }
}

function flight2Hours30Minutes(hour, index){

    switch(index){
        case 0:
            hour.innerHTML = `${eval(randomHour1+2)}:30`
            break;

        case 1:
            hour.innerHTML = `${eval(randomHour2+2)}:30`
            break;

        case 2:
            hour.innerHTML = `${eval(randomHour3+2)}:30`
            break;

        case 3:
            hour.innerHTML = `${eval(randomHour4+2)}:30`
            break;

        case 4:
            hour.innerHTML = `${eval(randomHour5+2)}:30`
            break;

        case 5:
            hour.innerHTML = `${eval(randomHour6+2)}:30`
            break;

        case 6:
            hour.innerHTML = `${eval(randomHour7+2)}:30`
            break;

        case 7:
            hour.innerHTML = `${eval(randomHour8+2)}:30`
            break;

        case 8:
            hour.innerHTML = `${eval(randomHour9+2)}:30`
            break;

        case 9:
            hour.innerHTML = `${eval(randomHour10+2)}:30`
            break;

        case 10:
            hour.innerHTML = `${eval(randomHour11+2)}:30`
            break;

        case 11:
            hour.innerHTML = `${eval(randomHour12+2)}:30`
            break;
    }
}

function flight3Hours(hour, index){
    switch(index){
        case 0:
            hour.innerHTML = `${eval(randomHour1+3)}:00`
            break;

        case 1:
            hour.innerHTML = `${eval(randomHour2+3)}:00`
            break;

        case 2:
            hour.innerHTML = `${eval(randomHour3+3)}:00`
            break;

        case 3:
            hour.innerHTML = `${eval(randomHour4+3)}:00`
            break;

        case 4:
            hour.innerHTML = `${eval(randomHour5+3)}:00`
            break;

        case 5:
            hour.innerHTML = `${eval(randomHour6+3)}:00`
            break;

        case 6:
            hour.innerHTML = `${eval(randomHour7+3)}:00`
            break;

        case 7:
            hour.innerHTML = `${eval(randomHour8+3)}:00`
            break;

        case 8:
            hour.innerHTML = `${eval(randomHour9+3)}:00`
            break;

        case 9:
            hour.innerHTML = `${eval(randomHour10+3)}:00`
            break;

        case 10:
            hour.innerHTML = `${eval(randomHour11+3)}:00`
            break;

        case 11:
            hour.innerHTML = `${eval(randomHour12+3)}:00`
            break;
    }
}

function flight3Hours30Minutes(hour, index){
    switch(index){
        case 0:
            hour.innerHTML = `${eval(randomHour1+3)}:30`
            break;

        case 1:
            hour.innerHTML = `${eval(randomHour2+3)}:30`
            break;

        case 2:
            hour.innerHTML = `${eval(randomHour3+3)}:30`
            break;

        case 3:
            hour.innerHTML = `${eval(randomHour4+3)}:30`
            break;

        case 4:
            hour.innerHTML = `${eval(randomHour5+3)}:30`
            break;

        case 5:
            hour.innerHTML = `${eval(randomHour6+3)}:30`
            break;

        case 6:
            hour.innerHTML = `${eval(randomHour7+3)}:30`
            break;

        case 7:
            hour.innerHTML = `${eval(randomHour8+3)}:30`
            break;

        case 8:
            hour.innerHTML = `${eval(randomHour9+3)}:30`
            break;

        case 9:
            hour.innerHTML = `${eval(randomHour10+3)}:30`
            break;

        case 10:
            hour.innerHTML = `${eval(randomHour11+3)}:30`
            break;

        case 11:
            hour.innerHTML = `${eval(randomHour12+3)}:30`
            break;
    }
}

function flight4Hours(hour, index){

    switch(index){
        case 0:
            hour.innerHTML = `${eval(randomHour1+4)}:00`
            break;

        case 1:
            hour.innerHTML = `${eval(randomHour2+4)}:00`
            break;

        case 2:
            hour.innerHTML = `${eval(randomHour3+4)}:00`
            break;

        case 3:
            hour.innerHTML = `${eval(randomHour4+4)}:00`
            break;

        case 4:
            hour.innerHTML = `${eval(randomHour5+4)}:00`
            break;

        case 5:
            hour.innerHTML = `${eval(randomHour6+4)}:00`
            break;

        case 6:
            hour.innerHTML = `${eval(randomHour7+4)}:00`
            break;

        case 7:
            hour.innerHTML = `${eval(randomHour8+4)}:00`
            break;

        case 8:
            hour.innerHTML = `${eval(randomHour9+4)}:00`
            break;

        case 9:
            hour.innerHTML = `${eval(randomHour10+4)}:00`
            break;

        case 10:
            hour.innerHTML = `${eval(randomHour11+4)}:00`
            break;

        case 11:
            hour.innerHTML = `${eval(randomHour12+4)}:00`
            break;
    }
}

function flight4Hours30Minutes(hour, index){

    switch (index){

        case 0:
            hour.innerHTML = `${eval(randomHour1+4)}:30`
            break;

        case 1:
            hour.innerHTML = `${eval(randomHour2+4)}:30`
            break;

        case 2:
            hour.innerHTML = `${eval(randomHour3+4)}:30`
            break;

        case 3:
            hour.innerHTML = `${eval(randomHour4+4)}:30`
            break;

        case 4:
            hour.innerHTML = `${eval(randomHour5+4)}:30`
            break;

        case 5:
            hour.innerHTML = `${eval(randomHour6+4)}:30`
            break;

        case 6:
            hour.innerHTML = `${eval(randomHour7+4)}:30`
            break;

        case 7:
            hour.innerHTML = `${eval(randomHour8+4)}:30`
            break;

        case 8:
            hour.innerHTML = `${eval(randomHour9+4)}:30`
            break;

        case 9:
            hour.innerHTML = `${eval(randomHour10+4)}:30`
            break;

        case 10:
            hour.innerHTML = `${eval(randomHour11+4)}:30`
            break;

        case 11:
            hour.innerHTML = `${eval(randomHour12+4)}:30`
            break;
    }
}

function flight5Hours(hour, index){

    switch (index){

        case 0:
            hour.innerHTML = `${eval(randomHour1+5)}:00`
            break;

        case 1:
            hour.innerHTML = `${eval(randomHour2+5)}:00`
            break;

        case 2:
            hour.innerHTML = `${eval(randomHour3+5)}:00`
            break;

        case 3:
            hour.innerHTML = `${eval(randomHour4+5)}:00`
            break;

        case 4:
            hour.innerHTML = `${eval(randomHour5+5)}:00`
            break;

        case 5:
            hour.innerHTML = `${eval(randomHour6+5)}:00`
            break;

        case 6:
            hour.innerHTML = `${eval(randomHour7+5)}:00`
            break;

        case 7:
            hour.innerHTML = `${eval(randomHour8+5)}:00`
            break;

        case 8:
            hour.innerHTML = `${eval(randomHour9+5)}:00`
            break;

        case 9:
            hour.innerHTML = `${eval(randomHour10+5)}:00`
            break;

        case 10:
            hour.innerHTML = `${eval(randomHour11+5)}:00`
            break;

        case 11:
            hour.innerHTML = `${eval(randomHour12+5)}:00`
            break;
    }
}

function departureRandomHour(hour, index){

    switch(index){

        case 0:
            hour.innerHTML = `${randomHour1}:00`
            break;

        case 1:
            hour.innerHTML = `${randomHour2}:00`
            break;

        case 2:
            hour.innerHTML = `${randomHour3}:00`
            break;

        case 3:
            hour.innerHTML = `${randomHour4}:00`
            break;

        case 4:
            hour.innerHTML = `${randomHour5}:00`
            break;

        case 5:
            hour.innerHTML = `${randomHour6}:00`
            break;

        case 6:
            hour.innerHTML = `${randomHour7}:00`
            break;

        case 7:
            hour.innerHTML = `${randomHour8}:00`
            break;

        case 8:
            hour.innerHTML = `${randomHour9}:00`
            break;

        case 9:
            hour.innerHTML = `${randomHour10}:00`
            break;

        case 10:
            hour.innerHTML = `${randomHour11}:00`
            break;

        case 11:
            hour.innerHTML = `${randomHour12}:00`
            break;
    }
}

function arrivalHour1(hour, index){

    switch(from.value){

        case "SP - Congonhas (CGH)":
        case "SP - Guarulhos (GRU)":
        case "Campinas (VCP)":

            switch(to.value){

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "RJ - Santos Dumont (SDU)":
                case "RJ - Galeão (GIG)":
                case "BH - Confins (CNF)":
                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":

                    flight1Hour(hour, index);
                    flightTime(1, 0);

                break;

                case "Porto Alegre (POA)":
                case "Vitória (VIX)":
                case "Campo Grande (CGR)":
                case "Goiânia (GYN)":
                case "Brasília (BSB)":

                    flight1Hour30Minutes(hour, index)
                    flightTime(1, 30);

                break;

                case "Salvador (SSA)":
                case "Palmas (PMW)":
                case "Cuiabá (CGB)":

                    flight2Hours(hour, index);
                    flightTime(2, 0);

                break;

                case "Aracaju (AJU)":

                    flight2Hours30Minutes(hour, index);
                    flightTime(2, 30);

                break;

                case "Maceió (MCZ)":
                case "Recife (REC)":
                case "João Pessoa (JPA)":
                case "Natal (NAT)":
                case "Teresina (THE)":

                    flight3Hours(hour, index);
                    flightTime(3, 0);

                break;

                case "Fortaleza (FOR)":
                case "São Luís (SLZ)":
                case "Belém (BEL)":
                case "Porto Velho (PVH)":

                    flight3Hours30Minutes(hour, index)
                    flightTime(3, 30)

                break;

                case "Manaus (MAO)":
                case "Macapá (MCP)":
                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":

                    flight4Hours(hour, index);
                    flightTime(4, 0);

                break;
            }

        break;

        case "RJ - Galeão (GIG)":
        case "RJ - Santos Dumont (SDU)":

            switch(to.value){

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Vitória (VIX)":
                case "BH - Confins (CNF)":

                    flight1Hour(hour, index);
                    flightTime(1, 0);

                break;

                case "Goiânia (GYN)":
                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":
                case "Brasília (BSB)":

                    flight1Hour30Minutes(hour, index);
                    flightTime(1, 30);

                break;

                case "Salvador (SSA)":
                case "Porto Alegre (POA)":
                case "Palmas (PMW)":
                case "Campo Grande (CGR)":

                    flight2Hours(hour, index);
                    flightTime(2, 0);

                break;

                case "Cuiabá (CGB)":
                case "Aracaju (AJU)":
                case "Recife (REC)":
                case "Maceió (MCZ)":

                    flight2Hours30Minutes(hour, index);
                    flightTime(2, 30);

                break;

                case "Fortaleza (FOR)":
                case "João Pessoa (JPA)":
                case "Natal (NAT)":
                case "Teresina (THE)":
                case "São Luís (SLZ)":

                    flight3Hours(hour, index);
                    flightTime(3, 0);

                break;

                case "Porto Velho (PVH)":
                case "Belém (BEL)":
                case "Macapá (MCP)":

                    flight3Hours30Minutes(hour, index);
                    flightTime(3, 30);

                break;

                case "Manaus (MAO)":
                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":

                    flight4Hours(hour, index);
                    flightTime(4, 0);

                break;
            }

        break;

        case "BH - Confins (CNF)":

            switch(to.value){

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Vitória (VIX)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":

                    flight1Hour(hour, index);
                    flightTime(1, 0);

                break;

                case "Salvador (SSA)":
                case "Goiânia (GYN)":
                case "Brasília (BSB)":
                case "Curitiba (CWB)":

                    flight1Hour30Minutes(hour, index);
                    flightTime(1, 30);

                break;

                case "Florianópolis (FLN)":
                case "Campo Grande (CGR)":
                case "Palmas (PMW)":
                case "Maceió (MCZ)":
                case "Aracaju (AJU)":

                    flight2Hours(hour, index);
                    flightTime(2, 0);

                break;

                case "Recife (REC)":
                case "Porto Alegre (POA)":
                case "João Pessoa (JPA)":
                case "Cuiabá (CGB)":
                case "Natal (NAT)":

                    flight2Hours30Minutes(hour, index);
                    flightTime(2, 30);

                break;

                case "Fortaleza (FOR)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "Belém (BEL)":

                    flight3Hours(hour, index);
                    flightTime(3, 0);

                break;

                case "Manaus (MAO)":
                case "Porto Velho (PVH)":
                case "Macapá (MCP)":

                    flight3Hours30Minutes(hour, index);
                    flightTime(3, 30);

                break;

                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":

                    flight4Hours(hour, index);
                    flightTime(4, 0)

                break;
            }
        break;

        case "Vitória (VIX)":

            switch (to.value){

                case "BH - Confins (CNF)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":

                    flight1Hour(hour, index);
                    flightTime(1, 0);

                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Salvador (SSA)":
                case "Aracaju (AJU)":

                    flight1Hour30Minutes(hour, index);
                    flightTime(1, 30);

                break;

                case "Maceió (MCZ)":
                case "Recife (REC)":
                case "Palmas (PMW)":
                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":

                    flight2Hours(hour, index);
                    flightTime(2, 0);

                break;

                case "Porto Alegre (POA)":
                case "João Pessoa (JPA)":
                case "Fortaleza (FOR)":
                case "Natal (NAT)":
                case "Campo Grande (CGR)":

                    flight2Hours30Minutes(hour, index);
                    flightTime(2, 30);

                break;

                case "Cuiabá (CGB)":
                case "São Luís (SLZ)":
                case "Belém (BEL)":
                case "Teresina (THE)":

                    flight3Hours(hour, index);
                    flightTime(3, 0);

                break;

                case "Porto Velho (PVH)":
                case "Manaus (MAO)":
                case "Macapá (MCP)":

                    flight3Hours30Minutes(hour, index);
                    flightTime(3, 30);

                break;

                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":

                    flight4Hours(hour, index);
                    flightTime(4, 0);

                break;
            }
        break;

        case "Curitiba (CWB)":
        case "Florianópolis (FLN)":

            switch(to.value){

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Florianópolis (FLN)":
                case "Curitiba (CWB)":
                case "Porto Alegre (POA)":

                    flight1Hour(hour, index);
                    flightTime(1, 0);

                break;

                case "BH - Confins (CNF)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":

                    flight1Hour30Minutes(hour, index);
                    flightTime(1, 30);

                break;

                case "Campo Grande (CGR)":
                case "Vitória (VIX)":
                case "Goiânia (GYN)":
                case "Brasília (BSB)":
                
                    flight2Hours(hour, index);
                    flightTime(2, 0);

                break;

                case "Salvador (SSA)":
                case "Aracaju (AJU)":
                case "Cuiabá (CGB)":
                case "Maceió (MCZ)":

                    flight2Hours30Minutes(hour, index);
                    flightTime(2, 30);

                break;

                case "Recife (REC)":
                case "João Pessoa (JPA)":
                case "Natal (NAT)":
                case "Palmas (PMW)":

                    flight3Hours(hour, index);
                    flightTime(3, 0);

                break;

                case "Fortaleza (FOR)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "Belém (BEL)":

                    flight3Hours30Minutes(hour, index);
                    flightTime(3, 30);

                break;

                case "Manaus (MAO)":
                case "Porto Velho (PVH)":
                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":
                case "Macapá (MCP)":

                    flight4Hours(hour, index);
                    flightTime(4, 0);

                break;
            }

        break;

        case "Porto Alegre (POA)":

            switch (to.value){

                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":

                    flight1Hour(hour, index);
                    flightTime(1, 0);

                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Campo Grande (CGR)":

                    flight1Hour30Minutes(hour, index);
                    flightTime(1, 30);

                break;

                case "BH - Confins (CNF)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Vitória (VIX)":

                    flight2Hours(hour, index);
                    flightTime(2, 0);

                break;

                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Salvador (SSA)":

                    flight2Hours30Minutes(hour, index);
                    flightTime(2, 30);

                break;

                case "Aracaju (AJU)":
                case "Cuiabá (CGB)":
                case "Maceió (MCZ)":
                case "Recife (REC)":
                case "Palmas (PMW)":

                    flight3Hours30Minutes(hour, index);
                    flightTime(3, 30);

                break;

                case "Natal (NAT)":
                case "Fortaleza (FOR)":
                case "João Pessoa (JPA)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "Belém (BEL)":

                    flight4Hours(hour, index);
                    flightTime(4, 0);

                break;

                case "Manaus (MAO)":
                case "Porto Velho (PVH)":
                case "Rio Branco (RBR)":
            
                    flight4Hours30Minutes(hour, index);
                    flightTime(4, 30);

                break;

                case "Boa Vista (BVB)":
                case "Macapá (MCP)":

                    flight5Hours(hour, index);
                    flightTime(5, 0);

                break;
            }

        break;

        case "Campo Grande (CGR)":
            
            switch (to.value){

                case "Cuiabá (CGB)":
                
                    flight1Hour(hour, index);
                    flightTime(1, 0);

                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":
                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Porto Alegre (POA)":

                    flight1Hour30Minutes(hour, index);
                    flightTime(1, 30);

                break;

                case "BH - Confins (CNF)": 
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Vitória (VIX)":
                case "Porto Velho (PVH)":

                    flight2Hours(hour, index);
                    flightTime(2, 0);

                break;

                case "Rio Branco (RBR)":
                case "Salvador (SSA)":
                case "Aracaju (AJU)":
                case "Palmas (PMW)":

                    flight3Hours(hour, index);
                    flightTime(3, 0);

                break;

                case "Belém (BEL)":
                case "Maceió (MCZ)":
                case "Recife (REC)":

                    flight3Hours30Minutes(hour, index);
                    flightTime(3, 30);

                break;

                case "Natal (NAT)":
                case "Fortaleza (FOR)":
                case "João Pessoa (JPA)":
                case "Manaus (MAO)":
                case "Boa Vista (BVB)":
                case "Macapá (MCP)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":

                    flight4Hours(hour, index);
                    flightTime(4, 0);

                break;
            }

        break;

        case "Cuiabá (CGB)":

            switch (to.value){

                case "Campo Grande (CGR)":

                    flight1Hour(hour, index);
                    flightTime(1, 0);

                break;

                case "Goiânia (GYN)":
                case "Brasília (BSB)":

                    flight1Hour30Minutes(hour, index);
                    flightTime(1, 30);

                break;

                case "Porto Velho (PVH)":
                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Curitiba (CWB)":
                case "BH - Confins (CNF)":

                    flight2Hours(hour, index);
                    flightTime(2, 0);

                break;

                case "Florianópolis (FLN)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Vitória (VIX)":
                case "Palmas (PMW)":

                    flight2Hours30Minutes(hour, index);
                    flightTime(2, 30);

                break;

                case "Porto Alegre (POA)":
                case "Salvador (SSA)":
                case "Aracaju (AJU)":
                case "Maceió (MCZ)":
                case "Rio Branco (RBR)":

                    flight3Hours(hour, index);
                    flightTime(3, 0);

                break;

                case "Recife (REC)":
                case "Natal (NAT)":
                case "Fortaleza (FOR)":
                case "João Pessoa (JPA)":
                case "Manaus (MAO)":
                case "Boa Vista (BVB)":
                case "Macapá (MCP)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "Belém (BEL)":

                    flight3Hours30Minutes(hour, index);
                    flightTime(3, 30);
                
                break;
            }

        break;

        case "Goiânia (GYN)":
        case "Brasília (BSB)":

            switch (to.value){

                case "Goiânia (GYN)":
                case "Brasília (BSB)":
                case "BH - Confins (CNF)":
                case "Palmas (PMW)":
                
                    flight1Hour(hour, index);
                    flightTime(1, 0);

                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Vitória (VIX)":
                case "Campo Grande (CGR)":
                case "Cuiabá (CGB)":

                    flight1Hour30Minutes(hour, index);
                    flightTime(1, 30);

                break;

                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":
                case "Salvador (SSA)":
                case "Aracaju (AJU)":

                    flight2Hours(hour, index);
                    flightTime(2, 0);

                break;

                case "Belém (BEL)":
                case "Porto Alegre (POA)":
                case "Recife (REC)":
                case "Maceió (MCZ)":
                case "João Pessoa (JPA)":
                case "Fortaleza (FOR)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "Natal (NAT)":
                case "Macapá (MCP)":

                    flight2Hours30Minutes(hour, index);
                    flightTime(2, 30);

                break;

                case "Manaus (MAO)":
                case "Porto Velho (PVH)":
                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":

                    flight3Hours(hour, index);
                    flightTime(3, 0);

                break;
            }

        break;

        case "Aracaju (AJU)":
        case "Maceió (MCZ)":

            switch (to.value){

                case "Salvador (SSA)":
                case "Aracaju (AJU)":
                case "Maceió (MCZ)":
                case "Recife (REC)":
                case "João Pessoa (JPA)":

                    flight1Hour(hour, index);
                    flightTime(1, 0);

                break;

                case "Fortaleza (FOR)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "Natal (NAT)":

                    flight2Hours(hour, index);
                    flightTime(2, 0);

                break;

                case "BH - Confins (CNF)":
                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Palmas (PMW)":
                case "Belém (BEL)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Vitória (VIX)":

                    flight2Hours30Minutes(hour, index);
                    flightTime(2, 30);

                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Campo Grande (CGR)":
                case "Cuiabá (CGB)":

                    flight3Hours(hour, index);
                    flightTime(3, 0);

                break;
                
                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":
                case "Manaus (MAO)":
                case "Macapá (MCP)":
                
                    flight3Hours30Minutes(hour, index);
                    flightTime(3, 30);

                break;

                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":
                case "Porto Velho (PVH)":
                case "Porto Alegre (POA)":

                    flight5Hours(hour, index);
                    flightTime(5, 0);

                break;
            }

        break;

        case "Salvador (SSA)":

            switch (to.value){

                case "Maceió (MCZ)":
                case "Aracaju (AJU)":
                case "Recife (REC)":
                
                    flight1Hour(hour, index);
                    flightTime(1, 0);

                break;

                case "BH - Confins (CNF)":
                case "Vitória (VIX)":
                case "Natal (NAT)":
                case "João Pessoa (JPA)":
                
                    flight1Hour30Minutes(hour, index);
                    flightTime(1, 30);

                break;

                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                
                    flight2Hours(hour, index);
                    flightTime(2, 0);

                break;

                case "Fortaleza (FOR)":
                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "Palmas (PMW)":
                
                    flight2Hours30Minutes(hour, index);
                    flightTime(2, 30);

                break;

                case "Curitiba (CWB)":
                case "Campo Grande (CGR)":
                case "Cuiabá (CGB)":
                case "Florianópolis (FLN)":
                case "Belém (BEL)":

                    flight3Hours(hour, index);
                    flightTime(3, 0);

                break;

                case "Porto Alegre (POA)":
                case "Porto Velho (PVH)":
                case "Macapá (MCP)":
                case "Manaus (MAO)":

                    flight3Hours30Minutes(hour, index);
                    flightTime(3, 30);

                break;

                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":

                    flight5Hours(hour, index);
                    flightTime(5, 0);

                break;

            }
        break;

        case "Recife (REC)":
        case "João Pessoa (JPA)":

            switch (to.value){

                case "Recife (REC)":
                case "Maceió (MCZ)":
                case "Aracaju (AJU)":
                case "Fortaleza (FOR)":
                case "João Pessoa (JPA)":
                case "Natal (NAT)":
                
                    flight1Hour(hour, index);
                    flightTime(1, 0);

                break;

                case "Salvador (SSA)":

                    flight1Hour30Minutes(hour, index);
                    flightTime(1, 30);

                break;

                case "São Luís (SLZ)":
                case "Teresina (THE)":

                    flight2Hours(hour, index);
                    flightTime(2, 0);

                break;

                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "BH - Confins (CNF)":
                case "Palmas (PMW)":
                case "Belém (BEL)":
                case "Vitória (VIX)":

                    flight2Hours30Minutes(hour, index);
                    flightTime(2, 30);
                
                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Macapá (MCP)":

                    flight3Hours(hour, index);
                    flightTime(3, 0);

                break;

                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":
                case "Campo Grande (CGR)":
                case "Cuiabá (CGB)":

                    flight3Hours30Minutes(hour, index);
                    flightTime(3, 30);

                break;

                case "Manaus (MAO)":
                case "Porto Alegre (POA)":

                    flight4Hours(hour, index);
                    flightTime(4, 0);

                break;

                case "Porto Velho (PVH)":
                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":

                    flight4Hours30Minutes(hour, index);
                    flightTime(4, 30);

                break;

            }
        break;

        case "Natal (NAT)":
        case "Fortaleza (FOR)":

            switch (to.value){

                case "Natal (NAT)":
                case "Recife (REC)":
                case "João Pessoa (JPA)":
                case "Maceió (MCZ)":
                case "Fortaleza (FOR)":

                    flight1Hour(hour, index);
                    flightTime(1, 0);

                break;

                case "Salvador (SSA)":
                case "Aracaju (AJU)":
                case "Teresina (THE)":
                case "São Luís (SLZ)":

                    flight1Hour30Minutes(hour, index);
                    flightTime(1, 30);

                break;

                case "Belém (BEL)":
                case "Palmas (PMW)":
                case "Macapá (MCP)":

                    flight2Hours(hour, index);
                    flightTime(2, 0);

                break;
                
                case "BH - Confins (CNF)":
                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Vitória (VIX)":

                    flight2Hours30Minutes(hour, index);
                    flightTime(2, 30);

                break;

                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":

                    flight3Hours(hour, index);
                    flightTime(3, 0);

                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                    case "Cuiabá (CGB)":

                    flight3Hours30Minutes(hour, index);
                    flightTime(3, 30);

                break;

                case "Curitiba (CWB)":
                case "Manaus (MAO)":
                
                    flight4Hours(hour, index);
                    flightTime(4, 0);

                break;

                case "Campo Grande (CGR)":
                case "Florianópolis (FLN)":

                    flight4Hours30Minutes(hour, index);
                    flightTime(4, 30);

                break;

                case "Porto Alegre (POA)":
                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":
                case "Porto Velho (PVH)":

                    flight5Hours(hour, index);
                    flightTime(5, 0);
            }
        break;

        case "São Luís (SLZ)":
        case "Teresina (THE)":

            switch (to.value){

                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "Fortaleza (FOR)":
                case "Belém (BEL)":

                    flight1Hour(hour, index);
                    flightTime(1, 0);

                break;

                case "Macapá (MCP)":
                case "Palmas (PMW)":
                
                    flight1Hour30Minutes(hour, index);
                    flightTime(1, 30);

                break;

                case "Recife (REC)":
                case "Natal (NAT)":
                case "João Pessoa (JPA)":
                case "Aracaju (AJU)":
                case "Maceió (MCZ)":
                case "Salvador (SSA)":
    
                    flight2Hours(hour, index);
                    flightTime(2, 0);

                break;

                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Manaus (MAO)":
                case "Boa Vista (BVB)":

                    flight2Hours30Minutes(hour, index);
                    flightTime(2, 30);

                break;

                case "BH - Confins (CNF)":
                case "Vitória (VIX)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Cuiabá (CGB)":

                    flight3Hours(hour, index);
                    flightTime(3, 0);

                break;
            
                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Campo Grande (CGR)":
                case "Porto Velho (PVH)":

                    flight3Hours30Minutes(hour, index);
                    flightTime(3, 30);

                break;

                case "Curitiba (CWB)":
                case "Rio Branco (RBR)":
                
                    flight4Hours(hour, index);
                    flightTime(4, 0);

                break;

                case "Florianópolis (FLN)":
                case "Porto Alegre (POA)":

                    flight5Hours(hour, index);
                    flightTime(5, 0);

                break;
            
            }

        break;


        case "Palmas (PMW)":

            switch (to.value){

                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                
                    flight1Hour(hour, index);
                    flightTime(1, 0);

                break;

                case "Teresina (THE)":
                case "São Luís (SLZ)":
                case "Belém (BEL)":
                case "Macapá (MCP)":

                    flight1Hour30Minutes(hour, index);
                    flightTime(1, 30);

                break;

                case "Recife (REC)":
                case "Natal (NAT)":
                case "João Pessoa (JPA)":
                case "Aracaju (AJU)":
                case "Maceió (MCZ)":
                case "Salvador (SSA)":
                case "Fortaleza (FOR)":
                case "BH - Confins (CNF)":
                case "Cuiabá (CGB)":
                case "Manaus (MAO)":

                    flight2Hours(hour, index);
                    flightTime(2, 0);

                break;

                case "Vitória (VIX)":
                case "Boa Vista (BVB)":
                case "Campo Grande (CGR)":
                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":

                    flight2Hours30Minutes(hour, index);
                    flightTime(2, 30);

                break;

                case "Curitiba (CWB)":
                case "Porto Velho (PVH)":
                case "Rio Branco (RBR)":

                    flight3Hours(hour, index);
                    flightTime(3, 0);

                break;

                case "Florianópolis (FLN)":
                case "Porto Alegre (POA)":

                    flight3Hours30Minutes(hour, index);
                    flightTime(3, 30);

                break;

            }
        break;

        case "Belém (BEL)":
        case "Macapá (MCP)":
            
            switch (to.value){

                case "Belém (BEL)":
                case "Macapá (MCP)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
               
                    flight1Hour(hour, index);
                    flightTime(1, 0);

                break;

                case "Manaus (MAO)":
                case "Palmas (PMW)":
                case "Fortaleza (FOR)":
                case "Boa Vista (BVB)":

                    flight2Hours(hour, index);
                    flightTime(2, 0);

                break;

                case "Recife (REC)":
                case "Aracaju (AJU)":
                case "Natal (NAT)":
                case "João Pessoa (JPA)":
                case "Maceió (MCZ)":
                case "Brasília (BSB)":
                case "Goiânia (GYN)":

                    flight2Hours30Minutes(hour, index);
                    flightTime(2, 30);

                break;

                case "Porto Velho (PVH)":
                case "Rio Branco (RBR)":
                case "BH - Confins (CNF)":
                case "Vitória (VIX)":
                case "Cuiabá (CGB)":
                case "Salvador (SSA)":
                
                    flight3Hours(hour, index);
                    flightTime(3, 0);

                break;
                
                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Campo Grande (CGR)":
                
                    flight3Hours30Minutes(hour, index);
                    flightTime(3, 30);

                break;

                case "Curitiba (CWB)":
                
                    flight4Hours(hour, index);
                    flightTime(4, 0);

                break;

                case "Florianópolis (FLN)":
                case "Porto Alegre (POA)":

                    flight5Hours(hour, index);
                    flightTime(5, 0);

                break;

            }

        break;

        case "Manaus (MAO)":

            switch (to.value){

                case "Boa Vista (BVB)":
                
                    flight1Hour(hour, index);
                    flightTime(1, 0);

                break;

                case "Porto Velho (PVH)":
                case "Rio Branco (RBR)":
                case "Macapá (MCP)":

                    flight1Hour30Minutes(hour, index);
                    flightTime(1, 30);

                break;

                case "Belém (BEL)":

                    flight2Hours(hour, index);
                    flightTime(2, 0);

                break;

                case "Palmas (PMW)":

                    flight2Hours30Minutes(hour, index);
                    flightTime(2, 30);

                break;

                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Cuiabá (CGB)":
                case "Teresina (THE)":
                case "São Luís (SLZ)":

                    flight3Hours(hour, index);
                    flightTime(3, 0);

                break;

                case "Fortaleza (FOR)":
                case "Natal (NAT)":
                case "Recife (REC)":
                case "Salvador (SSA)":
                case "Aracaju (AJU)":
                case "Maceió (MCZ)":
                case "João Pessoa (JPA)":
                case "BH - Confins (CNF)":
                case "Vitória (VIX)":

                    flight3Hours30Minutes(hour, index);
                    flightTime(3, 30);

                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Campo Grande (CGR)":

                    flight4Hours(hour, index);
                    flightTime(4, 0);

                break;

                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":

                    flight4Hours30Minutes(hour, index);
                    flightTime(4, 30);

                break;

                case "Porto Alegre (POA)":

                    flight5Hours(hour, index);
                    flightTime(5, 0)
            }
        break;

        case "Boa Vista (BVB)":

            switch (to.value){

                case "Manaus (MAO)":
                case "Macapá (MCP)":

                    flight1Hour(hour, index);
                    flightTime(1, 0);

                break;

                case "Belém (BEL)":
                case "Porto Velho (PVH)":
                case "Rio Branco (RBR)":
                
                    flight2Hours(hour, index);
                    flightTime(2, 0);
                
                break;

                case "Cuiabá (CGB)":
                case "São Luís (SLZ)":

                    flight2Hours30Minutes(hour, index);
                    flightTime(2, 30);

                break;

                case "Palmas (PMW)":
                
                    flight3Hours(hour, index);
                    flightTime(3, 0);

                break;

                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Teresina (THE)":
                case "Fortaleza (FOR)":
            
                    flight3Hours30Minutes(hour, index);
                    flightTime(3, 30);

                break;

                case "BH - Confins (CNF)":
                case "Vitória (VIX)":
                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Recife (REC)":
                case "Natal (NAT)":
                case "João Pessoa (JPA)":
                case "Salvador (SSA)":
                case "Aracaju (AJU)":
                case "Maceió (MCZ)":

                    flight4Hours(hour, index);
                    flightTime(4, 0);

                break;

                case "Curitiba (CWB)":

                    flight4Hours30Minutes(hour, index);
                    flightTime(4, 30);

                break;

                case "Florianópolis (FLN)":
                case "Porto Alegre (POA)":

                    flight5Hours(hour, index);
                    flightTime(5, 0);

                break;
            }
        break;

        case "Rio Branco (RBR)":
        case "Porto Velho (PVH)":

            switch (to.value){

                case "Rio Branco (RBR)":
                case "Porto Velho (PVH)":

                    flight1Hour(hour, index);
                    flightTime(1, 0);

                break;

                case "Manaus (MAO)":
                
                    flight1Hour30Minutes(hour, index);
                    flightTime(1, 30);

                break;

                case "Cuiabá (CGB)":
                case "Boa Vista (BVB)":

                    flight2Hours30Minutes(hour, index);
                    flightTime(2, 30);

                break;

                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Palmas (PMW)":
                
                    flight3Hours(hour, index);
                    flightTime(3, 0);

                break;

                case "Campo Grande (CGR)":
                case "Belém (BEL)":
                case "Macapá (MCP)":
                
                    flight3Hours30Minutes(hour, index);
                    flightTime(3, 30);

                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "BH - Confins (CNF)":

                    flight4Hours(hour, index);
                    flightTime(4, 0);

                break;

                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Vitória (VIX)":
                case "Curitiba (CWB)":
                case "Fortaleza (FOR)":
                
                    flight4Hours30Minutes(hour, index);
                    flightTime(4, 30);

                break;

                case "Salvador (SSA)":
                case "Porto Alegre (POA)":
                case "Florianópolis (FLN)":
                case "Aracaju (AJU)":
                case "Maceió (MCZ)":
                case "Recife (REC)":
                case "João Pessoa (JPA)":
                case "Natal (NAT)":

                    flight5Hours(hour, index);
                    flightTime(5, 0);

                break;

            }

        break;
    }
}

function arrivalHour2(hour, index){

    switch(to.value){

        case "SP - Congonhas (CGH)":
        case "SP - Guarulhos (GRU)":
        case "Campinas (VCP)":

            switch(from.value){

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "RJ - Santos Dumont (SDU)":
                case "RJ - Galeão (GIG)":
                case "BH - Confins (CNF)":
                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":

                    flight1Hour(hour, index);
                    flightTimeReturn(1, 0);

                break;

                case "Porto Alegre (POA)":
                case "Vitória (VIX)":
                case "Campo Grande (CGR)":
                case "Goiânia (GYN)":
                case "Brasília (BSB)":

                    flight1Hour30Minutes(hour, index)
                    flightTimeReturn(1, 30);

                break;

                case "Salvador (SSA)":
                case "Palmas (PMW)":
                case "Cuiabá (CGB)":

                    flight2Hours(hour, index);
                    flightTimeReturn(2, 0);

                break;

                case "Aracaju (AJU)":

                    flight2Hours30Minutes(hour, index);
                    flightTimeReturn(2, 30);

                break;

                case "Maceió (MCZ)":
                case "Recife (REC)":
                case "João Pessoa (JPA)":
                case "Natal (NAT)":
                case "Teresina (THE)":

                    flight3Hours(hour, index);
                    flightTimeReturn(3, 0);

                break;

                case "Fortaleza (FOR)":
                case "São Luís (SLZ)":
                case "Belém (BEL)":
                case "Porto Velho (PVH)":

                    flight3Hours30Minutes(hour, index)
                    flightTimeReturn(3, 30)

                break;

                case "Manaus (MAO)":
                case "Macapá (MCP)":
                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":

                    flight4Hours(hour, index);
                    flightTimeReturn(4, 0);

                break;
            }

        break;

        case "RJ - Galeão (GIG)":
        case "RJ - Santos Dumont (SDU)":

            switch(from.value){

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Vitória (VIX)":
                case "BH - Confins (CNF)":

                    flight1Hour(hour, index);
                    flightTimeReturn(1, 0);

                break;

                case "Goiânia (GYN)":
                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":
                case "Brasília (BSB)":

                    flight1Hour30Minutes(hour, index);
                    flightTimeReturn(1, 30);

                break;

                case "Salvador (SSA)":
                case "Porto Alegre (POA)":
                case "Palmas (PMW)":
                case "Campo Grande (CGR)":

                    flight2Hours(hour, index);
                    flightTimeReturn(2, 0);

                break;

                case "Cuiabá (CGB)":
                case "Aracaju (AJU)":
                case "Recife (REC)":
                case "Maceió (MCZ)":

                    flight2Hours30Minutes(hour, index);
                    flightTimeReturn(2, 30);

                break;

                case "Fortaleza (FOR)":
                case "João Pessoa (JPA)":
                case "Natal (NAT)":
                case "Teresina (THE)":
                case "São Luís (SLZ)":

                    flight3Hours(hour, index);
                    flightTimeReturn(3, 0);

                break;

                case "Porto Velho (PVH)":
                case "Belém (BEL)":
                case "Macapá (MCP)":

                    flight3Hours30Minutes(hour, index);
                    flightTimeReturn(3, 30);

                break;

                case "Manaus (MAO)":
                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":

                    flight4Hours(hour, index);
                    flightTimeReturn(4, 0);

                break;
            }

        break;

        case "BH - Confins (CNF)":

            switch(from.value){

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Vitória (VIX)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":

                    flight1Hour(hour, index);
                    flightTimeReturn(1, 0);

                break;

                case "Salvador (SSA)":
                case "Goiânia (GYN)":
                case "Brasília (BSB)":
                case "Curitiba (CWB)":

                    flight1Hour30Minutes(hour, index);
                    flightTimeReturn(1, 30);

                break;

                case "Florianópolis (FLN)":
                case "Campo Grande (CGR)":
                case "Palmas (PMW)":
                case "Maceió (MCZ)":
                case "Aracaju (AJU)":

                    flight2Hours(hour, index);
                    flightTimeReturn(2, 0);

                break;

                case "Recife (REC)":
                case "Porto Alegre (POA)":
                case "João Pessoa (JPA)":
                case "Cuiabá (CGB)":
                case "Natal (NAT)":

                    flight2Hours30Minutes(hour, index);
                    flightTimeReturn(2, 30);

                break;

                case "Fortaleza (FOR)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "Belém (BEL)":

                    flight3Hours(hour, index);
                    flightTimeReturn(3, 0);

                break;

                case "Manaus (MAO)":
                case "Porto Velho (PVH)":
                case "Macapá (MCP)":

                    flight3Hours30Minutes(hour, index);
                    flightTimeReturn(3, 30);

                break;

                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":

                    flight4Hours(hour, index);
                    flightTimeReturn(4, 0)

                break;
            }
        break;

        case "Vitória (VIX)":

            switch (from.value){

                case "BH - Confins (CNF)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":

                    flight1Hour(hour, index);
                    flightTimeReturn(1, 0);

                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Salvador (SSA)":
                case "Aracaju (AJU)":

                    flight1Hour30Minutes(hour, index);
                    flightTimeReturn(1, 30);

                break;

                case "Maceió (MCZ)":
                case "Recife (REC)":
                case "Palmas (PMW)":
                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":

                    flight2Hours(hour, index);
                    flightTimeReturn(2, 0);

                break;

                case "Porto Alegre (POA)":
                case "João Pessoa (JPA)":
                case "Fortaleza (FOR)":
                case "Natal (NAT)":
                case "Campo Grande (CGR)":

                    flight2Hours30Minutes(hour, index);
                    flightTimeReturn(2, 30);

                break;

                case "Cuiabá (CGB)":
                case "São Luís (SLZ)":
                case "Belém (BEL)":
                case "Teresina (THE)":

                    flight3Hours(hour, index);
                    flightTimeReturn(3, 0);

                break;

                case "Porto Velho (PVH)":
                case "Manaus (MAO)":
                case "Macapá (MCP)":

                    flight3Hours30Minutes(hour, index);
                    flightTimeReturn(3, 30);

                break;

                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":

                    flight4Hours(hour, index);
                    flightTimeReturn(4, 0);

                break;
            }
        break;

        case "Curitiba (CWB)":
        case "Florianópolis (FLN)":

            switch(from.value){

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Florianópolis (FLN)":
                case "Curitiba (CWB)":
                case "Porto Alegre (POA)":

                    flight1Hour(hour, index);
                    flightTimeReturn(1, 0);

                break;

                case "BH - Confins (CNF)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":

                    flight1Hour30Minutes(hour, index);
                    flightTimeReturn(1, 30);

                break;

                case "Campo Grande (CGR)":
                case "Vitória (VIX)":
                case "Goiânia (GYN)":
                case "Brasília (BSB)":
                
                    flight2Hours(hour, index);
                    flightTimeReturn(2, 0);

                break;

                case "Salvador (SSA)":
                case "Aracaju (AJU)":
                case "Cuiabá (CGB)":
                case "Maceió (MCZ)":

                    flight2Hours30Minutes(hour, index);
                    flightTimeReturn(2, 30);

                break;

                case "Recife (REC)":
                case "João Pessoa (JPA)":
                case "Natal (NAT)":
                case "Palmas (PMW)":

                    flight3Hours(hour, index);
                    flightTimeReturn(3, 0);

                break;

                case "Fortaleza (FOR)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "Belém (BEL)":

                    flight3Hours30Minutes(hour, index);
                    flightTimeReturn(3, 30);

                break;

                case "Manaus (MAO)":
                case "Porto Velho (PVH)":
                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":
                case "Macapá (MCP)":

                    flight4Hours(hour, index);
                    flightTimeReturn(4, 0);

                break;
            }

        break;

        case "Porto Alegre (POA)":

            switch (from.value){

                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":

                    flight1Hour(hour, index);
                    flightTimeReturn(1, 0);

                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Campo Grande (CGR)":

                    flight1Hour30Minutes(hour, index);
                    flightTimeReturn(1, 30);

                break;

                case "BH - Confins (CNF)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Vitória (VIX)":

                    flight2Hours(hour, index);
                    flightTimeReturn(2, 0);

                break;

                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Salvador (SSA)":

                    flight2Hours30Minutes(hour, index);
                    flightTimeReturn(2, 30);

                break;

                case "Aracaju (AJU)":
                case "Cuiabá (CGB)":
                case "Maceió (MCZ)":
                case "Recife (REC)":
                case "Palmas (PMW)":

                    flight3Hours30Minutes(hour, index);
                    flightTimeReturn(3, 30);

                break;

                case "Natal (NAT)":
                case "Fortaleza (FOR)":
                case "João Pessoa (JPA)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "Belém (BEL)":

                    flight4Hours(hour, index);
                    flightTimeReturn(4, 0);

                break;

                case "Manaus (MAO)":
                case "Porto Velho (PVH)":
                case "Rio Branco (RBR)":
            
                    flight4Hours30Minutes(hour, index);
                    flightTimeReturn(4, 30);

                break;

                case "Boa Vista (BVB)":
                case "Macapá (MCP)":

                    flight5Hours(hour, index);
                    flightTimeReturn(5, 0);

                break;
            }

        break;

        case "Campo Grande (CGR)":
            
            switch (from.value){

                case "Cuiabá (CGB)":
                
                    flight1Hour(hour, index);
                    flightTimeReturn(1, 0);

                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":
                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Porto Alegre (POA)":

                    flight1Hour30Minutes(hour, index);
                    flightTimeReturn(1, 30);

                break;

                case "BH - Confins (CNF)": 
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Vitória (VIX)":
                case "Porto Velho (PVH)":

                    flight2Hours(hour, index);
                    flightTimeReturn(2, 0);

                break;

                case "Rio Branco (RBR)":
                case "Salvador (SSA)":
                case "Aracaju (AJU)":
                case "Palmas (PMW)":

                    flight3Hours(hour, index);
                    flightTimeReturn(3, 0);

                break;

                case "Belém (BEL)":
                case "Maceió (MCZ)":
                case "Recife (REC)":

                    flight3Hours30Minutes(hour, index);
                    flightTimeReturn(3, 30);

                break;

                case "Natal (NAT)":
                case "Fortaleza (FOR)":
                case "João Pessoa (JPA)":
                case "Manaus (MAO)":
                case "Boa Vista (BVB)":
                case "Macapá (MCP)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":

                    flight4Hours(hour, index);
                    flightTimeReturn(4, 0);

                break;
            }

        break;

        case "Cuiabá (CGB)":

            switch (from.value){

                case "Campo Grande (CGR)":

                    flight1Hour(hour, index);
                    flightTimeReturn(1, 0);

                break;

                case "Goiânia (GYN)":
                case "Brasília (BSB)":

                    flight1Hour30Minutes(hour, index);
                    flightTimeReturn(1, 30);

                break;

                case "Porto Velho (PVH)":
                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Curitiba (CWB)":
                case "BH - Confins (CNF)":

                    flight2Hours(hour, index);
                    flightTimeReturn(2, 0);

                break;

                case "Florianópolis (FLN)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Vitória (VIX)":
                case "Palmas (PMW)":

                    flight2Hours30Minutes(hour, index);
                    flightTimeReturn(2, 30);

                break;

                case "Porto Alegre (POA)":
                case "Salvador (SSA)":
                case "Aracaju (AJU)":
                case "Maceió (MCZ)":
                case "Rio Branco (RBR)":

                    flight3Hours(hour, index);
                    flightTimeReturn(3, 0);

                break;

                case "Recife (REC)":
                case "Natal (NAT)":
                case "Fortaleza (FOR)":
                case "João Pessoa (JPA)":
                case "Manaus (MAO)":
                case "Boa Vista (BVB)":
                case "Macapá (MCP)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "Belém (BEL)":

                    flight3Hours30Minutes(hour, index);
                    flightTimeReturn(3, 30);
                
                break;
            }

        break;

        case "Goiânia (GYN)":
        case "Brasília (BSB)":

            switch (from.value){

                case "Goiânia (GYN)":
                case "Brasília (BSB)":
                case "BH - Confins (CNF)":
                case "Palmas (PMW)":
                
                    flight1Hour(hour, index);
                    flightTimeReturn(1, 0);

                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Vitória (VIX)":
                case "Campo Grande (CGR)":
                case "Cuiabá (CGB)":

                    flight1Hour30Minutes(hour, index);
                    flightTimeReturn(1, 30);

                break;

                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":
                case "Salvador (SSA)":
                case "Aracaju (AJU)":

                    flight2Hours(hour, index);
                    flightTimeReturn(2, 0);

                break;

                case "Belém (BEL)":
                case "Porto Alegre (POA)":
                case "Recife (REC)":
                case "Maceió (MCZ)":
                case "João Pessoa (JPA)":
                case "Fortaleza (FOR)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "Natal (NAT)":
                case "Macapá (MCP)":

                    flight2Hours30Minutes(hour, index);
                    flightTimeReturn(2, 30);

                break;

                case "Manaus (MAO)":
                case "Porto Velho (PVH)":
                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":

                    flight3Hours(hour, index);
                    flightTimeReturn(3, 0);

                break;
            }

        break;

        case "Aracaju (AJU)":
        case "Maceió (MCZ)":

            switch (from.value){

                case "Salvador (SSA)":
                case "Aracaju (AJU)":
                case "Maceió (MCZ)":
                case "Recife (REC)":
                case "João Pessoa (JPA)":

                    flight1Hour(hour, index);
                    flightTimeReturn(1, 0);

                break;

                case "Fortaleza (FOR)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "Natal (NAT)":

                    flight2Hours(hour, index);
                    flightTimeReturn(2, 0);

                break;

                case "BH - Confins (CNF)":
                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Palmas (PMW)":
                case "Belém (BEL)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Vitória (VIX)":

                    flight2Hours30Minutes(hour, index);
                    flightTimeReturn(2, 30);

                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Campo Grande (CGR)":
                case "Cuiabá (CGB)":

                    flight3Hours(hour, index);
                    flightTimeReturn(3, 0);

                break;
                
                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":
                case "Manaus (MAO)":
                case "Macapá (MCP)":
                
                    flight3Hours30Minutes(hour, index);
                    flightTimeReturn(3, 30);

                break;

                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":
                case "Porto Velho (PVH)":
                case "Porto Alegre (POA)":

                    flight5Hours(hour, index);
                    flightTimeReturn(5, 0);

                break;
            }

        break;

        case "Salvador (SSA)":

            switch (from.value){

                case "Maceió (MCZ)":
                case "Aracaju (AJU)":
                case "Recife (REC)":
                
                    flight1Hour(hour, index);
                    flightTimeReturn(1, 0);

                break;

                case "BH - Confins (CNF)":
                case "Vitória (VIX)":
                case "Natal (NAT)":
                case "João Pessoa (JPA)":
                
                    flight1Hour30Minutes(hour, index);
                    flightTimeReturn(1, 30);

                break;

                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                
                    flight2Hours(hour, index);
                    flightTimeReturn(2, 0);

                break;

                case "Fortaleza (FOR)":
                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "Palmas (PMW)":
                
                    flight2Hours30Minutes(hour, index);
                    flightTimeReturn(2, 30);

                break;

                case "Curitiba (CWB)":
                case "Campo Grande (CGR)":
                case "Cuiabá (CGB)":
                case "Florianópolis (FLN)":
                case "Belém (BEL)":

                    flight3Hours(hour, index);
                    flightTimeReturn(3, 0);

                break;

                case "Porto Alegre (POA)":
                case "Porto Velho (PVH)":
                case "Macapá (MCP)":
                case "Manaus (MAO)":

                    flight3Hours30Minutes(hour, index);
                    flightTimeReturn(3, 30);

                break;

                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":

                    flight5Hours(hour, index);
                    flightTimeReturn(5, 0);

                break;

            }
        break;

        case "Recife (REC)":
        case "João Pessoa (JPA)":

            switch (from.value){

                case "Recife (REC)":
                case "Maceió (MCZ)":
                case "Aracaju (AJU)":
                case "Fortaleza (FOR)":
                case "João Pessoa (JPA)":
                case "Natal (NAT)":
                
                    flight1Hour(hour, index);
                    flightTimeReturn(1, 0);

                break;

                case "Salvador (SSA)":

                    flight1Hour30Minutes(hour, index);
                    flightTimeReturn(1, 30);

                break;

                case "São Luís (SLZ)":
                case "Teresina (THE)":

                    flight2Hours(hour, index);
                    flightTimeReturn(2, 0);

                break;

                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "BH - Confins (CNF)":
                case "Palmas (PMW)":
                case "Belém (BEL)":
                case "Vitória (VIX)":

                    flight2Hours30Minutes(hour, index);
                    flightTimeReturn(2, 30);
                
                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Macapá (MCP)":

                    flight3Hours(hour, index);
                    flightTimeReturn(3, 0);

                break;

                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":
                case "Campo Grande (CGR)":
                case "Cuiabá (CGB)":

                    flight3Hours30Minutes(hour, index);
                    flightTimeReturn(3, 30);

                break;

                case "Manaus (MAO)":
                case "Porto Alegre (POA)":

                    flight4Hours(hour, index);
                    flightTimeReturn(4, 0);

                break;

                case "Porto Velho (PVH)":
                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":

                    flight4Hours30Minutes(hour, index);
                    flightTimeReturn(4, 30);

                break;

            }
        break;

        case "Natal (NAT)":
        case "Fortaleza (FOR)":

            switch (from.value){

                case "Natal (NAT)":
                case "Recife (REC)":
                case "João Pessoa (JPA)":
                case "Maceió (MCZ)":
                case "Fortaleza (FOR)":

                    flight1Hour(hour, index);
                    flightTimeReturn(1, 0);

                break;

                case "Salvador (SSA)":
                case "Aracaju (AJU)":
                case "Teresina (THE)":
                case "São Luís (SLZ)":

                    flight1Hour30Minutes(hour, index);
                    flightTimeReturn(1, 30);

                break;

                case "Belém (BEL)":
                case "Palmas (PMW)":
                case "Macapá (MCP)":

                    flight2Hours(hour, index);
                    flightTimeReturn(2, 0);

                break;
                
                case "BH - Confins (CNF)":
                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Vitória (VIX)":

                    flight2Hours30Minutes(hour, index);
                    flightTimeReturn(2, 30);

                break;

                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":

                    flight3Hours(hour, index);
                    flightTimeReturn(3, 0);

                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Cuiabá (CGB)":

                    flight3Hours30Minutes(hour, index);
                    flightTimeReturn(3, 30);

                break;

                case "Curitiba (CWB)":
                case "Manaus (MAO)":
                
                    flight4Hours(hour, index);
                    flightTimeReturn(4, 0);

                break;

                case "Campo Grande (CGR)":
                case "Florianópolis (FLN)":

                    flight4Hours30Minutes(hour, index);
                    flightTimeReturn(4, 30);

                break;

                case "Porto Alegre (POA)":
                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":
                case "Porto Velho (PVH)":

                    flight5Hours(hour, index);
                    flightTimeReturn(5, 0);
            }
        break;

        case "São Luís (SLZ)":
        case "Teresina (THE)":

            switch (from.value){

                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "Fortaleza (FOR)":
                case "Belém (BEL)":

                    flight1Hour(hour, index);
                    flightTimeReturn(1, 0);

                break;

                case "Macapá (MCP)":
                case "Palmas (PMW)":
                
                    flight1Hour30Minutes(hour, index);
                    flightTimeReturn(1, 30);

                break;

                case "Recife (REC)":
                case "Natal (NAT)":
                case "João Pessoa (JPA)":
                case "Aracaju (AJU)":
                case "Maceió (MCZ)":
                case "Salvador (SSA)":
    
                    flight2Hours(hour, index);
                    flightTimeReturn(2, 0);

                break;

                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Manaus (MAO)":
                case "Boa Vista (BVB)":

                    flight2Hours30Minutes(hour, index);
                    flightTimeReturn(2, 30);

                break;

                case "BH - Confins (CNF)":
                case "Vitória (VIX)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Cuiabá (CGB)":

                    flight3Hours(hour, index);
                    flightTimeReturn(3, 0);

                break;
            
                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Campo Grande (CGR)":
                case "Porto Velho (PVH)":

                    flight3Hours30Minutes(hour, index);
                    flightTimeReturn(3, 30);

                break;

                case "Curitiba (CWB)":
                case "Rio Branco (RBR)":
                
                    flight4Hours(hour, index);
                    flightTimeReturn(4, 0);

                break;

                case "Florianópolis (FLN)":
                case "Porto Alegre (POA)":

                    flight5Hours(hour, index);
                    flightTimeReturn(5, 0);

                break;
            
            }

        break;

        case "Palmas (PMW)":

            switch (from.value){

                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                
                    flight1Hour(hour, index);
                    flightTimeReturn(1, 0);

                break;

                case "Teresina (THE)":
                case "São Luís (SLZ)":
                case "Belém (BEL)":
                case "Macapá (MCP)":

                    flight1Hour30Minutes(hour, index);
                    flightTimeReturn(1, 30);

                break;

                case "Recife (REC)":
                case "Natal (NAT)":
                case "João Pessoa (JPA)":
                case "Aracaju (AJU)":
                case "Maceió (MCZ)":
                case "Salvador (SSA)":
                case "Fortaleza (FOR)":
                case "BH - Confins (CNF)":
                case "Cuiabá (CGB)":
                case "Manaus (MAO)":

                    flight2Hours(hour, index);
                    flightTimeReturn(2, 0);

                break;

                case "Vitória (VIX)":
                case "Boa Vista (BVB)":
                case "Campo Grande (CGR)":
                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":

                    flight2Hours30Minutes(hour, index);
                    flightTimeReturn(2, 30);

                break;

                case "Curitiba (CWB)":
                case "Porto Velho (PVH)":
                case "Rio Branco (RBR)":

                    flight3Hours(hour, index);
                    flightTimeReturn(3, 0);

                break;

                case "Florianópolis (FLN)":
                case "Porto Alegre (POA)":

                    flight3Hours30Minutes(hour, index);
                    flightTimeReturn(3, 30);

                break;

            }
        break;

        case "Belém (BEL)":
        case "Macapá (MCP)":
            
            switch (from.value){

                case "Belém (BEL)":
                case "Macapá (MCP)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
               
                    flight1Hour(hour, index);
                    flightTimeReturn(1, 0);

                break;

                case "Manaus (MAO)":
                case "Palmas (PMW)":
                case "Fortaleza (FOR)":
                case "Boa Vista (BVB)":

                    flight2Hours(hour, index);
                    flightTimeReturn(2, 0);

                break;

                case "Recife (REC)":
                case "Aracaju (AJU)":
                case "Natal (NAT)":
                case "João Pessoa (JPA)":
                case "Maceió (MCZ)":
                case "Brasília (BSB)":
                case "Goiânia (GYN)":

                    flight2Hours30Minutes(hour, index);
                    flightTimeReturn(2, 30);

                break;

                case "Porto Velho (PVH)":
                case "Rio Branco (RBR)":
                case "BH - Confins (CNF)":
                case "Vitória (VIX)":
                case "Cuiabá (CGB)":
                case "Salvador (SSA)":
                
                    flight3Hours(hour, index);
                    flightTimeReturn(3, 0);

                break;
                
                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Campo Grande (CGR)":
                
                    flight3Hours30Minutes(hour, index);
                    flightTimeReturn(3, 30);

                break;

                case "Curitiba (CWB)":
                
                    flight4Hours(hour, index);
                    flightTimeReturn(4, 0);

                break;

                case "Florianópolis (FLN)":
                case "Porto Alegre (POA)":

                    flight5Hours(hour, index);
                    flightTimeReturn(5, 0);

                break;

            }

        break;

        case "Manaus (MAO)":

            switch (from.value){

                case "Boa Vista (BVB)":
                
                    flight1Hour(hour, index);
                    flightTimeReturn(1, 0);

                break;

                case "Porto Velho (PVH)":
                case "Rio Branco (RBR)":
                case "Macapá (MCP)":

                    flight1Hour30Minutes(hour, index);
                    flightTimeReturn(1, 30);

                break;

                case "Belém (BEL)":

                    flight2Hours(hour, index);
                    flightTimeReturn(2, 0);

                break;

                case "Palmas (PMW)":

                    flight2Hours30Minutes(hour, index);
                    flightTimeReturn(2, 30);

                break;

                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Cuiabá (CGB)":
                case "Teresina (THE)":
                case "São Luís (SLZ)":

                    flight3Hours(hour, index);
                    flightTimeReturn(3, 0);

                break;

                case "Fortaleza (FOR)":
                case "Natal (NAT)":
                case "Recife (REC)":
                case "Salvador (SSA)":
                case "Aracaju (AJU)":
                case "Maceió (MCZ)":
                case "João Pessoa (JPA)":
                case "BH - Confins (CNF)":
                case "Vitória (VIX)":

                    flight3Hours30Minutes(hour, index);
                    flightTimeReturn(3, 30);

                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Campo Grande (CGR)":

                    flight4Hours(hour, index);
                    flightTimeReturn(4, 0);

                break;

                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":

                    flight4Hours30Minutes(hour, index);
                    flightTimeReturn(4, 30);

                break;

                case "Porto Alegre (POA)":

                    flight5Hours(hour, index);
                    flightTimeReturn(5, 0)
            }
        break;

        case "Boa Vista (BVB)":

            switch (from.value){

                case "Manaus (MAO)":
                case "Macapá (MCP)":

                    flight1Hour(hour, index);
                    flightTimeReturn(1, 0);

                break;

                case "Belém (BEL)":
                case "Porto Velho (PVH)":
                case "Rio Branco (RBR)":
                
                    flight2Hours(hour, index);
                    flightTimeReturn(2, 0);
                
                break;

                case "Cuiabá (CGB)":
                case "São Luís (SLZ)":

                    flight2Hours30Minutes(hour, index);
                    flightTimeReturn(2, 30);

                break;

                case "Palmas (PMW)":
                
                    flight3Hours(hour, index);
                    flightTimeReturn(3, 0);

                break;

                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Teresina (THE)":
                case "Fortaleza (FOR)":
            
                    flight3Hours30Minutes(hour, index);
                    flightTimeReturn(3, 30);

                break;

                case "BH - Confins (CNF)":
                case "Vitória (VIX)":
                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Recife (REC)":
                case "Natal (NAT)":
                case "João Pessoa (JPA)":
                case "Salvador (SSA)":
                case "Aracaju (AJU)":
                case "Maceió (MCZ)":

                    flight4Hours(hour, index);
                    flightTimeReturn(4, 0);

                break;

                case "Curitiba (CWB)":

                    flight4Hours30Minutes(hour, index);
                    flightTimeReturn(4, 30);

                break;

                case "Florianópolis (FLN)":
                case "Porto Alegre (POA)":

                    flight5Hours(hour, index);
                    flightTimeReturn(5, 0);

                break;
            }
        break;

        case "Rio Branco (RBR)":
        case "Porto Velho (PVH)":

            switch (from.value){

                case "Rio Branco (RBR)":
                case "Porto Velho (PVH)":

                    flight1Hour(hour, index);
                    flightTimeReturn(1, 0);

                break;

                case "Manaus (MAO)":
                
                    flight1Hour30Minutes(hour, index);
                    flightTimeReturn(1, 30);

                break;

                case "Cuiabá (CGB)":
                case "Boa Vista (BVB)":

                    flight2Hours30Minutes(hour, index);
                    flightTimeReturn(2, 30);

                break;

                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Palmas (PMW)":
                
                    flight3Hours(hour, index);
                    flightTimeReturn(3, 0);

                break;

                case "Campo Grande (CGR)":
                case "Belém (BEL)":
                case "Macapá (MCP)":
                
                    flight3Hours30Minutes(hour, index);
                    flightTimeReturn(3, 30);

                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "BH - Confins (CNF)":

                    flight4Hours(hour, index);
                    flightTimeReturn(4, 0);

                break;

                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Vitória (VIX)":
                case "Curitiba (CWB)":
                case "Fortaleza (FOR)":
                
                    flight4Hours30Minutes(hour, index);
                    flightTimeReturn(4, 30);

                break;

                case "Salvador (SSA)":
                case "Porto Alegre (POA)":
                case "Florianópolis (FLN)":
                case "Aracaju (AJU)":
                case "Maceió (MCZ)":
                case "Recife (REC)":
                case "João Pessoa (JPA)":
                case "Natal (NAT)":

                    flight5Hours(hour, index);
                    flightTimeReturn(5, 0);

                break;

            }

        break;
    }
}

function randomFlightNumber(number, index){
    switch(index){
        case 0:
            number.innerHTML = `GA${randomFlight1}`
            break;

        case 1:
            number.innerHTML = `GA${randomFlight2}`
            break;

        case 2:
            number.innerHTML = `GA${randomFlight3}`
            break;

        case 3:
            number.innerHTML = `GA${randomFlight4}`
            break;

        case 4:
            number.innerHTML = `GA${randomFlight5}`
            break;

        case 5:
            number.innerHTML = `GA${randomFlight6}`
            break;

        case 6:
            number.innerHTML = `GA${randomFlight7}`
            break;

        case 7:
            number.innerHTML = `GA${randomFlight8}`
            break;

        case 8:
            number.innerHTML = `GA${randomFlight9}`
            break;

        case 9:
            number.innerHTML = `GA${randomFlight10}`
            break;

        case 10:
            number.innerHTML = `GA${randomFlight11}`
            break;

        case 11:
            number.innerHTML = `GA${randomFlight12}`
            break;
    }
}

function randomPriceNumber(price, index){
    switch(index){
        case 0:
            price.innerHTML = randomPrice1
            break;

        case 1:
            price.innerHTML = randomPrice2
            break;

        case 2:
            price.innerHTML = randomPrice3
            break;

        case 3:
            price.innerHTML = randomPrice4
            break;

        case 4:
            price.innerHTML = randomPrice5
            break;

        case 5:
            price.innerHTML = randomPrice6
            break;

        case 6:
            price.innerHTML = randomPrice7
            break;

        case 7:
            price.innerHTML = randomPrice8
            break;

        case 8:
            price.innerHTML = randomPrice9
            break;

        case 9:
            price.innerHTML = randomPrice10
            break;

        case 10:
            price.innerHTML = randomPrice11
            break;

        case 11:
            price.innerHTML = randomPrice12
            break;
    }
}

function hidePreload(i){
    
    removeClass(section[i], "hide") 

    removeClass(header, "hide")

    removeClass(footer, "hide")

    addClass(loadingScreen, "hide")
}

function showPreload(i){

    addClass(section[i], "hide")

    addClass(header, "hide")

    addClass(footer, "hide")

    removeClass(loadingScreen, "hide")

}

function showTotalPrice(el, index){
    if (passengersInput.value == 1){
        return
    } else {
        switch(index){
            case 0:
                el.innerHTML = `R$${eval(randomPrice1 * passengersInput.value)},00 para ${passengersInput.value} passageiros`
                break;
    
            case 1:
                el.innerHTML = `R$${eval(randomPrice2 * passengersInput.value)},00 para ${passengersInput.value} passageiros`
                break;
    
            case 2:
                el.innerHTML = `R$${eval(randomPrice3 * passengersInput.value)},00 para ${passengersInput.value} passageiros`
                break;
    
            case 3:
                el.innerHTML = `R$${eval(randomPrice4 * passengersInput.value)},00 para ${passengersInput.value} passageiros`
                break;
    
            case 4:
                el.innerHTML = `R$${eval(randomPrice5 * passengersInput.value)},00 para ${passengersInput.value} passageiros`
                break;
    
            case 5:
                el.innerHTML = `R$${eval(randomPrice6 * passengersInput.value)},00 para ${passengersInput.value} passageiros`
                break;
    
            case 6:
                el.innerHTML = `R$${eval(randomPrice7 * passengersInput.value)},00 para ${passengersInput.value} passageiros`
                break;
    
            case 7:
                el.innerHTML = `R$${eval(randomPrice8 * passengersInput.value)},00 para ${passengersInput.value} passageiros`
                break;
    
            case 8:
                el.innerHTML = `R$${eval(randomPrice9 * passengersInput.value)},00 para ${passengersInput.value} passageiros`
                break;
    
            case 9:
                el.innerHTML = `R$${eval(randomPrice10 * passengersInput.value)},00 para ${passengersInput.value} passageiros`
                break;
    
            case 10:
                el.innerHTML = `R$${eval(randomPrice11 * passengersInput.value)},00 para ${passengersInput.value} passageiros`
                break;
    
            case 11:
                el.innerHTML = `R$${eval(randomPrice12 * passengersInput.value)},00 para ${passengersInput.value} passageiros`
                break;
        }
    }
}

function goingTicketsPageContent(){
    reDoSearch.addEventListener('click', e => {
        document.location.reload(true)
    });

    fromText.forEach((text) => {
        text.innerHTML = from.value
    });

    toText.forEach((text) => {
        text.innerHTML = to.value
    });

    flightNumber.forEach((number, index) => {
        randomFlightNumber(number, index)
    })

    priceNumber.forEach((price, index) => {
        randomPriceNumber(price, index)
    });

    totalPriceEl.forEach((el, index) => {
        showTotalPrice(el, index)
    })

    departureTime.forEach((time, index) => {
        departureRandomHour(time, index)
    });

    arrivalTime.forEach((time, index) => {
        arrivalHour1(time, index)
    });

    showTotalPrice()

    travelDate.innerHTML = `${dateFormat(departureDate.value)}`
}

function returnTicketsPageContent(){
    reDoSearch.addEventListener('click', e => {
        document.location.reload(true);
    });

    fromText.forEach((text) => {
        text.innerHTML = to.value
    });

    toText.forEach((text) => {
        text.innerHTML = from.value
    });

    flightNumber.forEach((number, index) => {
        randomFlightNumber(number, index)
    });

    priceNumber.forEach((price, number) => {
        randomPriceNumber(price, number)
    });

    departureTime.forEach((time, index) => {
        departureRandomHour(time, index)
    });

    arrivalTime.forEach((time, index) => {
        arrivalHour2(time, index)
    });

    travelDate.innerHTML = `${dateFormat(returnDate.value)}`
}

function finalPrice(){
    if (radioRoundtrip.checked){
        const goingValueEl = document.querySelector('.going-value')
        const returnValueEl = document.querySelector('.return-value')
        goingValueEl.innerHTML = `R$${eval(parseInt(priceNumber[12].innerHTML) * passengersInput.value)},00`
        returnValueEl.innerHTML = `R$${eval(parseInt(priceNumber[13].innerHTML) * passengersInput.value)},00`
        
        finalPriceNumberEl.innerHTML = `R$ ${eval((priceNumber[12].innerHTML * passengersInput.value) + (priceNumber[13].innerHTML * passengersInput.value))}`
    
    } else {

        calcPrice.innerHTML = passengersInput.value == 1 ? `Preço final para 1 passageiro:` : `Preço final para ${passengersInput.value} passageiros:`
        
        finalPriceNumberEl.innerHTML = `R$ ${eval(priceNumber[12].innerHTML * passengersInput.value)}`
    }
}

function selectSeats(btn){

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

            if (document.querySelectorAll("input[type=checkbox]:checked").length == passengersInput.value){
                btn.removeAttribute("disabled");
                addClass(seatAlertSpan, "hide")
            } else {
                removeClass(seatAlertSpan, "hide");
                btn.setAttribute("disabled", "disabled");
            }

        });
    });
}

function seatsMapPageContent(index){
    
    const finalPriceTotalEl = document.querySelectorAll('.total-price-final')

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

    function showFinalPrice(i, index){
        if (passengersInput.value == 1){
            return
        } else {
            finalPriceTotalEl[i].innerHTML = `R$${eval(parseInt(priceNumber[index].innerText) * passengersInput.value)},00 para ${passengersInput.value} passageiros`
        }
    }

    switch(index){
        case 0:
            finalFlightNumberEl[0].innerHTML = `GA${randomFlight1}`;
            departureTime[12].innerHTML = departureTime[0].innerHTML;
            arrivalTime[12].innerHTML = arrivalTime[0].innerHTML;
            priceEl[12].innerHTML = priceNumber[0].innerHTML;
            showFinalPrice(0, 0)
            break;

        case 1:
            finalFlightNumberEl[0].innerHTML = `GA${randomFlight2}`;
            departureTime[12].innerHTML = departureTime[1].innerHTML;
            arrivalTime[12].innerHTML = arrivalTime[1].innerHTML;
            priceEl[12].innerHTML = priceNumber[1].innerHTML;
            showFinalPrice(0, 1)
            break;

        case 2:
            finalFlightNumberEl[0].innerHTML = `GA${randomFlight3}`;
            departureTime[12].innerHTML = departureTime[2].innerHTML;
            arrivalTime[12].innerHTML = arrivalTime[2].innerHTML;
            priceEl[12].innerHTML = priceNumber[2].innerHTML;
            showFinalPrice(0, 2)
            break;

        case 3:
            finalFlightNumberEl[0].innerHTML = `GA${randomFlight4}`;
            departureTime[12].innerHTML = departureTime[3].innerHTML;
            arrivalTime[12].innerHTML = arrivalTime[3].innerHTML;
            priceEl[12].innerHTML = priceNumber[3].innerHTML;
            showFinalPrice(0, 3)
            break;

        case 4:
            finalFlightNumberEl[0].innerHTML = `GA${randomFlight5}`;
            departureTime[12].innerHTML = departureTime[4].innerHTML;
            arrivalTime[12].innerHTML = arrivalTime[4].innerHTML;
            priceEl[12].innerHTML = priceNumber[4].innerHTML;
            showFinalPrice(0, 4)
            break;

        case 5:
            finalFlightNumberEl[0].innerHTML = `GA${randomFlight12}`;
            departureTime[12].innerHTML = departureTime[5].innerHTML;
            arrivalTime[12].innerHTML = arrivalTime[5].innerHTML;
            priceEl[12].innerHTML = priceNumber[5].innerHTML;
            showFinalPrice(0, 5)
            break;

        case 6:
            finalFlightNumberEl[1].innerHTML = `GA${randomFlight7}`;
            departureTime[13].innerHTML = departureTime[6].innerHTML;
            arrivalTime[13].innerHTML = arrivalTime[6].innerHTML;
            priceEl[13].innerHTML = priceNumber[6].innerHTML;
            showFinalPrice(1, 6)
            break;

        case 7:
            finalFlightNumberEl[1].innerHTML = `GA${randomFlight8}`;
            departureTime[13].innerHTML = departureTime[7].innerHTML;
            arrivalTime[13].innerHTML = arrivalTime[7].innerHTML;
            priceEl[13].innerHTML = priceNumber[7].innerHTML;
            showFinalPrice(1, 7)
            break;

        case 8:
            finalFlightNumberEl[1].innerHTML = `GA${randomFlight9}`;
            departureTime[13].innerHTML = departureTime[8].innerHTML;
            arrivalTime[13].innerHTML = arrivalTime[8].innerHTML;
            priceEl[13].innerHTML = priceNumber[8].innerHTML;
            showFinalPrice(1, 8)
            break;

        case 9:
            finalFlightNumberEl[1].innerHTML = `GA${randomFlight10}`;
            departureTime[13].innerHTML = departureTime[9].innerHTML;
            arrivalTime[13].innerHTML = arrivalTime[9].innerHTML;
            priceEl[13].innerHTML = priceNumber[9].innerHTML;
            showFinalPrice(1, 9)
            break; 

        case 10:
            finalFlightNumberEl[1].innerHTML = `GA${randomFlight11}`;
            departureTime[13].innerHTML = departureTime[10].innerHTML;
            arrivalTime[13].innerHTML = arrivalTime[10].innerHTML;
            priceEl[13].innerHTML = priceNumber[10].innerHTML;
            showFinalPrice(1, 10)
            break;

        case 11:
            finalFlightNumberEl[1].innerHTML = `GA${randomFlight12}`;
            departureTime[13].innerHTML = departureTime[11].innerHTML;
            arrivalTime[13].innerHTML = arrivalTime[11].innerHTML;
            priceEl[13].innerHTML = priceNumber[11].innerHTML;
            showFinalPrice(1, 11)
            break;
    }
}

// Radio settings
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

// Search button event
searchBtn.addEventListener('click', e => {

    e.preventDefault()

    let json = {}

    let isValid = true

    switch(from.value && to.value){
        case "SP - Guarulhos (GRU)":
        case "SP - Congonhas (CGH)":
        case "Campinas (VCP)":
        case "RJ - Galeão (GIG)":
        case "RJ - Santos Dumont (SDU)":
        case "Curitiba (CWB)":
        case "Florianópolis (FLN)":
        case "Porto Alegre (POA)":
        case "Vitória (VIX)":
        case "BH - Confins (CNF)":
        case "Goiânia (GYN)":
        case "Brasília (BSB)":
        case "Campo Grande (CGR)":
        case "Cuiabá (CGB)":
        case "Manaus (MAO)":
        case "Rio Branco (RBR)":
        case "Porto Velho (PVH)":
        case "Boa Vista (BVB)":
        case "Macapá (MCP)":
        case "Belém (BEL)":
        case "Palmas (PMW)":
        case "São Luís (SLZ)":
        case "Fortaleza (FOR)":
        case "Natal (NAT)":
        case "Teresina (THE)":
        case "João Pessoa (JPA)":
        case "Recife (REC)":
        case "Maceió (MCZ)":
        case "Aracaju (AJU)":
        case "Salvador (SSA)":
            isValid = true;
            break;

        case '':
            isValid = false;
            break;

        default:
            isValid = false;

            addClass(from, "has-error");

            addClass(to, "has-error");

            removeClass(document.querySelector(".invalid"), "hide");
    }

    inputs.forEach(input => {

        if (['from', 'to', 'departure-date'].indexOf(input.name) > -1 && !input.value){
            
            removeClass(document.querySelector(".error-span"), "hide")
            
            addClass(input, "has-error")
            
            isValid = false

        } else if(from.value == to.value){
           
            addClass(from, "has-error")

            addClass(to, "has-error")

            removeClass(document.querySelector(".same-value-span"), "hide")

            isValid = false

        } else if (radioRoundtrip.checked){

            if (['return-date'].indexOf(input.name) > -1 && !input.value){

                removeClass(document.querySelector(".error-span"), "hide")
                    
                addClass(input, "has-error")
                    
                isValid = false
        
            }

            if (departureDate.value > returnDate.value){

                addClass(departureDate, "has-error")

                addClass(returnDate, "has-error")

                removeClass(document.querySelector(".date-error-span"), "hide")

                isValid = false

            } else if (departureDate.value == '' || returnDate.value == ''){
    
                addClass(returnDate, "has-error")
    
                removeClass(document.querySelector(".error-span"), "hide");
    
                isValid = false
    
            }

        } else if (radioOneWay.checked){
        
            if (departureDate.value == ''){
    
                addClass(departureDate, "has-error")
    
                removeClass(document.querySelector(".error-span"), "hide");
    
                isValid = false
    
            }

        } else{
            json[input.name] = input.value
        }

        if (isValid){

            hideAll();

            inputs.forEach(input => {
                removeClass(input, "has-error")
            })

            spans.forEach(span => {
                addClass(span, "hide")
            });

            removeClass(loadingScreen, "hide");

            setTimeout(function(){
                hidePreload(1)
                showAll()
                goingTicketsPageContent()
            }, 7000);
        };
    });
})

let showAgain = true

selectTicketBtn.forEach((btn, index) => {

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

                returnTicketsPageContent();

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
});

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

        document.querySelectorAll("input[type=checkbox]:checked").forEach(input => {
            input.click();
        });

        bookTicketBtn.setAttribute("disabled", "disabled");

        seats.forEach(seat => {

            seat.addEventListener('change', e => {

                console.log('oi!')
                if (document.querySelectorAll("input[type=checkbox]:checked").length == passengersInput.value){
                    bookTicketBtn.removeAttribute("disabled");
                    addClass(seatAlertSpan, "hide")
                } else {
                    removeClass(seatAlertSpan, "hide");
                    bookTicketBtn.setAttribute("disabled", "disabled");
                }

            })
        })
    

        finalPrice();
        
        hidePreload(3);

    }, 7000)

})

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

// Responsive settings
document.querySelector('.open-menu').addEventListener('click', e => {
    document.querySelector('header .menu').classList.add('open');
    document.getElementById("bg").classList.add('hide');
});

document.querySelector('.close-menu').addEventListener('click', e => {
    document.querySelector('header .menu').classList.remove('open');
    document.getElementById("bg").classList.remove('hide');
});
=======
const header = document.querySelector("header");
const section = [...document.querySelectorAll("section")];
const footer = document.querySelector("footer");
const reDoSearch = document.querySelector(".redo-search");
const loadingScreen = document.querySelector(".loading");
const radioOneWay = document.querySelector("#one-way");
const radioRoundtrip = document.querySelector("#roundtrip");
const searchBtn = document.querySelector(".search-button");
const selectTicketBtn = document.querySelectorAll(".select-ticket");
const bookTicketBtn = document.querySelector(".buy-ticket-btn");
const from = document.querySelector("#from");
const fromText = document.querySelectorAll(".from-text");
const to = document.querySelector("#to");
const toText = document.querySelectorAll(".to-text");
const flightNumber = document.querySelectorAll(".flight-number");
const priceNumber = document.querySelectorAll(".price-number");
const travelDate = document.querySelector(".travel-date");
const departureDate = document.querySelector("#departure-date");
const departureTime = document.querySelectorAll(".departure-time");
const goingPage = document.querySelector("#going-page");
const returnPage = document.querySelector("#return-page")
const returnDate = document.querySelector("#return-date");
const arrivalTime = document.querySelectorAll(".arrival-time")
const spans = document.querySelectorAll(".inputs span");
const inputs =  document.querySelectorAll(".other-inputs input");
const flightDuration = document.querySelectorAll(".flight-duration");
const goingDateEl = document.querySelector(".going-date");
const returnDateEl = document.querySelector(".return-date");
const returnPanel = document.querySelector(".return-flight-info");
const selectedSeatsEl = document.querySelector(".selected-seats");
const priceEl = document.querySelectorAll(".price-number");
const finalPriceDiv = document.querySelector(".final-price");
const passengersDiv = document.querySelector(".passengers")
const finalPriceNumberEl = document.querySelector(".final-price-number");
const totalPassengersEl = document.querySelector(".total-passengers-number");
const finalFlightNumberEl = document.querySelectorAll(".final-flight-number");
const durationEl = document.querySelectorAll(".duration");
const passengersInput = document.querySelector(".passengers-input");
const modal = document.querySelector(".modal");
const fade = document.querySelector(".fade")
const backBtnModal = document.querySelector(".back-button");
const ticketId = document.querySelector(".ticket-id");
const selectSeatsReturnBtn = document.querySelector(".select-seats-return");
const goingInfo = document.querySelector(".going-flight-info");
const returnInfo = document.querySelector(".return-flight-info");
const seats = document.querySelectorAll("input[type=checkbox]");
const calcPrice = document.querySelector(".calc-price");
const seatAlertSpan = document.querySelector(".seat-alert");

let randomFlight1 = getRandomInt(1000, 9999);
let randomFlight2 = getRandomInt(1000, 9999);
let randomFlight3 = getRandomInt(1000, 9999);
let randomFlight4 = getRandomInt(1000, 9999);
let randomFlight5 = getRandomInt(1000, 9999);
let randomFlight6 = getRandomInt(1000, 9999);
let randomFlight7 = getRandomInt(1000, 9999);
let randomFlight8 = getRandomInt(1000, 9999);
let randomFlight9 = getRandomInt(1000, 9999);
let randomFlight10 = getRandomInt(1000, 9999);
let randomFlight11 = getRandomInt(1000, 9999);
let randomFlight12 = getRandomInt(1000, 9999);

let randomPrice1 = getRandomInt(100, 3000);
let randomPrice2 = getRandomInt(100, 3000);
let randomPrice3 = getRandomInt(100, 3000);
let randomPrice4 = getRandomInt(100, 3000);
let randomPrice5 = getRandomInt(100, 3000);
let randomPrice6 = getRandomInt(100, 3000);
let randomPrice7 = getRandomInt(100, 3000);
let randomPrice8 = getRandomInt(100, 3000);
let randomPrice9 = getRandomInt(100, 3000);
let randomPrice10 = getRandomInt(100, 3000);
let randomPrice11 = getRandomInt(100, 3000);
let randomPrice12 = getRandomInt(100, 3000);

let randomHour1 = getRandomInt(0, 18);
let randomHour2 = getRandomInt(0, 18);
let randomHour3 = getRandomInt(0, 18);
let randomHour4 = getRandomInt(0, 18);
let randomHour5 = getRandomInt(0, 18);
let randomHour6 = getRandomInt(0, 18);
let randomHour7 = getRandomInt(0, 18);
let randomHour8 = getRandomInt(0, 18);
let randomHour9 = getRandomInt(0, 18);
let randomHour10 = getRandomInt(0, 18);
let randomHour11 = getRandomInt(0, 18);
let randomHour12 = getRandomInt(0, 18);

function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    let finalNumber = Math.floor(Math.random() * (max - min) + min)

    return finalNumber
}

function removeClass(element, name){
    element.classList.remove(name)
}

function addClass(element, name){
    element.classList.add(name)
}

function hideAll(){
    addClass(header, "hide")
    addClass(footer, "hide")

    section.forEach(screen => {
        addClass(screen, "hide")
    });
}

function showAll(){
    removeClass(header, "hide")
    removeClass(footer, "hide")
}

function dateFormat(date){
    return (new Date(date).getDate()+1) + '/' + (new Date(date).getMonth()+1) + '/' + new Date(date).getFullYear()
}

function flightTime(hours, minutes){
    flightDuration.forEach((time) => {
        if (minutes == 0){
            time.innerHTML = `Duração: ${hours}h`
        } else {
            time.innerHTML = `Duração: ${hours}h${minutes}m`
        }  
    });
}

function flightTimeReturn(hours, minutes){
    flightDuration.forEach((time, index) => {
        if (index >= 6 && index <= 11){
            if (minutes == 0){
                time.innerHTML = `Duração: ${hours}h`
            } else {
                time.innerHTML = `Duração: ${hours}h${minutes}m`
            } 
        }
   
    });
}


function flight1Hour(hour, index){


    switch(index){
        case 0:
            hour.innerHTML = `${eval(randomHour1+1)}:00`
            break;

        case 1:
            hour.innerHTML = `${eval(randomHour2+1)}:00`
            break;

        case 2:
            hour.innerHTML = `${eval(randomHour3+1)}:00`
            break;

        case 3:
            hour.innerHTML = `${eval(randomHour4+1)}:00`
            break;

        case 4:
            hour.innerHTML = `${eval(randomHour5+1)}:00`
            break;

        case 5:
            hour.innerHTML = `${eval(randomHour6+1)}:00`
            break;

        case 6:
            hour.innerHTML = `${eval(randomHour7+1)}:00`
            break;

        case 7:
            hour.innerHTML = `${eval(randomHour8+1)}:00`
            break;

        case 8:
            hour.innerHTML = `${eval(randomHour9+1)}:00`
            break;

        case 9:
            hour.innerHTML = `${eval(randomHour10+1)}:00`
            break;

        case 10:
            hour.innerHTML = `${eval(randomHour11+1)}:00`
            break;

        case 11:
            hour.innerHTML = `${eval(randomHour12+1)}:00`
            break;
    }
} 

function flight1Hour30Minutes(hour, index){
    switch(index){
        case 0:
            hour.innerHTML = `${eval(randomHour1+1)}:30`
            break;

        case 1:
            hour.innerHTML = `${eval(randomHour2+1)}:30`
            break;

        case 2:
            hour.innerHTML = `${eval(randomHour3+1)}:30`
            break;

        case 3:
            hour.innerHTML = `${eval(randomHour4+1)}:30`
            break;

        case 4:
            hour.innerHTML = `${eval(randomHour5+1)}:30`
            break;

        case 5:
            hour.innerHTML = `${eval(randomHour6+1)}:30`
            break;

        case 6:
            hour.innerHTML = `${eval(randomHour7+1)}:30`
            break;

        case 7:
            hour.innerHTML = `${eval(randomHour8+1)}:30`
            break;

        case 8:
            hour.innerHTML = `${eval(randomHour9+1)}:30`
            break;

        case 9:
            hour.innerHTML = `${eval(randomHour10+1)}:30`
            break;

        case 10:
            hour.innerHTML = `${eval(randomHour11+1)}:30`
            break;

        case 11:
            hour.innerHTML = `${eval(randomHour12+1)}:30`
            break;
    }
}

function flight2Hours(hour, index){

    switch(index){
        case 0:
            hour.innerHTML = `${eval(randomHour1+2)}:00`
            break;

        case 1:
            hour.innerHTML = `${eval(randomHour2+2)}:00`
            break;

        case 2:
            hour.innerHTML = `${eval(randomHour3+2)}:00`
            break;

        case 3:
            hour.innerHTML = `${eval(randomHour4+2)}:00`
            break;

        case 4:
            hour.innerHTML = `${eval(randomHour5+2)}:00`
            break;

        case 5:
            hour.innerHTML = `${eval(randomHour6+2)}:00`
            break;

        case 6:
            hour.innerHTML = `${eval(randomHour7+2)}:00`
            break;

        case 7:
            hour.innerHTML = `${eval(randomHour8+2)}:00`
            break;

        case 8:
            hour.innerHTML = `${eval(randomHour9+2)}:00`
            break;

        case 9:
            hour.innerHTML = `${eval(randomHour10+2)}:00`
            break;

        case 10:
            hour.innerHTML = `${eval(randomHour11+2)}:00`
            break;

        case 11:
            hour.innerHTML = `${eval(randomHour12+2)}:00`
            break;
    }
}

function flight2Hours30Minutes(hour, index){

    switch(index){
        case 0:
            hour.innerHTML = `${eval(randomHour1+2)}:30`
            break;

        case 1:
            hour.innerHTML = `${eval(randomHour2+2)}:30`
            break;

        case 2:
            hour.innerHTML = `${eval(randomHour3+2)}:30`
            break;

        case 3:
            hour.innerHTML = `${eval(randomHour4+2)}:30`
            break;

        case 4:
            hour.innerHTML = `${eval(randomHour5+2)}:30`
            break;

        case 5:
            hour.innerHTML = `${eval(randomHour6+2)}:30`
            break;

        case 6:
            hour.innerHTML = `${eval(randomHour7+2)}:30`
            break;

        case 7:
            hour.innerHTML = `${eval(randomHour8+2)}:30`
            break;

        case 8:
            hour.innerHTML = `${eval(randomHour9+2)}:30`
            break;

        case 9:
            hour.innerHTML = `${eval(randomHour10+2)}:30`
            break;

        case 10:
            hour.innerHTML = `${eval(randomHour11+2)}:30`
            break;

        case 11:
            hour.innerHTML = `${eval(randomHour12+2)}:30`
            break;
    }
}

function flight3Hours(hour, index){
    switch(index){
        case 0:
            hour.innerHTML = `${eval(randomHour1+3)}:00`
            break;

        case 1:
            hour.innerHTML = `${eval(randomHour2+3)}:00`
            break;

        case 2:
            hour.innerHTML = `${eval(randomHour3+3)}:00`
            break;

        case 3:
            hour.innerHTML = `${eval(randomHour4+3)}:00`
            break;

        case 4:
            hour.innerHTML = `${eval(randomHour5+3)}:00`
            break;

        case 5:
            hour.innerHTML = `${eval(randomHour6+3)}:00`
            break;

        case 6:
            hour.innerHTML = `${eval(randomHour7+3)}:00`
            break;

        case 7:
            hour.innerHTML = `${eval(randomHour8+3)}:00`
            break;

        case 8:
            hour.innerHTML = `${eval(randomHour9+3)}:00`
            break;

        case 9:
            hour.innerHTML = `${eval(randomHour10+3)}:00`
            break;

        case 10:
            hour.innerHTML = `${eval(randomHour11+3)}:00`
            break;

        case 11:
            hour.innerHTML = `${eval(randomHour12+3)}:00`
            break;
    }
}

function flight3Hours30Minutes(hour, index){
    switch(index){
        case 0:
            hour.innerHTML = `${eval(randomHour1+3)}:30`
            break;

        case 1:
            hour.innerHTML = `${eval(randomHour2+3)}:30`
            break;

        case 2:
            hour.innerHTML = `${eval(randomHour3+3)}:30`
            break;

        case 3:
            hour.innerHTML = `${eval(randomHour4+3)}:30`
            break;

        case 4:
            hour.innerHTML = `${eval(randomHour5+3)}:30`
            break;

        case 5:
            hour.innerHTML = `${eval(randomHour6+3)}:30`
            break;

        case 6:
            hour.innerHTML = `${eval(randomHour7+3)}:30`
            break;

        case 7:
            hour.innerHTML = `${eval(randomHour8+3)}:30`
            break;

        case 8:
            hour.innerHTML = `${eval(randomHour9+3)}:30`
            break;

        case 9:
            hour.innerHTML = `${eval(randomHour10+3)}:30`
            break;

        case 10:
            hour.innerHTML = `${eval(randomHour11+3)}:30`
            break;

        case 11:
            hour.innerHTML = `${eval(randomHour12+3)}:30`
            break;
    }
}

function flight4Hours(hour, index){

    switch(index){
        case 0:
            hour.innerHTML = `${eval(randomHour1+4)}:00`
            break;

        case 1:
            hour.innerHTML = `${eval(randomHour2+4)}:00`
            break;

        case 2:
            hour.innerHTML = `${eval(randomHour3+4)}:00`
            break;

        case 3:
            hour.innerHTML = `${eval(randomHour4+4)}:00`
            break;

        case 4:
            hour.innerHTML = `${eval(randomHour5+4)}:00`
            break;

        case 5:
            hour.innerHTML = `${eval(randomHour6+4)}:00`
            break;

        case 6:
            hour.innerHTML = `${eval(randomHour7+4)}:00`
            break;

        case 7:
            hour.innerHTML = `${eval(randomHour8+4)}:00`
            break;

        case 8:
            hour.innerHTML = `${eval(randomHour9+4)}:00`
            break;

        case 9:
            hour.innerHTML = `${eval(randomHour10+4)}:00`
            break;

        case 10:
            hour.innerHTML = `${eval(randomHour11+4)}:00`
            break;

        case 11:
            hour.innerHTML = `${eval(randomHour12+4)}:00`
            break;
    }
}

function flight4Hours30Minutes(hour, index){

    switch (index){

        case 0:
            hour.innerHTML = `${eval(randomHour1+4)}:30`
            break;

        case 1:
            hour.innerHTML = `${eval(randomHour2+4)}:30`
            break;

        case 2:
            hour.innerHTML = `${eval(randomHour3+4)}:30`
            break;

        case 3:
            hour.innerHTML = `${eval(randomHour4+4)}:30`
            break;

        case 4:
            hour.innerHTML = `${eval(randomHour5+4)}:30`
            break;

        case 5:
            hour.innerHTML = `${eval(randomHour6+4)}:30`
            break;

        case 6:
            hour.innerHTML = `${eval(randomHour7+4)}:30`
            break;

        case 7:
            hour.innerHTML = `${eval(randomHour8+4)}:30`
            break;

        case 8:
            hour.innerHTML = `${eval(randomHour9+4)}:30`
            break;

        case 9:
            hour.innerHTML = `${eval(randomHour10+4)}:30`
            break;

        case 10:
            hour.innerHTML = `${eval(randomHour11+4)}:30`
            break;

        case 11:
            hour.innerHTML = `${eval(randomHour12+4)}:30`
            break;
    }
}

function flight5Hours(hour, index){

    switch (index){

        case 0:
            hour.innerHTML = `${eval(randomHour1+5)}:00`
            break;

        case 1:
            hour.innerHTML = `${eval(randomHour2+5)}:00`
            break;

        case 2:
            hour.innerHTML = `${eval(randomHour3+5)}:00`
            break;

        case 3:
            hour.innerHTML = `${eval(randomHour4+5)}:00`
            break;

        case 4:
            hour.innerHTML = `${eval(randomHour5+5)}:00`
            break;

        case 5:
            hour.innerHTML = `${eval(randomHour6+5)}:00`
            break;

        case 6:
            hour.innerHTML = `${eval(randomHour7+5)}:00`
            break;

        case 7:
            hour.innerHTML = `${eval(randomHour8+5)}:00`
            break;

        case 8:
            hour.innerHTML = `${eval(randomHour9+5)}:00`
            break;

        case 9:
            hour.innerHTML = `${eval(randomHour10+5)}:00`
            break;

        case 10:
            hour.innerHTML = `${eval(randomHour11+5)}:00`
            break;

        case 11:
            hour.innerHTML = `${eval(randomHour12+5)}:00`
            break;
    }
}

function departureRandomHour(hour, index){

    switch(index){

        case 0:
            hour.innerHTML = `${randomHour1}:00`
            break;

        case 1:
            hour.innerHTML = `${randomHour2}:00`
            break;

        case 2:
            hour.innerHTML = `${randomHour3}:00`
            break;

        case 3:
            hour.innerHTML = `${randomHour4}:00`
            break;

        case 4:
            hour.innerHTML = `${randomHour5}:00`
            break;

        case 5:
            hour.innerHTML = `${randomHour6}:00`
            break;

        case 6:
            hour.innerHTML = `${randomHour7}:00`
            break;

        case 7:
            hour.innerHTML = `${randomHour8}:00`
            break;

        case 8:
            hour.innerHTML = `${randomHour9}:00`
            break;

        case 9:
            hour.innerHTML = `${randomHour10}:00`
            break;

        case 10:
            hour.innerHTML = `${randomHour11}:00`
            break;

        case 11:
            hour.innerHTML = `${randomHour12}:00`
            break;
    }
}

function arrivalHour1(hour, index){

    switch(from.value){

        case "SP - Congonhas (CGH)":
        case "SP - Guarulhos (GRU)":
        case "Campinas (VCP)":

            switch(to.value){

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "RJ - Santos Dumont (SDU)":
                case "RJ - Galeão (GIG)":
                case "BH - Confins (CNF)":
                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":

                    flight1Hour(hour, index);
                    flightTime(1, 0);

                break;

                case "Porto Alegre (POA)":
                case "Vitória (VIX)":
                case "Campo Grande (CGR)":
                case "Goiânia (GYN)":
                case "Brasília (BSB)":

                    flight1Hour30Minutes(hour, index)
                    flightTime(1, 30);

                break;

                case "Salvador (SSA)":
                case "Palmas (PMW)":
                case "Cuiabá (CGB)":

                    flight2Hours(hour, index);
                    flightTime(2, 0);

                break;

                case "Aracaju (AJU)":

                    flight2Hours30Minutes(hour, index);
                    flightTime(2, 30);

                break;

                case "Maceió (MCZ)":
                case "Recife (REC)":
                case "João Pessoa (JPA)":
                case "Natal (NAT)":
                case "Teresina (THE)":

                    flight3Hours(hour, index);
                    flightTime(3, 0);

                break;

                case "Fortaleza (FOR)":
                case "São Luís (SLZ)":
                case "Belém (BEL)":
                case "Porto Velho (PVH)":

                    flight3Hours30Minutes(hour, index)
                    flightTime(3, 30)

                break;

                case "Manaus (MAO)":
                case "Macapá (MCP)":
                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":

                    flight4Hours(hour, index);
                    flightTime(4, 0);

                break;
            }

        break;

        case "RJ - Galeão (GIG)":
        case "RJ - Santos Dumont (SDU)":

            switch(to.value){

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Vitória (VIX)":
                case "BH - Confins (CNF)":

                    flight1Hour(hour, index);
                    flightTime(1, 0);

                break;

                case "Goiânia (GYN)":
                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":
                case "Brasília (BSB)":

                    flight1Hour30Minutes(hour, index);
                    flightTime(1, 30);

                break;

                case "Salvador (SSA)":
                case "Porto Alegre (POA)":
                case "Palmas (PMW)":
                case "Campo Grande (CGR)":

                    flight2Hours(hour, index);
                    flightTime(2, 0);

                break;

                case "Cuiabá (CGB)":
                case "Aracaju (AJU)":
                case "Recife (REC)":
                case "Maceió (MCZ)":

                    flight2Hours30Minutes(hour, index);
                    flightTime(2, 30);

                break;

                case "Fortaleza (FOR)":
                case "João Pessoa (JPA)":
                case "Natal (NAT)":
                case "Teresina (THE)":
                case "São Luís (SLZ)":

                    flight3Hours(hour, index);
                    flightTime(3, 0);

                break;

                case "Porto Velho (PVH)":
                case "Belém (BEL)":
                case "Macapá (MCP)":

                    flight3Hours30Minutes(hour, index);
                    flightTime(3, 30);

                break;

                case "Manaus (MAO)":
                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":

                    flight4Hours(hour, index);
                    flightTime(4, 0);

                break;
            }

        break;

        case "BH - Confins (CNF)":

            switch(to.value){

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Vitória (VIX)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":

                    flight1Hour(hour, index);
                    flightTime(1, 0);

                break;

                case "Salvador (SSA)":
                case "Goiânia (GYN)":
                case "Brasília (BSB)":
                case "Curitiba (CWB)":

                    flight1Hour30Minutes(hour, index);
                    flightTime(1, 30);

                break;

                case "Florianópolis (FLN)":
                case "Campo Grande (CGR)":
                case "Palmas (PMW)":
                case "Maceió (MCZ)":
                case "Aracaju (AJU)":

                    flight2Hours(hour, index);
                    flightTime(2, 0);

                break;

                case "Recife (REC)":
                case "Porto Alegre (POA)":
                case "João Pessoa (JPA)":
                case "Cuiabá (CGB)":
                case "Natal (NAT)":

                    flight2Hours30Minutes(hour, index);
                    flightTime(2, 30);

                break;

                case "Fortaleza (FOR)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "Belém (BEL)":

                    flight3Hours(hour, index);
                    flightTime(3, 0);

                break;

                case "Manaus (MAO)":
                case "Porto Velho (PVH)":
                case "Macapá (MCP)":

                    flight3Hours30Minutes(hour, index);
                    flightTime(3, 30);

                break;

                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":

                    flight4Hours(hour, index);
                    flightTime(4, 0)

                break;
            }
        break;

        case "Vitória (VIX)":

            switch (to.value){

                case "BH - Confins (CNF)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":

                    flight1Hour(hour, index);
                    flightTime(1, 0);

                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Salvador (SSA)":
                case "Aracaju (AJU)":

                    flight1Hour30Minutes(hour, index);
                    flightTime(1, 30);

                break;

                case "Maceió (MCZ)":
                case "Recife (REC)":
                case "Palmas (PMW)":
                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":

                    flight2Hours(hour, index);
                    flightTime(2, 0);

                break;

                case "Porto Alegre (POA)":
                case "João Pessoa (JPA)":
                case "Fortaleza (FOR)":
                case "Natal (NAT)":
                case "Campo Grande (CGR)":

                    flight2Hours30Minutes(hour, index);
                    flightTime(2, 30);

                break;

                case "Cuiabá (CGB)":
                case "São Luís (SLZ)":
                case "Belém (BEL)":
                case "Teresina (THE)":

                    flight3Hours(hour, index);
                    flightTime(3, 0);

                break;

                case "Porto Velho (PVH)":
                case "Manaus (MAO)":
                case "Macapá (MCP)":

                    flight3Hours30Minutes(hour, index);
                    flightTime(3, 30);

                break;

                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":

                    flight4Hours(hour, index);
                    flightTime(4, 0);

                break;
            }
        break;

        case "Curitiba (CWB)":
        case "Florianópolis (FLN)":

            switch(to.value){

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Florianópolis (FLN)":
                case "Curitiba (CWB)":
                case "Porto Alegre (POA)":

                    flight1Hour(hour, index);
                    flightTime(1, 0);

                break;

                case "BH - Confins (CNF)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":

                    flight1Hour30Minutes(hour, index);
                    flightTime(1, 30);

                break;

                case "Campo Grande (CGR)":
                case "Vitória (VIX)":
                case "Goiânia (GYN)":
                case "Brasília (BSB)":
                
                    flight2Hours(hour, index);
                    flightTime(2, 0);

                break;

                case "Salvador (SSA)":
                case "Aracaju (AJU)":
                case "Cuiabá (CGB)":
                case "Maceió (MCZ)":

                    flight2Hours30Minutes(hour, index);
                    flightTime(2, 30);

                break;

                case "Recife (REC)":
                case "João Pessoa (JPA)":
                case "Natal (NAT)":
                case "Palmas (PMW)":

                    flight3Hours(hour, index);
                    flightTime(3, 0);

                break;

                case "Fortaleza (FOR)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "Belém (BEL)":

                    flight3Hours30Minutes(hour, index);
                    flightTime(3, 30);

                break;

                case "Manaus (MAO)":
                case "Porto Velho (PVH)":
                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":
                case "Macapá (MCP)":

                    flight4Hours(hour, index);
                    flightTime(4, 0);

                break;
            }

        break;

        case "Porto Alegre (POA)":

            switch (to.value){

                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":

                    flight1Hour(hour, index);
                    flightTime(1, 0);

                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Campo Grande (CGR)":

                    flight1Hour30Minutes(hour, index);
                    flightTime(1, 30);

                break;

                case "BH - Confins (CNF)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Vitória (VIX)":

                    flight2Hours(hour, index);
                    flightTime(2, 0);

                break;

                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Salvador (SSA)":

                    flight2Hours30Minutes(hour, index);
                    flightTime(2, 30);

                break;

                case "Aracaju (AJU)":
                case "Cuiabá (CGB)":
                case "Maceió (MCZ)":
                case "Recife (REC)":
                case "Palmas (PMW)":

                    flight3Hours30Minutes(hour, index);
                    flightTime(3, 30);

                break;

                case "Natal (NAT)":
                case "Fortaleza (FOR)":
                case "João Pessoa (JPA)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "Belém (BEL)":

                    flight4Hours(hour, index);
                    flightTime(4, 0);

                break;

                case "Manaus (MAO)":
                case "Porto Velho (PVH)":
                case "Rio Branco (RBR)":
            
                    flight4Hours30Minutes(hour, index);
                    flightTime(4, 30);

                break;

                case "Boa Vista (BVB)":
                case "Macapá (MCP)":

                    flight5Hours(hour, index);
                    flightTime(5, 0);

                break;
            }

        break;

        case "Campo Grande (CGR)":
            
            switch (to.value){

                case "Cuiabá (CGB)":
                
                    flight1Hour(hour, index);
                    flightTime(1, 0);

                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":
                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Porto Alegre (POA)":

                    flight1Hour30Minutes(hour, index);
                    flightTime(1, 30);

                break;

                case "BH - Confins (CNF)": 
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Vitória (VIX)":
                case "Porto Velho (PVH)":

                    flight2Hours(hour, index);
                    flightTime(2, 0);

                break;

                case "Rio Branco (RBR)":
                case "Salvador (SSA)":
                case "Aracaju (AJU)":
                case "Palmas (PMW)":

                    flight3Hours(hour, index);
                    flightTime(3, 0);

                break;

                case "Belém (BEL)":
                case "Maceió (MCZ)":
                case "Recife (REC)":

                    flight3Hours30Minutes(hour, index);
                    flightTime(3, 30);

                break;

                case "Natal (NAT)":
                case "Fortaleza (FOR)":
                case "João Pessoa (JPA)":
                case "Manaus (MAO)":
                case "Boa Vista (BVB)":
                case "Macapá (MCP)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":

                    flight4Hours(hour, index);
                    flightTime(4, 0);

                break;
            }

        break;

        case "Cuiabá (CGB)":

            switch (to.value){

                case "Campo Grande (CGR)":

                    flight1Hour(hour, index);
                    flightTime(1, 0);

                break;

                case "Goiânia (GYN)":
                case "Brasília (BSB)":

                    flight1Hour30Minutes(hour, index);
                    flightTime(1, 30);

                break;

                case "Porto Velho (PVH)":
                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Curitiba (CWB)":
                case "BH - Confins (CNF)":

                    flight2Hours(hour, index);
                    flightTime(2, 0);

                break;

                case "Florianópolis (FLN)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Vitória (VIX)":
                case "Palmas (PMW)":

                    flight2Hours30Minutes(hour, index);
                    flightTime(2, 30);

                break;

                case "Porto Alegre (POA)":
                case "Salvador (SSA)":
                case "Aracaju (AJU)":
                case "Maceió (MCZ)":
                case "Rio Branco (RBR)":

                    flight3Hours(hour, index);
                    flightTime(3, 0);

                break;

                case "Recife (REC)":
                case "Natal (NAT)":
                case "Fortaleza (FOR)":
                case "João Pessoa (JPA)":
                case "Manaus (MAO)":
                case "Boa Vista (BVB)":
                case "Macapá (MCP)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "Belém (BEL)":

                    flight3Hours30Minutes(hour, index);
                    flightTime(3, 30);
                
                break;
            }

        break;

        case "Goiânia (GYN)":
        case "Brasília (BSB)":

            switch (to.value){

                case "Goiânia (GYN)":
                case "Brasília (BSB)":
                case "BH - Confins (CNF)":
                case "Palmas (PMW)":
                
                    flight1Hour(hour, index);
                    flightTime(1, 0);

                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Vitória (VIX)":
                case "Campo Grande (CGR)":
                case "Cuiabá (CGB)":

                    flight1Hour30Minutes(hour, index);
                    flightTime(1, 30);

                break;

                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":
                case "Salvador (SSA)":
                case "Aracaju (AJU)":

                    flight2Hours(hour, index);
                    flightTime(2, 0);

                break;

                case "Belém (BEL)":
                case "Porto Alegre (POA)":
                case "Recife (REC)":
                case "Maceió (MCZ)":
                case "João Pessoa (JPA)":
                case "Fortaleza (FOR)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "Natal (NAT)":
                case "Macapá (MCP)":

                    flight2Hours30Minutes(hour, index);
                    flightTime(2, 30);

                break;

                case "Manaus (MAO)":
                case "Porto Velho (PVH)":
                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":

                    flight3Hours(hour, index);
                    flightTime(3, 0);

                break;
            }

        break;

        case "Aracaju (AJU)":
        case "Maceió (MCZ)":

            switch (to.value){

                case "Salvador (SSA)":
                case "Aracaju (AJU)":
                case "Maceió (MCZ)":
                case "Recife (REC)":
                case "João Pessoa (JPA)":

                    flight1Hour(hour, index);
                    flightTime(1, 0);

                break;

                case "Fortaleza (FOR)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "Natal (NAT)":

                    flight2Hours(hour, index);
                    flightTime(2, 0);

                break;

                case "BH - Confins (CNF)":
                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Palmas (PMW)":
                case "Belém (BEL)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Vitória (VIX)":

                    flight2Hours30Minutes(hour, index);
                    flightTime(2, 30);

                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Campo Grande (CGR)":
                case "Cuiabá (CGB)":

                    flight3Hours(hour, index);
                    flightTime(3, 0);

                break;
                
                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":
                case "Manaus (MAO)":
                case "Macapá (MCP)":
                
                    flight3Hours30Minutes(hour, index);
                    flightTime(3, 30);

                break;

                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":
                case "Porto Velho (PVH)":
                case "Porto Alegre (POA)":

                    flight5Hours(hour, index);
                    flightTime(5, 0);

                break;
            }

        break;

        case "Salvador (SSA)":

            switch (to.value){

                case "Maceió (MCZ)":
                case "Aracaju (AJU)":
                case "Recife (REC)":
                
                    flight1Hour(hour, index);
                    flightTime(1, 0);

                break;

                case "BH - Confins (CNF)":
                case "Vitória (VIX)":
                case "Natal (NAT)":
                case "João Pessoa (JPA)":
                
                    flight1Hour30Minutes(hour, index);
                    flightTime(1, 30);

                break;

                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                
                    flight2Hours(hour, index);
                    flightTime(2, 0);

                break;

                case "Fortaleza (FOR)":
                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "Palmas (PMW)":
                
                    flight2Hours30Minutes(hour, index);
                    flightTime(2, 30);

                break;

                case "Curitiba (CWB)":
                case "Campo Grande (CGR)":
                case "Cuiabá (CGB)":
                case "Florianópolis (FLN)":
                case "Belém (BEL)":

                    flight3Hours(hour, index);
                    flightTime(3, 0);

                break;

                case "Porto Alegre (POA)":
                case "Porto Velho (PVH)":
                case "Macapá (MCP)":
                case "Manaus (MAO)":

                    flight3Hours30Minutes(hour, index);
                    flightTime(3, 30);

                break;

                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":

                    flight5Hours(hour, index);
                    flightTime(5, 0);

                break;

            }
        break;

        case "Recife (REC)":
        case "João Pessoa (JPA)":

            switch (to.value){

                case "Recife (REC)":
                case "Maceió (MCZ)":
                case "Aracaju (AJU)":
                case "Fortaleza (FOR)":
                case "João Pessoa (JPA)":
                case "Natal (NAT)":
                
                    flight1Hour(hour, index);
                    flightTime(1, 0);

                break;

                case "Salvador (SSA)":

                    flight1Hour30Minutes(hour, index);
                    flightTime(1, 30);

                break;

                case "São Luís (SLZ)":
                case "Teresina (THE)":

                    flight2Hours(hour, index);
                    flightTime(2, 0);

                break;

                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "BH - Confins (CNF)":
                case "Palmas (PMW)":
                case "Belém (BEL)":
                case "Vitória (VIX)":

                    flight2Hours30Minutes(hour, index);
                    flightTime(2, 30);
                
                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Macapá (MCP)":

                    flight3Hours(hour, index);
                    flightTime(3, 0);

                break;

                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":
                case "Campo Grande (CGR)":
                case "Cuiabá (CGB)":

                    flight3Hours30Minutes(hour, index);
                    flightTime(3, 30);

                break;

                case "Manaus (MAO)":
                case "Porto Alegre (POA)":

                    flight4Hours(hour, index);
                    flightTime(4, 0);

                break;

                case "Porto Velho (PVH)":
                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":

                    flight4Hours30Minutes(hour, index);
                    flightTime(4, 30);

                break;

            }
        break;

        case "Natal (NAT)":
        case "Fortaleza (FOR)":

            switch (to.value){

                case "Natal (NAT)":
                case "Recife (REC)":
                case "João Pessoa (JPA)":
                case "Maceió (MCZ)":
                case "Fortaleza (FOR)":

                    flight1Hour(hour, index);
                    flightTime(1, 0);

                break;

                case "Salvador (SSA)":
                case "Aracaju (AJU)":
                case "Teresina (THE)":
                case "São Luís (SLZ)":

                    flight1Hour30Minutes(hour, index);
                    flightTime(1, 30);

                break;

                case "Belém (BEL)":
                case "Palmas (PMW)":
                case "Macapá (MCP)":

                    flight2Hours(hour, index);
                    flightTime(2, 0);

                break;
                
                case "BH - Confins (CNF)":
                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Vitória (VIX)":

                    flight2Hours30Minutes(hour, index);
                    flightTime(2, 30);

                break;

                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":

                    flight3Hours(hour, index);
                    flightTime(3, 0);

                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                    case "Cuiabá (CGB)":

                    flight3Hours30Minutes(hour, index);
                    flightTime(3, 30);

                break;

                case "Curitiba (CWB)":
                case "Manaus (MAO)":
                
                    flight4Hours(hour, index);
                    flightTime(4, 0);

                break;

                case "Campo Grande (CGR)":
                case "Florianópolis (FLN)":

                    flight4Hours30Minutes(hour, index);
                    flightTime(4, 30);

                break;

                case "Porto Alegre (POA)":
                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":
                case "Porto Velho (PVH)":

                    flight5Hours(hour, index);
                    flightTime(5, 0);
            }
        break;

        case "São Luís (SLZ)":
        case "Teresina (THE)":

            switch (to.value){

                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "Fortaleza (FOR)":
                case "Belém (BEL)":

                    flight1Hour(hour, index);
                    flightTime(1, 0);

                break;

                case "Macapá (MCP)":
                case "Palmas (PMW)":
                
                    flight1Hour30Minutes(hour, index);
                    flightTime(1, 30);

                break;

                case "Recife (REC)":
                case "Natal (NAT)":
                case "João Pessoa (JPA)":
                case "Aracaju (AJU)":
                case "Maceió (MCZ)":
                case "Salvador (SSA)":
    
                    flight2Hours(hour, index);
                    flightTime(2, 0);

                break;

                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Manaus (MAO)":
                case "Boa Vista (BVB)":

                    flight2Hours30Minutes(hour, index);
                    flightTime(2, 30);

                break;

                case "BH - Confins (CNF)":
                case "Vitória (VIX)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Cuiabá (CGB)":

                    flight3Hours(hour, index);
                    flightTime(3, 0);

                break;
            
                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Campo Grande (CGR)":
                case "Porto Velho (PVH)":

                    flight3Hours30Minutes(hour, index);
                    flightTime(3, 30);

                break;

                case "Curitiba (CWB)":
                case "Rio Branco (RBR)":
                
                    flight4Hours(hour, index);
                    flightTime(4, 0);

                break;

                case "Florianópolis (FLN)":
                case "Porto Alegre (POA)":

                    flight5Hours(hour, index);
                    flightTime(5, 0);

                break;
            
            }

        break;


        case "Palmas (PMW)":

            switch (to.value){

                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                
                    flight1Hour(hour, index);
                    flightTime(1, 0);

                break;

                case "Teresina (THE)":
                case "São Luís (SLZ)":
                case "Belém (BEL)":
                case "Macapá (MCP)":

                    flight1Hour30Minutes(hour, index);
                    flightTime(1, 30);

                break;

                case "Recife (REC)":
                case "Natal (NAT)":
                case "João Pessoa (JPA)":
                case "Aracaju (AJU)":
                case "Maceió (MCZ)":
                case "Salvador (SSA)":
                case "Fortaleza (FOR)":
                case "BH - Confins (CNF)":
                case "Cuiabá (CGB)":
                case "Manaus (MAO)":

                    flight2Hours(hour, index);
                    flightTime(2, 0);

                break;

                case "Vitória (VIX)":
                case "Boa Vista (BVB)":
                case "Campo Grande (CGR)":
                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":

                    flight2Hours30Minutes(hour, index);
                    flightTime(2, 30);

                break;

                case "Curitiba (CWB)":
                case "Porto Velho (PVH)":
                case "Rio Branco (RBR)":

                    flight3Hours(hour, index);
                    flightTime(3, 0);

                break;

                case "Florianópolis (FLN)":
                case "Porto Alegre (POA)":

                    flight3Hours30Minutes(hour, index);
                    flightTime(3, 30);

                break;

            }
        break;

        case "Belém (BEL)":
        case "Macapá (MCP)":
            
            switch (to.value){

                case "Belém (BEL)":
                case "Macapá (MCP)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
               
                    flight1Hour(hour, index);
                    flightTime(1, 0);

                break;

                case "Manaus (MAO)":
                case "Palmas (PMW)":
                case "Fortaleza (FOR)":
                case "Boa Vista (BVB)":

                    flight2Hours(hour, index);
                    flightTime(2, 0);

                break;

                case "Recife (REC)":
                case "Aracaju (AJU)":
                case "Natal (NAT)":
                case "João Pessoa (JPA)":
                case "Maceió (MCZ)":
                case "Brasília (BSB)":
                case "Goiânia (GYN)":

                    flight2Hours30Minutes(hour, index);
                    flightTime(2, 30);

                break;

                case "Porto Velho (PVH)":
                case "Rio Branco (RBR)":
                case "BH - Confins (CNF)":
                case "Vitória (VIX)":
                case "Cuiabá (CGB)":
                case "Salvador (SSA)":
                
                    flight3Hours(hour, index);
                    flightTime(3, 0);

                break;
                
                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Campo Grande (CGR)":
                
                    flight3Hours30Minutes(hour, index);
                    flightTime(3, 30);

                break;

                case "Curitiba (CWB)":
                
                    flight4Hours(hour, index);
                    flightTime(4, 0);

                break;

                case "Florianópolis (FLN)":
                case "Porto Alegre (POA)":

                    flight5Hours(hour, index);
                    flightTime(5, 0);

                break;

            }

        break;

        case "Manaus (MAO)":

            switch (to.value){

                case "Boa Vista (BVB)":
                
                    flight1Hour(hour, index);
                    flightTime(1, 0);

                break;

                case "Porto Velho (PVH)":
                case "Rio Branco (RBR)":
                case "Macapá (MCP)":

                    flight1Hour30Minutes(hour, index);
                    flightTime(1, 30);

                break;

                case "Belém (BEL)":

                    flight2Hours(hour, index);
                    flightTime(2, 0);

                break;

                case "Palmas (PMW)":

                    flight2Hours30Minutes(hour, index);
                    flightTime(2, 30);

                break;

                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Cuiabá (CGB)":
                case "Teresina (THE)":
                case "São Luís (SLZ)":

                    flight3Hours(hour, index);
                    flightTime(3, 0);

                break;

                case "Fortaleza (FOR)":
                case "Natal (NAT)":
                case "Recife (REC)":
                case "Salvador (SSA)":
                case "Aracaju (AJU)":
                case "Maceió (MCZ)":
                case "João Pessoa (JPA)":
                case "BH - Confins (CNF)":
                case "Vitória (VIX)":

                    flight3Hours30Minutes(hour, index);
                    flightTime(3, 30);

                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Campo Grande (CGR)":

                    flight4Hours(hour, index);
                    flightTime(4, 0);

                break;

                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":

                    flight4Hours30Minutes(hour, index);
                    flightTime(4, 30);

                break;

                case "Porto Alegre (POA)":

                    flight5Hours(hour, index);
                    flightTime(5, 0)
            }
        break;

        case "Boa Vista (BVB)":

            switch (to.value){

                case "Manaus (MAO)":
                case "Macapá (MCP)":

                    flight1Hour(hour, index);
                    flightTime(1, 0);

                break;

                case "Belém (BEL)":
                case "Porto Velho (PVH)":
                case "Rio Branco (RBR)":
                
                    flight2Hours(hour, index);
                    flightTime(2, 0);
                
                break;

                case "Cuiabá (CGB)":
                case "São Luís (SLZ)":

                    flight2Hours30Minutes(hour, index);
                    flightTime(2, 30);

                break;

                case "Palmas (PMW)":
                
                    flight3Hours(hour, index);
                    flightTime(3, 0);

                break;

                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Teresina (THE)":
                case "Fortaleza (FOR)":
            
                    flight3Hours30Minutes(hour, index);
                    flightTime(3, 30);

                break;

                case "BH - Confins (CNF)":
                case "Vitória (VIX)":
                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Recife (REC)":
                case "Natal (NAT)":
                case "João Pessoa (JPA)":
                case "Salvador (SSA)":
                case "Aracaju (AJU)":
                case "Maceió (MCZ)":

                    flight4Hours(hour, index);
                    flightTime(4, 0);

                break;

                case "Curitiba (CWB)":

                    flight4Hours30Minutes(hour, index);
                    flightTime(4, 30);

                break;

                case "Florianópolis (FLN)":
                case "Porto Alegre (POA)":

                    flight5Hours(hour, index);
                    flightTime(5, 0);

                break;
            }
        break;

        case "Rio Branco (RBR)":
        case "Porto Velho (PVH)":

            switch (to.value){

                case "Rio Branco (RBR)":
                case "Porto Velho (PVH)":

                    flight1Hour(hour, index);
                    flightTime(1, 0);

                break;

                case "Manaus (MAO)":
                
                    flight1Hour30Minutes(hour, index);
                    flightTime(1, 30);

                break;

                case "Cuiabá (CGB)":
                case "Boa Vista (BVB)":

                    flight2Hours30Minutes(hour, index);
                    flightTime(2, 30);

                break;

                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Palmas (PMW)":
                
                    flight3Hours(hour, index);
                    flightTime(3, 0);

                break;

                case "Campo Grande (CGR)":
                case "Belém (BEL)":
                case "Macapá (MCP)":
                
                    flight3Hours30Minutes(hour, index);
                    flightTime(3, 30);

                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "BH - Confins (CNF)":

                    flight4Hours(hour, index);
                    flightTime(4, 0);

                break;

                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Vitória (VIX)":
                case "Curitiba (CWB)":
                case "Fortaleza (FOR)":
                
                    flight4Hours30Minutes(hour, index);
                    flightTime(4, 30);

                break;

                case "Salvador (SSA)":
                case "Porto Alegre (POA)":
                case "Florianópolis (FLN)":
                case "Aracaju (AJU)":
                case "Maceió (MCZ)":
                case "Recife (REC)":
                case "João Pessoa (JPA)":
                case "Natal (NAT)":

                    flight5Hours(hour, index);
                    flightTime(5, 0);

                break;

            }

        break;
    }
}

function arrivalHour2(hour, index){

    switch(to.value){

        case "SP - Congonhas (CGH)":
        case "SP - Guarulhos (GRU)":
        case "Campinas (VCP)":

            switch(from.value){

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "RJ - Santos Dumont (SDU)":
                case "RJ - Galeão (GIG)":
                case "BH - Confins (CNF)":
                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":

                    flight1Hour(hour, index);
                    flightTimeReturn(1, 0);

                break;

                case "Porto Alegre (POA)":
                case "Vitória (VIX)":
                case "Campo Grande (CGR)":
                case "Goiânia (GYN)":
                case "Brasília (BSB)":

                    flight1Hour30Minutes(hour, index)
                    flightTimeReturn(1, 30);

                break;

                case "Salvador (SSA)":
                case "Palmas (PMW)":
                case "Cuiabá (CGB)":

                    flight2Hours(hour, index);
                    flightTimeReturn(2, 0);

                break;

                case "Aracaju (AJU)":

                    flight2Hours30Minutes(hour, index);
                    flightTimeReturn(2, 30);

                break;

                case "Maceió (MCZ)":
                case "Recife (REC)":
                case "João Pessoa (JPA)":
                case "Natal (NAT)":
                case "Teresina (THE)":

                    flight3Hours(hour, index);
                    flightTimeReturn(3, 0);

                break;

                case "Fortaleza (FOR)":
                case "São Luís (SLZ)":
                case "Belém (BEL)":
                case "Porto Velho (PVH)":

                    flight3Hours30Minutes(hour, index)
                    flightTimeReturn(3, 30)

                break;

                case "Manaus (MAO)":
                case "Macapá (MCP)":
                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":

                    flight4Hours(hour, index);
                    flightTimeReturn(4, 0);

                break;
            }

        break;

        case "RJ - Galeão (GIG)":
        case "RJ - Santos Dumont (SDU)":

            switch(from.value){

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Vitória (VIX)":
                case "BH - Confins (CNF)":

                    flight1Hour(hour, index);
                    flightTimeReturn(1, 0);

                break;

                case "Goiânia (GYN)":
                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":
                case "Brasília (BSB)":

                    flight1Hour30Minutes(hour, index);
                    flightTimeReturn(1, 30);

                break;

                case "Salvador (SSA)":
                case "Porto Alegre (POA)":
                case "Palmas (PMW)":
                case "Campo Grande (CGR)":

                    flight2Hours(hour, index);
                    flightTimeReturn(2, 0);

                break;

                case "Cuiabá (CGB)":
                case "Aracaju (AJU)":
                case "Recife (REC)":
                case "Maceió (MCZ)":

                    flight2Hours30Minutes(hour, index);
                    flightTimeReturn(2, 30);

                break;

                case "Fortaleza (FOR)":
                case "João Pessoa (JPA)":
                case "Natal (NAT)":
                case "Teresina (THE)":
                case "São Luís (SLZ)":

                    flight3Hours(hour, index);
                    flightTimeReturn(3, 0);

                break;

                case "Porto Velho (PVH)":
                case "Belém (BEL)":
                case "Macapá (MCP)":

                    flight3Hours30Minutes(hour, index);
                    flightTimeReturn(3, 30);

                break;

                case "Manaus (MAO)":
                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":

                    flight4Hours(hour, index);
                    flightTimeReturn(4, 0);

                break;
            }

        break;

        case "BH - Confins (CNF)":

            switch(from.value){

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Vitória (VIX)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":

                    flight1Hour(hour, index);
                    flightTimeReturn(1, 0);

                break;

                case "Salvador (SSA)":
                case "Goiânia (GYN)":
                case "Brasília (BSB)":
                case "Curitiba (CWB)":

                    flight1Hour30Minutes(hour, index);
                    flightTimeReturn(1, 30);

                break;

                case "Florianópolis (FLN)":
                case "Campo Grande (CGR)":
                case "Palmas (PMW)":
                case "Maceió (MCZ)":
                case "Aracaju (AJU)":

                    flight2Hours(hour, index);
                    flightTimeReturn(2, 0);

                break;

                case "Recife (REC)":
                case "Porto Alegre (POA)":
                case "João Pessoa (JPA)":
                case "Cuiabá (CGB)":
                case "Natal (NAT)":

                    flight2Hours30Minutes(hour, index);
                    flightTimeReturn(2, 30);

                break;

                case "Fortaleza (FOR)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "Belém (BEL)":

                    flight3Hours(hour, index);
                    flightTimeReturn(3, 0);

                break;

                case "Manaus (MAO)":
                case "Porto Velho (PVH)":
                case "Macapá (MCP)":

                    flight3Hours30Minutes(hour, index);
                    flightTimeReturn(3, 30);

                break;

                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":

                    flight4Hours(hour, index);
                    flightTimeReturn(4, 0)

                break;
            }
        break;

        case "Vitória (VIX)":

            switch (from.value){

                case "BH - Confins (CNF)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":

                    flight1Hour(hour, index);
                    flightTimeReturn(1, 0);

                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Salvador (SSA)":
                case "Aracaju (AJU)":

                    flight1Hour30Minutes(hour, index);
                    flightTimeReturn(1, 30);

                break;

                case "Maceió (MCZ)":
                case "Recife (REC)":
                case "Palmas (PMW)":
                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":

                    flight2Hours(hour, index);
                    flightTimeReturn(2, 0);

                break;

                case "Porto Alegre (POA)":
                case "João Pessoa (JPA)":
                case "Fortaleza (FOR)":
                case "Natal (NAT)":
                case "Campo Grande (CGR)":

                    flight2Hours30Minutes(hour, index);
                    flightTimeReturn(2, 30);

                break;

                case "Cuiabá (CGB)":
                case "São Luís (SLZ)":
                case "Belém (BEL)":
                case "Teresina (THE)":

                    flight3Hours(hour, index);
                    flightTimeReturn(3, 0);

                break;

                case "Porto Velho (PVH)":
                case "Manaus (MAO)":
                case "Macapá (MCP)":

                    flight3Hours30Minutes(hour, index);
                    flightTimeReturn(3, 30);

                break;

                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":

                    flight4Hours(hour, index);
                    flightTimeReturn(4, 0);

                break;
            }
        break;

        case "Curitiba (CWB)":
        case "Florianópolis (FLN)":

            switch(from.value){

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Florianópolis (FLN)":
                case "Curitiba (CWB)":
                case "Porto Alegre (POA)":

                    flight1Hour(hour, index);
                    flightTimeReturn(1, 0);

                break;

                case "BH - Confins (CNF)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":

                    flight1Hour30Minutes(hour, index);
                    flightTimeReturn(1, 30);

                break;

                case "Campo Grande (CGR)":
                case "Vitória (VIX)":
                case "Goiânia (GYN)":
                case "Brasília (BSB)":
                
                    flight2Hours(hour, index);
                    flightTimeReturn(2, 0);

                break;

                case "Salvador (SSA)":
                case "Aracaju (AJU)":
                case "Cuiabá (CGB)":
                case "Maceió (MCZ)":

                    flight2Hours30Minutes(hour, index);
                    flightTimeReturn(2, 30);

                break;

                case "Recife (REC)":
                case "João Pessoa (JPA)":
                case "Natal (NAT)":
                case "Palmas (PMW)":

                    flight3Hours(hour, index);
                    flightTimeReturn(3, 0);

                break;

                case "Fortaleza (FOR)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "Belém (BEL)":

                    flight3Hours30Minutes(hour, index);
                    flightTimeReturn(3, 30);

                break;

                case "Manaus (MAO)":
                case "Porto Velho (PVH)":
                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":
                case "Macapá (MCP)":

                    flight4Hours(hour, index);
                    flightTimeReturn(4, 0);

                break;
            }

        break;

        case "Porto Alegre (POA)":

            switch (from.value){

                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":

                    flight1Hour(hour, index);
                    flightTimeReturn(1, 0);

                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Campo Grande (CGR)":

                    flight1Hour30Minutes(hour, index);
                    flightTimeReturn(1, 30);

                break;

                case "BH - Confins (CNF)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Vitória (VIX)":

                    flight2Hours(hour, index);
                    flightTimeReturn(2, 0);

                break;

                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Salvador (SSA)":

                    flight2Hours30Minutes(hour, index);
                    flightTimeReturn(2, 30);

                break;

                case "Aracaju (AJU)":
                case "Cuiabá (CGB)":
                case "Maceió (MCZ)":
                case "Recife (REC)":
                case "Palmas (PMW)":

                    flight3Hours30Minutes(hour, index);
                    flightTimeReturn(3, 30);

                break;

                case "Natal (NAT)":
                case "Fortaleza (FOR)":
                case "João Pessoa (JPA)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "Belém (BEL)":

                    flight4Hours(hour, index);
                    flightTimeReturn(4, 0);

                break;

                case "Manaus (MAO)":
                case "Porto Velho (PVH)":
                case "Rio Branco (RBR)":
            
                    flight4Hours30Minutes(hour, index);
                    flightTimeReturn(4, 30);

                break;

                case "Boa Vista (BVB)":
                case "Macapá (MCP)":

                    flight5Hours(hour, index);
                    flightTimeReturn(5, 0);

                break;
            }

        break;

        case "Campo Grande (CGR)":
            
            switch (from.value){

                case "Cuiabá (CGB)":
                
                    flight1Hour(hour, index);
                    flightTimeReturn(1, 0);

                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":
                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Porto Alegre (POA)":

                    flight1Hour30Minutes(hour, index);
                    flightTimeReturn(1, 30);

                break;

                case "BH - Confins (CNF)": 
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Vitória (VIX)":
                case "Porto Velho (PVH)":

                    flight2Hours(hour, index);
                    flightTimeReturn(2, 0);

                break;

                case "Rio Branco (RBR)":
                case "Salvador (SSA)":
                case "Aracaju (AJU)":
                case "Palmas (PMW)":

                    flight3Hours(hour, index);
                    flightTimeReturn(3, 0);

                break;

                case "Belém (BEL)":
                case "Maceió (MCZ)":
                case "Recife (REC)":

                    flight3Hours30Minutes(hour, index);
                    flightTimeReturn(3, 30);

                break;

                case "Natal (NAT)":
                case "Fortaleza (FOR)":
                case "João Pessoa (JPA)":
                case "Manaus (MAO)":
                case "Boa Vista (BVB)":
                case "Macapá (MCP)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":

                    flight4Hours(hour, index);
                    flightTimeReturn(4, 0);

                break;
            }

        break;

        case "Cuiabá (CGB)":

            switch (from.value){

                case "Campo Grande (CGR)":

                    flight1Hour(hour, index);
                    flightTimeReturn(1, 0);

                break;

                case "Goiânia (GYN)":
                case "Brasília (BSB)":

                    flight1Hour30Minutes(hour, index);
                    flightTimeReturn(1, 30);

                break;

                case "Porto Velho (PVH)":
                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Curitiba (CWB)":
                case "BH - Confins (CNF)":

                    flight2Hours(hour, index);
                    flightTimeReturn(2, 0);

                break;

                case "Florianópolis (FLN)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Vitória (VIX)":
                case "Palmas (PMW)":

                    flight2Hours30Minutes(hour, index);
                    flightTimeReturn(2, 30);

                break;

                case "Porto Alegre (POA)":
                case "Salvador (SSA)":
                case "Aracaju (AJU)":
                case "Maceió (MCZ)":
                case "Rio Branco (RBR)":

                    flight3Hours(hour, index);
                    flightTimeReturn(3, 0);

                break;

                case "Recife (REC)":
                case "Natal (NAT)":
                case "Fortaleza (FOR)":
                case "João Pessoa (JPA)":
                case "Manaus (MAO)":
                case "Boa Vista (BVB)":
                case "Macapá (MCP)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "Belém (BEL)":

                    flight3Hours30Minutes(hour, index);
                    flightTimeReturn(3, 30);
                
                break;
            }

        break;

        case "Goiânia (GYN)":
        case "Brasília (BSB)":

            switch (from.value){

                case "Goiânia (GYN)":
                case "Brasília (BSB)":
                case "BH - Confins (CNF)":
                case "Palmas (PMW)":
                
                    flight1Hour(hour, index);
                    flightTimeReturn(1, 0);

                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Vitória (VIX)":
                case "Campo Grande (CGR)":
                case "Cuiabá (CGB)":

                    flight1Hour30Minutes(hour, index);
                    flightTimeReturn(1, 30);

                break;

                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":
                case "Salvador (SSA)":
                case "Aracaju (AJU)":

                    flight2Hours(hour, index);
                    flightTimeReturn(2, 0);

                break;

                case "Belém (BEL)":
                case "Porto Alegre (POA)":
                case "Recife (REC)":
                case "Maceió (MCZ)":
                case "João Pessoa (JPA)":
                case "Fortaleza (FOR)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "Natal (NAT)":
                case "Macapá (MCP)":

                    flight2Hours30Minutes(hour, index);
                    flightTimeReturn(2, 30);

                break;

                case "Manaus (MAO)":
                case "Porto Velho (PVH)":
                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":

                    flight3Hours(hour, index);
                    flightTimeReturn(3, 0);

                break;
            }

        break;

        case "Aracaju (AJU)":
        case "Maceió (MCZ)":

            switch (from.value){

                case "Salvador (SSA)":
                case "Aracaju (AJU)":
                case "Maceió (MCZ)":
                case "Recife (REC)":
                case "João Pessoa (JPA)":

                    flight1Hour(hour, index);
                    flightTimeReturn(1, 0);

                break;

                case "Fortaleza (FOR)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "Natal (NAT)":

                    flight2Hours(hour, index);
                    flightTimeReturn(2, 0);

                break;

                case "BH - Confins (CNF)":
                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Palmas (PMW)":
                case "Belém (BEL)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Vitória (VIX)":

                    flight2Hours30Minutes(hour, index);
                    flightTimeReturn(2, 30);

                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Campo Grande (CGR)":
                case "Cuiabá (CGB)":

                    flight3Hours(hour, index);
                    flightTimeReturn(3, 0);

                break;
                
                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":
                case "Manaus (MAO)":
                case "Macapá (MCP)":
                
                    flight3Hours30Minutes(hour, index);
                    flightTimeReturn(3, 30);

                break;

                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":
                case "Porto Velho (PVH)":
                case "Porto Alegre (POA)":

                    flight5Hours(hour, index);
                    flightTimeReturn(5, 0);

                break;
            }

        break;

        case "Salvador (SSA)":

            switch (from.value){

                case "Maceió (MCZ)":
                case "Aracaju (AJU)":
                case "Recife (REC)":
                
                    flight1Hour(hour, index);
                    flightTimeReturn(1, 0);

                break;

                case "BH - Confins (CNF)":
                case "Vitória (VIX)":
                case "Natal (NAT)":
                case "João Pessoa (JPA)":
                
                    flight1Hour30Minutes(hour, index);
                    flightTimeReturn(1, 30);

                break;

                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                
                    flight2Hours(hour, index);
                    flightTimeReturn(2, 0);

                break;

                case "Fortaleza (FOR)":
                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "Palmas (PMW)":
                
                    flight2Hours30Minutes(hour, index);
                    flightTimeReturn(2, 30);

                break;

                case "Curitiba (CWB)":
                case "Campo Grande (CGR)":
                case "Cuiabá (CGB)":
                case "Florianópolis (FLN)":
                case "Belém (BEL)":

                    flight3Hours(hour, index);
                    flightTimeReturn(3, 0);

                break;

                case "Porto Alegre (POA)":
                case "Porto Velho (PVH)":
                case "Macapá (MCP)":
                case "Manaus (MAO)":

                    flight3Hours30Minutes(hour, index);
                    flightTimeReturn(3, 30);

                break;

                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":

                    flight5Hours(hour, index);
                    flightTimeReturn(5, 0);

                break;

            }
        break;

        case "Recife (REC)":
        case "João Pessoa (JPA)":

            switch (from.value){

                case "Recife (REC)":
                case "Maceió (MCZ)":
                case "Aracaju (AJU)":
                case "Fortaleza (FOR)":
                case "João Pessoa (JPA)":
                case "Natal (NAT)":
                
                    flight1Hour(hour, index);
                    flightTimeReturn(1, 0);

                break;

                case "Salvador (SSA)":

                    flight1Hour30Minutes(hour, index);
                    flightTimeReturn(1, 30);

                break;

                case "São Luís (SLZ)":
                case "Teresina (THE)":

                    flight2Hours(hour, index);
                    flightTimeReturn(2, 0);

                break;

                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "BH - Confins (CNF)":
                case "Palmas (PMW)":
                case "Belém (BEL)":
                case "Vitória (VIX)":

                    flight2Hours30Minutes(hour, index);
                    flightTimeReturn(2, 30);
                
                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Macapá (MCP)":

                    flight3Hours(hour, index);
                    flightTimeReturn(3, 0);

                break;

                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":
                case "Campo Grande (CGR)":
                case "Cuiabá (CGB)":

                    flight3Hours30Minutes(hour, index);
                    flightTimeReturn(3, 30);

                break;

                case "Manaus (MAO)":
                case "Porto Alegre (POA)":

                    flight4Hours(hour, index);
                    flightTimeReturn(4, 0);

                break;

                case "Porto Velho (PVH)":
                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":

                    flight4Hours30Minutes(hour, index);
                    flightTimeReturn(4, 30);

                break;

            }
        break;

        case "Natal (NAT)":
        case "Fortaleza (FOR)":

            switch (from.value){

                case "Natal (NAT)":
                case "Recife (REC)":
                case "João Pessoa (JPA)":
                case "Maceió (MCZ)":
                case "Fortaleza (FOR)":

                    flight1Hour(hour, index);
                    flightTimeReturn(1, 0);

                break;

                case "Salvador (SSA)":
                case "Aracaju (AJU)":
                case "Teresina (THE)":
                case "São Luís (SLZ)":

                    flight1Hour30Minutes(hour, index);
                    flightTimeReturn(1, 30);

                break;

                case "Belém (BEL)":
                case "Palmas (PMW)":
                case "Macapá (MCP)":

                    flight2Hours(hour, index);
                    flightTimeReturn(2, 0);

                break;
                
                case "BH - Confins (CNF)":
                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Vitória (VIX)":

                    flight2Hours30Minutes(hour, index);
                    flightTimeReturn(2, 30);

                break;

                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":

                    flight3Hours(hour, index);
                    flightTimeReturn(3, 0);

                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Cuiabá (CGB)":

                    flight3Hours30Minutes(hour, index);
                    flightTimeReturn(3, 30);

                break;

                case "Curitiba (CWB)":
                case "Manaus (MAO)":
                
                    flight4Hours(hour, index);
                    flightTimeReturn(4, 0);

                break;

                case "Campo Grande (CGR)":
                case "Florianópolis (FLN)":

                    flight4Hours30Minutes(hour, index);
                    flightTimeReturn(4, 30);

                break;

                case "Porto Alegre (POA)":
                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":
                case "Porto Velho (PVH)":

                    flight5Hours(hour, index);
                    flightTimeReturn(5, 0);
            }
        break;

        case "São Luís (SLZ)":
        case "Teresina (THE)":

            switch (from.value){

                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "Fortaleza (FOR)":
                case "Belém (BEL)":

                    flight1Hour(hour, index);
                    flightTimeReturn(1, 0);

                break;

                case "Macapá (MCP)":
                case "Palmas (PMW)":
                
                    flight1Hour30Minutes(hour, index);
                    flightTimeReturn(1, 30);

                break;

                case "Recife (REC)":
                case "Natal (NAT)":
                case "João Pessoa (JPA)":
                case "Aracaju (AJU)":
                case "Maceió (MCZ)":
                case "Salvador (SSA)":
    
                    flight2Hours(hour, index);
                    flightTimeReturn(2, 0);

                break;

                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Manaus (MAO)":
                case "Boa Vista (BVB)":

                    flight2Hours30Minutes(hour, index);
                    flightTimeReturn(2, 30);

                break;

                case "BH - Confins (CNF)":
                case "Vitória (VIX)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Cuiabá (CGB)":

                    flight3Hours(hour, index);
                    flightTimeReturn(3, 0);

                break;
            
                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Campo Grande (CGR)":
                case "Porto Velho (PVH)":

                    flight3Hours30Minutes(hour, index);
                    flightTimeReturn(3, 30);

                break;

                case "Curitiba (CWB)":
                case "Rio Branco (RBR)":
                
                    flight4Hours(hour, index);
                    flightTimeReturn(4, 0);

                break;

                case "Florianópolis (FLN)":
                case "Porto Alegre (POA)":

                    flight5Hours(hour, index);
                    flightTimeReturn(5, 0);

                break;
            
            }

        break;

        case "Palmas (PMW)":

            switch (from.value){

                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                
                    flight1Hour(hour, index);
                    flightTimeReturn(1, 0);

                break;

                case "Teresina (THE)":
                case "São Luís (SLZ)":
                case "Belém (BEL)":
                case "Macapá (MCP)":

                    flight1Hour30Minutes(hour, index);
                    flightTimeReturn(1, 30);

                break;

                case "Recife (REC)":
                case "Natal (NAT)":
                case "João Pessoa (JPA)":
                case "Aracaju (AJU)":
                case "Maceió (MCZ)":
                case "Salvador (SSA)":
                case "Fortaleza (FOR)":
                case "BH - Confins (CNF)":
                case "Cuiabá (CGB)":
                case "Manaus (MAO)":

                    flight2Hours(hour, index);
                    flightTimeReturn(2, 0);

                break;

                case "Vitória (VIX)":
                case "Boa Vista (BVB)":
                case "Campo Grande (CGR)":
                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":

                    flight2Hours30Minutes(hour, index);
                    flightTimeReturn(2, 30);

                break;

                case "Curitiba (CWB)":
                case "Porto Velho (PVH)":
                case "Rio Branco (RBR)":

                    flight3Hours(hour, index);
                    flightTimeReturn(3, 0);

                break;

                case "Florianópolis (FLN)":
                case "Porto Alegre (POA)":

                    flight3Hours30Minutes(hour, index);
                    flightTimeReturn(3, 30);

                break;

            }
        break;

        case "Belém (BEL)":
        case "Macapá (MCP)":
            
            switch (from.value){

                case "Belém (BEL)":
                case "Macapá (MCP)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
               
                    flight1Hour(hour, index);
                    flightTimeReturn(1, 0);

                break;

                case "Manaus (MAO)":
                case "Palmas (PMW)":
                case "Fortaleza (FOR)":
                case "Boa Vista (BVB)":

                    flight2Hours(hour, index);
                    flightTimeReturn(2, 0);

                break;

                case "Recife (REC)":
                case "Aracaju (AJU)":
                case "Natal (NAT)":
                case "João Pessoa (JPA)":
                case "Maceió (MCZ)":
                case "Brasília (BSB)":
                case "Goiânia (GYN)":

                    flight2Hours30Minutes(hour, index);
                    flightTimeReturn(2, 30);

                break;

                case "Porto Velho (PVH)":
                case "Rio Branco (RBR)":
                case "BH - Confins (CNF)":
                case "Vitória (VIX)":
                case "Cuiabá (CGB)":
                case "Salvador (SSA)":
                
                    flight3Hours(hour, index);
                    flightTimeReturn(3, 0);

                break;
                
                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Campo Grande (CGR)":
                
                    flight3Hours30Minutes(hour, index);
                    flightTimeReturn(3, 30);

                break;

                case "Curitiba (CWB)":
                
                    flight4Hours(hour, index);
                    flightTimeReturn(4, 0);

                break;

                case "Florianópolis (FLN)":
                case "Porto Alegre (POA)":

                    flight5Hours(hour, index);
                    flightTimeReturn(5, 0);

                break;

            }

        break;

        case "Manaus (MAO)":

            switch (from.value){

                case "Boa Vista (BVB)":
                
                    flight1Hour(hour, index);
                    flightTimeReturn(1, 0);

                break;

                case "Porto Velho (PVH)":
                case "Rio Branco (RBR)":
                case "Macapá (MCP)":

                    flight1Hour30Minutes(hour, index);
                    flightTimeReturn(1, 30);

                break;

                case "Belém (BEL)":

                    flight2Hours(hour, index);
                    flightTimeReturn(2, 0);

                break;

                case "Palmas (PMW)":

                    flight2Hours30Minutes(hour, index);
                    flightTimeReturn(2, 30);

                break;

                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Cuiabá (CGB)":
                case "Teresina (THE)":
                case "São Luís (SLZ)":

                    flight3Hours(hour, index);
                    flightTimeReturn(3, 0);

                break;

                case "Fortaleza (FOR)":
                case "Natal (NAT)":
                case "Recife (REC)":
                case "Salvador (SSA)":
                case "Aracaju (AJU)":
                case "Maceió (MCZ)":
                case "João Pessoa (JPA)":
                case "BH - Confins (CNF)":
                case "Vitória (VIX)":

                    flight3Hours30Minutes(hour, index);
                    flightTimeReturn(3, 30);

                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Campo Grande (CGR)":

                    flight4Hours(hour, index);
                    flightTimeReturn(4, 0);

                break;

                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":

                    flight4Hours30Minutes(hour, index);
                    flightTimeReturn(4, 30);

                break;

                case "Porto Alegre (POA)":

                    flight5Hours(hour, index);
                    flightTimeReturn(5, 0)
            }
        break;

        case "Boa Vista (BVB)":

            switch (from.value){

                case "Manaus (MAO)":
                case "Macapá (MCP)":

                    flight1Hour(hour, index);
                    flightTimeReturn(1, 0);

                break;

                case "Belém (BEL)":
                case "Porto Velho (PVH)":
                case "Rio Branco (RBR)":
                
                    flight2Hours(hour, index);
                    flightTimeReturn(2, 0);
                
                break;

                case "Cuiabá (CGB)":
                case "São Luís (SLZ)":

                    flight2Hours30Minutes(hour, index);
                    flightTimeReturn(2, 30);

                break;

                case "Palmas (PMW)":
                
                    flight3Hours(hour, index);
                    flightTimeReturn(3, 0);

                break;

                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Teresina (THE)":
                case "Fortaleza (FOR)":
            
                    flight3Hours30Minutes(hour, index);
                    flightTimeReturn(3, 30);

                break;

                case "BH - Confins (CNF)":
                case "Vitória (VIX)":
                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Recife (REC)":
                case "Natal (NAT)":
                case "João Pessoa (JPA)":
                case "Salvador (SSA)":
                case "Aracaju (AJU)":
                case "Maceió (MCZ)":

                    flight4Hours(hour, index);
                    flightTimeReturn(4, 0);

                break;

                case "Curitiba (CWB)":

                    flight4Hours30Minutes(hour, index);
                    flightTimeReturn(4, 30);

                break;

                case "Florianópolis (FLN)":
                case "Porto Alegre (POA)":

                    flight5Hours(hour, index);
                    flightTimeReturn(5, 0);

                break;
            }
        break;

        case "Rio Branco (RBR)":
        case "Porto Velho (PVH)":

            switch (from.value){

                case "Rio Branco (RBR)":
                case "Porto Velho (PVH)":

                    flight1Hour(hour, index);
                    flightTimeReturn(1, 0);

                break;

                case "Manaus (MAO)":
                
                    flight1Hour30Minutes(hour, index);
                    flightTimeReturn(1, 30);

                break;

                case "Cuiabá (CGB)":
                case "Boa Vista (BVB)":

                    flight2Hours30Minutes(hour, index);
                    flightTimeReturn(2, 30);

                break;

                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Palmas (PMW)":
                
                    flight3Hours(hour, index);
                    flightTimeReturn(3, 0);

                break;

                case "Campo Grande (CGR)":
                case "Belém (BEL)":
                case "Macapá (MCP)":
                
                    flight3Hours30Minutes(hour, index);
                    flightTimeReturn(3, 30);

                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "BH - Confins (CNF)":

                    flight4Hours(hour, index);
                    flightTimeReturn(4, 0);

                break;

                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Vitória (VIX)":
                case "Curitiba (CWB)":
                case "Fortaleza (FOR)":
                
                    flight4Hours30Minutes(hour, index);
                    flightTimeReturn(4, 30);

                break;

                case "Salvador (SSA)":
                case "Porto Alegre (POA)":
                case "Florianópolis (FLN)":
                case "Aracaju (AJU)":
                case "Maceió (MCZ)":
                case "Recife (REC)":
                case "João Pessoa (JPA)":
                case "Natal (NAT)":

                    flight5Hours(hour, index);
                    flightTimeReturn(5, 0);

                break;

            }

        break;
    }
}

function randomFlightNumber(number, index){
    switch(index){
        case 0:
            number.innerHTML = `GA${randomFlight1}`
            break;

        case 1:
            number.innerHTML = `GA${randomFlight2}`
            break;

        case 2:
            number.innerHTML = `GA${randomFlight3}`
            break;

        case 3:
            number.innerHTML = `GA${randomFlight4}`
            break;

        case 4:
            number.innerHTML = `GA${randomFlight5}`
            break;

        case 5:
            number.innerHTML = `GA${randomFlight6}`
            break;

        case 6:
            number.innerHTML = `GA${randomFlight7}`
            break;

        case 7:
            number.innerHTML = `GA${randomFlight8}`
            break;

        case 8:
            number.innerHTML = `GA${randomFlight9}`
            break;

        case 9:
            number.innerHTML = `GA${randomFlight10}`
            break;

        case 10:
            number.innerHTML = `GA${randomFlight11}`
            break;

        case 11:
            number.innerHTML = `GA${randomFlight12}`
            break;
    }
}

function randomPriceNumber(price, index){
    switch(index){
        case 0:
            price.innerHTML = randomPrice1
            break;

        case 1:
            price.innerHTML = randomPrice2
            break;

        case 2:
            price.innerHTML = randomPrice3
            break;

        case 3:
            price.innerHTML = randomPrice4
            break;

        case 4:
            price.innerHTML = randomPrice5
            break;

        case 5:
            price.innerHTML = randomPrice6
            break;

        case 6:
            price.innerHTML = randomPrice7
            break;

        case 7:
            price.innerHTML = randomPrice8
            break;

        case 8:
            price.innerHTML = randomPrice9
            break;

        case 9:
            price.innerHTML = randomPrice10
            break;

        case 10:
            price.innerHTML = randomPrice11
            break;

        case 11:
            price.innerHTML = randomPrice12
            break;
    }
}

function hidePreload(i){
    
    removeClass(section[i], "hide") 

    removeClass(header, "hide")

    removeClass(footer, "hide")

    addClass(loadingScreen, "hide")
}

function showPreload(i){

    addClass(section[i], "hide")

    addClass(header, "hide")

    addClass(footer, "hide")

    removeClass(loadingScreen, "hide")

}

function goingTicketsPageContent(){

    reDoSearch.addEventListener('click', e => {
        document.location.reload(true)
    });

    fromText.forEach((text) => {
        text.innerHTML = from.value
    });

    toText.forEach((text) => {
        text.innerHTML = to.value
    });

    flightNumber.forEach((number, index) => {
        randomFlightNumber(number, index)
    })

    priceNumber.forEach((price, index) => {
        randomPriceNumber(price, index)
    });

    departureTime.forEach((time, index) => {
        departureRandomHour(time, index)
    });

    arrivalTime.forEach((time, index) => {
        arrivalHour1(time, index)
    });

    travelDate.innerHTML = `${dateFormat(departureDate.value)}`
}

function returnTicketsPageContent(){
    reDoSearch.addEventListener('click', e => {
        document.location.reload(true);
    });

    fromText.forEach((text) => {
        text.innerHTML = to.value
    });

    toText.forEach((text) => {
        text.innerHTML = from.value
    });

    flightNumber.forEach((number, index) => {
        randomFlightNumber(number, index)
    });

    priceNumber.forEach((price, number) => {
        randomPriceNumber(price, number)
    });

    departureTime.forEach((time, index) => {
        departureRandomHour(time, index)
    });

    arrivalTime.forEach((time, index) => {
        arrivalHour2(time, index)
    });

    travelDate.innerHTML = `${dateFormat(returnDate.value)}`
}

function finalPrice(){
    if (radioRoundtrip.checked){

        calcPrice.innerHTML = `
        Preço final para ${passengersInput.value} passageiros: <br>
        Ida: R$${priceNumber[12].innerHTML} x ${passengersInput.value} = ${eval((priceNumber[12].innerHTML * passengersInput.value))} <br>
        Volta: R$${priceNumber[13].innerHTML} x ${passengersInput.value} = ${eval((priceNumber[13].innerHTML * passengersInput.value))} <br>
        Total: ${finalPriceNumberEl.innerHTML}`
        
        finalPriceNumberEl.innerHTML = `R$ ${eval((priceNumber[12].innerHTML * passengersInput.value) + (priceNumber[13].innerHTML * passengersInput.value))}`
    
    } else {

        calcPrice.innerHTML = passengersInput.value == 1 ? `Preço final para ${passengersInput.value} passageiro:` : `Preço final para ${passengersInput.value} passageiros:`
        
        finalPriceNumberEl.innerHTML = `R$ ${eval(priceNumber[12].innerHTML * passengersInput.value)}`
    }
}

function selectSeats(btn){

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

            if (document.querySelectorAll("input[type=checkbox]:checked").length == passengersInput.value){
                btn.removeAttribute("disabled");
                addClass(seatAlertSpan, "hide")
            } else {
                removeClass(seatAlertSpan, "hide");
                btn.setAttribute("disabled", "disabled");
            }

        });
    });
}

function seatsMapPageContent(index){
    
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
    //document.querySelector(".total-price").innerHTML = `Preço final para ${passengersInput.value} passageiros:`

    switch(index){
        case 0:
            finalFlightNumberEl[0].innerHTML = `GA${randomFlight1}`;
            departureTime[12].innerHTML = departureTime[0].innerHTML;
            arrivalTime[12].innerHTML = arrivalTime[0].innerHTML;
            priceEl[12].innerHTML = priceNumber[0].innerHTML;
            break;

        case 1:
            finalFlightNumberEl[0].innerHTML = `GA${randomFlight2}`;
            departureTime[12].innerHTML = departureTime[1].innerHTML;
            arrivalTime[12].innerHTML = arrivalTime[1].innerHTML;
            priceEl[12].innerHTML = priceNumber[1].innerHTML;
            break;

        case 2:
            finalFlightNumberEl[0].innerHTML = `GA${randomFlight3}`;
            departureTime[12].innerHTML = departureTime[2].innerHTML;
            arrivalTime[12].innerHTML = arrivalTime[2].innerHTML;
            priceEl[12].innerHTML = priceNumber[2].innerHTML;
            break;

        case 3:
            finalFlightNumberEl[0].innerHTML = `GA${randomFlight4}`;
            departureTime[12].innerHTML = departureTime[3].innerHTML;
            arrivalTime[12].innerHTML = arrivalTime[3].innerHTML;
            priceEl[12].innerHTML = priceNumber[3].innerHTML;
            break;

        case 4:
            finalFlightNumberEl[0].innerHTML = `GA${randomFlight5}`;
            departureTime[12].innerHTML = departureTime[4].innerHTML;
            arrivalTime[12].innerHTML = arrivalTime[4].innerHTML;
            priceEl[12].innerHTML = priceNumber[4].innerHTML;
            break;

        case 5:
            finalFlightNumberEl[0].innerHTML = `GA${randomFlight12}`;
            departureTime[12].innerHTML = departureTime[5].innerHTML;
            arrivalTime[12].innerHTML = arrivalTime[5].innerHTML;
            priceEl[12].innerHTML = priceNumber[5].innerHTML;
            break;

        case 6:
            finalFlightNumberEl[1].innerHTML = `GA${randomFlight7}`;
            departureTime[13].innerHTML = departureTime[6].innerHTML;
            arrivalTime[13].innerHTML = arrivalTime[6].innerHTML;
            priceEl[13].innerHTML = priceNumber[6].innerHTML;
            break;

        case 7:
            finalFlightNumberEl[1].innerHTML = `GA${randomFlight8}`;
            departureTime[13].innerHTML = departureTime[7].innerHTML;
            arrivalTime[13].innerHTML = arrivalTime[7].innerHTML;
            priceEl[13].innerHTML = priceNumber[7].innerHTML;
            break;

        case 8:
            finalFlightNumberEl[1].innerHTML = `GA${randomFlight9}`;
            departureTime[13].innerHTML = departureTime[8].innerHTML;
            arrivalTime[13].innerHTML = arrivalTime[8].innerHTML;
            priceEl[13].innerHTML = priceNumber[8].innerHTML;
            break;

        case 9:
            finalFlightNumberEl[1].innerHTML = `GA${randomFlight10}`;
            departureTime[13].innerHTML = departureTime[9].innerHTML;
            arrivalTime[13].innerHTML = arrivalTime[9].innerHTML;
            priceEl[13].innerHTML = priceNumber[9].innerHTML;
            break; 

        case 10:
            finalFlightNumberEl[1].innerHTML = `GA${randomFlight11}`;
            departureTime[13].innerHTML = departureTime[10].innerHTML;
            arrivalTime[13].innerHTML = arrivalTime[10].innerHTML;
            priceEl[13].innerHTML = priceNumber[10].innerHTML;
            break;

        case 11:
            finalFlightNumberEl[1].innerHTML = `GA${randomFlight12}`;
            departureTime[13].innerHTML = departureTime[11].innerHTML;
            arrivalTime[13].innerHTML = arrivalTime[11].innerHTML;
            priceEl[13].innerHTML = priceNumber[11].innerHTML;
            break;
    }
}

// Radio settings
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

// Search button event
searchBtn.addEventListener('click', e => {

    e.preventDefault()

    let json = {}

    let isValid = true

    switch(from.value && to.value){
        case "SP - Guarulhos (GRU)":
        case "SP - Congonhas (CGH)":
        case "Campinas (VCP)":
        case "RJ - Galeão (GIG)":
        case "RJ - Santos Dumont (SDU)":
        case "Curitiba (CWB)":
        case "Florianópolis (FLN)":
        case "Porto Alegre (POA)":
        case "Vitória (VIX)":
        case "BH - Confins (CNF)":
        case "Goiânia (GYN)":
        case "Brasília (BSB)":
        case "Campo Grande (CGR)":
        case "Cuiabá (CGB)":
        case "Manaus (MAO)":
        case "Rio Branco (RBR)":
        case "Porto Velho (PVH)":
        case "Boa Vista (BVB)":
        case "Macapá (MCP)":
        case "Belém (BEL)":
        case "Palmas (PMW)":
        case "São Luís (SLZ)":
        case "Fortaleza (FOR)":
        case "Natal (NAT)":
        case "Teresina (THE)":
        case "João Pessoa (JPA)":
        case "Recife (REC)":
        case "Maceió (MCZ)":
        case "Aracaju (AJU)":
        case "Salvador (SSA)":
            isValid = true;
            break;

        case '':
            isValid = false;
            break;

        default:
            isValid = false;

            addClass(from, "has-error");

            addClass(to, "has-error");

            removeClass(document.querySelector(".invalid"), "hide");
    }

    inputs.forEach(input => {

        if (['from', 'to', 'departure-date'].indexOf(input.name) > -1 && !input.value){
            
            removeClass(document.querySelector(".error-span"), "hide")
            
            addClass(input, "has-error")
            
            isValid = false

        } else if(from.value == to.value){
           
            addClass(from, "has-error")

            addClass(to, "has-error")

            removeClass(document.querySelector(".same-value-span"), "hide")

            isValid = false

        } else if (radioRoundtrip.checked){

            if (['return-date'].indexOf(input.name) > -1 && !input.value){

                removeClass(document.querySelector(".error-span"), "hide")
                    
                addClass(input, "has-error")
                    
                isValid = false
        
            }

            if (departureDate.value > returnDate.value){

                addClass(departureDate, "has-error")

                addClass(returnDate, "has-error")

                removeClass(document.querySelector(".date-error-span"), "hide")

                isValid = false

            } else if (departureDate.value == '' || returnDate.value == ''){
    
                addClass(returnDate, "has-error")
    
                removeClass(document.querySelector(".error-span"), "hide");
    
                isValid = false
    
            }

        } else if (radioOneWay.checked){
        
            if (departureDate.value == ''){
    
                addClass(departureDate, "has-error")
    
                removeClass(document.querySelector(".error-span"), "hide");
    
                isValid = false
    
            }

        } else{
            json[input.name] = input.value
        }

        if (isValid){

            hideAll();

            inputs.forEach(input => {
                removeClass(input, "has-error")
            })

            spans.forEach(span => {
                addClass(span, "hide")
            });

            removeClass(loadingScreen, "hide");

            setTimeout(function(){
                hidePreload(1)
                showAll()
                goingTicketsPageContent()
            }, 7000);
        };
    });
})

let showAgain = true

selectTicketBtn.forEach((btn, index) => {

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

                returnTicketsPageContent();

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
});

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

        document.querySelectorAll("input[type=checkbox]:checked").forEach(input => {
            input.click();
        });

        bookTicketBtn.setAttribute("disabled", "disabled");

        seats.forEach(seat => {

            seat.addEventListener('change', e => {

                console.log('oi!')
                if (document.querySelectorAll("input[type=checkbox]:checked").length == passengersInput.value){
                    bookTicketBtn.removeAttribute("disabled");
                    addClass(seatAlertSpan, "hide")
                } else {
                    removeClass(seatAlertSpan, "hide");
                    bookTicketBtn.setAttribute("disabled", "disabled");
                }

            })
        })
    

        finalPrice();
        
        hidePreload(3);

    }, 7000)

})

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

// Responsive settings
document.querySelector('.open-menu').addEventListener('click', e => {
    document.querySelector('header .menu').classList.add('open');
    document.getElementById("bg").classList.add('hide');
});

document.querySelector('.close-menu').addEventListener('click', e => {
    document.querySelector('header .menu').classList.remove('open');
    document.getElementById("bg").classList.remove('hide');
});
>>>>>>> fc3e54a2a6b5b02f0cdb4da8ed459a5c49875af4
