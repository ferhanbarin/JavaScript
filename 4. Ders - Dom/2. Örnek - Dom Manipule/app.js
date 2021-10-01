// Ara butonuna tıklandığında çalan telefon çıksın ve zil çalsın.

let resim = document.querySelector(".resim"); // Resime ulaştım.
let ring = document.querySelector(".ses"); // Audio ulaştım.
document.querySelector(".on").onclick = function(){ // Ara butonuna ulaştım.
    resim.src="./img/img.gif"; // Resim değiştirdim.
    ring.play(); // Sesi çalıştırdım(play yaptım).
}


// Bağlat butonuna basınca gif gelsin ve ses kesilsin.

document.querySelector(".off").onclick = function(){ // Bağlat butonunu çağırdım.
    resim.src="./img/telbağla.gif"; 
    ring.pause(); // Tel sesini susturdum.
}


// Konuş butonuna basınca yeni gif gelsin.

document.querySelector(".speak").onclick=function(){
    resim.src="./img/telfırlat.gif";
}


// Ekle butonuna basıldığında yeni bir <li> ekle.

document.querySelector(".ekle").onclick = function(){

    const liste = document.querySelector(".liste");
    const giris = document.querySelector(".dil");

    liste.innerHTML = liste.innerHTML + `<li>${giris.value}</li>`;
    giris.value = "";
}


// Sil butonuna tıklandığında <li> elemanı silinsin.

document.querySelector(".sil").onclick = function() {

    const liste = document.querySelector(".liste");
    
    liste.removeChild(liste.lastElementChild);
}


const parag = document.querySelector(".forH1");
parag.innerHTML = `<h1>${"Programlama Dilleri"}</h1>`;


// Klavyeden bir tuşa basıldığında büyüsün veya küçülsün.

document.querySelector(".textbox").onkeyup = function(){

    const checkbox = document.querySelector(".checkbox");
    const textbox = document.querySelector(".textbox");

    if (checkbox.checked) {
        textbox.value = textbox.value.toUpperCase();
    } else {
        textbox.value = textbox.value.toLowerCase();
    }
}


// Mouse resmin üstüne geldiginde aslan kükresin.

resim.onmouseover = function(){
    resim.src = "./img/aslan2.jpeg";
}


// 2. YOL (addEventListener())

resim.addEventListener("mouseout", function(){
    resim.src = "./img/aslan2.jpeg";
})


// Mouse resmin üstünden çekildiğinde;

resim.onmouseout = function(){
    resim.src = "./img/aslan1.jpeg";
}


// ENTER=13  &  DELETE=46 --> ENTER'e basınca eklesin, DELETE'basınca silsin.
// onkeydown -> Klavyedeki tuşa basıp, elinizi çektiğinizde.

document.querySelector(".dil").onkeydown = function(klavye){

    if (klavye.keyCode == 13) { // Enter'i çağırdık.
        document.querySelector(".ekle").onclick();
        
    } if (klavye.keyCode == 46) { // Delete'yi çağırdık.
        document.querySelector(".sil").onclick();
    }
}

