
let skor = 10;
let rastgeleSayi = Math.floor(Math.random() * 20 + 1);
let enYüksekSkor=0;
let mesaj=document.querySelector(".mesaj");

// Tekrar butonuna tıklandığında ayarlar başlangıç değerlerine kuruluyor.
document.querySelector(".tekrar").onclick= function(){
skor=10;
rastgeleSayi = Math.floor(Math.random() * 20 + 1);
document.querySelector("body").style.backgroundColor="black";
document.querySelector(".sayı").innerHTML="?";
document.querySelector(".skor").innerHTML=skor;
mesaj.textContent="Tahmine başlanıyor";
document.querySelector(".tahmin").value=" ";
}


// Her kontrol butonuna bastığımızda çalışan fonk.
document.querySelector(".kontrol").onclick= function(){
let tahmin=document.querySelector(".tahmin").value;

// Tahmin doğru ise;

if(tahmin==rastgeleSayi && skor>1){
 mesaj.textContent="Tebrikler Bildiniz!";
 document.querySelector("body").style.backgroundColor="green";
 document.querySelector(".sayı").textContent=rastgeleSayi;

// En yüksek skoru güncelle.
if(skor>enYüksekSkor)
document.querySelector(".en-skor").textContent=skor;

// Tahmin yanlış ise;
} else {
  // Girilen sayıya göre oyuncuyu yönlendir.
  if (skor > 1) {
    skor--;
    tahmin < rastgeleSayi
      ? (mesaj.textContent = "Arttır!")
      : (mesaj.textContent = "Azalt!");
       document.querySelector(".skor").textContent = skor;

  } else {
    document.querySelector(".mesaj").textContent="Oyunu Kaybettiniz!";
    document.querySelector(".skor").textContent=0;
    document.querySelector("body").style.backgroundColor = "red";
  }
 
}

}

