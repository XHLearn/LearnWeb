

let myImg = document.querySelector("img");

myImg.onclick = () => {
  let mySrc = myImg.getAttribute("src");
  if (mySrc === "../images/logo.png") {
    myImg.setAttribute("src", "../images/logo2.png");
  } else {
    myImg.setAttribute("src", "../images/logo.png");
  }
};


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1")
function setUserName() {
  let myName = prompt("请输入你的名字。");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Mozilla 酷毙了，" + myName;
}

if (localStorage.getItem("name")) {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla 酷毙了，" + storedName;
} else {
  setUserName();
}

myButton.onclick = () => {
  setUserName();
}

// document.querySelector("html").addEventListener("click", () => {
//     alert("别戳我，我怕疼。");
// });
