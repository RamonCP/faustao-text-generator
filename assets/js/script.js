import App from "./index.js"

const quotes = new App()

const $paragraph = document.querySelector('#paragraph')
const $generate = document.querySelector('#generate')
const $textGenerated = document.querySelector('#textGenerated')
const $copyButton = document.querySelector('.copy')

let paragraph = ""

$generate.addEventListener('click', handleButton)
$copyButton.addEventListener('click', copyText)

function handleButton() {
    paragraph = quotes.generateParagraph($paragraph.value)
    $textGenerated.innerHTML = paragraph
}

function copyText() {
    $textGenerated.select()
    document.execCommand('copy')
}