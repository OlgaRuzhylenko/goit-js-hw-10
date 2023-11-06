
export function fetchBreeds() {
select.classList.add('hide');
    return fetch('https://api.thecatapi.com/v1/breeds', options)
        .then(response => {
            return response.json();
        });
};

export function fetchCatByBreed(breedId) {
container.innerHTML = ''
    return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`, options) 
    .then(response => {
        return response.json();
    });
};

