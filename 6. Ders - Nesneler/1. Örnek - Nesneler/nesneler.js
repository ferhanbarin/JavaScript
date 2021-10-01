// Düzgün ve kurallı yazım için ---> "use strict"

// ---------- NESNELER ----------
// Diziler sıralı bellek bölgeleridir. Dolayısıyla dizilere erişim index'le olur. Eğer diziler karışıksa (nesne) index'le erişim güçlüğü ortaya çıkar. Bu yüzden => ........... ;

// ! OBJECT (Nesne)
// ! Nesnelerde key-value (property-value) yapısı kullanılır. Nesnelerde aradığımız veriye erişmek için key adını kullanmamız gerekir.

const insan = {
    ad: "Ferhan",
    soyad: "Barın",
    yas: 25,
    meslek: "QA",
    diller: ["JAVA", "JavaScript", "SQL", "HTML"]
};

console.log(insan);

// 1) .dot notasyonu
console.log(insan.ad);
console.log(insan.diller);


// 2) Köşeli parantez içine
console.log(insan["ad"]);
console.log(insan["diller"]);


console.log(`Adım: ${insan.ad} ve Yaşım: ${insan.yas}`);

const bilgi = prompt("Insan nesnesinden hangisi görmek istersin? -ad, soyad, yas...-");
console.log(insan[bilgi]);

// Objeye key.value'lar ekleme

insan.konum = "Türkiye";
insan.email = "ferhanbarin@yahoo.com";
insan["dogumTarihi"] = 1997;

console.log(insan);


// ----------- NESNE Method'ları ------------

const kisi = {
    ad: "Emirhan",
    soyad: "Barın",
    dogumTarihi: 2002,
    meslek: "Bilgisayar Mühendisi",
    tool: "Cypress",
    ehliyet: true,
    yasHesapla: function() { // Bugünün yılını al --> Date().getFullYear()
        return new Date().getFullYear() - this.dogumTarihi

    },

    Özet: function() {
        return `${this.ad}${this.soyad}${this.yasHesapla} yaşındadır.`

    }
};

console.log(kisi);
console.log(kisi.yasHesapla());
console.log(kisi.Özet());


// Nesne (object) iterasyon örnekleri

const people = [
    {
        ad: "Hakan",
        soyad: "BAKAN",
        meslek: "Developer",
        yas: 41 
    },

    {
        ad: "Said",
        soyad: "Canan",
        meslek: "Tester",
        yas: 37
    },

    {
        ad: "Kubilay",
        soyad: "Tuncer",
        meslek: "Team Lead",
        yas: 33
    },

    {
        ad: "Osman",
        soyad: "Türk",
        meslek: "Grafiker",
        yas: 29
    },

    {
        ad: "Hüseyin",
        soyad: "Harran",
        meslek: "Developer",
        yas: 32
    }
];

console.log(people);

// 1. ORNEK - people dizisindeki kişilerin mesleklerini konsol da yazdırın.

people.forEach((x) => console.log(x.meslek));


// 2. ORNEK - people dizisindeki tüm kişilerin yaşlarını bir arttırarak yazdırın.

people.map((x) => x.yas+1).forEach((x) => console.log(x));


// 3. ORNEK - Yaşı 35'e eşit veya küçük olanların adlarını yazdırın.

people.filter((x) => x.yas <= 35).forEach((x) => console.log(x.ad));


// 4. ORNEK - people dizisindeki kişilerin isimlerini büyük harf olarak alan veya yaşlarını 5 arttıran ve soyadının ilk 2 harfini yazdıran fonksiyonu yazdırın.

people.map((x) => {
    return {

ad:x.ad.toUpperCase(),
yas:x.yas+5,
soyad:x.soyad.slice(0,2),
};
}).forEach((x) => console.log(x));


// 5. ORNEK - Mesleği developer olanların isimlerini büyük harf yapıp ve yaşlarını yazdırınız. (Diziye atayıp diziyide yazdırabilirsiniz.)

const yeni = people.filter((x) => x.meslek == "Developer").map((x) => {
    return{
        ad:x.ad.toLocaleUpperCase(),
        yas:x.yas,
    }
}
);

console.log(yeni);