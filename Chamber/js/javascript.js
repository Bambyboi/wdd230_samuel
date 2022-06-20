window.onload = get_year();
window.onload = get_date();
window.onload = get_day_month_year();


function get_date() {
    var LastModif = new Date(document.lastModified);
    console.log(LastModif);
    document.getElementById("date").innerHTML = LastModif;
}

function get_year() {
    var date = new Date().getFullYear();
    console.log(date);
    document.querySelector("#year").innerHTML = date;
}

function toggleMenu() {
    document.getElementsByClassName("nav_1")[0].classList.toggle("responsive");
}

function get_day_month_year() {
    const footerdatefield = document.querySelector("#date");
    const datefield = document.querySelector(".date");
    const datefieldUK = document.querySelector("aside");
    const now = new Date();
    const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
        now
    );
    const fulldateUK = new Intl.DateTimeFormat("en-UK", {
        dateStyle: "full"
    }).format(now);
    footerdatefield.innerHTML = `<em>${fulldate}</em>`;
    datefield.innerHTML = `<em>${fulldate}</em>`;
    // broken
    // datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;
}

// initialize display elements
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.

// how should this be improved?
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);