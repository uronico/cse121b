/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Nico Uro',
    photo: 'images/mypic.jpg',
    favoriteFoods: ['Fried Chicken', 'Buttered Shrimp', 'Rice', 'Spaghetti', 'Chocolates'],
    hobbies: ['Reading', 'Dancing', 'Eating'],
    placesLived: []
};



/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({
    place: 'Santa Maria, Laguna',
    length: '22 years'
});

myProfile.placesLived.push({
    place: 'Binan, Laguna',
    length: '5 years'
});


/* DOM Manipulation - Output */

/* Name */
document.getElementById('name').textContent = myProfile.name;

/* Photo with attributes */
document.getElementById('photo').src = myProfile.photo;
document.getElementById('photo').alt = myProfile.name;

/* Favorite Foods List*/
const favoriteFoodsList = document.getElementById('favorite-foods');

myProfile.favoriteFoods.forEach(food => {
    const li = document.createElement('li');
    li.textContent = food;
    favoriteFoodsList.appendChild(li);
});


/* Hobbies List */
const hobbiesList = document.getElementById('hobbies');

myProfile.hobbies.forEach(hobby => {
    const li = document.createElement('li');
    li.textContent = hobby;
    hobbiesList.appendChild(li);
});

/* Places Lived DataList */
const placesLivedList = document.getElementById('places-lived');

myProfile.placesLived.forEach(place => {
    const dt = document.createElement('dt');
    dt.textContent = place.place;
    placesLivedList.appendChild(dt);

    const dd = document.createElement('dd');
    dd.textContent = place.length;
    placesLivedList.appendChild(dd);
});

