// ---------- Dizilerde Iterasyon ----------
// ----- For Döngüsü -----

const koordinatlar = [120, 100, -100, 220, 330, -50];

let pozitif = 0;
let negatif = 0;

for(let i=0 ; i<koordinatlar.length ; i++) {
    koordinatlar[i] < 0 ? negatif = negatif + koordinatlar[i] : pozitif = pozitif + koordinatlar[i];
}

console.log(`Negatifler Toplamı: ${negatif} Pozitifler Toplamı: ${pozitif}`);

// SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin bir dizide saklandığı varsayalım.
// Bu hayvanları türüne göre aramamızı sağlayacak ve o türden kaç adet bulunduğunu ana programa döndürecek fonksiyonu yaziniz. Eğer o türden bir hayvan yok ise bulunamadığını yazdırsın.

const hayvanlar = ["Aslan", "Fil", "Kartal", "Kanarya", "Aslan", "Aslan", "Timsah"];

const ara = prompt("Sayısını merak ettiğiniz hayvanın adını yazınız.");
const bulDondur = function (ara) {

let hayvanSayısı = 0;
for(let i in hayvanlar) {
    if (hayvanlar[i] == ara) {
        hayvanSayısı++;
    }
    hayvanSayısı==0 ? alert("Aradıgınız hayvandan bulunamadı.") : alert(`Aradıgınız ${ara} hayvanından ${hayvanSayısı} tane bulunmaktadır.`);
}
}
bulDondur(ara);


// ---------- FOR OF DONGUSU -----------

// for of döngüsü, for in döngüsünün bir çok veri yapısını kapsayacak şekilde güncellenmiş halidir. Bu döngüde dizi içersindeki veriye erişirken indişleme kullanmaya gerek yoktur.

let arabalar = ["BMW", "Volvo", "Mini"];

for(let i of arabalar) {
    console.log(i);   
}


// ---------- FOR EACH METHOD'U ----------
// ! for each method'u orjinal diziyi bozmaz.

let ögrenciler = ["Ferhan", "Emirhan", "Mehmet"];
console.log(ögrenciler.forEach((x) => console.log(x))); // Undefined

ögrenciler.forEach((deger, index) => console.log(index + ".kisi" + deger + "dir."));
 
console.log(ögrenciler); // ["Ferhan", "Emirhan", "Mehmet"]


// ---------- MAP METHOD'U ----------
// ! MAP Method'u orjinal diziyi değiştirmez.

// ÖRNEK: Bütün elemanların 3 katını alınız.

const rakamlar = [3, 5, 3, 2, 6, 7, 9];
console.log(rakamlar.map((x) => x*3));

rakamlar.map((x, index) => `${index+1}. elemanın 3 katı ${x*3}`);


// ÖRNEK: Isimler dizisinin içerisindeki her ismi büyük harf olarak yeni bir diziye sakla.

const isimler = [
    "Ahmet",
    "Mehmet",
    "Ismet",
    "Saffet",
    "Can",
    "Canan",
    "Cavidan"
  ];

  // MAP Method'u bir dizi döndürür.

  const büyük = isimler.map((isim) => isim.toUpperCase());
  console.log(büyük);

  document.querySelector(".baslık").textContent = büyük.join("->");


  // ---------- FILTER METHOD'U ----------

  // ÖRNEK: Fiyatlar dizisindeki 250'den büyük fiyatları yazdır.

  const fiyatlar = [120, 260, 300, 322.5, 400, 768];

  console.log(fiyatlar.filter((t) => t < 250));


  // ÖRNEK: Maaşı 4000 $’dan düşük olanlara %50 zam yapmak istiyoruz. Ve bunu ayrı dizi olarak saklamak istiyoruz.

  const maaslar = [3000, 5000, 4000, 6000, 6500];

  console.log(maaslar.filter((a) => a <= 4000).map((a) => a*1.5));


  // ÖRNEK: Ilk harfi A olanları konsolda yazdırın.

  const adlar = [
    "Samet",
    "Hakkı",
    "Duygu",
    "Emrullah",
    "Bilal",
    "Ali",
    "Ahmet",
    "Hasan",
    "Defne",
    "Serdar"
  ];

  adlar.filter((x) => x.startsWith("A")).forEach((x) => console.log(x));


  // ----------- REDUCE METHOD'U ----------
  // ! Reduce çıkış method'udur. Reduce'den sonra foreach çalışmaz.

  const maaslarım = [3000, 5000, 4000, 2000, 1000];
  
  console.log(maaslarım.reduce((x, y) => x+y, 0));