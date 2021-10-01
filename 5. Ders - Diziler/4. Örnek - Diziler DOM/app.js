const maaslar = [4000, 5000, 3500, 4200, 2850, 5000, 7500];

const liste = document.querySelector(".liste-ul");

for(let i in maaslar) {
    liste.innerHTML = liste.innerHTML + `<li> ${maaslar[i]} </li>`
}

// EKLE butonuna tıkladığımızda diziye ve listeye yeni veri ekle.
const giris = document.querySelector(".liste");

document.querySelector(".ekle").onclick = function() {
    liste.innerHTML = liste.innerHTML + `<li>${giris.value}</li>`
    // giris.value = "";
    maaslar.push(giris.value);
    acıklamaGüncelle(maaslar);
}

  
//Sil butonuna tıklandığında listedeki ve dizideki son elamanı sil.
document.querySelector(".sil").onclick = function () {
    if (maaslar.length == 0) {
      alert("Silinecek öğe kalmadı.");
    } else {
      maaslar.pop();
      liste.removeChild(liste.lastElementChild);
      acıklamaGüncelle(maaslar);
    }
  };


  const acıklamaGüncelle = function(maaslar) {
      document.querySelector(".acıklama").innerHTML = `Maaşlar: ${maaslar.join(" - ")}`;
  }
  