// fetch the characters data from the api
function fetchCharacterData(){
return fetch(' db.json')
.then(response=>response.json())
.then(data=>{
    const characterContainer=document.getElementById('characters')
    const detailsContainers=document.getElementById('charactersDetails')

//loop through each character and create a card to display it
   data.characters.forEach(characters =>{
    const characterName=document.createElement('div')
    characterName.classList.add('character')
    
    characterName.textContent=characters.name

    characterName.addEventListener("click",()=>{
    characterDetails(characters)
   })

    characterContainer.appendChild(characterName) 
  })
})
}
//fuction to display the details of a character
function characterDetails(characters){
   
    detailsContainers.innerHTML=""

    const characterImage=document.createElement('img')
    characterImage.src=characters.image

    const characterName=document.createElement('h2')
    characterName.textContent=characters.name

    const characterVotes=document.createElement('p')
    characterVotes.textContent=`Votes: ${characters.votes}`

    const voteButton=document.createElement('button')
    voteButton.innerText='vote'

    voteButton.addEventListener('click', () =>{
        characters.vote++;
        characterVotes.innerText= `Votes:${characters.votes}`
    })

    const detailsContainers=document.createElement('div')
    detailsContainers.classList.add('details')
    detailsContainers.appendChild(characterImage)
    detailsContainers.appendChild(characterVotes)
    detailsContainers.appendChild(voteButton)
    
detailsContainer.appendChild(detailsContainers)  
}
//fetch character data and render the character list on page load
   window.addEventListener('DOMContentLoaded',() => {
    fetchCharacterData()
   })