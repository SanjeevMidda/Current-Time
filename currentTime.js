// Researched mdn for setInterval and css selectors.
// https://developer.mozilla.org/en-US/docs/Web/API/setInterval
// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors

// Grabbing the html element will an id of "time". The time will be injected into it.
let timeElement = document.querySelector("#time");

// Arrow function establishes the current date and time.
let currentTime = () => {

    // Grabbing current date and time related details using the Date() object. Stored in "time".
    let time = new Date();

    // Template literal shows the current hour, minutes and seconds. Using 3 methods: "getHours", 
    // "getMinutes", and "getSeconds" to establish those values.
    let currentTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;

    // Injecting the time stored in "currentTime" into our html element stored in "timeElement"
    timeElement.innerHTML = currentTime;
}

// CurrentTime function used as an argument for setInterval so we can change the time every second
setInterval(currentTime, 1000);

/*
    Thinking
        1. This program shows the current time, and the time changes each second. 
*/