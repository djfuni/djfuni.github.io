var texts = [
  "启动灭绝协议！",
  "失去控制权！",
  "正在防御！",
  "阿巴阿巴~ ",
  "&（！&*@）（！（￥……&%！#",
];

var textContainer = document.getElementById("text-container");
var textElement = document.querySelector(".highlight");
var cursorElement = document.querySelector(".typist-cursor");
var currentIndex = 0;
var currentText = "";

document.addEventListener("DOMContentLoaded", function() {
  var randomIndex = Math.floor(Math.random() * texts.length);
  currentText = texts[randomIndex];
  typeText();
});

function switchText() {
  var randomIndex = Math.floor(Math.random() * texts.length);
  currentText = texts[randomIndex];
  currentIndex = 0;
  typeText();
}

setInterval(switchText, 3000);

function createTextElement(text, effectClass) {
  var textElement = document.createElement("span");
  textElement.className = "highlight d-inline-block " + effectClass;
  textElement.innerText = text;

  var cursorElement = document.createElement("span");
  cursorElement.className = "typist-cursor highlight d-inline-block";
  cursorElement.style.opacity = 0;
  cursorElement.style.visibility = "visible";
  cursorElement.style.animation = "700ms ease 0ms infinite normal none running blink";
  cursorElement.innerText = "|";

  var containerElement = document.createElement("span");
  containerElement.appendChild(textElement);
  containerElement.appendChild(cursorElement);

  return containerElement.outerHTML;
}

function typeText() {
  if (currentIndex < currentText.length) {
    textElement.textContent = currentText.substr(0, currentIndex + 1) + "|";
    currentIndex++;
    setTimeout(typeText, 100);
  } else {
    cursorElement.style.opacity = 0;
    cursorElement.style.visibility = "hidden";
  }
}