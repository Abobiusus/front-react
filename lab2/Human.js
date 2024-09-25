export default class Human{
    constructor(name, age, weight, gender){
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.gender = gender;
    }
    getInfo(prop = null){return prop ? this[prop] : Object.entries(this).forEach(([kye,value]));}
    greeting(){}
}