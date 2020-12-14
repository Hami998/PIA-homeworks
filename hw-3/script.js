function zapocniKviz() {
    location.replace("http://127.0.0.1:5500/stranica_sa_pitanjima.html")
}
function otvoriFormu() {
  location.replace("http://127.0.0.1:5500/forma.html")
  }
function vratiNazad() {
  let provera = document.getElementById("ime");
  if(!provera.checkValidity()){
    location.replace("http://127.0.0.1:5500/glavna_stranica.html"); 
  }
  else {
    location.replace("http://127.0.0.1:5500/glavna_stranica.html");
  }
}