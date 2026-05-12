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
const carpilar = document.querySelectorAll('.fa-times');
let aktifFiltre = "";

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

    faSun.classList.toggle('aydinlik');
    faMoon.classList.toggle('aydinlik');
    html.classList.toggle('aydinlik');
    footer.classList.toggle('aydinlik');
    for (let i = 1; i < h1.length; i++) {
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