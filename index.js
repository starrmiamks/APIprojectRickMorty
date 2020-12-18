const section = document.querySelector('div')

fetch('https://rickandmortyapi.com/api/character')
.then(function(response){
    return response.json();
})
.then(function(json){
    console.log(json);
    displayResults(json);
});

function displayResults(json) {
    let charInfo = json;
    for(i = 0; i < charInfo.results.length; i++) {
        let heading = document.createElement('h2');
        let img = document.createElement('img');
        heading.textContent = charInfo.results[i].name; 
        img.src = charInfo.results[i].image;
        section.appendChild(heading);
        section.appendChild(img); 
    } 
};


