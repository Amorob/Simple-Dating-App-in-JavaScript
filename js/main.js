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
  {
    avatar: "avatar.jpg",
    name: "Diana",
    gender: "Female",
    age: 20,
    hobbies: ["Music", "Dancing", "Fun"],
  },
  {
    avatar: "avatar2.jpg",
    name: "Zetty",
    gender: "Female",
    age: 18,
    hobbies: "Readin",
  },
  {
    avatar: "avatar3.jpg",
    name: "Prisc",
    gender: "Female",
    age: 17,
    hobbies: "Learning",
  },
  {
    avatar: "avatar5.jpg",
    name: "Gifty",
    gender: "Female",
    age: 25,
    hobbies: "Music",
  },
  {
    avatar: "avatar4.jpg",
    name: "Bright",
    gender: "Male",
    age: 22,
    hobbies: ["Party", "fun", "Game"],
  },
  {
    avatar: "avatar5.jpg",
    name: "Natalia",
    gender: "Female",
    age: 30,
    hobbies: ["Sport", "fun", "Game"],
  },
  {
    avatar: "avatar2.jpg",
    name: "Mezzy",
    gender: "Female",
    age: 35,
    hobbies: "Party",
  },
  {
    avatar: "avatar4.jpg",
    name: "Khisk",
    gender: "Male",
    age: 17,
    hobbies: ["Learning", "Library", "Game", "Programming"],
  },
];

let searchButton = document.getElementById("search-button");
let gender = document.getElementById("gender");
// let age = document.getElementById("age");
let hobbies = document.getElementById("hobbies");
let personRow = document.querySelector(".person-row");
let personList = document.querySelector(".person-list");
const minAge = document.getElementById("min-age");
const maxAge = document.getElementById("max-age");

// Age selection

searchButton.addEventListener("click", function () {
  personHTML = " ";

  for (var i = 0; i < users.length; i++) {
    // if any of the ages is negative
    if (minAge.value < 0 || maxAge.value < 0) {
      alert("Minimum age or Maximum age can not be less than 0");
      return false;
    }
    // if any of the ages is not a number
    if (isNaN(minAge.value) || isNaN(maxAge.value)) {
      alert("Minimum age or Maximum age must be valid numbers ");
      return false;
    }
    if (users[i].age >= minAge.value && users[i].age <= maxAge.value) {
      // min and max age query begin here

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
      // Min and Max ager query end here
    }
    // Display all if no min and max ages are specified
    if (minAge.value.trim() == 0 && maxAge.value.trim() == 0) {
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
    // if only maximum age is provide
    if (minAge.value.trim() == "" && maxAge.value.trim() != "") {
      alert("Choose a valid Minimum Age");
      clearFields();
      return false;
    }
    // if only minimum age is provide
    if (minAge.value.trim() != "" && maxAge.value.trim() == "") {
      alert("Choose a valid Maximum Age");
      clearFields();
      return false;
    }
  }
  personList.innerHTML = personHTML;
});
// clearFields function
function clearFields() {
  minAge.value = "";
  maxAge.value = "";
}
