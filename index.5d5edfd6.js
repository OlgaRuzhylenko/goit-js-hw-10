!function(){var e=document.querySelector(".breed-select"),t=document.querySelector(".cat-info"),n=document.querySelector(".loader"),c=document.querySelector(".error");console.log(c);var a={headers:{"x-api-key":"live_VBUYHXz7Q24qLtczeNmH3mY1zn6XWyGj8JQzbwBXGW09MKCKIHVxJERafv6u1WBB"}};c.classList.add("hide"),e.classList.add("hide"),fetch("https://api.thecatapi.com/v1/breeds",a).then((function(e){return e.json()})).then((function(t){e.classList.remove("hide");var c=t.map((function(e){return'\n                <option value="'.concat(e.id,'">').concat(e.name,"</option>\n            ")})).join("");e.insertAdjacentHTML("beforeend",c),n.classList.add("hide")})).catch((function(t){n.classList.add("hide"),e.classList.add("hide"),c.classList.remove("hide")})),e.addEventListener("change",(function(s){var i=s.target.value;console.log(i),n.classList.remove("hide"),e.classList.add("hide"),o=i,t.innerHTML="",fetch("https://api.thecatapi.com/v1/images/search?breed_ids=".concat(o),a).then((function(e){return e.json()})).then((function(c){e.classList.remove("hide"),function(e){console.log(e);var n=e[0],c='\n<img src="'.concat(n.url,'" alt="').concat(n.breeds[0].name,'">\n<h1>').concat(n.breeds[0].name,"</h1>\n<p>").concat(n.breeds[0].description,"</p>\n<h2>Temperament:</h2>\n<p>").concat(n.breeds[0].temperament,"</p>\n    ");console.log(c),t.insertAdjacentHTML("beforeend",c)}(c),n.classList.add("hide")})).catch((function(t){n.classList.add("hide"),e.classList.add("hide"),c.classList.remove("hide")}));var o}))}();
//# sourceMappingURL=index.5d5edfd6.js.map
