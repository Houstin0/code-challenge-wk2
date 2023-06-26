document.addEventListener('DOMContentLoaded', () => {
    const characterContainer = document.getElementById('character');
    const detailsContainer = document.getElementById('charactersDetails');
  
    // fetch data from the server
    fetch("http://localhost:3000/characters")
      .then(response => response.json())
      .then(data => {
        // loop through each character and create list
        data.forEach(characters => {
          const characterElement = document.createElement('li');
          characterElement.textContent = characters.name;
          characterElement.addEventListener("click", () => {
            characterDetails(characters, detailsContainer);
          });
          characterContainer.appendChild(characterElement);
        });
      });
  
    // function to display the details of a character
    function characterDetails(characters, detailsContainer) {
      detailsContainer.innerHTML = `<img src="${characters.image}" alt="${characters.name}">
          <p>votes: ${characters.votes}</p>`;
  
      // create vote button
      const voteButton = document.createElement('button');
      voteButton.innerText = 'Vote';
  
      voteButton.addEventListener('click', () => {
        characters.votes++;
        detailsContainer.querySelector('p').textContent = `votes: ${characters.votes}`;
      });
  
      detailsContainer.appendChild(voteButton);
    }
  });
  