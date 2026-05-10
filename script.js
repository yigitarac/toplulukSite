const konteyner = document.querySelector('.kart-konteyner');
const sagButon = document.getElementById('sag-kaydir');
const solButon = document.getElementById('sol-kaydir');

sagButon.addEventListener('click', function() {
    konteyner.scrollLeft += 330; 
});
solButon.addEventListener('click', function() {
    konteyner.scrollLeft -= 330; 
});