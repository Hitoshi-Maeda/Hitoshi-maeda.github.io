'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const buttonPush = document.getElementById("buttonsw");
buttonPush.addEventListener("click", appearGators);
const rightBox = document.getElementsByClassName("right")[0];

const thankYouGreetingParagragh = "🐊🐊🐊"
console.log(thankYouGreetingParagragh);
function appearGators() {
rightBox.innerHTML = thankYouGreetingParagragh;
}