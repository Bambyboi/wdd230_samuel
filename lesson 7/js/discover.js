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

function get_day_month_year() {
    const datefield = document.querySelector(".date");
    const datefieldUK = document.querySelector("aside");
    const now = new Date();
    const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
        now
    );
    const fulldateUK = new Intl.DateTimeFormat("en-UK", {
        dateStyle: "full"
    }).format(now);
    datefield.innerHTML = `<em>${fulldate}</em>`;
    // broken
    // datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;
}
// Get all images to be replaced
const imagesToLoad = document.querySelectorAll("[data-src]");

// function to load the actual image
const loadImages = (img) => {
    img.setAttribute("src", img.getAttribute("data-src"));
    img.onload = () => {
        img.removeAttribute("data-src");
    };
};

const imageOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px",
};

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imageOptions);
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}