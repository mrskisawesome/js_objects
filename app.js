const person = {
  name: "Bob",
  age: 30,
  favColour: "red",
};
console.log(person);
//displays info in a line
console.table(person);
//displays info in a table index/Value
console.log(person.name); //outputs Bob
//etc
//adding on
person.favFood = "pizza";
console.table(person);
//experimenting with objects and HTML
const FavBook = {
  title: "Open: How We'll Work, Live and Learn in the Future",
  author: {
    name: "David Price",
    role: "inspirational",
  },
  year_of_publish: "2013",
  blurb:
    "From every perspective OPEN will open your mind to some of the real implications etc.",
  tags: ["#future", "#education", "#changethesystem", "#edrevolution"],
  //picture: (img src = "https://static.wixstatic.com/media/dbbb60_fcf7bf00bb814b83a430a90ab5e45301~mv2.png/v1/crop/x_133,y_0,w_2734,h_2771/fill/w_560,h_632,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/DP%252520Serious%252520face%252520Almost%252520B.png"),
  sayHello: function () {
    helloBtn.textContent = "Hellooo!";
  },
};
const helloBtn = document.getElementById("hello");
document.getElementById("title").innerHTML = FavBook.title;
document.getElementById("author").innerHTML = FavBook.author;
document.getElementById("year").innerHTML = FavBook.year_of_publish;
document.getElementById("blurb").innerHTML = FavBook.blurb;
document.getElementById(
  "tags"
).innerHTML = `There are ${FavBook.tags.length} tags connected with the book ${FavBook.title}. They are ${FavBook.tags[0]}, ${FavBook.tags[1]}, ${FavBook.tags[2]}, ${FavBook.tags[3]}`;
helloBtn.addEventListener("click", FavBook.sayHello);
