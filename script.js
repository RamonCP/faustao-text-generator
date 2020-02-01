import App from "./index.js"

const quotes = new App()

const $paragraph = document.querySelector('#paragraph')
const $generate = document.querySelector('#generate')
const $textGenerated = document.querySelector('#textGenerated')

let paragraph = ""

$generate.addEventListener('click',handleButton)


function handleButton() {
    paragraph = quotes.generateParagraph($paragraph.value)
    $textGenerated.innerHTML = paragraph
}
