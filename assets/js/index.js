import quotes from './quotes.js'

export default class App {
    constructor() {
        this.lineParagraph = 5
    }

    generateParagraph(number){
        let text = ""
        let paragraph = ""

        for (let c = 0; c < number; c++) {

            while(paragraph.length < 325) {
                let _randomIndex = this.randomIndex(this.lineParagraph, quotes.length)
                paragraph += paragraph.length > 0 ? " " : ""
                paragraph += quotes[_randomIndex] ? quotes[_randomIndex] : ""
            }

            text +=  `${paragraph} \n\n `
            paragraph = ""
        }

        return text
    }

    randomIndex(min, max){
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * ( max - min + 1 )) + min
    }

}