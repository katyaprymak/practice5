var element1 = document.querySelector(".fans");
var element2 = document.querySelector(".fish");
var element3 = document.querySelector(".pets");
var inputt = document.querySelector("#toggle");
var divv = document.querySelector(".ball");
var elementh1 = document.querySelector("h1");
var elementbody = document.querySelector("body");

element1.addEventListener("mouseover", function () {
  element1.innerText = "123K";
});

element2.addEventListener("mouseover", function () {
  element2.innerText = "47K";
});

element3.addEventListener("mouseover", function () {
  element3.innerText = "20K";
});

inputt.addEventListener("click", function () {
  if (elementbody.classList.contains("light")) {
    elementbody.classList.remove("light");
    divv.classList.remove("move-right");
    elementh1.innerText = "Stealth Quincy";
  } else {
    elementbody.classList.add("light");
    divv.classList.add("move-right");
    elementh1.innerText = "Party Quincy";
  }
});
