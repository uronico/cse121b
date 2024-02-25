/* W05: Programming Tasks */

/* Declare and initialize global variables */
const dogsElement = document.getElementById('dogs');

let breedList = [];

/* async displaybreed Function */

const displaybreed = (breed) => {
    
    dogsElement.innerHTML = '';
  
    
    breed.forEach((dogs) => {
      
      const article = document.createElement('article');

      
      const h3 = document.createElement('h3');
      h3.textContent = dogs.breed;

      const img = document.createElement('img');
      img.src = dogs.image;
      img.alt = dogs.breed;

      article.appendChild(h3);
      article.appendChild(img);

      dogsElement.appendChild(article);
     
    });

  };


/* async getbreed Function using fetch()*/

const getbreed = async () => {
    
    const response = await fetch('https://run.mocky.io/v3/a374da23-1e55-4ad0-b977-cd292a4add6c');
  
    
    breedList = await response.json();
  
    
    displaybreed(breedList);
  };

/* reset Function */

const reset = () => {
    
    while (dogsElement.firstChild) {
      dogsElement.removeChild(dogsElement.firstChild);
    }
  };

/* filterBreed Function */

const filterbreed = (dogs) => {
    
    reset();
  
    
    const filter = document.getElementById('filtered').value;
  
    
    switch (filter) {
      case 'hounds':
        
        const houndBreed = dogs.filter((dogs) => dogs.breed.includes('hounds'));
        displaybreed(houndBreed);
        break;

      case 'dachshund':
        
        const dacshundBreed = dogs.filter((dogs) => !dogs.breed.includes('hounds'));
        displaybreed(dacshundBreed);
        break;
    
      case 'all':
        
        displaybreed(dogs);
        break;
    }
  };
  
getbreed();

/* Event Listener */

const filteredElement = document.getElementById('filtered');


filteredElement.addEventListener('change', () => {
  
  const selectedValue = filteredElement.value;

  
  filterbreed(breedList, selectedValue);
});

getbreed();