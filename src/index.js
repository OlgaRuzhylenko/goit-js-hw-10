import { fetchBreeds, fetchCatByBreed } from './cat-api';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';


const select = document.querySelector('.breed-select');
select.setAttribute('id', 'selectElement')
select.classList.add('hide');
const container = document.querySelector('.cat-info');
const loadingTextfInfo = document.querySelector('.loader');
const errorText = document.querySelector('.error');


// 1)Колекція порід
fetchBreeds()
    .then(renderSelect)
        .catch(error => {
            loadingTextfInfo.classList.add('hide');
            select.classList.add('hide');
            errorText.classList.remove('hide');
        });

errorText.classList.add('hide');

//додавання option в select окремою функцією
function renderSelect(breeds) {
select.classList.remove('hide');
    const markup = breeds.map(breed => `
                <option value="${breed.id}">${breed.name}</option>
            `).join('');
  
    select.insertAdjacentHTML("beforeend", markup);
    loadingTextfInfo.classList.add('hide');
    
    new SlimSelect({
    select: '#selectElement',
    settings: {
    searchPlaceholder: 'Search',
    searchHighlight: true
  }
})

};

// 2) Інформація про кота
select.addEventListener('change', onSelectChange); 
function onSelectChange(evt) {
    container.innerHTML = '';
    const selectedBreed = evt.target.value;
    loadingTextfInfo.classList.remove('hide');
    select.classList.add('hide');
    errorText.classList.add('hide');

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

//функція відмальовки картки кота
function renderCard(result) {
    const cat = result[0];
    const cardMarkup = `
<img src="${cat.url}" alt="${cat.breeds[0].name}" class="img-style" width="600" >
<h1 class='name-style'>${cat.breeds[0].name}</h1>
<p class='desc-style'>${cat.breeds[0].description}</p>
<h2 class='temp-style'>Temperament:</h2>
<p class='desc-style'>${cat.breeds[0].temperament}</p>
    `;
  
    container.insertAdjacentHTML("beforeend", cardMarkup);
};



