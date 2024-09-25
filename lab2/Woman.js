import Human from "./Human";

export default class Woman extends Human{
    constructor(name, age, weight){
        super(name, age, weight, "woman")
    }
    greeting() {return `Привіт мене звати ${this.name}`};
}