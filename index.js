document.addEventListener("DOMContentLoaded", () => {
    const characterContainer = document.getElementById('character')
    const detailsContainer = document.getElementById('characterDetails')
    const formContainer=document.getElementById("formContainer")

    // fetch data from the server
     fetch("http://localhost:3000/characters")
    .then(response => response.json())
    .then(data => {
      // loop through each character and create list
      data.forEach(characters => {
        const characterElement = document.createElement('li')
        characterElement.textContent = characters.name
        characterContainer.appendChild(characterElement)

        characterElement.addEventListener("click", (e) => {
          e.preventDefault()
          characterDetails(characters)//call character details function
        })
        
      })
      //function to display details
      function characterDetails(character) {
        // Clear previous details
        detailsContainer.innerHTML = '';
    
        
        const nameElement = document.createElement('h3')
        nameElement.textContent = character.name
        detailsContainer.appendChild(nameElement);
    
        const imageElement = document.createElement('img')
        imageElement.src = character.image
        imageElement.alt = character.name
        detailsContainer.appendChild(imageElement)
    
        const votesElement = document.createElement('p')
        votesElement.textContent = `Votes: ${character.votes}`
        detailsContainer.appendChild(votesElement)

        const voteButton=document.createElement("button")
        voteButton.textContent="vote"
        detailsContainer.appendChild(voteButton)

        voteButton.addEventListener("click",()=>{
          character.votes++;// increments the vote count
          votesElement.textContent=`votes:${character.votes}`
        })

        //reset button that resets the votes back to 0
        const resetButton=document.createElement("button")
        resetButton.textContent="Reset Votes"
        detailsContainer.appendChild(resetButton)

        resetButton.addEventListener("click",()=>{
          character.votes=0
          votesElement.textContent=`Votes:${character.votes}`
        })
      }

      //form for adding animals
      const addAnimal=document.createElement("form")
      formContainer.appendChild(addAnimal)

      const animalLabel=document.createElement("label")
      animalLabel.textContent="Name:"
      const animalInput=document.createElement("input")
      animalInput.type="text"
      addAnimal.appendChild(animalLabel)
      addAnimal.appendChild(animalInput)

      const imageLabel = document.createElement('label')
      imageLabel.textContent = 'Image URL:'
      const imageInput = document.createElement('input')
      imageInput.type = 'url'
      imageInput.required = true
      addAnimal.appendChild(imageLabel)
      addAnimal.appendChild(imageInput)


      const addButton = document.createElement('button')
      addButton.textContent = 'Add Animal'
      addAnimal.appendChild(addButton)

      addAnimal.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = animalInput.value;
        const image = imageInput.value;
        // Create a new character object
        const newCharacter = {
             name: name,
             image: image,
             votes: 0
        }
         // Add the new character to the list and display it
         const characterElement = document.createElement('li')
         characterElement.textContent = name
         characterContainer.appendChild(characterElement)

         characterElement.addEventListener('click', () => {
             characterDetails(newCharacter);
          })
         // Reset the form inputs
             animalInput.value = '';
             imageInput.value = '';
    })
  })
})