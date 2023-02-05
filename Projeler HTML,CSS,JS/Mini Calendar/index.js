const monthEl = document.getElementById("month-name");
const dayEl = document.getElementById("day-name");
const dayNumberEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

function updateTime() {
    let now = new Date()
    monthEl.innerText = months[now.getMonth()];
    dayEl.innerText = now.toLocaleString("en", {
        weekday: "long"
    });
    dayNumberEl.innerText = now.getDay();
    yearEl.innerText = now.getFullYear();
}

updateTime();