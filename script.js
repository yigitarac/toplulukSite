// Sayfanın en üstüne kaydırma butonu

let usteKaydirmaBtn = document.getElementById('usteKaydirma');

window.onscroll = function() {
    if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        usteKaydirmaBtn.style.display = 'block';
    } else {
        usteKaydirmaBtn.style.display = 'none';
    }
}

function usteKaydir() {
    document.body.scrollTop = 0;            // Webkit tabanlı tarayıcılar (örnek Safari)
    document.documentElement.scrollTop = 0; // Firefox ve Chrome tabanlı tarayıcılar
}

const konteyner = document.querySelector('.kart-konteyner');
const sagButon = document.getElementById('sag-kaydir');
const solButon = document.getElementById('sol-kaydir');
const gecmisButon = document.getElementById('gecmis');
const gelecekButon = document.getElementById('gelecek');
const tumKartlar = document.querySelectorAll('.etkinlik-karti');
const maviButonlar = document.querySelectorAll('.btn-mavi');
const devamButonlar = document.querySelectorAll('.btn-devam');
const popupDetay = document.getElementById('popup-detay');
const popupIletisim = document.getElementById('popup-iletisim');
let popupSSS = document.getElementById('popup-sss');
let btnSSS = document.getElementById('btn-sss');
const carpilar = document.querySelectorAll('.fa-times');
let aktifFiltre = "";
let sorularSSS = document.querySelectorAll('.sss-soru');

sagButon.addEventListener('click', function() {
    konteyner.scrollLeft += 330;
});
solButon.addEventListener('click', function() {
    konteyner.scrollLeft -= 330;
});

gecmisButon.addEventListener('click', function() {
    konteyner.scrollLeft = 0;

    if (aktifFiltre === "gecmis") {
        tumKartlar.forEach(kart => kart.style.display = 'flex');
        aktifFiltre = "";
    } else {
        tumKartlar.forEach(kart => {
            if (kart.classList.contains('gecmis-kart')) {
                kart.style.display = 'flex';
            } else {
                kart.style.display = 'none';
            }
        });
        aktifFiltre = "gecmis";
    }
});
gelecekButon.addEventListener('click', function() {
    konteyner.scrollLeft = 0;

    if (aktifFiltre === "gelecek") {
        tumKartlar.forEach(kart => kart.style.display = 'flex');
        aktifFiltre = "";
    } else {
        tumKartlar.forEach(kart => {
            if (kart.classList.contains('gelecek-kart')) {
                kart.style.display = 'flex';
            } else {
                kart.style.display = 'none';
            }
        });
        aktifFiltre = "gelecek";
    }
});

// Koyu - Aydınlık temalar arası geçiş

function temaDegistir() {
    let faSun = document.getElementsByClassName('fa-sun')[0];
    let faMoon = document.getElementsByClassName('fa-moon')[0];
    let html = document.getElementsByTagName('html')[0];
    let footer = document.getElementsByTagName('footer')[0];
    let h1 = document.getElementsByTagName('h1');
    let h2 = document.getElementsByTagName('h2');
    let a = document.getElementsByTagName('a');
    let kartlar = document.getElementsByClassName('etkinlik-karti');
    let popuplar = document.getElementsByClassName('popup-kutu');
    let ikonlar = document.getElementsByClassName('ikon');
    let altparagrafyazi = document.getElementsByClassName('alt-paragraf')[0];
    let etkinlikButon = document.getElementsByClassName('btn-etkgor');
    let rozet = document.getElementsByClassName('rozet');

    faSun.classList.toggle('aydinlik');
    faMoon.classList.toggle('aydinlik');
    html.classList.toggle('aydinlik');
    footer.classList.toggle('aydinlik');
    altparagrafyazi.classList.toggle('aydinlik');
    for (let i = 0; i < h1.length; i++) {
        h1[i].classList.toggle('aydinlik');
    }
    for (let i = 0; i < h1.length; i++) {
        h2[i].classList.toggle('aydinlik');
    }
    for (let i = 0; i < h2.length; i++) {
        a[i].classList.toggle('aydinlik');
    }
    for (let i = 0; i < kartlar.length; i++) {
        kartlar[i].classList.toggle('aydinlik');
    }
    for (let i = 0; i < popuplar.length; i++) {
        popuplar[i].classList.toggle('aydinlik');
    }
    for (let i = 0; i < ikonlar.length; i++) {
        ikonlar[i].classList.toggle('aydinlik');
    }
    for (let i = 0; i < rozet.length; i++) {
        rozet[i].classList.toggle('aydinlik');
    }
}

// Popup Menüler

maviButonlar.forEach(button => { 
    button.onclick = (event) => {
    event.preventDefault();
    let baslik = button.getAttribute('data-baslik');
    let aciklama = button.getAttribute('data-aciklama');
    let resimler = button.getAttribute('data-resimler');
    let resimListesi = resimler.split(',');
    let galeri = document.querySelector('.popup-galeri');
    galeri.innerHTML = '';
    resimListesi.forEach (resimYolu => {
        let yeniResim = document.createElement('img');
        yeniResim.src = resimYolu;
        galeri.appendChild(yeniResim);
    });
    document.getElementById('detay-baslik').innerText = baslik;
    document.getElementById('detay-aciklama').innerText = aciklama;
    popupDetay.style.display = 'flex';
    }
});
devamButonlar.forEach(button => { 
    button.onclick = (event) => {
    event.preventDefault();
    popupIletisim.style.display = 'flex';
    }
});
carpilar.forEach(button => { 
    button.onclick = (event) => {
    event.preventDefault();
    popupDetay.style.display = 'none';
    popupIletisim.style.display = 'none';
    popupSSS.style.display = 'none';
    }
});
popupDetay.onclick = (event) => {
    if (event.target === popupDetay) {
        popupDetay.style.display = 'none';
    }
}
popupIletisim.onclick = (event) => {
    if (event.target === popupIletisim) {
        popupIletisim.style.display = 'none';
    }
}

// Sıkça Sorulan Sorular

btnSSS.onclick = (event) => {
    event.preventDefault();
    popupSSS.style.display = 'flex'
}
popupSSS.onclick = (event) => {
    if (event.target === popupSSS) {
        popupSSS.style.display = 'none';
    }
}

sorularSSS.forEach(soru => {
soru.onclick = function() {
this.parentElement.classList.toggle('acik');
let ikon = this.querySelector('i');
ikon.classList.toggle('fa-plus');
ikon.classList.toggle('fa-minus');
}
})