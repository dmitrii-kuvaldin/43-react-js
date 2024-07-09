// пример сложных типов данных

// массив
// let arr = [1,2,3,4]

// объект DOM

// let dom = {html: {
//   head: {},
//   body: {

//   }
// }}

// пример описание тега в виде объекта
// аттрибуты тега будут его ключами

// let img = {
//   src: '',
//   id: '',
//   class: ''
// }

// const book = {
//   title: "Lord of the Rings",
//   author: "Tolkien",
//   isForKids: false,
//   characters: ["Aragorn", "Legolas", "Ghimli", "Frodo"]
// };

// * задача: получить данные из объекта по ключам и положить их в переменные для дальнейшего использования

// const title = book.title
// const author = book.author
// const isForKids = book.isForKids
// const characters = book.characters

// * деструктуризация объектов решает ту же задачу, но в одну строку

// const { title: newTitle, author, characters, isForKids, age } = book;

// console.log(age);
// console.log(title);
// console.log("newTitle:   ", newTitle);
// console.log("author:   ", author);
// console.log("isForKids:    ", isForKids);
// console.log("characters:    ", characters);

// let arr = [1, 2, "John", 3];

// arr.map(el => {
//   if (typeof el === "string") {
//     console.log(el);
//   } else {
//     console.log(el + 10);
//   }
// });

let jedi = [
  {
    name: "Luke",
    age: 35
  },
  {
    name: "Anakin",
    age: 50
  },
  {
    name: "Obi Wan",
    age: 60
  },
  {
    name: "Luke",
    age: 35
  },
  {
    name: "Anakin",
    age: 50
  },
  {
    name: "Obi Wan",
    age: 60
  }
];

jedi.map(el => {
  console.log(el.name);
});
