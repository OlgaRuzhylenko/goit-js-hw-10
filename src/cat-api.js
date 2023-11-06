
function fetchBreeds() {
select.classList.add('hide');
    return fetch('https://api.thecatapi.com/v1/breeds', options)
        .then(response => {
            return response.json();
        })
};

export default { fetchBreeds };