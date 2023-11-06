import { fetchBreeds, fetchCatByBreed } from './cat-api';

const select = document.querySelector('.breed-select');
const container = document.querySelector('.cat-info');
const loadingTextfInfo = document.querySelector('.loader');
const errorText = document.querySelector('.error');

const options = {
    headers: {
        "x-api-key": "live_VBUYHXz7Q24qLtczeNmH3mY1zn6XWyGj8JQzbwBXGW09MKCKIHVxJERafv6u1WBB"
    }
}
// 1)Колекція порід
// Винеси її у файл cat-api.js та зроби іменований експорт.
fetchBreeds()
    .then(renderSelect)
        .catch(error => {
            loadingTextfInfo.classList.add('hide');
            select.classList.add('hide');
            errorText.classList.remove('hide');
        });

errorText.classList.add('hide');

// function fetchBreeds() {
// select.classList.add('hide');
//     return fetch('https://api.thecatapi.com/v1/breeds', options)
//         .then(response => {
//             return response.json();
//         })
// };

//додавання option в select окремою функцією
function renderSelect(breeds) {
select.classList.remove('hide');
    const markup = breeds.map(breed => `
                <option value="${breed.id}">${breed.name}</option>
            `).join('');
    select.insertAdjacentHTML("beforeend", markup);
    loadingTextfInfo.classList.add('hide');
}

// 2) Інформація про кота
select.addEventListener('change', onSelectChange); 
function onSelectChange(evt) {
    const selectedBreed = evt.target.value;
    loadingTextfInfo.classList.remove('hide');
    select.classList.add('hide');

    fetchCatByBreed(selectedBreed)
    .then(cat => {
        select.classList.remove('hide');
        renderCard(cat);
        loadingTextfInfo.classList.add('hide');
    }).catch(error => {
            loadingTextfInfo.classList.add('hide');
            select.classList.add('hide');
            errorText.classList.remove('hide');   
        })
 };
// Винеси функцію fetchCatByBreed(breedId) у файл cat-api.js і зроби іменований експорт.
// function fetchCatByBreed(breedId) {
// container.innerHTML = ''
//     return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`, options) 
//     .then(response => {
//         return response.json();
//     });
// };

//функція відмальовки картки кота
function renderCard(result) {
    const cat = result[0];
    const cardMarkup = `
<img src="${cat.url}" alt="${cat.breeds[0].name}" width="300" heigth="300">
<h1>${cat.breeds[0].name}</h1>
<p>${cat.breeds[0].description}</p>
<h2>Temperament:</h2>
<p>${cat.breeds[0].temperament}</p>
    `;
  
    container.insertAdjacentHTML("beforeend", cardMarkup);
};



