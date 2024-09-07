let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/test1.jpg") {
    myImage.setAttribute("src", "images/test2.jpg");
  } else {
    myImage.setAttribute("src", "images/test1.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    let myName = prompt("请输入你的名字。");
    localStorage.setItem("name", myName);
    myHeading.textContent = "欢迎来到我老婆的主页，" + myName;
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "欢迎来到我老婆的主页，" + storedName;
  }
  myButton.onclick = function () {
    setUserName();
  };

  function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
        alert("名字不可为空");
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = "欢迎来到我老婆的主页，" + myName;
    }
  }
  

