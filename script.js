let storyButton = document.getElementById(`storyButton`)
let storyParagraph = document.getElementById(`storyParagraph`)
let thing = document.getElementById(`thing`)
let number = document.getElementById(`number`)
let place = document.getElementById(`place`)

storyButton.addEventListener(`click`, showParagraph)

function showParagraph() {
    storyParagraph.innerHTML = `I just got back from ${place.value} to get ${number.value} grams of ${thing.value}`
    storyButton.style.backgroundColor = `blue`
    storyParagraph.style.color = `blue`
}