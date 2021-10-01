// ----- GETELEMENTBYID -----

const paragraf = document.getElementById("PARA").style;
paragraf.backgroundColor = "black";
paragraf.color = "white";
paragraf.fontSize = "20px";

const buton = document.getElementById("BTN");
buton.style.width = "100px";
buton.style.color = "yellow";
buton.style.fontSize = "18px";
buton.textContent = "ARA"; // textContent = tag'lerin içeriğindeki yazıyı değiştirmek için kullanılır.


// ----- GETELEMENTBYTAGNAME ----- (Bu kullanım tercih edilmez.)

const resim = document.getElementsByTagName("img");
resim[0].style.width = "300px";
resim[0].style.height = "300px";
resim[1].style.border = "3px solid red";


// ----- GETELEMENTBYCLASSNAME -----

const baslik = document.getElementsByClassName("h1");
baslik[0].style.textAlign = "center";


// ----- QUERYSELECTOR ----- (En çok kullanılan çağırma yoludur.)

document.querySelector(".Arama").textContent = "DOM SELECTOR KAVRAMI 💻";
document.querySelector("#Gövde").style.backgroundImage = "linear-gradient(green,blue,pink)";


// ----- EVENT -----

// (onmouseover,onmouseout = Fare üstüne gelince ayrılınca)
const h = document.querySelector(".h1");

h.onmouseover = function (){
    h.style.color = "red";
    h.style.backgroundColor = "white";
}

h.onmouseout = function(){
    h.style.color = "pink";
    h.style.backgroundColor = "yellow";
}


// 1. resme tıkladığımızda img'ler yer değiştirsin.

document.querySelector(".BIR").onclick = function(){
    document.querySelector(".BIR").src="./img/logo2.png";
    document.querySelector(".IKI").src="./img/js_logo.png";
}


