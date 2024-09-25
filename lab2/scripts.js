import Human from "./Human.js";
import Man from "./Man.js";
import Woman from "./Woman.js";

const year = 2024;
let name = "illia";
let yearOfBirth = 2005;

const whoami = (name, yearOfBirth = new Date().getFullYear()) => {
let age = year - yearOfBirth;
return console.log(`Я ${name}`+ (age ? `, мені ${age} років`: "") );
};

whoami(name);

let aboba = new Human("aboba", 255, 66, "sink")
let illia = new Man("illia", 19, 55);
let alina = new Woman("alina",12,50)
console.log(aboba.getInfo());
console.log(illia.getInfo());
console.log(alina.getInfo());

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