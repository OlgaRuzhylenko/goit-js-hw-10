// import axios from "axios";
// axios.defaults.headers.common["x-api-key"] = "live_VBUYHXz7Q24qLtczeNmH3mY1zn6XWyGj8JQzbwBXGW09MKCKIHVxJERafv6u1WBB";

// import SlimSelect from 'slim-select';
// new SlimSelect({
//   select: '#selectElement'
// })

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
errorText.classList.add('hide');
function fetchBreeds() {
   
    select.classList.add('hide');
    
    fetch('https://api.thecatapi.com/v1/breeds', options)
        .then(response => {
            return response.json();
        })
        .then(breeds => {
            select.classList.remove('hide');
            const markup = breeds.map(breed => `
                <option value="${breed.id}">${breed.name}</option>
            `).join('');
            select.insertAdjacentHTML("beforeend", markup);
            loadingTextfInfo.classList.add('hide');
        })
        .catch(error => {
            loadingTextfInfo.classList.add('hide');
            select.classList.add('hide');
            errorText.classList.remove('hide');            
        });
};
fetchBreeds();

// 2) Інформація про кота
// https://api.thecatapi.com/v1/images/search
// https://api.thecatapi.com/v1/images/search?breed_ids=ідентифікатор_породи

select.addEventListener('change', onSelectChange); 

function onSelectChange(evt) {
   const selectedBreed = evt.target.value;
    // console.log(selectedBreed);
loadingTextfInfo.classList.remove('hide');
 select.classList.add('hide');

    fetchCatByBreed(selectedBreed);
 };

function fetchCatByBreed(breedId) {
container.innerHTML = ''

    fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`, options) 
    .then(response => {
        return response.json();
    }).then(cat => {
        select.classList.remove('hide');
        renderCard(cat);
        loadingTextfInfo.classList.add('hide');
    }).catch(error => {
            loadingTextfInfo.classList.add('hide');
            select.classList.add('hide');
            errorText.classList.remove('hide');   
        })
};

function renderCard(result) {
    // console.log(result);
    const cat = result[0];
    const cardMarkup = `
<img src="${cat.url}" alt="${cat.breeds[0].name}" width="300" heigth="300">
<h1>${cat.breeds[0].name}</h1>
<p>${cat.breeds[0].description}</p>
<h2>Temperament:</h2>
<p>${cat.breeds[0].temperament}</p>
    `;
    // console.log(cardMarkup);
    container.insertAdjacentHTML("beforeend", cardMarkup);
};



