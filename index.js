import quotes from './quotes.js'

export default class App {
    constructor() {
        this.lineParagraph = 5
    }

    generateParagraph(number){
        let paragraph = ""

        for (let c = 0; c <= number; c++) {
            let _randomIndex = this.randomIndex(this.lineParagraph, quotes.length)
            paragraph += quotes[_randomIndex]
        }

        return paragraph
    }

    randomIndex(min, max){
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * ( max - min + 1 )) + min
    }

}
