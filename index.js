document.addEventListener("DOMContentLoaded", () => {
  const characterContainer = document.getElementById('character');
  const detailsContainer = document.getElementById('characterDetails');

  // fetch data from the server
  fetch("http://localhost:3000/characters")
    .then(response => response.json())
    .then(data => {
      // loop through each character and create list
      data.forEach(characters => {
        const characterElement = document.createElement('li');
        characterElement.textContent = characters.name;
        characterContainer.appendChild(characterElement);

        characterElement.addEventListener("click", (e) => {
          e.preventDefault()
          characterDetails(characters)//call character details function
        });
        
      });
      //
      function characterDetails(character) {
        // Clear previous details
        detailsContainer.innerHTML = '';
    
        
        const nameElement = document.createElement('h3');
        nameElement.textContent = character.name;
        detailsContainer.appendChild(nameElement);
    
        const imageElement = document.createElement('img');
        imageElement.src = character.image;
        imageElement.alt = character.name;
        detailsContainer.appendChild(imageElement);
    
        const votesElement = document.createElement('p');
        votesElement.textContent = `Votes: ${character.votes}`;
        detailsContainer.appendChild(votesElement);
        
        
        
        
      }
    });
    
    //
 
  

})
