

let myImg = document.querySelector("img");

myImg.onclick = () => {
    let mySrc = myImg.getAttribute("src");
    if (mySrc === "../images/logo.png") {
        myImg.setAttribute("src", "../images/logo2.png");
    } else {
        myImg.setAttribute("src", "../images/logo.png");
    }
};

// document.querySelector("html").addEventListener("click", () => {
//     alert("别戳我，我怕疼。");
// });
