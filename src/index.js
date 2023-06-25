// fetch the characters data from the api
fetch('db.json')
.then(response=>response.json())
.then(data=>{
    const characterContainer=document.getElementById('characters')

//loop through each character and create a card to display it
data.characters.forEach(characters=>{
    const characterCard=document.createElement('div')
    characterCard.classList.add('character')

    const characterImage=document.createElement('img')
    characterImage.src=characters.image

    const characterName =document.createElement('div')
    characterName.classList.add('character-name')
    characterName.textContent=characters.name 

    const characterVotes=document.createElement('div')
    characterVotes.classList.add('character-votes')
    characterVotes.textContent=`votes: ${characters.votes}`

    characterContainer.appendChild(characterName)
    characterCard.appendChild(characterImage)
    
    characterCard.appendChild(characterVotes)

    characterContainer.appendChild(characterCard)
})
})