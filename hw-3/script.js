// funkcije za cuvanje podataka
  function ucitaj(){
      let ime1 =  $(".ime_1").text();
      let prezime1 = $(".prezime_1").text();  
      let brojPoena1 = $(".poeni_1").text();
      let ime2 =  $(".ime_2").text();
      let prezime2 = $(".prezime_2").text();  
      let brojPoena2 = $(".poeni_2").text();
      let ime3 =  $(".ime_3").text();
      let prezime3 = $(".prezime_3").text();  
      let brojPoena3 = $(".poeni_3").text();
      let ime4 =  $(".ime_4").text();
      let prezime4 = $(".prezime_4").text();  
      let brojPoena4 = $(".poeni_4").text();
      let ime5 =  $(".ime_5").text();
      let prezime5 = $(".prezime_5").text();  
      let brojPoena5 = $(".poeni_5").text();
      let ime6 =  $(".ime_6").text();
      let prezime6 = $(".prezime_6").text();  
      let brojPoena6 = $(".poeni_6").text();
      let ime7 =  $(".ime_7").text();
      let prezime7 = $(".prezime_7").text();  
      let brojPoena7 = $(".poeni_7").text();
      let ime8 =  $(".ime_8").text();
      let prezime8 = $(".prezime_8").text();  
      let brojPoena8 = $(".poeni_8").text();
      let ime9 =  $(".ime_9").text();
      let prezime9 = $(".prezime_9").text();  
      let brojPoena9 = $(".poeni_9").text();
      let ime10 =  $(".ime_10").text();
      let prezime10 = $(".prezime_10").text();  
      let brojPoena10 = $(".poeni_10").text();
      let podaci = {
        "prvi_igrac" : [ime1, prezime1, brojPoena1],
        "drugi_igrac" : [ime2, prezime2, brojPoena2],
        "treci_igrac" : [ime3, prezime3, brojPoena3],
        "cetvrti_igrac" : [ime4, prezime4, brojPoena4],
        "peti_igrac" : [ime5, prezime5, brojPoena5],
        "sesti_igrac" : [ime6, prezime6, brojPoena6],
        "sedmi_igrac" : [ime7, prezime7, brojPoena7],
        "osmi_igrac" : [ime8, prezime8, brojPoena8],
        "deveti_igrac" : [ime9, prezime9, brojPoena9],
        "deseti_igrac" : [ime10, prezime10, brojPoena10]
      }
      localStorage.setItem("rezultati_iz_tabele", JSON.stringify(podaci));
  }
function postaviPodatke(){
  
}
 //funkcije za prelazak sa jedne strane na drugu
