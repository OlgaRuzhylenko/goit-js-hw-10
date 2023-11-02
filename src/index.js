import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_VBUYHXz7Q24qLtczeNmH3mY1zn6XWyGj8JQzbwBXGW09MKCKIHVxJERafv6u1WBB";

const select = document.querySelector('.breed-select');
const BASE_URL = 'https://api.thecatapi.com';
const END_POINT_FOR_OPTIONS = '/v1/breeds';
const END_POINT_FOR_IMAGES = '/images/search'
const urlBreeds = `${BASE_URL}${END_POINT_FOR_OPTIONS}`;


// 1)Колекція порід
// Винеси її у файл cat-api.js та зроби іменований експорт.
function fetchBreeds() {
    fetch(urlBreeds)
        .then(response => {
            return response.json();
        }).then(breeds => {
            breeds.forEach(breed => {
                const option = document.createElement('option');
                option.value = breed.id;
                option.textContent = breed.name;
                select.appendChild(option);
            });
        }).catch(error => {
            console.log(error);
        })
};
fetchBreeds();

// 2) Інформація про кота
// https://api.thecatapi.com/v1/images/search
// https://api.thecatapi.com/v1/images/search?breed_ids=ідентифікатор_породи
let selectedBreed;
let urlBreedId;

select.addEventListener('change', onSelectChange); 

function onSelectChange(evt) {
   selectedBreed = evt.target.value;
    console.log(selectedBreed);
    const PARAMS = `?breed_ids=${selectedBreed}`;
    urlBreedId = `${BASE_URL}${END_POINT_FOR_IMAGES}${PARAMS}`;
    console.log(urlBreedId);

};

function fetchCatByBreed(breedId) {
    fetch(urlBreedId) 
    .then(response => {
        return response.json();
    }).then(cat => {
        console.log(cat);
    }).catch(error => {
            console.log(error);
        })
};

