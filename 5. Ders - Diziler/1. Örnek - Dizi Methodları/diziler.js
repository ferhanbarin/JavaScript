const yaslar = [5,10,28,42];

const isimler = ["Hakan", "Alaaddin", "Furkan", "Ferhan", 20, 40, true, 23.5, yaslar];

console.log(isimler);

console.log(isimler[3]);
console.log(isimler[3] = "Sadi");
console.log(isimler);

// const değiştirilemiyordu ama non-primitive'lerde (Array) değiştirilebiliyor. Dizi bir adres gösterir isimler gibi, o yüzden primitive'den farklıdır.

isimler[isimler.length-2] = false;

console.log(isimler[8][1]);

// ----- Diziyi Değiştiren Method'lar -----

let meyveler = ["Elma", "Armut", "Muz", "Kivi"];

const baslik = document.querySelector(".baslik");
baslik.textContent = meyveler;

// pop() en son elemanı siler. log içinde yazdırırsanız da sildiğini gösterir.

// meyveler.pop(); --> Kivi siler.
console.log(meyveler);

// shift() dizinin 0 indexli elemanını yani ilk elemanı siler ve yazdırsak sildiği elemanı döndürür.

// meyveler.shift; --> Elma siler.
console.log(meyveler.shift());
// Silme methodları log'da yazdırılırsa sildiği elemanı döndürür.

// push() dizinin sonuna eleman ekler.

meyveler.push("Cilek", "Karpuz");

// unshift() dizinin 0 index'ine eleman ekler.

meyveler.unshift("Ayva");

// reverse() dizinin tamamının ters çevirir.

// meyveler.reverse();

// sort() diziyi naturel order alfabetik sıralar.

meyveler.sort();

// splice()
meyveler.splice(1,0), "Erik";
// index silmeden ekle.


meyveler.splice(4,1, "Üzüm")
// index silerek ekle.


// Ilk kod = Eleman eklenecek index.
// 2. kod = 1 ise o index'teki elemanı silerek, 0 ise elemanı silmeden ekle.
// 3. kod = Eklenecek veri.

baslik.textContent = meyveler;
console.log(meyveler);


// ----- Dizi Erişim Methodları (Diziyi Değiştirmez) -----

const sayılar = [3, 4, 5, 2, "2", "Üc", "Bes", 5, 2];

console.log(sayılar.includes("5")); // False
console.log(sayılar.includes(5)); // True


// indexOf() ilk eşleşen index'i döndürür.

console.log(sayılar.indexOf(2));

console.log(sayılar.lastIndexOf(5));

console.log(sayılar.indexOf(2,4)); // 8 ikinci 2'yi döndürür. (4. indexten sonra aramaya başlar.)
console.log(sayılar.indexOf(5,3)); // 7


// join() dizinin elamanlarını birleştirip String hale getirir.

console.log(sayılar.join("-"));

// join() default virgüllere ayırarak diziden kurtarır. Ama istersek "" yazarak boşluklarla "-" yaparak  -'lerle ayırabiliriz.

// toString() join() gibidir. Sadece virgülle ayırır.

console.log(sayılar.toString());

baslik.textContent = sayılar;
console.log(sayılar);

// ! ********************************************************************************************

const arabalar = ["BMW", "Mercedes", "Volvo", "Sahin", "Anadol"];

// slice()
console.log(arabalar.slice(2)); // 2. indexli elemandan sonuna kadar.

console.log(arabalar.slice(1,3)); // Ilk index dahil, 2. sırada yazan index'e kadar. (2. dahil değil)

baslik.textContent = arabalar;
console.log(arabalar);


// ----- CONCAT -----

const birleşik = sayılar.concat(arabalar, true, false, [3,4,5], meyveler);
console.log(birleşik);