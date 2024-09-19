let year = 2024;
let name = "illia";
let yearOfBirth = 2005;

const whoami = (name, yearOfBirth = new Date().getFullYear()) => {
let age = year - yearOfBirth;
return console.log(`Я ${name}`+ (age ? `, мені ${age} років`: "") );
};

whoami(name);

class Human{
    constructor(name, age, weight, gender){
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.gender = gender;
    }
    getInfo(prop = null){return prop ? this[prop] : this;}
    greeting(){}
}

class Man extends Human{
    constructor(name, age, weight){
        super(name, age, weight, "man")
    }
    greeting() {return `Привіт мене звати ${this.name}, мені ${age}`}
}

class Woman extends Human{
    constructor(name, age, weight){
        super(name, age, weight, "woman")
    }
    greeting() {return `Привіт мене звати ${this.name}`};
}

let illia = new Man("illia", 19, 55);
console.log(illia.getInfo());

let users = []

for (let i = 0; i < 15; i++) {
    if (Math.random() > 0.5){
        users.push(new Man(`user${i}`, i, Math.floor(Math.random()*100))) 
    }else{
        users.push(new Woman(`user${i}`, i, Math.floor(Math.random()*100))) 
    }
}
console.log(users)  

const delay = 1000; 

function search(list, searchField, searchValue) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = list.filter(item => item[searchField] === searchValue);
      if (result.length > 0) {
        resolve(result);
      } else {
        reject(`За пошуком по ${searchField}: ${searchValue} не знайдено`);
      }
    }, delay);
  });
}



search(users, "name", "user1")
  .then(results => {
    console.log(results.map(el => el.getInfo()))})
  .catch(error => {
    console.log("Помилка:", error);
  });