const options = {
    headers: {
        "x-api-key": "live_VBUYHXz7Q24qLtczeNmH3mY1zn6XWyGj8JQzbwBXGW09MKCKIHVxJERafv6u1WBB"
    }
}

export function fetchBreeds() {
    return fetch('https://api.thecatapi.com/v1/breeds', options)
        .then(response => {
            return response.json();
        });
};

export function fetchCatByBreed(breedId) {
    return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`, options) 
    .then(response => {
        return response.json();
    });
};

