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

//funkcija za brojac
// function pokreniTajmer(){
//   let vreme = 20;
//     $(".tajmer").css("display", "inline");
//     let interval = setInterval(odbrojavanje, 1000);
//   function odbrojavanje() {
//     $(".tajmer").text("00:" + --vreme);
//     trenutnoVreme = vreme;
//     if(vreme==0){
//         clearInterval(interval);
//     }
//   }
// }
// function zaustaviTajmer(){
//   alert(trenutnoVreme);
//     $(".tajmer").css("display", "inline");
//     $(".tajmer").text("00:" + trenutnoVreme);
//   }
let vreme = 20;
let interval = null;
let stanje = "pokreni";
function pokreniTajmer(){
    $(".tajmer").css("display", "inline");
    $(".tajmer").text("00:" + vreme);
    vreme--;
if(vreme == -1){
  zaustaviTajmer();
  ucitajNovoPitanje();
}
}
function zaustaviTajmer(){
  if(stanje ==="pokreni"){
    interval = setInterval(pokreniTajmer, 1000);
    stanje = "zaustavi";
  }
  else{
    clearInterval(interval);
    stanje = "pokreni";
    vreme = 20;
  }
  }

// funkcije za rad sa pitanjima
let poeni=0;
let poeni_1=1;
let poeni_2=1;
let poeni_3=1;
let poeni_4=1;
let poeni_5=1;
let poeni_6=1;
let poeni_7=1;
let poeni_8=1;
let poeni_9=1;
let poeni_10=1;
function ucitajNovoPitanje() {
  zaustaviTajmer();
  let brojac = $(".brojac").text();
  if(brojac == 1) {
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
       zaustaviTajmer();
        if (this.id == 'odgovor_drugi'){
          setTimeout(ucitajNovoPitanje(), 3000);
          $("#odgovor_prvi").attr("disabled", "disabled");
          $("#odgovor_drugi").attr("disabled", "disabled");
          $("#odgovor_treci").attr("disabled", "disabled");
          $("#odgovor_cetvrti").attr("disabled", "disabled");
          $("#odgovor_prvi").attr("class", "btn-danger");
          $("#odgovor_drugi").attr("class", "btn-success");
          $("#odgovor_treci").attr("class", "btn-danger");
          $("#odgovor_cetvrti").attr("class", "btn-danger");
          poeni = poeni + poeni_1;
          poeni_1 = 0;
        }
        else {
          setTimeout(ucitajNovoPitanje(), 3000);
        $("#odgovor_prvi").attr("disabled", "disabled");
        $("#odgovor_drugi").attr("disabled", "disabled");
        $("#odgovor_treci").attr("disabled", "disabled");
        $("#odgovor_cetvrti").attr("disabled", "disabled");
        $("#odgovor_prvi").attr("class", "btn-danger");
        $("#odgovor_drugi").attr("class", "btn-success");
        $("#odgovor_treci").attr("class", "btn-danger");
        $("#odgovor_cetvrti").attr("class", "btn-danger");
        }
      });
    });
  }
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
        zaustaviTajmer();
        setTimeout(ucitajNovoPitanje(), 3000);
        if(this.id == 'odgovor_prvi'){
          $("#odgovor_prvi").attr("disabled", "disabled");
        $("#odgovor_drugi").attr("disabled", "disabled");
        $("#odgovor_treci").attr("disabled", "disabled");
        $("#odgovor_cetvrti").attr("disabled", "disabled");
        $("#odgovor_prvi").attr("class", "btn-success");
        $("#odgovor_drugi").attr("class", "btn-danger");
        $("#odgovor_treci").attr("class", "btn-danger");
        $("#odgovor_cetvrti").attr("class", "btn-danger");
        poeni = poeni + poeni_2;
        poeni_2 = 0;
        }
        else{
        $("#odgovor_prvi").attr("disabled", "disabled");
        $("#odgovor_drugi").attr("disabled", "disabled");
        $("#odgovor_treci").attr("disabled", "disabled");
        $("#odgovor_cetvrti").attr("disabled", "disabled");
        $("#odgovor_prvi").attr("class", "btn-success");
        $("#odgovor_drugi").attr("class", "btn-danger");
        $("#odgovor_treci").attr("class", "btn-danger");
        $("#odgovor_cetvrti").attr("class", "btn-danger");
        }
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
        if(this.id == 'odgovor_treci'){
          zaustaviTajmer();
          setTimeout(ucitajNovoPitanje(), 3000);
          $("#odgovor_prvi").attr("disabled", "disabled");
          $("#odgovor_drugi").attr("disabled", "disabled");
          $("#odgovor_treci").attr("disabled", "disabled");
          $("#odgovor_cetvrti").attr("disabled", "disabled");
          $("#odgovor_prvi").attr("class", "btn-danger");
          $("#odgovor_drugi").attr("class", "btn-danger");
          $("#odgovor_treci").attr("class", "btn-success");
          $("#odgovor_cetvrti").attr("class", "btn-danger");
          poeni = poeni + poeni_3;
          poeni_3 = 0;
        }
        else{
          $("#odgovor_prvi").attr("disabled", "disabled");
        $("#odgovor_drugi").attr("disabled", "disabled");
        $("#odgovor_treci").attr("disabled", "disabled");
        $("#odgovor_cetvrti").attr("disabled", "disabled");
        $("#odgovor_prvi").attr("class", "btn-danger");
        $("#odgovor_drugi").attr("class", "btn-danger");
        $("#odgovor_treci").attr("class", "btn-success");
        $("#odgovor_cetvrti").attr("class", "btn-danger");
        }
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
        zaustaviTajmer();
        setTimeout(ucitajNovoPitanje(), 3000);
        if(this.id == 'odgovor_cetvrti'){
          $("#odgovor_prvi").attr("disabled", "disabled");
        $("#odgovor_drugi").attr("disabled", "disabled");
        $("#odgovor_treci").attr("disabled", "disabled");
        $("#odgovor_cetvrti").attr("disabled", "disabled");
        $("#odgovor_prvi").attr("class", "btn-danger");
        $("#odgovor_drugi").attr("class", "btn-danger");
        $("#odgovor_treci").attr("class", "btn-danger");
        $("#odgovor_cetvrti").attr("class", "btn-success");
        poeni = poeni + poeni_4;
        poeni_4 = 0;
        }
        else {
        $("#odgovor_prvi").attr("disabled", "disabled");
        $("#odgovor_drugi").attr("disabled", "disabled");
        $("#odgovor_treci").attr("disabled", "disabled");
        $("#odgovor_cetvrti").attr("disabled", "disabled");
        $("#odgovor_prvi").attr("class", "btn-danger");
        $("#odgovor_drugi").attr("class", "btn-danger");
        $("#odgovor_treci").attr("class", "btn-danger");
        $("#odgovor_cetvrti").attr("class", "btn-success");
        }
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
        zaustaviTajmer();
        setTimeout(ucitajNovoPitanje(), 3000);
        if(this.id == 'odgovor_drugi'){
          $("#odgovor_prvi").attr("disabled", "disabled");
        $("#odgovor_drugi").attr("disabled", "disabled");
        $("#odgovor_treci").attr("disabled", "disabled");
        $("#odgovor_cetvrti").attr("disabled", "disabled");
        $("#odgovor_prvi").attr("class", "btn-danger");
        $("#odgovor_drugi").attr("class", "btn-success");
        $("#odgovor_treci").attr("class", "btn-danger");
        $("#odgovor_cetvrti").attr("class", "btn-danger");
        poeni = poeni + poeni_5;
        poeni_5 = 0;
        }
        else{
          $("#odgovor_prvi").attr("disabled", "disabled");
        $("#odgovor_drugi").attr("disabled", "disabled");
        $("#odgovor_treci").attr("disabled", "disabled");
        $("#odgovor_cetvrti").attr("disabled", "disabled");
        $("#odgovor_prvi").attr("class", "btn-danger");
        $("#odgovor_drugi").attr("class", "btn-success");
        $("#odgovor_treci").attr("class", "btn-danger");
        $("#odgovor_cetvrti").attr("class", "btn-danger");
        }
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
        zaustaviTajmer();
        setTimeout(ucitajNovoPitanje(), 3000);
        if(this.id == 'odgovor_prvi'){
          $("#odgovor_prvi").attr("disabled", "disabled");
        $("#odgovor_drugi").attr("disabled", "disabled");
        $("#odgovor_treci").attr("disabled", "disabled");
        $("#odgovor_cetvrti").attr("disabled", "disabled");
        $("#odgovor_prvi").attr("class", "btn-success");
        $("#odgovor_drugi").attr("class", "btn-danger");
        $("#odgovor_treci").attr("class", "btn-danger");
        $("#odgovor_cetvrti").attr("class", "btn-danger");
        poeni = poeni + poeni_6;
        poeni_6 = 0;
        }
        else{
          $("#odgovor_prvi").attr("disabled", "disabled");
          $("#odgovor_drugi").attr("disabled", "disabled");
          $("#odgovor_treci").attr("disabled", "disabled");
          $("#odgovor_cetvrti").attr("disabled", "disabled");
          $("#odgovor_prvi").attr("class", "btn-success");
          $("#odgovor_drugi").attr("class", "btn-danger");
          $("#odgovor_treci").attr("class", "btn-danger");
          $("#odgovor_cetvrti").attr("class", "btn-danger");
        }
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
        zaustaviTajmer();
        setTimeout(ucitajNovoPitanje(), 3000);
        if(this.id == 'odgovor_cetvrti'){
          $("#odgovor_prvi").attr("disabled", "disabled");
        $("#odgovor_drugi").attr("disabled", "disabled");
        $("#odgovor_treci").attr("disabled", "disabled");
        $("#odgovor_cetvrti").attr("disabled", "disabled");
        $("#odgovor_prvi").attr("class", "btn-danger");
        $("#odgovor_drugi").attr("class", "btn-danger");
        $("#odgovor_treci").attr("class", "btn-danger");
        $("#odgovor_cetvrti").attr("class", "btn-success");
        poeni = poeni + poeni_7;
        poeni_7 = 0;
        }
        else{
          $("#odgovor_prvi").attr("disabled", "disabled");
        $("#odgovor_drugi").attr("disabled", "disabled");
        $("#odgovor_treci").attr("disabled", "disabled");
        $("#odgovor_cetvrti").attr("disabled", "disabled");
        $("#odgovor_prvi").attr("class", "btn-danger");
        $("#odgovor_drugi").attr("class", "btn-danger");
        $("#odgovor_treci").attr("class", "btn-danger");
        $("#odgovor_cetvrti").attr("class", "btn-success");
        }
      });
    });
  }
  if (brojac == 8) {
    $.getJSON('pitanja.json', (data) => {
      $(".tekst").text(data.pitanje_3);
      $(".brojac").text("9");
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
      $("#odgovor_prvi").css("display", "none");
      $("#odgovor_drugi").css("display", "none");
      $("#odgovor_treci").css("display", "none");
      $("#odgovor_cetvrti").css("display", "none");
      $("#odgovor_na_dopunu").css("display", "inline");
      $("#potvrdi_odgovor").css("display", "inline");
      $("button").removeClass("odgovor_9");
      $("button").addClass("odgovor_10");
    });
  }
  if (brojac == 9) {
      $.getJSON('pitanja.json', (data) => {
        $(".tekst").text(data.pitanje_6);
        $(".brojac").text("10");
        $(".sledece_pitanje").css("display", "inline");
        $(".izadji_iz_kviza").css("display", "inline");
        $(".dugme").remove();
        $("#odgovor_prvi").attr("disabled", false);
        $("#odgovor_drugi").attr("disabled", false);
        $("#odgovor_treci").attr("disabled", false);
        $("#odgovor_cetvrti").attr("disabled", false);
        $("#odgovor_na_dopunu").attr("disabled", false);
        $("#odgovor_prvi").attr("class", "btn-success");
        $("#odgovor_drugi").attr("class", "btn-success");
        $("#odgovor_treci").attr("class", "btn-success");
        $("#odgovor_cetvrti").attr("class", "btn-success");
        $("#odgovor_prvi").css("display", "none");
        $("#odgovor_drugi").css("display", "none");
        $("#odgovor_treci").css("display", "none");
        $("#odgovor_cetvrti").css("display", "none");
        $("#tacan_odgovor").css("display", "none");
        $("#odgovor_na_dopunu").val('');
        $("#odgovor_na_dopunu").css("display", "inline");
        $("#potvrdi_odgovor").css("display", "inline");
      });
    }
  if (brojac == 10) {
        $.getJSON('pitanja.json', (data) => {
          $(".tekst").text(data.pitanje_10);
          $(".brojac").text("11");
          $(".sledece_pitanje").css("display", "inline");
          $(".izadji_iz_kviza").css("display", "inline");
          $(".dugme").remove();
          $("#odgovor_prvi").attr("disabled", false);
          $("#odgovor_drugi").attr("disabled", false);
          $("#odgovor_treci").attr("disabled", false);
          $("#odgovor_cetvrti").attr("disabled", false);
          $("#odgovor_na_dopunu").attr("disabled", false);
          $("#odgovor_prvi").attr("class", "btn-success");
          $("#odgovor_drugi").attr("class", "btn-success");
          $("#odgovor_treci").attr("class", "btn-success");
          $("#odgovor_cetvrti").attr("class", "btn-success");
          $("#odgovor_prvi").css("display", "none");
          $("#odgovor_drugi").css("display", "none");
          $("#odgovor_treci").css("display", "none");
          $("#odgovor_cetvrti").css("display", "none");
          $("#tacan_odgovor").css("display", "none");
          $("#odgovor_na_dopunu").val('');
          $("#odgovor_na_dopunu").css("display", "inline");
          $("#potvrdi_odgovor").css("display", "inline");
        });
  }
}
function prikaziOdgovor() {
  let brojac1 = $(".brojac").text();
  if(brojac1 == 9){
    $.getJSON('pitanja.json', (data) => {
      $("#potvrdi_odgovor").css("display", "none");
      $("#odgovor_na_dopunu").attr("disabled", true);
      $("#tacan_odgovor").css("display", "inline");
      $("#tacan_odgovor").attr("disabled", true);
      $("#tacan_odgovor").attr("class", "btn-success");
      $("#tacan_odgovor").text("Kazahstan");
      $('#odgovor_na_dopunu').css('textTransform', 'capitalize');
      let odgovor_8 = $("#odgovor_na_dopunu").val();
      if(odgovor_8 === "Kazahstan"){
        poeni = poeni + poeni_8;
        poeni_8 = 0;
      }
      else{
      }
  });
}
if(brojac1 == 10){
  $.getJSON('pitanja.json', (data) => {
    $("#potvrdi_odgovor").css("display", "none");
    $("#odgovor_na_dopunu").attr("disabled", true);
    $("#tacan_odgovor").css("display", "inline");
    $("#tacan_odgovor").attr("disabled", true);
    $("#tacan_odgovor").attr("class", "btn-success");
    $("#tacan_odgovor").text("Moskva");
    $('#odgovor_na_dopunu').css('textTransform', 'capitalize');
      let odgovor_9 = $("#odgovor_na_dopunu").val();
      if(odgovor_9 === "Moskva"){
        poeni = poeni + poeni_9;
        poeni_9 = 0;
      }
      else{
      }
});
}
if(brojac1 == 11){
  $.getJSON('pitanja.json', (data) => {
    $("#potvrdi_odgovor").css("display", "none");
    $("#odgovor_na_dopunu").attr("disabled", true);
    $("#tacan_odgovor").css("display", "inline");
    $("#tacan_odgovor").attr("disabled", true);
    $("#tacan_odgovor").attr("class", "btn-success");
    $("#tacan_odgovor").text("13");
    let odgovor_10 = $("#odgovor_na_dopunu").val();
    if(odgovor_10 == "13"){
      poeni = poeni + poeni_10;
      poeni_10 = 0;
    }
    else{
    }
});
}
}

