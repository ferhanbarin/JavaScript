// ----- Fonksiyonlar -----

// ! 1. YONTEM : FUNCTION DECLARATION
// Declaration yöntemiyle fonsiyonun tanımlanması çağrılmasından önce veya sonra olabilir.

// Fonksiyonun Tanımlanması

function yazdirAd()
{
    console.log("Ferhan");
}

yazdirAd(); // Ferhan ---> Fonksiyonun çağrılması.


// ORNEK: Klavyeden girilen sayının tek mi çift mi olduğunu gösteren bir fonksiyon yazınız.

const sayiniz = prompt("Lütfen sayinizi giriniz.");

console.log(tekCift(sayiniz)); 

function tekCift (sayiniz) {
    return sayiniz%2 == 0 ? `${sayiniz} Çift ` : `${sayiniz} Tek`
}


// ! 2. YONTEM : FUNCTION EXPRESSION (YAYGIN YONTEM)
// ORNEK I

const tekCift1 = function (sayi) {
    return sayi%2 == 0 ? "Çift" : "Tek";
}

console.log(tekCift1(5));


// ORNEK II : Verilen 3 sayıdan en büyük sayıyı bulmak.

let büyükBul = function(a,b,c){
    let enBüyük;

    if (a>b && a>c) {
        enBüyük = a;
    } else if (b>c && b>a) {
        enBüyük = b;
    } else {
        enBüyük = c;
    } return enBüyük;
}

console.log(büyükBul(5,8,9));


// ! 3. YONTEM : FUNCTION ARROW (OK)

const ciftMi = (sayi) => (sayi%2 == 0 ? "CIFT" : "TEK");

const ciftMi = (num) => (num%2 == 0 ? `${num} = CIFT` : `${num} = TEK`);

console.log("SAYI" + ciftMi(7));

// ORNEK I 

const taban = prompt("Taban giriniz.");
const us = prompt("Us giriniz.");

const usAl = (taban,us) => taban**us;
console.log(usAl(taban,us));