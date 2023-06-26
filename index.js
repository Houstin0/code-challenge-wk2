document.addEventListener('DOMContentLoaded', () => {
    // fetch data from the server
    fetch("db.json")
      .then(response => response.json())
      .then(data => {
        const characterContainer = document.getElementById('characters');
        const detailsContainer = document.getElementById('charactersDetails');
        // loop through each character and create a card to display it
        data.characters.forEach(characters => {
          const characterName = document.createElement('div');
          characterName.classList.add('characters');
          characterName.textContent = characters.name;
          characterName.addEventListener("click", () => {
            characterDetails(characters, detailsContainer); // pass detailsContainer as an argument
          });
          characterContainer.appendChild(characterName);
        });
      });
  
    // function to display the details of a character
    function characterDetails(characters, detailsContainer) {
      detailsContainer.innerHTML = "";
  
      // display image
      const characterImage = document.createElement('img');
      characterImage.src = characters.image;
      detailsContainer.appendChild(characterImage);
  
      // display name
      const characterName = document.createElement('h4');
      characterName.textContent = characters.name;
      detailsContainer.appendChild(characterName);
  
      // display votes
      const characterVotes = document.createElement('p');
      characterVotes.textContent = `Votes: ${characters.votes}`;
      detailsContainer.appendChild(characterVotes);
  
      // create vote button
      const voteButton = document.createElement('button');
      voteButton.innerText = 'vote';
  
      voteButton.addEventListener('click', () => {
        characters.vote++;
        characterVotes.innerText = `Votes: ${characters.votes}`;
      });
  
      detailsContainer.appendChild(voteButton);
    }
  });
  