let imeIgraca = "";
let prezimeIgraca = "";
// function sacuvajPodatke() {
//     imeIgraca = $("#ime").val();
//     prezimeIgraca = $("#prezime").val();
// }
function zapocniKviz() {
  // imeIgraca = document.querySelector('#ime').value;
  // prezimeIgraca = document.querySelector('#prezime').value;
  // localStorage.setItem("ime", imeIgraca);
  // localStorage.setItem("prezime", prezimeIgraca);
    imeIgraca = localStorage.getItem("ime");
    prezimeIgraca = localStorage.getItem("prezime");
  if (imeIgraca && prezimeIgraca) {
    location.replace("http://127.0.0.1:5501/stranica_sa_pitanjima.html");
  }
  else {
    alert("Potrebno je uneti ime i prezime ");
  }
}
function vratiNazad() {
  let provera = document.getElementById("ime");
  if (!provera.checkValidity()) {
    location.replace("http://127.0.0.1:5501/glavna_stranica.html");
  }
  else {
    location.replace("http://127.0.0.1:5501/glavna_stranica.html");
  }
}
function vratiForma() {
  location.replace("http://127.0.0.1:5501/forma.html");
}
function vratiPocetna() {
  location.replace("http://127.0.0.1:5501/glavna_stranica.html");
}
function otvoriPravilaIgre() {
  location.replace("http://127.0.0.1:5501/pravila_igre.html");
}
function otvoriFormu() {
  location.replace("http://127.0.0.1:5501/forma.html");
}
function otvoriRezultate() {
  location.replace("http://127.0.0.1:5501/tabela.html"); 
}
//funkcija za cuvanje podataka
function sacuvaj(){
  imeIgraca = document.querySelector('#ime').value;
  prezimeIgraca = document.querySelector('#prezime').value;
  localStorage.setItem("ime", imeIgraca);
  localStorage.setItem("prezime", prezimeIgraca);
}
//funkcija za brojac
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
//funkcije za cuvanje imena i prezimena

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
        setTimeout(function(){ucitajNovoPitanje()}, 3000);
         if (this.id == 'odgovor_drugi'){
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
        setTimeout(function(){ucitajNovoPitanje()}, 3000);
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
          setTimeout(function(){ucitajNovoPitanje()}, 3000);
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
        setTimeout(function(){ucitajNovoPitanje()}, 3000);
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
        setTimeout(function(){ucitajNovoPitanje()}, 3000);
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
        setTimeout(function(){ucitajNovoPitanje()}, 3000);
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
        setTimeout(function(){ucitajNovoPitanje()}, 3000);
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
  if(brojac== 11){
    otvoriRezultate()
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
      localStorage.setItem("poeni", poeni);
    }
    else{
    }
    // ime = localStorage.getItem("ime");
    // alert(ime);
    // prezime = localStorage.getItem("prezime");
    // alert(prezime);
    // localStorage.setItem("poeni", poeni);
    // alert(poeni);
    // vratiPocetna();
});
}
}
// funkcije koje odredjuju da li je igrac u tabeli
function provera(){
    //poeni = localStorage.getItem("poeni");
   p = 6; //ovo sve ide iz localStarage
   pi = "Mihailo";
   pp = "Jacimovic";
   if ($(".poeni_1").is(':empty')) { 
    $(".ime_1").text(pi);
    $(".prezime_1").text(pp);
    $(".poeni_1").text(p);
    ucitaj();
    return;
}
   if (p >= $(".poeni_1").text()){
     if(p > $(".poeni_1").text()){
      let ime9 =  $(".ime_9").text();
      $(".ime_10").text(ime9);
      let ime8 =  $(".ime_8").text();
      $(".ime_9").text(ime8);
      let ime7 =  $(".ime_7").text();
      $(".ime_8").text(ime7);
      let ime6 =  $(".ime_6").text();
      $(".ime_7").text(ime6);
      let ime5 =  $(".ime_5").text();
      $(".ime_6").text(ime5);
      let ime4 =  $(".ime_4").text();
      $(".ime_5").text(ime4);
      let ime3 =  $(".ime_3").text();
      $(".ime_4").text(ime3);
      let ime2 =  $(".ime_2").text();
      $(".ime_3").text(ime2);
      let ime1 =  $(".ime_1").text();
      $(".ime_2").text(ime1);
      $(".ime_1").text(pi);
      let prezime9 =  $(".prezime_9").text();
      $(".ime_10").text(prezime9);
      let prezime8 =  $(".prezime_8").text();
      $(".prezime_9").text(prezime8);
      let prezime7 =  $(".prezime_7").text();
      $(".prezime_8").text(prezime7);
      let prezime6 =  $(".prezime_6").text();
      $(".prezime_7").text(prezime6);
      let prezime5 =  $(".prezime_5").text();
      $(".prezime_6").text(prezime5);
      let prezime4 =  $(".prezime_4").text();
      $(".prezime_5").text(prezime4);
      let prezime3 =  $(".prezime_3").text();
      $(".prezime_4").text(prezime3);
      let prezime2 =  $(".prezime_2").text();
      $(".prezime_3").text(prezime2);
      let prezime1 =  $(".prezime_1").text();
      $(".prezime_2").text(prezime1);
      $(".prezime_1").text(pp);
      let poeni9 =  $(".poeni_9").text();
      $(".poeni_10").text(poeni9);
      let poeni8 =  $(".poeni_8").text();
      $(".poeni_9").text(poeni8);
      let poeni7 =  $(".poeni_7").text();
      $(".poeni_8").text(poeni7);
      let poeni6 =  $(".poeni_6").text();
      $(".poeni_7").text(poeni6);
      let poeni5 =  $(".poeni_5").text();
      $(".poeni_6").text(poeni5);
      let poeni4 =  $(".poeni_4").text();
      $(".poeni_5").text(poeni4);
      let poeni3 =  $(".poeni_3").text();
      $(".poeni_4").text(poeni3);
      let poeni2 =  $(".poeni_2").text();
      $(".poeni_3").text(poeni2);
      let poeni1 =  $(".poeni_1").text();
      $(".poeni_2").text(poeni1);
      $(".poeni_1").text(p);
      ucitaj();
      return;
     }
    let ime1 = $(".ime_1").text();
    let proveraRedosleda = pi.localeCompare(ime1);
    if(proveraRedosleda < 0){
      let ime9 =  $(".ime_9").text();
      $(".ime_10").text(ime9);
      let ime8 =  $(".ime_8").text();
      $(".ime_9").text(ime8);
      let ime7 =  $(".ime_7").text();
      $(".ime_8").text(ime7);
      let ime6 =  $(".ime_6").text();
      $(".ime_7").text(ime6);
      let ime5 =  $(".ime_5").text();
      $(".ime_6").text(ime5);
      let ime4 =  $(".ime_4").text();
      $(".ime_5").text(ime4);
      let ime3 =  $(".ime_3").text();
      $(".ime_4").text(ime3);
      let ime2 =  $(".ime_2").text();
      $(".ime_3").text(ime2);
      let ime1 =  $(".ime_1").text();
      $(".ime_2").text(ime1);
      $(".ime_1").text(pi);
      let prezime9 =  $(".prezime_9").text();
      $(".ime_10").text(prezime9);
      let prezime8 =  $(".prezime_8").text();
      $(".prezime_9").text(prezime8);
      let prezime7 =  $(".prezime_7").text();
      $(".prezime_8").text(prezime7);
      let prezime6 =  $(".prezime_6").text();
      $(".prezime_7").text(prezime6);
      let prezime5 =  $(".prezime_5").text();
      $(".prezime_6").text(prezime5);
      let prezime4 =  $(".prezime_4").text();
      $(".prezime_5").text(prezime4);
      let prezime3 =  $(".prezime_3").text();
      $(".prezime_4").text(prezime3);
      let prezime2 =  $(".prezime_2").text();
      $(".prezime_3").text(prezime2);
      let prezime1 =  $(".prezime_1").text();
      $(".prezime_2").text(prezime1);
      $(".prezime_1").text(pp);
      let poeni9 =  $(".poeni_9").text();
      $(".poeni_10").text(poeni9);
      let poeni8 =  $(".poeni_8").text();
      $(".poeni_9").text(poeni8);
      let poeni7 =  $(".poeni_7").text();
      $(".poeni_8").text(poeni7);
      let poeni6 =  $(".poeni_6").text();
      $(".poeni_7").text(poeni6);
      let poeni5 =  $(".poeni_5").text();
      $(".poeni_6").text(poeni5);
      let poeni4 =  $(".poeni_4").text();
      $(".poeni_5").text(poeni4);
      let poeni3 =  $(".poeni_3").text();
      $(".poeni_4").text(poeni3);
      let poeni2 =  $(".poeni_2").text();
      $(".poeni_3").text(poeni2);
      let poeni1 =  $(".poeni_1").text();
      $(".poeni_2").text(poeni1);
      $(".poeni_1").text(p);
      ucitaj();
      return;
    }
    else if(proveraRedosleda==0){
      let prezime1 = $(".prezime_1").text();
      let proveraRedosledaP = pp.localeCompare(prezime1);
      if(proveraRedosledaP<=0){
        let ime9 =  $(".ime_9").text();
      $(".ime_10").text(ime9);
      let ime8 =  $(".ime_8").text();
      $(".ime_9").text(ime8);
      let ime7 =  $(".ime_7").text();
      $(".ime_8").text(ime7);
      let ime6 =  $(".ime_6").text();
      $(".ime_7").text(ime6);
      let ime5 =  $(".ime_5").text();
      $(".ime_6").text(ime5);
      let ime4 =  $(".ime_4").text();
      $(".ime_5").text(ime4);
      let ime3 =  $(".ime_3").text();
      $(".ime_4").text(ime3);
      let ime2 =  $(".ime_2").text();
      $(".ime_3").text(ime2);
      let ime1 =  $(".ime_1").text();
      $(".ime_2").text(ime1);
      $(".ime_1").text(pi);
      let prezime9 =  $(".prezime_9").text();
      $(".ime_10").text(prezime9);
      let prezime8 =  $(".prezime_8").text();
      $(".prezime_9").text(prezime8);
      let prezime7 =  $(".prezime_7").text();
      $(".prezime_8").text(prezime7);
      let prezime6 =  $(".prezime_6").text();
      $(".prezime_7").text(prezime6);
      let prezime5 =  $(".prezime_5").text();
      $(".prezime_6").text(prezime5);
      let prezime4 =  $(".prezime_4").text();
      $(".prezime_5").text(prezime4);
      let prezime3 =  $(".prezime_3").text();
      $(".prezime_4").text(prezime3);
      let prezime2 =  $(".prezime_2").text();
      $(".prezime_3").text(prezime2);
      let prezime1 =  $(".prezime_1").text();
      $(".prezime_2").text(prezime1);
      $(".prezime_1").text(pp);
      let poeni9 =  $(".poeni_9").text();
      $(".poeni_10").text(poeni9);
      let poeni8 =  $(".poeni_8").text();
      $(".poeni_9").text(poeni8);
      let poeni7 =  $(".poeni_7").text();
      $(".poeni_8").text(poeni7);
      let poeni6 =  $(".poeni_6").text();
      $(".poeni_7").text(poeni6);
      let poeni5 =  $(".poeni_5").text();
      $(".poeni_6").text(poeni5);
      let poeni4 =  $(".poeni_4").text();
      $(".poeni_5").text(poeni4);
      let poeni3 =  $(".poeni_3").text();
      $(".poeni_4").text(poeni3);
      let poeni2 =  $(".poeni_2").text();
      $(".poeni_3").text(poeni2);
      let poeni1 =  $(".poeni_1").text();
      $(".poeni_2").text(poeni1);
      $(".poeni_1").text(p);
      ucitaj();
      return;
      }
    }
   }
   if ($(".poeni_2").is(':empty')) { 
    $(".ime_2").text(pi);
    $(".prezime_2").text(pp);
    $(".poeni_2").text(p);
    ucitaj();
    return;
}
   if(p >= $(".poeni_2").text()){
     if(p > $(".poeni_2").text()){
      let ime9 =  $(".ime_9").text();
      $(".ime_10").text(ime9);
      let ime8 =  $(".ime_8").text();
      $(".ime_9").text(ime8);
      let ime7 =  $(".ime_7").text();
      $(".ime_8").text(ime7);
      let ime6 =  $(".ime_6").text();
      $(".ime_7").text(ime6);
      let ime5 =  $(".ime_5").text();
      $(".ime_6").text(ime5);
      let ime4 =  $(".ime_4").text();
      $(".ime_5").text(ime4);
      let ime3 =  $(".ime_3").text();
      $(".ime_4").text(ime3);
      let ime2 =  $(".ime_2").text();
      $(".ime_3").text(ime2);
      $(".ime_2").text(pi);
      let prezime9 =  $(".prezime_9").text();
      $(".ime_10").text(prezime9);
      let prezime8 =  $(".prezime_8").text();
      $(".prezime_9").text(prezime8);
      let prezime7 =  $(".prezime_7").text();
      $(".prezime_8").text(prezime7);
      let prezime6 =  $(".prezime_6").text();
      $(".prezime_7").text(prezime6);
      let prezime5 =  $(".prezime_5").text();
      $(".prezime_6").text(prezime5);
      let prezime4 =  $(".prezime_4").text();
      $(".prezime_5").text(prezime4);
      let prezime3 =  $(".prezime_3").text();
      $(".prezime_4").text(prezime3);
      let prezime2 =  $(".prezime_2").text();
      $(".prezime_3").text(prezime2);
      $(".prezime_2").text(pp);
      let poeni9 =  $(".poeni_9").text();
      $(".poeni_10").text(poeni9);
      let poeni8 =  $(".poeni_8").text();
      $(".poeni_9").text(poeni8);
      let poeni7 =  $(".poeni_7").text();
      $(".poeni_8").text(poeni7);
      let poeni6 =  $(".poeni_6").text();
      $(".poeni_7").text(poeni6);
      let poeni5 =  $(".poeni_5").text();
      $(".poeni_6").text(poeni5);
      let poeni4 =  $(".poeni_4").text();
      $(".poeni_5").text(poeni4);
      let poeni3 =  $(".poeni_3").text();
      $(".poeni_4").text(poeni3);
      let poeni2 =  $(".poeni_2").text();
      $(".poeni_3").text(poeni2);
      $(".poeni_2").text(p);
      ucitaj();
      return;
     }
    let ime2 = $(".ime_2").text();
    let proveraRedosleda = pi.localeCompare(ime2);
    if(proveraRedosleda<0){
      let ime9 =  $(".ime_9").text();
      $(".ime_10").text(ime9);
      let ime8 =  $(".ime_8").text();
      $(".ime_9").text(ime8);
      let ime7 =  $(".ime_7").text();
      $(".ime_8").text(ime7);
      let ime6 =  $(".ime_6").text();
      $(".ime_7").text(ime6);
      let ime5 =  $(".ime_5").text();
      $(".ime_6").text(ime5);
      let ime4 =  $(".ime_4").text();
      $(".ime_5").text(ime4);
      let ime3 =  $(".ime_3").text();
      $(".ime_4").text(ime3);
      let ime2 =  $(".ime_2").text();
      $(".ime_3").text(ime2);
      $(".ime_2").text(pi);
      let prezime9 =  $(".prezime_9").text();
      $(".ime_10").text(prezime9);
      let prezime8 =  $(".prezime_8").text();
      $(".prezime_9").text(prezime8);
      let prezime7 =  $(".prezime_7").text();
      $(".prezime_8").text(prezime7);
      let prezime6 =  $(".prezime_6").text();
      $(".prezime_7").text(prezime6);
      let prezime5 =  $(".prezime_5").text();
      $(".prezime_6").text(prezime5);
      let prezime4 =  $(".prezime_4").text();
      $(".prezime_5").text(prezime4);
      let prezime3 =  $(".prezime_3").text();
      $(".prezime_4").text(prezime3);
      let prezime2 =  $(".prezime_2").text();
      $(".prezime_3").text(prezime2);
      $(".prezime_2").text(pp);
      let poeni9 =  $(".poeni_9").text();
      $(".poeni_10").text(poeni9);
      let poeni8 =  $(".poeni_8").text();
      $(".poeni_9").text(poeni8);
      let poeni7 =  $(".poeni_7").text();
      $(".poeni_8").text(poeni7);
      let poeni6 =  $(".poeni_6").text();
      $(".poeni_7").text(poeni6);
      let poeni5 =  $(".poeni_5").text();
      $(".poeni_6").text(poeni5);
      let poeni4 =  $(".poeni_4").text();
      $(".poeni_5").text(poeni4);
      let poeni3 =  $(".poeni_3").text();
      $(".poeni_4").text(poeni3);
      let poeni2 =  $(".poeni_2").text();
      $(".poeni_3").text(poeni2);
      $(".poeni_2").text(p);
      ucitaj();
      return;
   }
   else if(proveraRedosleda==0){
    let prezime2 = $(".prezime_2").text();
    let proveraRedosledaP = pp.localeCompare(prezime2);
    if(proveraRedosledaP<=0){
      let ime9 =  $(".ime_9").text();
      $(".ime_10").text(ime9);
      let ime8 =  $(".ime_8").text();
      $(".ime_9").text(ime8);
      let ime7 =  $(".ime_7").text();
      $(".ime_8").text(ime7);
      let ime6 =  $(".ime_6").text();
      $(".ime_7").text(ime6);
      let ime5 =  $(".ime_5").text();
      $(".ime_6").text(ime5);
      let ime4 =  $(".ime_4").text();
      $(".ime_5").text(ime4);
      let ime3 =  $(".ime_3").text();
      $(".ime_4").text(ime3);
      let ime2 =  $(".ime_2").text();
      $(".ime_3").text(ime2);
      $(".ime_2").text(pi);
      let prezime9 =  $(".prezime_9").text();
      $(".ime_10").text(prezime9);
      let prezime8 =  $(".prezime_8").text();
      $(".prezime_9").text(prezime8);
      let prezime7 =  $(".prezime_7").text();
      $(".prezime_8").text(prezime7);
      let prezime6 =  $(".prezime_6").text();
      $(".prezime_7").text(prezime6);
      let prezime5 =  $(".prezime_5").text();
      $(".prezime_6").text(prezime5);
      let prezime4 =  $(".prezime_4").text();
      $(".prezime_5").text(prezime4);
      let prezime3 =  $(".prezime_3").text();
      $(".prezime_4").text(prezime3);
      let prezime2 =  $(".prezime_2").text();
      $(".prezime_3").text(prezime2);
      $(".prezime_2").text(pp);
      let poeni9 =  $(".poeni_9").text();
      $(".poeni_10").text(poeni9);
      let poeni8 =  $(".poeni_8").text();
      $(".poeni_9").text(poeni8);
      let poeni7 =  $(".poeni_7").text();
      $(".poeni_8").text(poeni7);
      let poeni6 =  $(".poeni_6").text();
      $(".poeni_7").text(poeni6);
      let poeni5 =  $(".poeni_5").text();
      $(".poeni_6").text(poeni5);
      let poeni4 =  $(".poeni_4").text();
      $(".poeni_5").text(poeni4);
      let poeni3 =  $(".poeni_3").text();
      $(".poeni_4").text(poeni3);
      let poeni2 =  $(".poeni_2").text();
      $(".poeni_3").text(poeni2);
      $(".poeni_2").text(p);
      ucitaj();
      return;
    }
  }
}
if ($(".poeni_3").is(':empty')) { 
  $(".ime_3").text(pi);
  $(".prezime_3").text(pp);
  $(".poeni_3").text(p);
  ucitaj();
  return;
}
   if(p >= $(".poeni_3").text()){
     if(p > $(".poeni_3").text()){
      let ime9 =  $(".ime_9").text();
      $(".ime_10").text(ime9);
      let ime8 =  $(".ime_8").text();
      $(".ime_9").text(ime8);
      let ime7 =  $(".ime_7").text();
      $(".ime_8").text(ime7);
      let ime6 =  $(".ime_6").text();
      $(".ime_7").text(ime6);
      let ime5 =  $(".ime_5").text();
      $(".ime_6").text(ime5);
      let ime4 =  $(".ime_4").text();
      $(".ime_5").text(ime4);
      let ime3 =  $(".ime_3").text();
      $(".ime_4").text(ime3);
      $(".ime_3").text(pi);
      let prezime9 =  $(".prezime_9").text();
      $(".ime_10").text(prezime9);
      let prezime8 =  $(".prezime_8").text();
      $(".prezime_9").text(prezime8);
      let prezime7 =  $(".prezime_7").text();
      $(".prezime_8").text(prezime7);
      let prezime6 =  $(".prezime_6").text();
      $(".prezime_7").text(prezime6);
      let prezime5 =  $(".prezime_5").text();
      $(".prezime_6").text(prezime5);
      let prezime4 =  $(".prezime_4").text();
      $(".prezime_5").text(prezime4);
      let prezime3 =  $(".prezime_3").text();
      $(".prezime_4").text(prezime3);
      $(".prezime_3").text(pp);
      let poeni9 =  $(".poeni_9").text();
      $(".poeni_10").text(poeni9);
      let poeni8 =  $(".poeni_8").text();
      $(".poeni_9").text(poeni8);
      let poeni7 =  $(".poeni_7").text();
      $(".poeni_8").text(poeni7);
      let poeni6 =  $(".poeni_6").text();
      $(".poeni_7").text(poeni6);
      let poeni5 =  $(".poeni_5").text();
      $(".poeni_6").text(poeni5);
      let poeni4 =  $(".poeni_4").text();
      $(".poeni_5").text(poeni4);
      let poeni3 =  $(".poeni_3").text();
      $(".poeni_4").text(poeni3);
      $(".poeni_3").text(p);
     ucitaj();
      return;
     }
    let ime3 = $(".ime_3").text();
    let proveraRedosleda = pi.localeCompare(ime3);
    if(proveraRedosleda<0){
      let ime9 =  $(".ime_9").text();
      $(".ime_10").text(ime9);
      let ime8 =  $(".ime_8").text();
      $(".ime_9").text(ime8);
      let ime7 =  $(".ime_7").text();
      $(".ime_8").text(ime7);
      let ime6 =  $(".ime_6").text();
      $(".ime_7").text(ime6);
      let ime5 =  $(".ime_5").text();
      $(".ime_6").text(ime5);
      let ime4 =  $(".ime_4").text();
      $(".ime_5").text(ime4);
      let ime3 =  $(".ime_3").text();
      $(".ime_4").text(ime3);
      $(".ime_3").text(pi);
      let prezime9 =  $(".prezime_9").text();
      $(".ime_10").text(prezime9);
      let prezime8 =  $(".prezime_8").text();
      $(".prezime_9").text(prezime8);
      let prezime7 =  $(".prezime_7").text();
      $(".prezime_8").text(prezime7);
      let prezime6 =  $(".prezime_6").text();
      $(".prezime_7").text(prezime6);
      let prezime5 =  $(".prezime_5").text();
      $(".prezime_6").text(prezime5);
      let prezime4 =  $(".prezime_4").text();
      $(".prezime_5").text(prezime4);
      let prezime3 =  $(".prezime_3").text();
      $(".prezime_4").text(prezime3);
      $(".prezime_3").text(pp);
      let poeni9 =  $(".poeni_9").text();
      $(".poeni_10").text(poeni9);
      let poeni8 =  $(".poeni_8").text();
      $(".poeni_9").text(poeni8);
      let poeni7 =  $(".poeni_7").text();
      $(".poeni_8").text(poeni7);
      let poeni6 =  $(".poeni_6").text();
      $(".poeni_7").text(poeni6);
      let poeni5 =  $(".poeni_5").text();
      $(".poeni_6").text(poeni5);
      let poeni4 =  $(".poeni_4").text();
      $(".poeni_5").text(poeni4);
      let poeni3 =  $(".poeni_3").text();
      $(".poeni_4").text(poeni3);
      $(".poeni_3").text(p);
      ucitaj();
      return;
   }
   else if(proveraRedosleda==0){
    let prezime3 = $(".prezime_3").text();
    let proveraRedosledaP = pp.localeCompare(prezime3);
    if(proveraRedosledaP<=0){
      let ime9 =  $(".ime_9").text();
      $(".ime_10").text(ime9);
      let ime8 =  $(".ime_8").text();
      $(".ime_9").text(ime8);
      let ime7 =  $(".ime_7").text();
      $(".ime_8").text(ime7);
      let ime6 =  $(".ime_6").text();
      $(".ime_7").text(ime6);
      let ime5 =  $(".ime_5").text();
      $(".ime_6").text(ime5);
      let ime4 =  $(".ime_4").text();
      $(".ime_5").text(ime4);
      let ime3 =  $(".ime_3").text();
      $(".ime_4").text(ime3);
      $(".ime_3").text(pi);
      let prezime9 =  $(".prezime_9").text();
      $(".ime_10").text(prezime9);
      let prezime8 =  $(".prezime_8").text();
      $(".prezime_9").text(prezime8);
      let prezime7 =  $(".prezime_7").text();
      $(".prezime_8").text(prezime7);
      let prezime6 =  $(".prezime_6").text();
      $(".prezime_7").text(prezime6);
      let prezime5 =  $(".prezime_5").text();
      $(".prezime_6").text(prezime5);
      let prezime4 =  $(".prezime_4").text();
      $(".prezime_5").text(prezime4);
      let prezime3 =  $(".prezime_3").text();
      $(".prezime_4").text(prezime3);
      $(".prezime_3").text(pp);
      let poeni9 =  $(".poeni_9").text();
      $(".poeni_10").text(poeni9);
      let poeni8 =  $(".poeni_8").text();
      $(".poeni_9").text(poeni8);
      let poeni7 =  $(".poeni_7").text();
      $(".poeni_8").text(poeni7);
      let poeni6 =  $(".poeni_6").text();
      $(".poeni_7").text(poeni6);
      let poeni5 =  $(".poeni_5").text();
      $(".poeni_6").text(poeni5);
      let poeni4 =  $(".poeni_4").text();
      $(".poeni_5").text(poeni4);
      let poeni3 =  $(".poeni_3").text();
      $(".poeni_4").text(poeni3);
      $(".poeni_3").text(p);
      ucitaj();
      return;
    }
  }
}
if ($(".poeni_4").is(':empty')) { 
  $(".ime_4").text(pi);
  $(".prezime_4").text(pp);
  $(".poeni_4").text(p);
  ucitaj();
  return;
}
  if(p >= $(".poeni_4").text()){
    if(p > $(".poeni_4").text()){
      let ime9 =  $(".ime_9").text();
      $(".ime_10").text(ime9);
      let ime8 =  $(".ime_8").text();
      $(".ime_9").text(ime8);
      let ime7 =  $(".ime_7").text();
      $(".ime_8").text(ime7);
      let ime6 =  $(".ime_6").text();
      $(".ime_7").text(ime6);
      let ime5 =  $(".ime_5").text();
      $(".ime_6").text(ime5);
      let ime4 =  $(".ime_4").text();
      $(".ime_5").text(ime4);
      $(".ime_4").text(pi);
      let prezime9 =  $(".prezime_9").text();
      $(".ime_10").text(prezime9);
      let prezime8 =  $(".prezime_8").text();
      $(".prezime_9").text(prezime8);
      let prezime7 =  $(".prezime_7").text();
      $(".prezime_8").text(prezime7);
      let prezime6 =  $(".prezime_6").text();
      $(".prezime_7").text(prezime6);
      let prezime5 =  $(".prezime_5").text();
      $(".prezime_6").text(prezime5);
      let prezime4 =  $(".prezime_4").text();
      $(".prezime_5").text(prezime4);
      $(".prezime_4").text(pp);
      let poeni9 =  $(".poeni_9").text();
      $(".poeni_10").text(poeni9);
      let poeni8 =  $(".poeni_8").text();
      $(".poeni_9").text(poeni8);
      let poeni7 =  $(".poeni_7").text();
      $(".poeni_8").text(poeni7);
      let poeni6 =  $(".poeni_6").text();
      $(".poeni_7").text(poeni6);
      let poeni5 =  $(".poeni_5").text();
      $(".poeni_6").text(poeni5);
      let poeni4 =  $(".poeni_4").text();
      $(".poeni_5").text(poeni4);
      $(".poeni_4").text(p);
      ucitaj();
      return;
    }
    let ime4 = $(".ime_4").text();
    let proveraRedosleda = pi.localeCompare(ime4);
    if(proveraRedosleda<0){
      let ime9 =  $(".ime_9").text();
      $(".ime_10").text(ime9);
      let ime8 =  $(".ime_8").text();
      $(".ime_9").text(ime8);
      let ime7 =  $(".ime_7").text();
      $(".ime_8").text(ime7);
      let ime6 =  $(".ime_6").text();
      $(".ime_7").text(ime6);
      let ime5 =  $(".ime_5").text();
      $(".ime_6").text(ime5);
      let ime4 =  $(".ime_4").text();
      $(".ime_5").text(ime4);
      $(".ime_4").text(pi);
      let prezime9 =  $(".prezime_9").text();
      $(".ime_10").text(prezime9);
      let prezime8 =  $(".prezime_8").text();
      $(".prezime_9").text(prezime8);
      let prezime7 =  $(".prezime_7").text();
      $(".prezime_8").text(prezime7);
      let prezime6 =  $(".prezime_6").text();
      $(".prezime_7").text(prezime6);
      let prezime5 =  $(".prezime_5").text();
      $(".prezime_6").text(prezime5);
      let prezime4 =  $(".prezime_4").text();
      $(".prezime_5").text(prezime4);
      $(".prezime_4").text(pp);
      let poeni9 =  $(".poeni_9").text();
      $(".poeni_10").text(poeni9);
      let poeni8 =  $(".poeni_8").text();
      $(".poeni_9").text(poeni8);
      let poeni7 =  $(".poeni_7").text();
      $(".poeni_8").text(poeni7);
      let poeni6 =  $(".poeni_6").text();
      $(".poeni_7").text(poeni6);
      let poeni5 =  $(".poeni_5").text();
      $(".poeni_6").text(poeni5);
      let poeni4 =  $(".poeni_4").text();
      $(".poeni_5").text(poeni4);
      $(".poeni_4").text(p);
      ucitaj();
      return;
   }
   else if(proveraRedosleda==0){
    let prezime4 = $(".prezime_4").text();
    let proveraRedosledaP = pp.localeCompare(prezime4);
    if(proveraRedosledaP<=0){
      let ime9 =  $(".ime_9").text();
      $(".ime_10").text(ime9);
      let ime8 =  $(".ime_8").text();
      $(".ime_9").text(ime8);
      let ime7 =  $(".ime_7").text();
      $(".ime_8").text(ime7);
      let ime6 =  $(".ime_6").text();
      $(".ime_7").text(ime6);
      let ime5 =  $(".ime_5").text();
      $(".ime_6").text(ime5);
      let ime4 =  $(".ime_4").text();
      $(".ime_5").text(ime4);
      $(".ime_4").text(pi);
      let prezime9 =  $(".prezime_9").text();
      $(".ime_10").text(prezime9);
      let prezime8 =  $(".prezime_8").text();
      $(".prezime_9").text(prezime8);
      let prezime7 =  $(".prezime_7").text();
      $(".prezime_8").text(prezime7);
      let prezime6 =  $(".prezime_6").text();
      $(".prezime_7").text(prezime6);
      let prezime5 =  $(".prezime_5").text();
      $(".prezime_6").text(prezime5);
      let prezime4 =  $(".prezime_4").text();
      $(".prezime_5").text(prezime4);
      $(".prezime_4").text(pp);
      let poeni9 =  $(".poeni_9").text();
      $(".poeni_10").text(poeni9);
      let poeni8 =  $(".poeni_8").text();
      $(".poeni_9").text(poeni8);
      let poeni7 =  $(".poeni_7").text();
      $(".poeni_8").text(poeni7);
      let poeni6 =  $(".poeni_6").text();
      $(".poeni_7").text(poeni6);
      let poeni5 =  $(".poeni_5").text();
      $(".poeni_6").text(poeni5);
      let poeni4 =  $(".poeni_4").text();
      $(".poeni_5").text(poeni4);
      $(".poeni_4").text(p);
      ucitaj();
      return;
    }
  }
}
if ($(".poeni_5").is(':empty')) { 
  localStorage.clear();
  $(".ime_5").text(pi);
  $(".prezime_5").text(pp);
  $(".poeni_5").text(p);
  ucitaj();
  return;
}
  if(p >= $(".poeni_5").text()){
    if(p > $(".poeni_5").text()){
      let ime9 =  $(".ime_9").text();
      $(".ime_10").text(ime9);
      let ime8 =  $(".ime_8").text();
      $(".ime_9").text(ime8);
      let ime7 =  $(".ime_7").text();
      $(".ime_8").text(ime7);
      let ime6 =  $(".ime_6").text();
      $(".ime_7").text(ime6);
      let ime5 =  $(".ime_5").text();
      $(".ime_6").text(ime5);
      $(".ime_5").text(pi);
      let prezime9 =  $(".prezime_9").text();
      $(".ime_10").text(prezime9);
      let prezime8 =  $(".prezime_8").text();
      $(".prezime_9").text(prezime8);
      let prezime7 =  $(".prezime_7").text();
      $(".prezime_8").text(prezime7);
      let prezime6 =  $(".prezime_6").text();
      $(".prezime_7").text(prezime6);
      let prezime5 =  $(".prezime_5").text();
      $(".prezime_6").text(prezime5);
      $(".prezime_5").text(pp);
      let poeni9 =  $(".poeni_9").text();
      $(".poeni_10").text(poeni9);
      let poeni8 =  $(".poeni_8").text();
      $(".poeni_9").text(poeni8);
      let poeni7 =  $(".poeni_7").text();
      $(".poeni_8").text(poeni7);
      let poeni6 =  $(".poeni_6").text();
      $(".poeni_7").text(poeni6);
      let poeni5 =  $(".poeni_5").text();
      $(".poeni_6").text(poeni5);
      $(".poeni_5").text(p);
      ucitaj();
      return;
    }
    let ime5 = $(".ime_5").text();
    let proveraRedosleda = pi.localeCompare(ime5);
    if(proveraRedosleda<0){
      let ime9 =  $(".ime_9").text();
      $(".ime_10").text(ime9);
      let ime8 =  $(".ime_8").text();
      $(".ime_9").text(ime8);
      let ime7 =  $(".ime_7").text();
      $(".ime_8").text(ime7);
      let ime6 =  $(".ime_6").text();
      $(".ime_7").text(ime6);
      let ime5 =  $(".ime_5").text();
      $(".ime_6").text(ime5);
      $(".ime_5").text(pi);
      let prezime9 =  $(".prezime_9").text();
      $(".ime_10").text(prezime9);
      let prezime8 =  $(".prezime_8").text();
      $(".prezime_9").text(prezime8);
      let prezime7 =  $(".prezime_7").text();
      $(".prezime_8").text(prezime7);
      let prezime6 =  $(".prezime_6").text();
      $(".prezime_7").text(prezime6);
      let prezime5 =  $(".prezime_5").text();
      $(".prezime_6").text(prezime5);
      $(".prezime_5").text(pp);
      let poeni9 =  $(".poeni_9").text();
      $(".poeni_10").text(poeni9);
      let poeni8 =  $(".poeni_8").text();
      $(".poeni_9").text(poeni8);
      let poeni7 =  $(".poeni_7").text();
      $(".poeni_8").text(poeni7);
      let poeni6 =  $(".poeni_6").text();
      $(".poeni_7").text(poeni6);
      let poeni5 =  $(".poeni_5").text();
      $(".poeni_6").text(poeni5);
      $(".poeni_5").text(p);
      ucitaj();
      return;
   }
   else if(proveraRedosleda==0){
    let prezime5 = $(".prezime_5").text();
    let proveraRedosledaP = pp.localeCompare(prezime5);
    if(proveraRedosledaP<=0){     
    let ime9 =  $(".ime_9").text();
    $(".ime_10").text(ime9);
    let ime8 =  $(".ime_8").text();
    $(".ime_9").text(ime8);
    let ime7 =  $(".ime_7").text();
    $(".ime_8").text(ime7);
    let ime6 =  $(".ime_6").text();
    $(".ime_7").text(ime6);
    let ime5 =  $(".ime_5").text();
    $(".ime_6").text(ime5);
    $(".ime_5").text(pi);
    let prezime9 =  $(".prezime_9").text();
    $(".ime_10").text(prezime9);
    let prezime8 =  $(".prezime_8").text();
    $(".prezime_9").text(prezime8);
    let prezime7 =  $(".prezime_7").text();
    $(".prezime_8").text(prezime7);
    let prezime6 =  $(".prezime_6").text();
    $(".prezime_7").text(prezime6);
    let prezime5 =  $(".prezime_5").text();
    $(".prezime_6").text(prezime5);
    $(".prezime_5").text(pp);
    let poeni9 =  $(".poeni_9").text();
    $(".poeni_10").text(poeni9);
    let poeni8 =  $(".poeni_8").text();
    $(".poeni_9").text(poeni8);
    let poeni7 =  $(".poeni_7").text();
    $(".poeni_8").text(poeni7);
    let poeni6 =  $(".poeni_6").text();
    $(".poeni_7").text(poeni6);
    let poeni5 =  $(".poeni_5").text();
    $(".poeni_6").text(poeni5);
    $(".poeni_5").text(p);
    ucitaj();
    return;
  }
  }
  }
  if ($(".poeni_6").is(':empty')) { 
    $(".ime_6").text(pi);
    $(".prezime_6").text(pp);
    $(".poeni_6").text(p);
    ucitaj();
    return;
}
 if(p >= $(".poeni_6").text()){
   if(p > $(".poeni_6").text()){
    let ime9 =  $(".ime_9").text();
    $(".ime_10").text(ime9);
    let ime8 =  $(".ime_8").text();
    $(".ime_9").text(ime8);
    let ime7 =  $(".ime_7").text();
    $(".ime_8").text(ime7);
    let ime6 =  $(".ime_6").text();
    $(".ime_7").text(ime6);
    $(".ime_6").text(pi);
    let prezime9 =  $(".prezime_9").text();
    $(".ime_10").text(prezime9);
    let prezime8 =  $(".prezime_8").text();
    $(".prezime_9").text(prezime8);
    let prezime7 =  $(".prezime_7").text();
    $(".prezime_8").text(prezime7);
    let prezime6 =  $(".prezime_6").text();
    $(".prezime_7").text(prezime6);
    $(".prezime_6").text(pp);
    let poeni9 =  $(".poeni_9").text();
    $(".poeni_10").text(poeni9);
    let poeni8 =  $(".poeni_8").text();
    $(".poeni_9").text(poeni8);
    let poeni7 =  $(".poeni_7").text();
    $(".poeni_8").text(poeni7);
    let poeni6 =  $(".poeni_6").text();
    $(".poeni_7").text(poeni6);
    $(".poeni_6").text(p);
    ucitaj();
    return;
   }
  let ime6 = $(".ime_6").text();
  let proveraRedosleda = pi.localeCompare(ime6);
  if(proveraRedosleda<0){
    let ime9 =  $(".ime_9").text();
    $(".ime_10").text(ime9);
    let ime8 =  $(".ime_8").text();
    $(".ime_9").text(ime8);
    let ime7 =  $(".ime_7").text();
    $(".ime_8").text(ime7);
    let ime6 =  $(".ime_6").text();
    $(".ime_7").text(ime6);
    $(".ime_6").text(pi);
    let prezime9 =  $(".prezime_9").text();
    $(".ime_10").text(prezime9);
    let prezime8 =  $(".prezime_8").text();
    $(".prezime_9").text(prezime8);
    let prezime7 =  $(".prezime_7").text();
    $(".prezime_8").text(prezime7);
    let prezime6 =  $(".prezime_6").text();
    $(".prezime_7").text(prezime6);
    $(".prezime_6").text(pp);
    let poeni9 =  $(".poeni_9").text();
    $(".poeni_10").text(poeni9);
    let poeni8 =  $(".poeni_8").text();
    $(".poeni_9").text(poeni8);
    let poeni7 =  $(".poeni_7").text();
    $(".poeni_8").text(poeni7);
    let poeni6 =  $(".poeni_6").text();
    $(".poeni_7").text(poeni6);
    $(".poeni_6").text(p);
    ucitaj();
    return;
 }
 else if(proveraRedosleda==0){
  let prezime6 = $(".prezime_6").text();
  let proveraRedosledaP = pp.localeCompare(prezime6);
  if(proveraRedosledaP<=0){
    let ime9 =  $(".ime_9").text();
    $(".ime_10").text(ime9);
    let ime8 =  $(".ime_8").text();
    $(".ime_9").text(ime8);
    let ime7 =  $(".ime_7").text();
    $(".ime_8").text(ime7);
    let ime6 =  $(".ime_6").text();
    $(".ime_7").text(ime6);
    $(".ime_6").text(pi);
    let prezime9 =  $(".prezime_9").text();
    $(".ime_10").text(prezime9);
    let prezime8 =  $(".prezime_8").text();
    $(".prezime_9").text(prezime8);
    let prezime7 =  $(".prezime_7").text();
    $(".prezime_8").text(prezime7);
    let prezime6 =  $(".prezime_6").text();
    $(".prezime_7").text(prezime6);
    $(".prezime_6").text(pp);
    let poeni9 =  $(".poeni_9").text();
    $(".poeni_10").text(poeni9);
    let poeni8 =  $(".poeni_8").text();
    $(".poeni_9").text(poeni8);
    let poeni7 =  $(".poeni_7").text();
    $(".poeni_8").text(poeni7);
    let poeni6 =  $(".poeni_6").text();
    $(".poeni_7").text(poeni6);
    $(".poeni_6").text(p);
    ucitaj();
    return;
  }
}
}
if ($(".poeni_7").is(':empty')) { 
  localStorage.clear();
  $(".ime_7").text(pi);
  $(".prezime_7").text(pp);
  $(".poeni_7").text(p);
  ucitaj();
  return;
}
  if(p >= $(".poeni_7").text()){
    if(p > $(".poeni_7").text()){
      let ime9 =  $(".ime_9").text();
      $(".ime_10").text(ime9);
      let ime8 =  $(".ime_8").text();
      $(".ime_9").text(ime8);
      let ime7 =  $(".ime_7").text();
      $(".ime_8").text(ime7);
      $(".ime_7").text(pi);
      let prezime9 =  $(".prezime_9").text();
      $(".ime_10").text(prezime9);
      let prezime8 =  $(".prezime_8").text();
      $(".prezime_9").text(prezime8);
      let prezime7 =  $(".prezime_7").text();
      $(".prezime_8").text(prezime7);
      $(".prezime_7").text(pp);
      let poeni9 =  $(".poeni_9").text();
      $(".poeni_10").text(poeni9);
      let poeni8 =  $(".poeni_8").text();
      $(".poeni_9").text(poeni8);
      let poeni7 =  $(".poeni_7").text();
      $(".poeni_8").text(poeni7);
      $(".poeni_7").text(p);
      ucitaj();
      return;
    }
    let ime7 = $(".ime_7").text();
    let proveraRedosleda = pi.localeCompare(ime7);
    if(proveraRedosleda<0){
      let ime9 =  $(".ime_9").text();
      $(".ime_10").text(ime9);
      let ime8 =  $(".ime_8").text();
      $(".ime_9").text(ime8);
      let ime7 =  $(".ime_7").text();
      $(".ime_8").text(ime7);
      $(".ime_7").text(pi);
      let prezime9 =  $(".prezime_9").text();
      $(".ime_10").text(prezime9);
      let prezime8 =  $(".prezime_8").text();
      $(".prezime_9").text(prezime8);
      let prezime7 =  $(".prezime_7").text();
      $(".prezime_8").text(prezime7);
      $(".prezime_7").text(pp);
      let poeni9 =  $(".poeni_9").text();
      $(".poeni_10").text(poeni9);
      let poeni8 =  $(".poeni_8").text();
      $(".poeni_9").text(poeni8);
      let poeni7 =  $(".poeni_7").text();
      $(".poeni_8").text(poeni7);
      $(".poeni_7").text(p);
      ucitaj();
      return;
   }
   else if(proveraRedosleda==0){
    let prezime7 = $(".prezime_7").text();
    let proveraRedosledaP = pp.localeCompare(prezime7);
    if(proveraRedosledaP<=0){
      let ime9 =  $(".ime_9").text();
      $(".ime_10").text(ime9);
      let ime8 =  $(".ime_8").text();
      $(".ime_9").text(ime8);
      let ime7 =  $(".ime_7").text();
      $(".ime_8").text(ime7);
      $(".ime_7").text(pi);
      let prezime9 =  $(".prezime_9").text();
      $(".ime_10").text(prezime9);
      let prezime8 =  $(".prezime_8").text();
      $(".prezime_9").text(prezime8);
      let prezime7 =  $(".prezime_7").text();
      $(".prezime_8").text(prezime7);
      $(".prezime_7").text(pp);
      let poeni9 =  $(".poeni_9").text();
      $(".poeni_10").text(poeni9);
      let poeni8 =  $(".poeni_8").text();
      $(".poeni_9").text(poeni8);
      let poeni7 =  $(".poeni_7").text();
      $(".poeni_8").text(poeni7);
      $(".poeni_7").text(p);
      ucitaj();
      return;
    }
  }
  }
  if ($(".poeni_8").is(':empty')) { 
    localStorage.clear();
    $(".ime_8").text(pi);
    $(".prezime_8").text(pp);
    $(".poeni_8").text(p);
    ucitaj();
    return;
}
  if(p >= $(".poeni_8").text()){
    if(p > $(".poeni_8").text()){
      let ime9 =  $(".ime_9").text();
      $(".ime_10").text(ime9);
      let ime8 =  $(".ime_8").text();
      $(".ime_9").text(ime8);
      $(".ime_8").text(pi);
      let prezime9 =  $(".prezime_9").text();
      $(".ime_10").text(prezime9);
      let prezime8 =  $(".prezime_8").text();
      $(".prezime_9").text(prezime8);
      $(".prezime_8").text(pp);
      let poeni9 =  $(".poeni_9").text();
      $(".poeni_10").text(poeni9);
      let poeni8 =  $(".poeni_8").text();
      $(".poeni_9").text(poeni8);
      $(".poeni_8").text(p);
      ucitaj();
      return;
    }
    let ime8 = $(".ime_8").text();
    let proveraRedosleda = pi.localeCompare(ime8);
    if(proveraRedosleda<0){
      let ime9 =  $(".ime_9").text();
      $(".ime_10").text(ime9);
      let ime8 =  $(".ime_8").text();
      $(".ime_9").text(ime8);
      $(".ime_8").text(pi);
      let prezime9 =  $(".prezime_9").text();
      $(".ime_10").text(prezime9);
      let prezime8 =  $(".prezime_8").text();
      $(".prezime_9").text(prezime8);
      $(".prezime_8").text(pp);
      let poeni9 =  $(".poeni_9").text();
      $(".poeni_10").text(poeni9);
      let poeni8 =  $(".poeni_8").text();
      $(".poeni_9").text(poeni8);
      $(".poeni_8").text(p);
      ucitaj();
      return;
   }
   else if(proveraRedosleda==0){
    let prezime8 = $(".prezime_8").text();
    let proveraRedosledaP = pp.localeCompare(prezime8);
    if(proveraRedosledaP<=0){
      let ime9 =  $(".ime_9").text();
      $(".ime_10").text(ime9);
      let ime8 =  $(".ime_8").text();
      $(".ime_9").text(ime8);
      $(".ime_8").text(pi);
      let prezime9 =  $(".prezime_9").text();
      $(".ime_10").text(prezime9);
      let prezime8 =  $(".prezime_8").text();
      $(".prezime_9").text(prezime8);
      $(".prezime_8").text(pp);
      let poeni9 =  $(".poeni_9").text();
      $(".poeni_10").text(poeni9);
      let poeni8 =  $(".poeni_8").text();
      $(".poeni_9").text(poeni8);
      $(".poeni_8").text(p);
      ucitaj();
      return;
    }
  }
  }
  if(p >= $(".poeni_9").text()){
    if(p > $(".poeni_9").text()){
      let ime9 =  $(".ime_9").text();
      $(".ime_10").text(ime9);
      $(".ime_9").text(pi);
      let prezime9 =  $(".prezime_9").text();
      $(".ime_10").text(prezime9);
      $(".prezime_9").text(pp);
      let poeni9 =  $(".poeni_9").text();
      $(".poeni_10").text(poeni9);
      $(".poeni_9").text(p);
      ucitaj();
      return;
    }
    let ime9 = $(".ime_9").text();
    let proveraRedosleda = pi.localeCompare(ime9);
    if(proveraRedosleda<0){
      let ime9 =  $(".ime_9").text();
      $(".ime_10").text(ime9);
      $(".ime_9").text(pi);
      let prezime9 =  $(".prezime_9").text();
      $(".ime_10").text(prezime9);
      $(".prezime_9").text(pp);
      let poeni9 =  $(".poeni_9").text();
      $(".poeni_10").text(poeni9);
      $(".poeni_9").text(p);
      ucitaj();
      return;
   }
   else if(proveraRedosleda==0){
    let prezime9 = $(".prezime_9").text();
    let proveraRedosledaP = pp.localeCompare(prezime9);
    if(proveraRedosledaP<=0){
      let ime9 =  $(".ime_9").text();
      $(".ime_10").text(ime9);
      $(".ime_9").text(pi);
      let prezime9 =  $(".prezime_9").text();
      $(".ime_10").text(prezime9);
      $(".prezime_9").text(pp);
      let poeni9 =  $(".poeni_9").text();
      $(".poeni_10").text(poeni9);
      $(".poeni_9").text(p);
      ucitaj();
      return;
    }
  }
  }
  if ($(".poeni_10").is(':empty')) { 
    localStorage.clear();
    $(".ime_10").text(pi);
    $(".prezime_10").text(pp);
    $(".poeni_10").text(p);
    ucitaj();
    return;
}
  if(p >= $(".poeni_10").text()){
    if(p > $(".poeni_10").text()){
      $(".ime_10").text(pi);
      $(".prezime_10").text(pp);
      $(".poeni_10").text(p);
      ucitaj();
      return;
    }
    let ime10 = $(".ime_10").text();
    let proveraRedosleda = pi.localeCompare(ime10);
    if(proveraRedosleda<0){
      $(".ime_10").text(pi);
      $(".prezime_10").text(pp);
      $(".poeni_10").text(p);
      ucitaj();
      return;
   }
   else if(proveraRedosleda==0){
    let prezime10 = $(".prezime_10").text();
    let proveraRedosledaP = pp.localeCompare(prezime10);
    if(proveraRedosledaP<=0){
        $(".ime_10").text(pi);
        $(".prezime_10").text(pp);
        $(".poeni_10").text(p);
        ucitaj();
        return;
  }
}
}
}
