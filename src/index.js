import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_VBUYHXz7Q24qLtczeNmH3mY1zn6XWyGj8JQzbwBXGW09MKCKIHVxJERafv6u1WBB";

const select = document.querySelector('.breed-select');
const container = document.querySelector('.breed-select');

// 1)Колекція порід
// Винеси її у файл cat-api.js та зроби іменований експорт.
function fetchBreeds() {
    fetch('https://api.thecatapi.com/v1/breeds')
        .then(response => {
            return response.json();
        })
            .then(breeds => {
            const markup = breeds.map(breed => `
                <option value="${breed.id}">${breed.name}</option>
            `).join('');
            select.insertAdjacentHTML("beforeend", markup);
        })
        .catch(error => {
            console.log(error);
        })
};
fetchBreeds();

// 2) Інформація про кота
// https://api.thecatapi.com/v1/images/search
// https://api.thecatapi.com/v1/images/search?breed_ids=ідентифікатор_породи

select.addEventListener('change', onSelectChange); 

function onSelectChange(evt) {
   const selectedBreed = evt.target.value;
    console.log(selectedBreed);

    fetchCatByBreed(selectedBreed);
 };

function fetchCatByBreed(breedId) {
    fetch(`https://api.thecatapi.com/v1/images/search?${breedId}`) 
    .then(response => {
        return response.json();
    }).then(cat => {
        renderCard(cat)
    }).catch(error => {
            console.log(error);
        })
};

function renderCard(result) {
    console.log(result);
    const cardMarkup = `
<img src="" alt="">
<h1><p></p></h1>
<h2><p></p></h2>
    `;
    container.insertAdjacentHTML("beforeend", cardMarkup);
}

