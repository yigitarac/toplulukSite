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
