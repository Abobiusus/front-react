import Human from "./Human"

export default class Man extends Human{
    constructor(name, age, weight){
        super(name, age, weight, "man")
    }
    greeting() {return `Привіт мене звати ${this.name}, мені ${age}`}
}