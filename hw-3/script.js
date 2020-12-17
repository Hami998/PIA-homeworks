// funkcije za prelazak sa jedne strane na drugu
function zapocniKviz() {
    location.replace("http://127.0.0.1:5500/stranica_sa_pitanjima.html");
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
function vratiForma() {
  location.replace("http://127.0.0.1:5500/forma.html");
}
function vratiPocetna() {
  location.replace("http://127.0.0.1:5500/glavna_stranica.html");
}
function otvoriPravilaIgre() {
  location.replace("http://127.0.0.1:5500/pravila_igre.html");
}
function otvoriFormu() {
  location.replace("http://127.0.0.1:5500/forma.html");
}
// funkcije za rad sa pitanjima
function ucitajPitanje1() {
  //$(".tekst").remove();
  $.getJSON('pitanja.json', (data) => {         
    $(".tekst").text(data.pitanje_1);
    $(".sledece_pitanje").css("display", "inline");
    $(".izadji_iz_kviza").css("display", "inline");
    $(".dugme").remove();
    $("#odgovor_prvi").html(data.odgovori_1[0]);
    $("#odgovor_drugi").html(data.odgovori_1[1]);
    $("#odgovor_treci").html(data.odgovori_1[2]);
    $("#odgovor_cetvrti").html(data.odgovori_1[3]);
    $("#odgovor_prvi").css("display", "inline");
    $("#odgovor_drugi").css("display", "inline");
    $("#odgovor_treci").css("display", "inline");
    $("#odgovor_cetvrti").css("display", "inline");
  });
}