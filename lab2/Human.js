export default class Human{
    constructor(name, age, weight, gender){
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.gender = gender;
    }
    getInfo(prop = null){return prop ? this[prop] : Object.fromEntries(Object.entries(this));}
    greeting(){return "Hi!"}
}