// funkcije za prelazak sa jedne strane na drugu
function zapocniKviz() {
  location.replace("http://127.0.0.1:5500/stranica_sa_pitanjima.html");
}
function vratiNazad() {
  let provera = document.getElementById("ime");
  if (!provera.checkValidity()) {
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
//let brojac = 1;
//function povecajBrojac(){
//  brojac += 1;
//}
function ucitajPrvoPitanje() {
  $.getJSON('pitanja.json', (data) => {
    $(".tekst").text(data.pitanje_1);
    $(".brojac").text("2");
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
    $(".odgovor").click(function () {
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
function ucitajNovoPitanje() {
  let brojac = $(".brojac").text();
  if (brojac == 2) {
    $.getJSON('pitanja.json', (data) => {
      $(".tekst").text(data.pitanje_2);
      $(".brojac").text("3");
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
      $("button").removeClass("odgovor");
      $("button").addClass("odgovor_2");
      $(".odgovor_2").click(function () {
        $("#odgovor_prvi").attr("disabled", "disabled");
        $("#odgovor_drugi").attr("disabled", "disabled");
        $("#odgovor_treci").attr("disabled", "disabled");
        $("#odgovor_cetvrti").attr("disabled", "disabled");
        $("#odgovor_prvi").attr("class", "btn-success");
        $("#odgovor_drugi").attr("class", "btn-danger");
        $("#odgovor_treci").attr("class", "btn-danger");
        $("#odgovor_cetvrti").attr("class", "btn-danger");
      });
    });
  }
  if (brojac == 3) {
    $.getJSON('pitanja.json', (data) => {
      $(".tekst").text(data.pitanje_4);
      $(".brojac").text("4");
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
      $("#odgovor_prvi").html(data.odgovori_4[0]);
      $("#odgovor_drugi").html(data.odgovori_4[1]);
      $("#odgovor_treci").html(data.odgovori_4[2]);
      $("#odgovor_cetvrti").html(data.odgovori_4[3]);
      $("#odgovor_prvi").css("display", "inline");
      $("#odgovor_drugi").css("display", "inline");
      $("#odgovor_treci").css("display", "inline");
      $("#odgovor_cetvrti").css("display", "inline");
      $("button").removeClass("odgovor_2");
      $("button").addClass("odgovor_4");
      $(".odgovor_4").click(function () {
        $("#odgovor_prvi").attr("disabled", "disabled");
        $("#odgovor_drugi").attr("disabled", "disabled");
        $("#odgovor_treci").attr("disabled", "disabled");
        $("#odgovor_cetvrti").attr("disabled", "disabled");
        $("#odgovor_prvi").attr("class", "btn-danger");
        $("#odgovor_drugi").attr("class", "btn-danger");
        $("#odgovor_treci").attr("class", "btn-success");
        $("#odgovor_cetvrti").attr("class", "btn-danger");
      });
    });
  }
  if (brojac == 4) {
    $.getJSON('pitanja.json', (data) => {
      $(".tekst").text(data.pitanje_5);
      $(".brojac").text("5");
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
      $("#odgovor_prvi").html(data.odgovori_5[0]);
      $("#odgovor_drugi").html(data.odgovori_5[1]);
      $("#odgovor_treci").html(data.odgovori_5[2]);
      $("#odgovor_cetvrti").html(data.odgovori_5[3]);
      $("#odgovor_prvi").css("display", "inline");
      $("#odgovor_drugi").css("display", "inline");
      $("#odgovor_treci").css("display", "inline");
      $("#odgovor_cetvrti").css("display", "inline");
      $("button").removeClass("odgovor_4");
      $("button").addClass("odgovor_5");
      $(".odgovor_5").click(function () {
        $("#odgovor_prvi").attr("disabled", "disabled");
        $("#odgovor_drugi").attr("disabled", "disabled");
        $("#odgovor_treci").attr("disabled", "disabled");
        $("#odgovor_cetvrti").attr("disabled", "disabled");
        $("#odgovor_prvi").attr("class", "btn-danger");
        $("#odgovor_drugi").attr("class", "btn-danger");
        $("#odgovor_treci").attr("class", "btn-danger");
        $("#odgovor_cetvrti").attr("class", "btn-success");
      });
    });
  }
  if (brojac == 5) {
    $.getJSON('pitanja.json', (data) => {
      $(".tekst").text(data.pitanje_7);
      $(".brojac").text("6");
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
      $("#odgovor_prvi").html(data.odgovori_7[0]);
      $("#odgovor_drugi").html(data.odgovori_7[1]);
      $("#odgovor_treci").html(data.odgovori_7[2]);
      $("#odgovor_cetvrti").html(data.odgovori_7[3]);
      $("#odgovor_prvi").css("display", "inline");
      $("#odgovor_drugi").css("display", "inline");
      $("#odgovor_treci").css("display", "inline");
      $("#odgovor_cetvrti").css("display", "inline");
      $("button").removeClass("odgovor_5");
      $("button").addClass("odgovor_7");
      $(".odgovor_7").click(function () {
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
  if (brojac == 6) {
    $.getJSON('pitanja.json', (data) => {
      $(".tekst").text(data.pitanje_8);
      $(".brojac").text("7");
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
      $("#odgovor_prvi").html(data.odgovori_8[0]);
      $("#odgovor_drugi").html(data.odgovori_8[1]);
      $("#odgovor_treci").html(data.odgovori_8[2]);
      $("#odgovor_cetvrti").html(data.odgovori_8[3]);
      $("#odgovor_prvi").css("display", "inline");
      $("#odgovor_drugi").css("display", "inline");
      $("#odgovor_treci").css("display", "inline");
      $("#odgovor_cetvrti").css("display", "inline");
      $("button").removeClass("odgovor_7");
      $("button").addClass("odgovor_8");
      $(".odgovor_8").click(function () {
        $("#odgovor_prvi").attr("disabled", "disabled");
        $("#odgovor_drugi").attr("disabled", "disabled");
        $("#odgovor_treci").attr("disabled", "disabled");
        $("#odgovor_cetvrti").attr("disabled", "disabled");
        $("#odgovor_prvi").attr("class", "btn-success");
        $("#odgovor_drugi").attr("class", "btn-danger");
        $("#odgovor_treci").attr("class", "btn-danger");
        $("#odgovor_cetvrti").attr("class", "btn-danger");
      });
    });
  }
  if (brojac == 7) {
    $.getJSON('pitanja.json', (data) => {
      $(".tekst").text(data.pitanje_9);
      $(".brojac").text("8");
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
      $("#odgovor_prvi").html(data.odgovori_9[0]);
      $("#odgovor_drugi").html(data.odgovori_9[1]);
      $("#odgovor_treci").html(data.odgovori_9[2]);
      $("#odgovor_cetvrti").html(data.odgovori_9[3]);
      $("#odgovor_prvi").css("display", "inline");
      $("#odgovor_drugi").css("display", "inline");
      $("#odgovor_treci").css("display", "inline");
      $("#odgovor_cetvrti").css("display", "inline");
      $("button").removeClass("odgovor_8");
      $("button").addClass("odgovor_9");
      $(".odgovor_9").click(function () {
        $("#odgovor_prvi").attr("disabled", "disabled");
        $("#odgovor_drugi").attr("disabled", "disabled");
        $("#odgovor_treci").attr("disabled", "disabled");
        $("#odgovor_cetvrti").attr("disabled", "disabled");
        $("#odgovor_prvi").attr("class", "btn-danger");
        $("#odgovor_drugi").attr("class", "btn-danger");
        $("#odgovor_treci").attr("class", "btn-danger");
        $("#odgovor_cetvrti").attr("class", "btn-success");
      });
    });
  }
}