const konteyner = document.querySelector('.kart-konteyner');
const sagButon = document.getElementById('sag-kaydir');
const solButon = document.getElementById('sol-kaydir');
const gecmisButon = document.getElementById('gecmis');
const gelecekButon = document.getElementById('gelecek');
const tumKartlar = document.querySelectorAll('.etkinlik-karti');
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
}
