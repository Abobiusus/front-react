import Human from "./Human.js";

class Man extends Human{
    constructor(name, age, weight){
        super(name, age, weight, "man")
    }
    greeting() {return `Привіт мене звати ${this.name}, мені ${age}`}
}
export default Man;