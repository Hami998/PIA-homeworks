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
function ucitajPrvoPitanje(){
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
    $(".odgovor").click(function(){
      $("#odgovor_prvi").attr("disabled", "disabled");
      $("#odgovor_drugi").attr("disabled", "disabled");
      $("#odgovor_treci").attr("disabled", "disabled");
      $("#odgovor_cetvrti").attr("disabled", "disabled");
      $("#odgovor_prvi").attr("class", "btn-danger");
      $("#odgovor_drugi").attr("class", "btn-success");
      $("#odgovor_treci").attr("class", "btn-danger");
      $("#odgovor_cetvrti").attr("class", "btn-danger");
    });
});
}
function ucitajNovoPitanje(){
    $.getJSON('pitanja.json', (data) => {         
      $(".tekst").text(data.pitanje_2);
      $(".sledece_pitanje").css("display", "inline");
      $(".izadji_iz_kviza").css("display", "inline");
      $(".dugme").remove();
      $("#odgovor_prvi").attr("disabled", false);
      $("#odgovor_drugi").attr("disabled", false);
      $("#odgovor_treci").attr("disabled", false);
      $("#odgovor_cetvrti").attr("disabled", false);
      $("#odgovor_prvi").attr("class", "btn-success");
      $("#odgovor_drugi").attr("class", "btn-success");
      $("#odgovor_treci").attr("class", "btn-success");
      $("#odgovor_cetvrti").attr("class", "btn-success");
      $("#odgovor_prvi").html(data.odgovori_2[0]);
      $("#odgovor_drugi").html(data.odgovori_2[1]);
      $("#odgovor_treci").html(data.odgovori_2[2]);
      $("#odgovor_cetvrti").html(data.odgovori_2[3]);
      $("#odgovor_prvi").css("display", "inline");
      $("#odgovor_drugi").css("display", "inline");
      $("#odgovor_treci").css("display", "inline");
      $("#odgovor_cetvrti").css("display", "inline");
      $(".odgovor1").click(function(){
        $("#odgovor_prvi").attr("disabled", "disabled");
        $("#odgovor_drugi").attr("disabled", "disabled");
        $("#odgovor_treci").attr("disabled", "disabled");
        $("#odgovor_cetvrti").attr("disabled", "disabled");
      });
  });
}