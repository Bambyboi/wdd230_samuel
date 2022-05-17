/* Lesson 4 */

/* DATA */

//Declare a new variable to hold information about yourself and assign an empty object to the variable ( hint: {} )
// Step 1: Declare a new variable to hold information about yourself
//Add a property to this object literal named name and set its value to be your name as a string.
// Step 2: Inside of the object, add a property named name with a value of your name as a string
//Add a property named photo. Set its value to be an image's path and name (one used in Task 2) as a string.
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
//Add a property named favoriteFoods. Set its value to be an array of your favorite foods as strings ( hint: [] ).
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
//Add a property named hobbies. Set its value to be an array of your hobbies as strings.
let myInfo = {
    name: 'Samuel Kaleopa',
    photo: 'images/myphoto.jpg',
    favoriteFoods: [
        'Pizza',
        'Lamb',
        'Chicken',
        'Dog',
        'Horse',
        'Taro'
    ],
    hobbies: [
        'Basketball',
        'Playing Video Games',
        'Swimming',
        'Jumping challenge'
    ]
};


// Step 6: Add another property named placesLived with a value of an empty array
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
// Step 8: For each property, add appropriate values as strings
// Step 9: Add additional objects with the same properties for each place you've lived
myInfo.placesLived = [{
        //Add a property named placesLived. Set its value to be an empty array.
        //Add an item to the placesLived array that is new object literal with two properties: place and length
        //For each of these properties, add appropriate values as strings.
        //Add additional object literals with appropriate values to the placesLived array for each place you've lived*/
        place: 'Joy, id',
        length: '10 years'
    },
    {
        place: 'Sammy, id',
        length: '26 years'
    },
    {
        place: 'Bamby, lk',
        length: '32 year'
    }
]



/* OUTPUT */

//Assign the value of the name property (of the object declared above) to the HTML <span> who's ID is name
// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector('#name').textContent = myInfo.name;

//Assign the value of the photo property as the src attribute of the HTML <img> who's ID is photo
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').setAttribute('src', myInfo.photo);

//Assign the value of the name property as the alt attribute of the HTML <img> who's ID is photo
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').setAttribute('alt', myInfo.name);

//For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <ul> element
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
myInfo.favoriteFoods.forEach((food) => {
    let favoriteFoodElem = document.createElement('li');
    favoriteFoodElem.textContent = food;

    //Append the <li> elements created above as children of the HTML <ul> element who's ID is favorite-foods
    // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
    document.querySelector('#favorite-foods').appendChild(favoriteFoodElem);
});

//Repeat Step 4 for each hobby in the hobbies property
// Step 6: Repeat Step 4 for each hobby in the hobbies property
myInfo.hobbies.forEach((hobby) => {
    let hobbyElem = document.createElement('li');
    hobbyElem.textContent = hobby;

    //Repeat Step 5 using the HTML <ul> element with an ID of hobbies
    // Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
    document.querySelector('#hobbies').appendChild(hobbyElem);
});
// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
myInfo.placesLived.forEach((placeLived) => {
    //For each object in the placesLived property:
    //- Create an HTML <dt> element and put its place property in the <dt> element
    //- Create an HTML <dd> element and put its length property in the <dd> element
    //Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
    let placesLivedPlace = document.createElement('dt');
    placesLivedPlace.textContent = placeLived.place;

    let placesLivedLength = document.createElement('dd');
    placesLivedLength.textContent = placeLived.length;

    // Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
    document.querySelector('#places-lived').appendChild(placesLivedPlace);
    document.querySelector('#places-lived').appendChild(placesLivedLength);
})