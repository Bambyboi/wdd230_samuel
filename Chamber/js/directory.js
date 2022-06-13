const file = "https://github.com/Bambyboi/wdd230_samuel/blob/main/Chamber/jason/data.json";
const cards = document.querySelector('.cards');


fetch(file)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const directory = jsonObject['directory'];
        console.table(jsonObject); // temporary checking for valid response and data parsing
        directory.forEach(displayCompanies);
    });

function displayCompanies(directory_1) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let p2 = document.createElement('p');
    let portrait = document.createElement('img');

    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${directory_1.company}`;
    p.textContent = `Address: ${directory_1.address}`;
    p2.textContent = `Phone: ${directory_1.phone}`;
    p.textContent = `Website: ${directory_1.website}`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', directory_1.imageurl);
    portrait.setAttribute('alt', `Portait of ${directory_1.company} ${directory_1.address}`);
    portrait.setAttribute('loading', 'lazy');
    //`string text ${expression} string text`
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(p);
    card.appendChild(p2);
    card.appendChild(portrait);

    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
}