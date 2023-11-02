import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_VBUYHXz7Q24qLtczeNmH3mY1zn6XWyGj8JQzbwBXGW09MKCKIHVxJERafv6u1WBB";

fetch('https://api.thecatapi.com/v1/breeds').then(response => {
      return response.json();
}).then(cat => {
    console.log(cat);
}).catch(error => {
    console.log(error);
})