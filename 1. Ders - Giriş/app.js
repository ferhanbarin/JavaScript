// ----- KONSOL -----

console.log("Hello JavaScript"); // Yazdırmak için kullanılır. ---> System.out.println();
alert("Dikkat!"); // ---> Pop-Up çıkarmak için.
console.warn("Bu bir uyarıdır.");
console.error("Bu bir hatadır.");
prompt("Adınızı giriniz."); // Kullanıcıdan değer almak için kullanılır.


// ----- Degisken Tanimlama -----
// ----- VAR -----

// ? Modern JS var keyword’unun kullanımı azaldı.
// ? Çünkü, "var" global değişken gibi düşünülebilir.
// ? Günümüzde programcılar global değişken gerekmedikçe VAR tercih ETMEMEKTEDİR.

var isim = "Ferhan";
console.log(typeof isim);

isim = 3.14;
console.log(typeof isim);


// ----- CONST -----

// TODO: const ve let Modern JS ile gelmiş yeni değişken tanımlama keyword’leridir.
// ! CONST: Sadece başlangıçta değer atanabilir.
// ! Sonradan değeri değiştirilemez (non-primitive’ler hariç).Mümkünse const, yoksa let, o da mümkün değilse var kullanılmalı. Çünkü JS'de çok rahat değişiklik yapılıyor, var, let sıkıntı çıkarabilir.

const piSayisi = 3.14; // const ile değer verilir, sonradan değiştirilemez.
// piSayisi = 3; ---> YANLIŞ.

const isim1 = "Emirhan";
console.log(typeof isim1);

// const number; ---> Hatalı yazım.
// number = 4; 


// ----- LET -----

// ? Eğerki değişkenimizin değerinin değişmesi gerekiyor ise const kullanamayız. Bunun yerine LET kullanabiliriz.
// ! LET Block-scope bir değişkendir. VAR ise global-scope bir tanımlamadır.
// * Block-scope: Sadece tanımlı olduğu alanda geçerlidir.

let fiyat;
fiyat = 10;

console.log(typeof fiyat);

fiyat = "Derya";
console.log(fiyat);


// String tanımlamak için 3 farklı karakter kullanılabilir.

let name1 = "Mehmet";
let name2 = 'Ali';
let name3 = `Yunus`;
console.log(name3);


// ----- Aritmetik Operatörler -----

const kola = 5;
const cips = 6;
const ekmek = 2;
console.log(kola + cips + ekmek);
console.log("Toplam Fiyat" , kola + cips + ekmek );

const ad = "Can";
const soyad = "Canan";
console.log(ad + soyad);

const s1 = 7;
let s2 = "7";
console.log(s1 + s2); // 77

console.log("Benim adım " + ad + " " + "Benim yaşım " + s1);


// ! ----- Template Literal -----

console.log(`Benim adım ${ad} Benim yaşım ${s1}`);

// Üs almak ---> **
const taban = 2;
const üs = 3;
console.log(taban**üs); // 8

// Mod almak ---> %

// 123 birler basamağı kaçtır?
const sayi = 123;
const birler = 123%10; // 3
console.log(birler);


// ----- Karşılaştırma Operatörleri -----
const s3 = 5;
const s4 = "5";
console.log(s3 == s4); // True
console.log(s3 === 4); // False ---> Tipinede bakar. 


// TODO ----- Tip Değişimleri -----

const para = "100";
console.log(para + 15); // 10015
console.log(Number(para) + 15); // 115

const sayi5 = 56;
console.log(String(sayi5) + sayi5); // 5656
console.log(typeof sayi5);