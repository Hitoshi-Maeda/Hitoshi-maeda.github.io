'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//ワニ表示
const buttonPush = document.getElementById("buttonsw");
buttonPush.addEventListener("click", appearGators);
const rightBox = document.getElementsByClassName("right")[0];


function appearGators() {
rightBox.innerHTML = 
"　　　　　　　　　　　　　　　　🐊　　　　　　　　　　　　　　　　　　🐊<br>🐊🐊🐊🐊　　🐊　🐊　　🐊🐊🐊🐊🐊 🐊🐊　　　 🐊　　　　　🐊🐊🐊🐊🐊<br>　　🐊　🐊　　🐊　🐊　　　　 🐊　 🐊　🐊🐊　　　🐊　　　　　🐊　　　　🐊<br>　　🐊　　　　🐊　🐊　　　　　🐊　🐊　　　　　　　🐊🐊🐊　　　　　　　🐊<br>　　🐊　　　　　　🐊　　　　　🐊　🐊　　　　　　　 🐊　　　　　　　　　🐊<br>　 🐊 　　　　　　🐊　　　　　🐊　🐊　　　　　　　 🐊　　　　　　　　🐊"

}

//ワニ表示ここまで

//【トライ１】

document.getElementById("wrapper1").addEventListener("click", fail1);

function fail1() {
    document.getElementById("fail1").innerHTML = "Test FAILED.　keep trying!"
}

document.getElementById("wrapper2").addEventListener("click", fail2);

function fail2() {
    document.getElementById("fail2").innerHTML = "Test FAILED.　keep trying!"
}

//【トライ１】ここまで

//【トライ２】

document.getElementById("fail2").addEventListener("click", notice);

function notice() {
    document.getElementById("notice").innerHTML = "valueの値とindex<br>の関係が一意"
}

//【トライ２】ここまで

//【トライ３】
document.getElementById("wrapper3").addEventListener("click", pass);

function pass() {
    document.getElementById("passed").innerHTML = "Yay! Test PASSED."
}
//【トライ３】ここまで
