const button = document.querySelector('button')
const image = document.querySelector('#image')
const factionName = document.querySelector('#faction-name')

let buttonClicked = false;
let factions = ['usf', 'british', 'soviet', 'okw', 'ostheer']



button.addEventListener('click', function () {

    if (buttonClicked) {
        return
    }

    let randomNumber = Math.floor(Math.random() * factions.length)
    let randomFaction = factions[randomNumber]
    let result = randomFaction.toUpperCase()
    buttonClicked = true;
    factionName.innerHTML = ''
    image.setAttribute('src', 'img/loader.gif')


    setTimeout(function () {
        image.setAttribute('src', `img/${randomFaction}.png`)
        factionName.innerHTML = `${result}`
        buttonClicked = false;
    }, 2000)


})