var users = [
  {
    avatar: "avatar1.jpg",
    name: "Lucy",
    gender: "Female",
    age: 22,
    hobbies: ["Sports", "Sports"],
  },
  {
    avatar: "avatar2.jpg",
    name: "Catalina",
    gender: "Female",
    age: 26,
    hobbies: ["Party", "Cards", "Play"],
  },
  {
    avatar: "avatar4.jpg",
    name: "Mosh",
    gender: "Male",
    age: 18,
    hobbies: "Codding",
  },
  {
    avatar: "avatar.jpg",
    name: "Ryder",
    gender: "Male",
    age: 40,
    hobbies: "Sports",
  },
  {
    avatar: "avatar3.jpg",
    name: "Betty",
    gender: "Female",
    age: 23,
    hobbies: "Music",
  },
  {
    avatar: "avatar5.jpg",
    name: "Gifty",
    gender: "Female",
    age: 25,
    hobbies: "Music",
  },
];

let searchButton = document.getElementById("search-button");
let gender = document.getElementById("gender");
let age = document.getElementById("age");
let hobbies = document.getElementById("hobbies");
let personRow = document.querySelector(".person-row");
let personList = document.querySelector(".person-list");

searchButton.addEventListener("click", function () {
  personHTML = " ";
  for (var i = 0; i < users.length; i++) {
    personHTML +=
      '<div class="person-row">\
      <img src="images/' +
      users[i].avatar +
      '"/>\
      <div class="person-info">\
        <div class="person-name">' +
      "Name:" +
      " " +
      users[i].name +
      '</div>\
        <div class="person-gender">' +
      "Gender:" +
      " " +
      users[i].gender +
      '</div>\
        <div class="person-age">' +
      "Age:" +
      "" +
      users[i].age +
      '</div>\
        <div class="person-hobbies">' +
      "Hobbies:" +
      "" +
      users[i].hobbies +
      "</div>\
      </div> <button>Add a friend</button>\
    </div>";
  }
  personList.innerHTML = personHTML;
});
