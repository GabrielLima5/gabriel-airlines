const header = document.querySelector("header");
const section = [...document.querySelectorAll("section")];
const footer = document.querySelector("footer");
const loadingScreen = document.querySelector(".loading");

import { removeClass, addClass } from "./utils.js";

export function hidePreload(i){
    removeClass(section[i], "hide") 
    removeClass(header, "hide")
    removeClass(footer, "hide")
    addClass(loadingScreen, "hide")
}

export function showPreload(i){
    addClass(section[i], "hide")
    addClass(header, "hide")
    addClass(footer, "hide")
    removeClass(loadingScreen, "hide")
}

export function hideAll(){
    addClass(header, "hide")
    addClass(footer, "hide")

    section.forEach(screen => {
        addClass(screen, "hide")
    });
}

export function showAll(){
    removeClass(header, "hide")
    removeClass(footer, "hide")
}