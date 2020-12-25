//funkcije za cuvanje podataka
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
  if(window.localStorage.length==0){
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
  let tekst = localStorage.getItem("rezultati_iz_tabele");
  let tabelaRezultata = JSON.parse(tekst);
  $(".ime_1").text(tabelaRezultata.prvi_igrac[0]);
  $(".prezime_1").text(tabelaRezultata.prvi_igrac[1]);
  $(".poeni_1").text(tabelaRezultata.prvi_igrac[2]);
  $(".ime_2").text(tabelaRezultata.drugi_igrac[0]);
  $(".prezime_2").text(tabelaRezultata.drugi_igrac[1]);
  $(".poeni_2").text(tabelaRezultata.drugi_igrac[2]);
  $(".ime_3").text(tabelaRezultata.treci_igrac[0]);
  $(".prezime_3").text(tabelaRezultata.treci_igrac[1]);
  $(".poeni_3").text(tabelaRezultata.treci_igrac[2]);
  $(".ime_4").text(tabelaRezultata.cetvrti_igrac[0]);
  $(".prezime_4").text(tabelaRezultata.cetvrti_igrac[1]);
  $(".poeni_4").text(tabelaRezultata.cetvrti_igrac[2]);
  $(".ime_5").text(tabelaRezultata.peti_igrac[0]);
  $(".prezime_5").text(tabelaRezultata.peti_igrac[1]);
  $(".poeni_5").text(tabelaRezultata.peti_igrac[2]);
  $(".ime_6").text(tabelaRezultata.sesti_igrac[0]);
  $(".prezime_6").text(tabelaRezultata.sesti_igrac[1]);
  $(".poeni_6").text(tabelaRezultata.sesti_igrac[2]);
  $(".ime_7").text(tabelaRezultata.sedmi_igrac[0]);
  $(".prezime_7").text(tabelaRezultata.sedmi_igrac[1]);
  $(".poeni_7").text(tabelaRezultata.sedmi_igrac[2]);
  $(".ime_8").text(tabelaRezultata.osmi_igrac[0]);
  $(".prezime_8").text(tabelaRezultata.osmi_igrac[1]);
  $(".poeni_8").text(tabelaRezultata.osmi_igrac[2]);
  $(".ime_9").text(tabelaRezultata.deveti_igrac[0]);
  $(".prezime_9").text(tabelaRezultata.deveti_igrac[1]);
  $(".poeni_9").text(tabelaRezultata.deveti_igrac[2]);
  $(".ime_10").text(tabelaRezultata.deseti_igrac[0]);
  $(".prezime_10").text(tabelaRezultata.deseti_igrac[1]);
  $(".poeni_10").text(tabelaRezultata.deseti_igrac[2]);
}
//funkcije za prelazak sa jedne strane na drugu
let imeIgraca = "";
let prezimeIgraca = "";
function sacuvajPodatke(){
  imeIgraca = $("#ime").val();
  prezimeIgraca = $("#prezime").val();
  let obrazac = /^[A-Z]{1}[a-z]*$/;
  let proveraIme = obrazac.exec(imeIgraca);
  let proveraPrezime = obrazac.exec(prezimeIgraca);
  if(proveraIme && proveraPrezime){
    localStorage.setItem("ime", imeIgraca);
    localStorage.setItem("prezime", prezimeIgraca);
    alert("Uspešno ste se prijavili, da nastavite dalje, pritisnite dugme: Pravila igre");
    return;
  }
  else{
    alert("Uneti podaci nisu validni, popunite sva polja");
  }
}
function zapocniKviz() {
  imeIgraca = localStorage.getItem("ime");
  prezimeIgraca = localStorage.getItem("prezime");
  if (imeIgraca && prezimeIgraca) {
    location.replace("stranica_sa_pitanjima.html");
  }
  else {
    alert("Potrebno je popuniti formu");
  }
}
function vratiNazad() {
let provera = document.getElementById("ime");
  if (!provera.checkValidity()) {
    location.replace("index.html");
  }
  else {
    location.replace("index.html");
  }
}
function vratiForma() {
  location.replace("forma.html");
}
function vratiPocetna() {
  location.replace("index.html");
}
function otvoriPravilaIgre() {
  location.replace("pravila_igre.html");
}
function otvoriFormu() {
  location.replace("forma.html");
}
function otvoriRezultate() {
  location.replace("tabela.html"); 
}
function otvoriNovaPitanja(){
  location.replace("stranica_sa_pitanjima_dopuna.html"); 
}
function otvoriMojRezultat(){
  location.replace("rezultat.html"); 
}
function vratiNaPocetnu(){
  localStorage.removeItem("poeni");
  localStorage.removeItem("poeni1");
  localStorage.removeItem("ime");
  localStorage.removeItem("prezime");
  location.replace("index.html");
}
function prikaziMojRezultat(){
  poeni1 = localStorage.getItem("poeni");
  poeni2 = localStorage.getItem("poeni1");
  ime = localStorage.getItem("ime");
  prezime = localStorage.getItem("prezime");
  if(!poeni2){
    poeni = poeni1;
    $(".tekst").text(ime + " " + prezime + " : " + poeni);
  }
  else{
    poeni = parseInt(poeni1) + parseInt(poeni2);
    $(".tekst").text(ime + " " + prezime + " : " + poeni);
  }
}
//funkcija za brojac 
let vreme = 20;
let interval = null;
function pokreniTajmer(){
  if(vreme<=9){
    $(".tajmer").css("display", "inline");
    $(".tajmer").text("00:0" + vreme);
    vreme--;
  }
  else{
    $(".tajmer").css("display", "inline");
    $(".tajmer").text("00:" + vreme);
    vreme--;
  }
  if(vreme>4){
    $(".tajmer").css("background-color", "black");
  }
  else{
    $(".tajmer").css("background-color", "red");
  }
  if(vreme == -1){
    zaustaviTajmer("zaustavi");
    sledecePitanje1();
  }
}
function zaustaviTajmer(stanje){
  if(stanje ==="pokreni"){
    interval = setInterval(pokreniTajmer, 1000);
    return;
  }
  else if (stanje ==="zaustavi"){
    clearInterval(interval);
    vreme = 20;
    return;
  }
}
// funkcije za rad sa pitanjima
function sledecePitanje1(){
  let brojac = $(".brojac").text();
  let strana = $(".sledeca_strana").text();
  if(brojac<=10){
    if(strana == 1){
      ucitajNovoPitanje();
      zaustaviTajmer("pokreni");
    }
    else if(strana == 2){
      prikaziOdgovor();
      zaustaviTajmer("pokreni");
    }
  }
}
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
function sledecePitanje(){
  let brojac = $(".brojac").text();
  if(brojac<=10){
    zaustaviTajmer("zaustavi");
    ucitajNovoPitanje();
    zaustaviTajmer("pokreni");
    return;
  }
}
function ucitajNovoPitanje() {
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
      if (this.id == 'odgovor_drugi'){
        zaustaviTajmer("zaustavi");
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
        localStorage.setItem("poeni", poeni);
        setTimeout(() => {
        ucitajNovoPitanje();
        }, 1000);
        zaustaviTajmer("pokreni");
        return;
      }
    else if(this.id == 'sledeci'){
      zaustaviTajmer("zaustavi")
      localStorage.setItem("poeni", poeni);
      setTimeout(() => {
      ucitajNovoPitanje();
      }, 500);
      zaustaviTajmer("pokreni");
      return;
    }
    else {
      zaustaviTajmer("zaustavi");
      $("#odgovor_prvi").attr("disabled", "disabled");
      $("#odgovor_drugi").attr("disabled", "disabled");
      $("#odgovor_treci").attr("disabled", "disabled");
      $("#odgovor_cetvrti").attr("disabled", "disabled");
      $("#odgovor_prvi").attr("class", "btn-danger");
      $("#odgovor_drugi").attr("class", "btn-success");
      $("#odgovor_treci").attr("class", "btn-danger");
      $("#odgovor_cetvrti").attr("class", "btn-danger");
      localStorage.setItem("poeni", poeni);
      setTimeout(() => {
      ucitajNovoPitanje();
      }, 1000);
      zaustaviTajmer("pokreni");
      return;
    }
  });
  });
  }
  else if (brojac == 2) {
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
        if(this.id == 'odgovor_prvi'){
          zaustaviTajmer("zaustavi");
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
          localStorage.setItem("poeni", poeni);
          setTimeout(() => {
            ucitajNovoPitanje();
          }, 1000);
          zaustaviTajmer("pokreni");
          return;
        }
        else if(this.id == 'sledeci'){
          zaustaviTajmer("zaustavi")
          $("#odgovor_prvi").attr("disabled", "disabled");
          $("#odgovor_drugi").attr("disabled", "disabled");
          $("#odgovor_treci").attr("disabled", "disabled");
          $("#odgovor_cetvrti").attr("disabled", "disabled");
          localStorage.setItem("poeni", poeni);
          setTimeout(() => {
            ucitajNovoPitanje();
          }, 500);
          zaustaviTajmer("pokreni");
          return;
        }
        else{
          zaustaviTajmer("zaustavi");
          $("#odgovor_prvi").attr("disabled", "disabled");
          $("#odgovor_drugi").attr("disabled", "disabled");
          $("#odgovor_treci").attr("disabled", "disabled");
          $("#odgovor_cetvrti").attr("disabled", "disabled");
          $("#odgovor_prvi").attr("class", "btn-success");
          $("#odgovor_drugi").attr("class", "btn-danger");
          $("#odgovor_treci").attr("class", "btn-danger");
          $("#odgovor_cetvrti").attr("class", "btn-danger");
          localStorage.setItem("poeni", poeni);
          setTimeout(() => {
            ucitajNovoPitanje();
          }, 1000);
          zaustaviTajmer("pokreni");
            return;
        }
      });
    });
  }
  else if (brojac == 3) {
    $.getJSON('pitanja.json', (data) => {
      $(".tekst").text(data.pitanje_3);
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
      $("#odgovor_prvi").html(data.odgovori_3[0]);
      $("#odgovor_drugi").html(data.odgovori_3[1]);
      $("#odgovor_treci").html(data.odgovori_3[2]);
      $("#odgovor_cetvrti").html(data.odgovori_3[3]);
      $("#odgovor_prvi").css("display", "inline");
      $("#odgovor_drugi").css("display", "inline");
      $("#odgovor_treci").css("display", "inline");
      $("#odgovor_cetvrti").css("display", "inline");
      $("button").removeClass("odgovor_2");
      $("button").addClass("odgovor_3");
      $(".odgovor_3").click(function () {
        if(this.id == 'odgovor_treci'){
          zaustaviTajmer("zaustavi");
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
          localStorage.setItem("poeni", poeni);
          setTimeout(() => {
            ucitajNovoPitanje();
          }, 1000);
          zaustaviTajmer("pokreni");
          return;
        }
        else if(this.id == 'sledeci'){
          zaustaviTajmer("zaustavi")
          $("#odgovor_prvi").attr("disabled", "disabled");
          $("#odgovor_drugi").attr("disabled", "disabled");
          $("#odgovor_treci").attr("disabled", "disabled");
          $("#odgovor_cetvrti").attr("disabled", "disabled");
          localStorage.setItem("poeni", poeni);
          setTimeout(() => {
            ucitajNovoPitanje();
          }, 500);
          zaustaviTajmer("pokreni");
          return;
        }
        else{
          zaustaviTajmer("zaustavi");
          $("#odgovor_prvi").attr("disabled", "disabled");
          $("#odgovor_drugi").attr("disabled", "disabled");
          $("#odgovor_treci").attr("disabled", "disabled");
          $("#odgovor_cetvrti").attr("disabled", "disabled");
          $("#odgovor_prvi").attr("class", "btn-danger");
          $("#odgovor_drugi").attr("class", "btn-danger");
          $("#odgovor_treci").attr("class", "btn-success");
          $("#odgovor_cetvrti").attr("class", "btn-danger");
          localStorage.setItem("poeni", poeni);
          setTimeout(() => {
            ucitajNovoPitanje();
          }, 1000);
          zaustaviTajmer("pokreni");
        return;
        }
      });
    });
  }
  else if (brojac == 4) {
    $.getJSON('pitanja.json', (data) => {
      $(".tekst").text(data.pitanje_4);
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
      $("#odgovor_prvi").html(data.odgovori_4[0]);
      $("#odgovor_drugi").html(data.odgovori_4[1]);
      $("#odgovor_treci").html(data.odgovori_4[2]);
      $("#odgovor_cetvrti").html(data.odgovori_4[3]);
      $("#odgovor_prvi").css("display", "inline");
      $("#odgovor_drugi").css("display", "inline");
      $("#odgovor_treci").css("display", "inline");
      $("#odgovor_cetvrti").css("display", "inline");
      $("button").removeClass("odgovor_3");
      $("button").addClass("odgovor_4");
      $(".odgovor_4").click(function () {
        if(this.id == 'odgovor_cetvrti'){
          zaustaviTajmer("zaustavi");
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
          localStorage.setItem("poeni", poeni);
          setTimeout(() => {
            ucitajNovoPitanje();
          }, 1000);
          zaustaviTajmer("pokreni");
          return;
        }
        else if(this.id == 'sledeci'){
          zaustaviTajmer("zaustavi")
          $("#odgovor_prvi").attr("disabled", "disabled");
          $("#odgovor_drugi").attr("disabled", "disabled");
          $("#odgovor_treci").attr("disabled", "disabled");
          $("#odgovor_cetvrti").attr("disabled", "disabled");
          localStorage.setItem("poeni", poeni);
          setTimeout(() => {
            ucitajNovoPitanje();
          }, 500);
          zaustaviTajmer("pokreni");
          return;
        }
        else {
          zaustaviTajmer("zaustavi");
          $("#odgovor_prvi").attr("disabled", "disabled");
          $("#odgovor_drugi").attr("disabled", "disabled");
          $("#odgovor_treci").attr("disabled", "disabled");
          $("#odgovor_cetvrti").attr("disabled", "disabled");
          $("#odgovor_prvi").attr("class", "btn-danger");
          $("#odgovor_drugi").attr("class", "btn-danger");
          $("#odgovor_treci").attr("class", "btn-danger");
          $("#odgovor_cetvrti").attr("class", "btn-success");
          localStorage.setItem("poeni", poeni);
          setTimeout(() => {
            ucitajNovoPitanje();
          }, 1000);
          zaustaviTajmer("pokreni");
          return;
        }
      });
    });
  }
  else if (brojac == 5) {
    $.getJSON('pitanja.json', (data) => {
      $(".tekst").text(data.pitanje_5);
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
        if(this.id == 'odgovor_drugi'){
          zaustaviTajmer("zaustavi");
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
          localStorage.setItem("poeni", poeni);
          setTimeout(() => {
            ucitajNovoPitanje();
          }, 1000);
          zaustaviTajmer("pokreni");
          return;
        }
        else if(this.id == 'sledeci'){
          zaustaviTajmer("zaustavi")
          $("#odgovor_prvi").attr("disabled", "disabled");
          $("#odgovor_drugi").attr("disabled", "disabled");
          $("#odgovor_treci").attr("disabled", "disabled");
          $("#odgovor_cetvrti").attr("disabled", "disabled");
          localStorage.setItem("poeni", poeni);
          setTimeout(() => {
            ucitajNovoPitanje();
          }, 500);
          zaustaviTajmer("pokreni");
          return;
        }
        else{
          zaustaviTajmer("zaustavi");
          setTimeout(() => {
            ucitajNovoPitanje();
          }, 1000);
          $("#odgovor_prvi").attr("disabled", "disabled");
          $("#odgovor_drugi").attr("disabled", "disabled");
          $("#odgovor_treci").attr("disabled", "disabled");
          $("#odgovor_cetvrti").attr("disabled", "disabled");
          $("#odgovor_prvi").attr("class", "btn-danger");
          $("#odgovor_drugi").attr("class", "btn-success");
          $("#odgovor_treci").attr("class", "btn-danger");
          $("#odgovor_cetvrti").attr("class", "btn-danger");
          localStorage.setItem("poeni", poeni);
          setTimeout(() => {
            ucitajNovoPitanje();
          }, 1000);
          zaustaviTajmer("pokreni");
          return;
        }
      });
    });
  }
  else if (brojac == 6) {
    $.getJSON('pitanja.json', (data) => {
      $(".tekst").text(data.pitanje_6);
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
      $("#odgovor_prvi").html(data.odgovori_6[0]);
      $("#odgovor_drugi").html(data.odgovori_6[1]);
      $("#odgovor_treci").html(data.odgovori_6[2]);
      $("#odgovor_cetvrti").html(data.odgovori_6[3]);
      $("#odgovor_prvi").css("display", "inline");
      $("#odgovor_drugi").css("display", "inline");
      $("#odgovor_treci").css("display", "inline");
      $("#odgovor_cetvrti").css("display", "inline");
      $("button").removeClass("odgovor_5");
      $("button").addClass("odgovor_6");
      $(".odgovor_6").click(function () {
        if(this.id == 'odgovor_prvi'){
          zaustaviTajmer("zaustavi");
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
          localStorage.setItem("poeni", poeni);
          setTimeout(() => {
            ucitajNovoPitanje();
          }, 1000);
          zaustaviTajmer("pokreni");
          return;
        }
        else if(this.id == 'sledeci'){
          zaustaviTajmer("zaustavi")
          $("#odgovor_prvi").attr("disabled", "disabled");
          $("#odgovor_drugi").attr("disabled", "disabled");
          $("#odgovor_treci").attr("disabled", "disabled");
          $("#odgovor_cetvrti").attr("disabled", "disabled");
          localStorage.setItem("poeni", poeni);
          setTimeout(() => {
            ucitajNovoPitanje();
          }, 1000);
          zaustaviTajmer("pokreni");
          return;
        }
        else{
          zaustaviTajmer("zaustavi");
          localStorage.setItem("poeni", poeni);
          setTimeout(() => {
            ucitajNovoPitanje();
          }, 1000);
          $("#odgovor_prvi").attr("disabled", "disabled");
          $("#odgovor_drugi").attr("disabled", "disabled");
          $("#odgovor_treci").attr("disabled", "disabled");
          $("#odgovor_cetvrti").attr("disabled", "disabled");
          $("#odgovor_prvi").attr("class", "btn-success");
          $("#odgovor_drugi").attr("class", "btn-danger");
          $("#odgovor_treci").attr("class", "btn-danger");
          $("#odgovor_cetvrti").attr("class", "btn-danger");
          localStorage.setItem("poeni", poeni);
          setTimeout(() => {
            ucitajNovoPitanje();
          }, 1000);
          zaustaviTajmer("pokreni");
          return;
        }
      });
    });
  }
  else if (brojac == 7) {
    $.getJSON('pitanja.json', (data) => {
      $(".tekst").text(data.pitanje_7);
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
      $("#odgovor_prvi").html(data.odgovori_7[0]);
      $("#odgovor_drugi").html(data.odgovori_7[1]);
      $("#odgovor_treci").html(data.odgovori_7[2]);
      $("#odgovor_cetvrti").html(data.odgovori_7[3]);
      $("#odgovor_prvi").css("display", "inline");
      $("#odgovor_drugi").css("display", "inline");
      $("#odgovor_treci").css("display", "inline");
      $("#odgovor_cetvrti").css("display", "inline");
      $("button").removeClass("odgovor_6");
      $("button").addClass("odgovor_7");
      $(".odgovor_7").click(function () {
        if(this.id == 'odgovor_cetvrti'){
          zaustaviTajmer("zaustavi");
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
          localStorage.setItem("poeni", poeni);
          setTimeout(() => {
          otvoriNovaPitanja();
          }, 1000);
          zaustaviTajmer("pokreni");
          return;
        }
        else if(this.id == 'sledeci'){
          zaustaviTajmer("zaustavi")
          $("#odgovor_prvi").attr("disabled", "disabled");
          $("#odgovor_drugi").attr("disabled", "disabled");
          $("#odgovor_treci").attr("disabled", "disabled");
          $("#odgovor_cetvrti").attr("disabled", "disabled");
          localStorage.setItem("poeni", poeni);
          setTimeout(() => {
            otvoriNovaPitanja();
          }, 500);
          zaustaviTajmer("pokreni");
          return;
        }
        else{
          zaustaviTajmer("zaustavi");
          $("#odgovor_prvi").attr("disabled", "disabled");
          $("#odgovor_drugi").attr("disabled", "disabled");
          $("#odgovor_treci").attr("disabled", "disabled");
          $("#odgovor_cetvrti").attr("disabled", "disabled");
          $("#odgovor_prvi").attr("class", "btn-danger");
          $("#odgovor_drugi").attr("class", "btn-danger");
          $("#odgovor_treci").attr("class", "btn-danger");
          $("#odgovor_cetvrti").attr("class", "btn-success");
          localStorage.setItem("poeni", poeni);
          setTimeout(() => {
          otvoriNovaPitanja();
          }, 1000);
          zaustaviTajmer("pokreni");
          return;
        }
      });
    });
  }
}
let poeni1 = 0;
function prikaziOdgovor(){
  let brojac = $(".brojac").text();
    if (brojac == 8) {
      zaustaviTajmer("pokreni");
      $.getJSON('pitanja.json', (data) => {
        $(".tekst").text(data.pitanje_8);
        $(".brojac").text("9");
        $("#potvrdi_odgovor").css("display", "inline");
        $("#odgovor_na_dopunu").css("display", "inline");
        $(".sledece_pitanje").css("display", "inline");
        $(".izadji_iz_kviza").css("display", "inline");
        $("button").addClass("odgovor_8");
        $(".odgovor_8").click(function () {
          if (this.id== 'potvrdi_odgovor'){
            zaustaviTajmer("zaustavi");
            $("#potvrdi_odgovor").css("display", "none");
            $("#odgovor_na_dopunu").attr("disabled", true);
            $("#tacan_odgovor").css("display", "inline");
            $("#tacan_odgovor").attr("disabled", true);
            $("#tacan_odgovor").attr("class", "btn-success");
            $("#tacan_odgovor").text("Kazahstan");
            $('#odgovor_na_dopunu').css('textTransform', 'capitalize');
            let odgovor_8 = $("#odgovor_na_dopunu").val();
            if(odgovor_8 === "Kazahstan"){
              poeni1 = poeni1 + poeni_8;
              poeni_8 = 0;
              localStorage.setItem("poeni1", poeni);
            }
            setTimeout(() => {
              prikaziOdgovor();
            }, 1000);
            zaustaviTajmer("pokreni");
            return;
            }
          else if(this.id == 'sledeci'){
            zaustaviTajmer("zaustavi");
            localStorage.setItem("poeni1", poeni);
            setTimeout(() => {
              prikaziOdgovor();
            }, 1000);
            zaustaviTajmer("pokreni");
            return;
          }
          else {
            localStorage.setItem("poeni1", poeni);
            setTimeout(() => {
              prikaziOdgovor();
            }, 1000);
            zaustaviTajmer("pokreni");
            return;
          }
        });
      });
    }
    else if (brojac == 9) {
      $.getJSON('pitanja.json', (data) => {
        $(".tekst").text(data.pitanje_9);
        $(".brojac").text("10");
        $(".sledece_pitanje").css("display", "inline");
        $(".izadji_iz_kviza").css("display", "inline");
        $("#odgovor_na_dopunu").attr("disabled", false);
        $("#odgovor_na_dopunu").css("display", "inline");
        $("#potvrdi_odgovor").css("display", "inline");
        $("#tacan_odgovor").css("display", "none");
        $("#odgovor_na_dopunu").val('');
        $("#odgovor_na_dopunu").css("display", "inline");
        $("#potvrdi_odgovor").css("display", "inline");
        $("button").removeClass("odgovor_8");
        $("button").addClass("odgovor_9");
        $(".odgovor_9").click(function () {
            if(this.id =="potvrdi_odgovor"){
              zaustaviTajmer("zaustavi");
              $("#potvrdi_odgovor").css("display", "none");
              $("#odgovor_na_dopunu").attr("disabled", true);
              $("#tacan_odgovor").css("display", "inline");
              $("#tacan_odgovor").attr("disabled", true);
              $("#tacan_odgovor").attr("class", "btn-success");
              $("#tacan_odgovor").text("Moskva");
              $('#odgovor_na_dopunu').css('textTransform', 'capitalize');
              let odgovor_9 = $("#odgovor_na_dopunu").val();
              if(odgovor_9 === "Moskva"){
                poeni1 = poeni1 + poeni_9;
                poeni_9 = 0;
                localStorage.setItem("poeni1", poeni);
                setTimeout(() => {
                  prikaziOdgovor();
                }, 1000);
                zaustaviTajmer("pokreni");
                return;
              }
              else if(this.id =="sledeci"){
                zapocniTajmer("zaustavi");
                localStorage.setItem("poeni1", poeni);
                setTimeout(() => {
                  prikaziOdgovor();
                }, 1000);
                zaustaviTajmer("pokreni");
                return;
              }
              else{
                localStorage.setItem("poeni1", poeni);
                setTimeout(() => {
                  prikaziOdgovor();
                }, 1000);
                zaustaviTajmer("pokreni");
                return;
              }
            }
          });
        });
      }
    else if (brojac == 10) {
      $.getJSON('pitanja.json', (data) => {
        $(".tekst").text(data.pitanje_10);
        $(".brojac").text("11");
        $(".sledece_pitanje").css("display", "inline");
        $(".izadji_iz_kviza").css("display", "inline");
        $("#odgovor_na_dopunu").css("display", "inline");
        $("#potvrdi_odgovor").css("display", "inline");
        $("#odgovor_na_dopunu").attr("disabled", false);
        $("#tacan_odgovor").css("display", "none");
        $("#odgovor_na_dopunu").val('');
        $("#odgovor_na_dopunu").css("display", "inline");
        $("#potvrdi_odgovor").css("display", "inline");
        $("button").removeClass("odgovor_9");
        $("button").addClass("odgovor_10");
        $(".odgovor_10").click(function () {
          zaustaviTajmer("zaustavi");
          $("#potvrdi_odgovor").css("display", "none");
          $("#odgovor_na_dopunu").attr("disabled", true);
          $("#tacan_odgovor").css("display", "inline");
          $("#tacan_odgovor").attr("disabled", true);
          $("#tacan_odgovor").attr("class", "btn-success");
          $("#tacan_odgovor").text("13");
          let odgovor_10 = $("#odgovor_na_dopunu").val();
          if(odgovor_10 == "13"){
            poeni1 = poeni1 + poeni_10;
            poeni_10 = 0;
          localStorage.setItem("poeni1", poeni1);
            setTimeout(() => {
              otvoriMojRezultat();
            }, 1000);
            return;
          }
          else if(this.id =="sledeci"){
          localStorage.setItem("poeni1", poeni1);
          setTimeout(() => {
              otvoriMojRezultat();
            }, 1000);
            return;
          }
        else{
          localStorage.setItem("poeni1", poeni1);
          setTimeout(() => {
              otvoriMojRezultat();
          }, 1000);
          return;
        }
      });
    });
  }
}
// funkcije koje odredjuju da li je igrac u tabeli
function provera(){
  poeni2 = localStorage.getItem("poeni");
  poeni3 = localStorage.getItem("poeni1");
  poeni4 = parseInt(poeni2);
  poeni5 = parseInt(poeni3);
  poeni = poeni4 + poeni5;
  ime = localStorage.getItem("ime");
  prezime = localStorage.getItem("prezime");
  if ($(".poeni_1").is(':empty')) { 
    $(".ime_1").text(ime);
    $(".prezime_1").text(prezime);
    $(".poeni_1").text(poeni);
    $(".ime_1").css("background-color", "black");
    $(".prezime_1").css("background-color", "black");
    $(".poeni_1").css("background-color", "black");
    $(".rd_1").css("background-color", "#080808");
    ucitaj();
    return;
  }
  if (poeni >= $(".poeni_1").text()){
    if(poeni > $(".poeni_1").text()){
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
      $(".ime_1").text(ime);
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
      $(".prezime_1").text(prezime);
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
      $(".poeni_1").text(poeni);
      $(".ime_1").css("background-color", "black");
      $(".prezime_1").css("background-color", "black");
      $(".poeni_1").css("background-color", "black");
      $(".rd_1").css("background-color", "#080808");
      ucitaj();
      return;
    }
    let ime1 = $(".ime_1").text();
    let proveraRedosleda = ime.localeCompare(ime1);
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
      $(".ime_1").text(ime);
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
      $(".prezime_1").text(prezime);
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
      $(".poeni_1").text(poeni);
      ucitaj();
      $(".ime_1").css("background-color", "black");
      $(".prezime_1").css("background-color", "black");
      $(".poeni_1").css("background-color", "black");
      $(".rd_1").css("background-color", "#080808");
      return;
    }
    else if(proveraRedosleda==0){
      let prezime1 = $(".prezime_1").text();
      let proveraRedosledaP = prezime.localeCompare(prezime1);
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
        $(".ime_1").text(ime);
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
        $(".prezime_1").text(prezime);
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
        $(".poeni_1").text(poeni);
        $(".ime_1").css("background-color", "black");
        $(".prezime_1").css("background-color", "black");
        $(".poeni_1").css("background-color", "black");
        $(".rd_1").css("background-color", "#080808");
        ucitaj();
        return;
      }
    }
   }
   if ($(".poeni_2").is(':empty')) { 
    $(".ime_2").text(ime);
    $(".prezime_2").text(prezime);
    $(".poeni_2").text(poeni);
    $(".ime_2").css("background-color", "black");
    $(".prezime_2").css("background-color", "black");
    $(".poeni_2").css("background-color", "black");
    $(".rd_2").css("background-color", "#080808");
    ucitaj();
    return;
   }
   if(poeni >= $(".poeni_2").text()){
     if(poeni > $(".poeni_2").text()){
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
      $(".ime_2").text(ime);
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
      $(".prezime_2").text(prezime);
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
      $(".poeni_2").text(poeni);
      $(".ime_2").css("background-color", "black");
      $(".prezime_2").css("background-color", "black");
      $(".poeni_2").css("background-color", "black");
      $(".rd_2").css("background-color", "#080808");
      ucitaj();
      return;
    }
    let ime2 = $(".ime_2").text();
    let proveraRedosleda = ime.localeCompare(ime2);
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
      $(".ime_2").text(ime);
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
      $(".prezime_2").text(prezime);
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
      $(".poeni_2").text(poeni);
      $(".ime_2").css("background-color", "black");
      $(".prezime_2").css("background-color", "black");
      $(".poeni_2").css("background-color", "black");
      $(".rd_2").css("background-color", "#080808");
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
      $(".ime_2").text(ime);
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
      $(".prezime_2").text(prezime);
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
      $(".poeni_2").text(poeni);
      $(".ime_2").css("background-color", "black");
      $(".prezime_2").css("background-color", "black");
      $(".poeni_2").css("background-color", "black");
      $(".rd_2").css("background-color", "#080808");
      ucitaj();
      return;
    }
  }
}
  if ($(".poeni_3").is(':empty')) { 
    $(".ime_3").text(ime);
    $(".prezime_3").text(prezime);
    $(".poeni_3").text(poeni);
    $(".ime_3").css("background-color", "black");
    $(".prezime_3").css("background-color", "black");
    $(".poeni_3").css("background-color", "black");
    $(".rd_3").css("background-color", "#080808");
    ucitaj();
    return;
  }
    if(poeni >= $(".poeni_3").text()){
      if(poeni > $(".poeni_3").text()){
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
        $(".ime_3").text(ime);
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
        $(".prezime_3").text(prezime);
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
        $(".poeni_3").text(poeni);
        $(".ime_3").css("background-color", "black");
        $(".prezime_3").css("background-color", "black");
        $(".poeni_3").css("background-color", "black");
        $(".rd_3").css("background-color", "#080808");
        ucitaj();
        return;
      }
      let ime3 = $(".ime_3").text();
      let proveraRedosleda = ime.localeCompare(ime3);
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
        $(".ime_3").text(ime);
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
        $(".prezime_3").text(prezime);
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
        $(".poeni_3").text(poeni);
        $(".ime_3").css("background-color", "black");
        $(".prezime_3").css("background-color", "black");
        $(".poeni_3").css("background-color", "black");
        $(".rd_3").css("background-color", "#080808");
        ucitaj();
        return;
    }
    else if(proveraRedosleda==0){
    let prezime3 = $(".prezime_3").text();
    let proveraRedosledaP = prezime.localeCompare(prezime3);
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
        $(".ime_3").text(ime);
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
        $(".prezime_3").text(prezime);
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
        $(".poeni_3").text(poeni);
        $(".ime_3").css("background-color", "black");
        $(".prezime_3").css("background-color", "black");
        $(".poeni_3").css("background-color", "black");
        $(".rd_3").css("background-color", "#080808");
        ucitaj();
        return;
      }
    }
  }
  if ($(".poeni_4").is(':empty')) { 
    $(".ime_4").text(ime);
    $(".prezime_4").text(prezime);
    $(".poeni_4").text(poeni);
    $(".ime_4").css("background-color", "black");
    $(".prezime_4").css("background-color", "black");
    $(".poeni_4").css("background-color", "black");
    $(".rd_4").css("background-color", "#080808");
    ucitaj();
    return;
  }
  if(poeni >= $(".poeni_4").text()){
    if(poeni > $(".poeni_4").text()){
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
      $(".ime_4").text(ime);
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
      $(".prezime_4").text(prezime);
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
      $(".poeni_4").text(poeni);
      $(".ime_4").css("background-color", "black");
      $(".prezime_4").css("background-color", "black");
      $(".poeni_4").css("background-color", "black");
      $(".rd_4").css("background-color", "#080808");
      ucitaj();
      return;
    }
    let ime4 = $(".ime_4").text();
    let proveraRedosleda = ime.localeCompare(ime4);
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
      $(".ime_4").text(ime);
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
      $(".prezime_4").text(prezime);
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
      $(".poeni_4").text(poeni);
      $(".ime_4").css("background-color", "black");
      $(".prezime_4").css("background-color", "black");
      $(".poeni_4").css("background-color", "black");
      $(".rd_4").css("background-color", "#080808");
      ucitaj();
      return;
    }
    else if(proveraRedosleda==0){
    let prezime4 = $(".prezime_4").text();
    let proveraRedosledaP = prezime.localeCompare(prezime4);
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
      $(".ime_4").text(ime);
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
      $(".prezime_4").text(prezime);
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
      $(".poeni_4").text(poeni);
      $(".ime_4").css("background-color", "black");
      $(".prezime_4").css("background-color", "black");
      $(".poeni_4").css("background-color", "black");
      $(".rd_4").css("background-color", "#080808");
      ucitaj();
      return;
      } 
    }
  }
if ($(".poeni_5").is(':empty')) { 
  localStorage.clear();
  $(".ime_5").text(ime);
  $(".prezime_5").text(prezime);
  $(".poeni_5").text(poeni);
  $(".ime_5").css("background-color", "black");
  $(".prezime_5").css("background-color", "black");
  $(".poeni_5").css("background-color", "black");
  $(".rd_5").css("background-color", "#080808");
  ucitaj();
  return;
}
if(poeni >= $(".poeni_5").text()){
  if(poeni > $(".poeni_5").text()){
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
    $(".ime_5").text(ime);
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
    $(".prezime_5").text(prezime);
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
    $(".poeni_5").text(poeni);
    $(".ime_5").css("background-color", "black");
    $(".prezime_5").css("background-color", "black");
    $(".poeni_5").css("background-color", "black");
    $(".rd_5").css("background-color", "#080808");
    ucitaj();
    return;
  }
  let ime5 = $(".ime_5").text();
  let proveraRedosleda = ime.localeCompare(ime5);
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
    $(".ime_5").text(ime);
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
    $(".prezime_5").text(prezime);
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
    $(".poeni_5").text(poeni);
    $(".ime_5").css("background-color", "black");
    $(".prezime_5").css("background-color", "black");
    $(".poeni_5").css("background-color", "black");
    $(".rd_5").css("background-color", "#080808");
    ucitaj();
    return;
  }
  else if(proveraRedosleda==0){
    let prezime5 = $(".prezime_5").text();
    let proveraRedosledaP = prezime.localeCompare(prezime5);
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
    $(".ime_5").text(ime);
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
    $(".prezime_5").text(prezime);
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
    $(".poeni_5").text(poeni);
    $(".ime_5").css("background-color", "black");
    $(".prezime_5").css("background-color", "black");
    $(".poeni_5").css("background-color", "black");
    $(".rd_5").css("background-color", "#080808");
    ucitaj();
    return;
   }
  }
}
  if ($(".poeni_6").is(':empty')) { 
    $(".ime_6").text(ime);
    $(".prezime_6").text(prezime);
    $(".poeni_6").text(poeni);
    $(".ime_6").css("background-color", "black");
    $(".prezime_6").css("background-color", "black");
    $(".poeni_6").css("background-color", "black");
    $(".rd_6").css("background-color", "#080808");
    ucitaj();
    return;
  }
  if(poeni >= $(".poeni_6").text()){
    if(poeni > $(".poeni_6").text()){
      let ime9 =  $(".ime_9").text();
      $(".ime_10").text(ime9);
      let ime8 =  $(".ime_8").text();
      $(".ime_9").text(ime8);
      let ime7 =  $(".ime_7").text();
      $(".ime_8").text(ime7);
      let ime6 =  $(".ime_6").text();
      $(".ime_7").text(ime6);
      $(".ime_6").text(ime);
      let prezime9 =  $(".prezime_9").text();
      $(".ime_10").text(prezime9);
      let prezime8 =  $(".prezime_8").text();
      $(".prezime_9").text(prezime8);
      let prezime7 =  $(".prezime_7").text();
      $(".prezime_8").text(prezime7);
      let prezime6 =  $(".prezime_6").text();
      $(".prezime_7").text(prezime6);
      $(".prezime_6").text(prezime);
      let poeni9 =  $(".poeni_9").text();
      $(".poeni_10").text(poeni9);
      let poeni8 =  $(".poeni_8").text();
      $(".poeni_9").text(poeni8);
      let poeni7 =  $(".poeni_7").text();
      $(".poeni_8").text(poeni7);
      let poeni6 =  $(".poeni_6").text();
      $(".poeni_7").text(poeni6);
      $(".poeni_6").text(poeni);
      $(".ime_6").css("background-color", "black");
      $(".prezime_6").css("background-color", "black");
      $(".poeni_6").css("background-color", "black");
      $(".rd_6").css("background-color", "#080808");
      ucitaj();
      return;
    }
    let ime6 = $(".ime_6").text();
    let proveraRedosleda = ime.localeCompare(ime6);
    if(proveraRedosleda<0){
      let ime9 =  $(".ime_9").text();
      $(".ime_10").text(ime9);
      let ime8 =  $(".ime_8").text();
      $(".ime_9").text(ime8);
      let ime7 =  $(".ime_7").text();
      $(".ime_8").text(ime7);
      let ime6 =  $(".ime_6").text();
      $(".ime_7").text(ime6);
      $(".ime_6").text(ime);
      let prezime9 =  $(".prezime_9").text();
      $(".ime_10").text(prezime9);
      let prezime8 =  $(".prezime_8").text();
      $(".prezime_9").text(prezime8);
      let prezime7 =  $(".prezime_7").text();
      $(".prezime_8").text(prezime7);
      let prezime6 =  $(".prezime_6").text();
      $(".prezime_7").text(prezime6);
      $(".prezime_6").text(prezime);
      let poeni9 =  $(".poeni_9").text();
      $(".poeni_10").text(poeni9);
      let poeni8 =  $(".poeni_8").text();
      $(".poeni_9").text(poeni8);
      let poeni7 =  $(".poeni_7").text();
      $(".poeni_8").text(poeni7);
      let poeni6 =  $(".poeni_6").text();
      $(".poeni_7").text(poeni6);
      $(".poeni_6").text(poeni);
      $(".ime_6").css("background-color", "black");
      $(".prezime_6").css("background-color", "black");
      $(".poeni_6").css("background-color", "black");
      $(".rd_6").css("background-color", "#080808");
      ucitaj();
      return;
    }
    else if(proveraRedosleda==0){
    let prezime6 = $(".prezime_6").text();
    let proveraRedosledaP = prezime.localeCompare(prezime6);
    if(proveraRedosledaP<=0){
      let ime9 =  $(".ime_9").text();
      $(".ime_10").text(ime9);
      let ime8 =  $(".ime_8").text();
      $(".ime_9").text(ime8);
      let ime7 =  $(".ime_7").text();
      $(".ime_8").text(ime7);
      let ime6 =  $(".ime_6").text();
      $(".ime_7").text(ime6);
      $(".ime_6").text(ime);
      let prezime9 =  $(".prezime_9").text();
      $(".ime_10").text(prezime9);
      let prezime8 =  $(".prezime_8").text();
      $(".prezime_9").text(prezime8);
      let prezime7 =  $(".prezime_7").text();
      $(".prezime_8").text(prezime7);
      let prezime6 =  $(".prezime_6").text();
      $(".prezime_7").text(prezime6);
      $(".prezime_6").text(prezime);
      let poeni9 =  $(".poeni_9").text();
      $(".poeni_10").text(poeni9);
      let poeni8 =  $(".poeni_8").text();
      $(".poeni_9").text(poeni8);
      let poeni7 =  $(".poeni_7").text();
      $(".poeni_8").text(poeni7);
      let poeni6 =  $(".poeni_6").text();
      $(".poeni_7").text(poeni6);
      $(".poeni_6").text(poeni);
      $(".ime_6").css("background-color", "black");
      $(".prezime_6").css("background-color", "black");
      $(".poeni_6").css("background-color", "black");
      $(".rd_6").css("background-color", "#080808");
      ucitaj();
      return;
    }
  }
  }
  if ($(".poeni_7").is(':empty')) { 
    localStorage.clear();
    $(".ime_7").text(ime);
    $(".prezime_7").text(prezime);
    $(".poeni_7").text(poeni);
    $(".ime_7").css("background-color", "black");
    $(".prezime_7").css("background-color", "black");
    $(".poeni_7").css("background-color", "black");
    $(".rd_7").css("background-color", "#080808");
    ucitaj();
    return;
  }
    if(poeni >= $(".poeni_7").text()){
      if(poeni > $(".poeni_7").text()){
        let ime9 =  $(".ime_9").text();
        $(".ime_10").text(ime9);
        let ime8 =  $(".ime_8").text();
        $(".ime_9").text(ime8);
        let ime7 =  $(".ime_7").text();
        $(".ime_8").text(ime7);
        $(".ime_7").text(ime);
        let prezime9 =  $(".prezime_9").text();
        $(".ime_10").text(prezime9);
        let prezime8 =  $(".prezime_8").text();
        $(".prezime_9").text(prezime8);
        let prezime7 =  $(".prezime_7").text();
        $(".prezime_8").text(prezime7);
        $(".prezime_7").text(prezime);
        let poeni9 =  $(".poeni_9").text();
        $(".poeni_10").text(poeni9);
        let poeni8 =  $(".poeni_8").text();
        $(".poeni_9").text(poeni8);
        let poeni7 =  $(".poeni_7").text();
        $(".poeni_8").text(poeni7);
        $(".poeni_7").text(poeni);
        $(".ime_7").css("background-color", "black");
        $(".prezime_7").css("background-color", "black");
        $(".poeni_7").css("background-color", "black");
        $(".rd_7").css("background-color", "#080808");
        ucitaj();
        return;
      }
      let ime7 = $(".ime_7").text();
      let proveraRedosleda = ime.localeCompare(ime7);
      if(proveraRedosleda<0){
        let ime9 =  $(".ime_9").text();
        $(".ime_10").text(ime9);
        let ime8 =  $(".ime_8").text();
        $(".ime_9").text(ime8);
        let ime7 =  $(".ime_7").text();
        $(".ime_8").text(ime7);
        $(".ime_7").text(ime);
        let prezime9 =  $(".prezime_9").text();
        $(".ime_10").text(prezime9);
        let prezime8 =  $(".prezime_8").text();
        $(".prezime_9").text(prezime8);
        let prezime7 =  $(".prezime_7").text();
        $(".prezime_8").text(prezime7);
        $(".prezime_7").text(prezime);
        let poeni9 =  $(".poeni_9").text();
        $(".poeni_10").text(poeni9);
        let poeni8 =  $(".poeni_8").text();
        $(".poeni_9").text(poeni8);
        let poeni7 =  $(".poeni_7").text();
        $(".poeni_8").text(poeni7);
        $(".poeni_7").text(poeni);
        $(".ime_7").css("background-color", "black");
        $(".prezime_7").css("background-color", "black");
        $(".poeni_7").css("background-color", "black");
        $(".rd_7").css("background-color", "#080808");
        ucitaj();
        return;
      }
      else if(proveraRedosleda==0){
      let prezime7 = $(".prezime_7").text();
      let proveraRedosledaP = prezime.localeCompare(prezime7);
      if(proveraRedosledaP<=0){
        let ime9 =  $(".ime_9").text();
        $(".ime_10").text(ime9);
        let ime8 =  $(".ime_8").text();
        $(".ime_9").text(ime8);
        let ime7 =  $(".ime_7").text();
        $(".ime_8").text(ime7);
        $(".ime_7").text(ime);
        let prezime9 =  $(".prezime_9").text();
        $(".ime_10").text(prezime9);
        let prezime8 =  $(".prezime_8").text();
        $(".prezime_9").text(prezime8);
        let prezime7 =  $(".prezime_7").text();
        $(".prezime_8").text(prezime7);
        $(".prezime_7").text(prezime);
        let poeni9 =  $(".poeni_9").text();
        $(".poeni_10").text(poeni9);
        let poeni8 =  $(".poeni_8").text();
        $(".poeni_9").text(poeni8);
        let poeni7 =  $(".poeni_7").text();
        $(".poeni_8").text(poeni7);
        $(".poeni_7").text(poeni);
        $(".ime_7").css("background-color", "black");
        $(".prezime_7").css("background-color", "black");
        $(".poeni_7").css("background-color", "black");
        $(".rd_7").css("background-color", "#080808");
        ucitaj();
        return;
      }
    }
  }
  if ($(".poeni_8").is(':empty')) { 
    localStorage.clear();
    $(".ime_8").text(ime);
    $(".prezime_8").text(prezime);
    $(".poeni_8").text(poeni);
    $(".ime_8").css("background-color", "black");
    $(".prezime_8").css("background-color", "black");
    $(".poeni_8").css("background-color", "black");
    $(".rd_8").css("background-color", "#080808");
    ucitaj();
    return;
}
  if(poeni >= $(".poeni_8").text()){
    if(poeni > $(".poeni_8").text()){
      let ime9 =  $(".ime_9").text();
      $(".ime_10").text(ime9);
      let ime8 =  $(".ime_8").text();
      $(".ime_9").text(ime8);
      $(".ime_8").text(ime);
      let prezime9 =  $(".prezime_9").text();
      $(".ime_10").text(prezime9);
      let prezime8 =  $(".prezime_8").text();
      $(".prezime_9").text(prezime8);
      $(".prezime_8").text(prezime);
      let poeni9 =  $(".poeni_9").text();
      $(".poeni_10").text(poeni9);
      let poeni8 =  $(".poeni_8").text();
      $(".poeni_9").text(poeni8);
      $(".poeni_8").text(poeni);
      $(".ime_8").css("background-color", "black");
      $(".prezime_8").css("background-color", "black");
      $(".poeni_8").css("background-color", "black");
      $(".rd_8").css("background-color", "#080808");
      ucitaj();
      return;
    }
    let ime8 = $(".ime_8").text();
    let proveraRedosleda = ime.localeCompare(ime8);
    if(proveraRedosleda<0){
      let ime9 =  $(".ime_9").text();
      $(".ime_10").text(ime9);
      let ime8 =  $(".ime_8").text();
      $(".ime_9").text(ime8);
      $(".ime_8").text(ime);
      let prezime9 =  $(".prezime_9").text();
      $(".ime_10").text(prezime9);
      let prezime8 =  $(".prezime_8").text();
      $(".prezime_9").text(prezime8);
      $(".prezime_8").text(prezime);
      let poeni9 =  $(".poeni_9").text();
      $(".poeni_10").text(poeni9);
      let poeni8 =  $(".poeni_8").text();
      $(".poeni_9").text(poeni8);
      $(".poeni_8").text(poeni);
      $(".ime_8").css("background-color", "black");
      $(".prezime_8").css("background-color", "black");
      $(".poeni_8").css("background-color", "black");
      $(".rd_8").css("background-color", "#080808");
      ucitaj();
      return;
    }
    else if(proveraRedosleda==0){
    let prezime8 = $(".prezime_8").text();
    let proveraRedosledaP = prezime.localeCompare(prezime8);
    if(proveraRedosledaP<=0){
      let ime9 =  $(".ime_9").text();
      $(".ime_10").text(ime9);
      let ime8 =  $(".ime_8").text();
      $(".ime_9").text(ime8);
      $(".ime_8").text(ime);
      let prezime9 =  $(".prezime_9").text();
      $(".ime_10").text(prezime9);
      let prezime8 =  $(".prezime_8").text();
      $(".prezime_9").text(prezime8);
      $(".prezime_8").text(prezime);
      let poeni9 =  $(".poeni_9").text();
      $(".poeni_10").text(poeni9);
      let poeni8 =  $(".poeni_8").text();
      $(".poeni_9").text(poeni8);
      $(".poeni_8").text(poeni);
      $(".ime_8").css("background-color", "black");
      $(".prezime_8").css("background-color", "black");
      $(".poeni_8").css("background-color", "black");
      $(".rd_8").css("background-color", "#080808");
      ucitaj();
      return;
    }
  }
}
  if ($(".poeni_9").is(':empty')) { 
    $(".ime_9").text(ime);
    $(".prezime_9").text(prezime);
    $(".poeni_9").text(poeni);
    $(".ime_9").css("background-color", "black");
    $(".prezime_9").css("background-color", "black");
    $(".poeni_9").css("background-color", "black");
    $(".rd_9").css("background-color", "#080808");
    ucitaj();
    return;
  }
  if(poeni >= $(".poeni_9").text()){
    if(poeni > $(".poeni_9").text()){
      let ime9 =  $(".ime_9").text();
      $(".ime_10").text(ime9);
      $(".ime_9").text(ime);
      let prezime9 =  $(".prezime_9").text();
      $(".ime_10").text(prezime9);
      $(".prezime_9").text(prezime);
      let poeni9 =  $(".poeni_9").text();
      $(".poeni_10").text(poeni9);
      $(".poeni_9").text(poeni);
      $(".ime_9").css("background-color", "black");
      $(".prezime_9").css("background-color", "black");
      $(".poeni_9").css("background-color", "black");
      $(".rd_9").css("background-color", "#080808");
      ucitaj();
      return;
    }
    let ime9 = $(".ime_9").text();
    let proveraRedosleda = ime.localeCompare(ime9);
    if(proveraRedosleda<0){
      let ime9 =  $(".ime_9").text();
      $(".ime_10").text(ime9);
      $(".ime_9").text(ime);
      let prezime9 =  $(".prezime_9").text();
      $(".ime_10").text(prezime9);
      $(".prezime_9").text(prezime);
      let poeni9 =  $(".poeni_9").text();
      $(".poeni_10").text(poeni9);
      $(".poeni_9").text(poeni);
      $(".ime_9").css("background-color", "black");
      $(".prezime_9").css("background-color", "black");
      $(".poeni_9").css("background-color", "black");
      $(".rd_9").css("background-color", "#080808");
      ucitaj();
      return;
    }
    else if(proveraRedosleda==0){
    let prezime9 = $(".prezime_9").text();
    let proveraRedosledaP = prezime.localeCompare(prezime9);
    if(proveraRedosledaP<=0){
      let ime9 =  $(".ime_9").text();
      $(".ime_10").text(ime9);
      $(".ime_9").text(ime);
      let prezime9 =  $(".prezime_9").text();
      $(".ime_10").text(prezime9);
      $(".prezime_9").text(prezime);
      let poeni9 =  $(".poeni_9").text();
      $(".poeni_10").text(poeni9);
      $(".poeni_9").text(poeni);
      $(".ime_9").css("background-color", "black");
      $(".prezime_9").css("background-color", "black");
      $(".poeni_9").css("background-color", "black");
      $(".rd_9").css("background-color", "#080808");
      ucitaj();
      return;
    }
  }
  }
  if ($(".poeni_10").is(':empty')) { 
    $(".ime_10").text(ime);
    $(".prezime_10").text(prezime);
    $(".poeni_10").text(poeni);
    $(".ime_10").css("background-color", "black");
    $(".prezime_10").css("background-color", "black");
    $(".poeni_10").css("background-color", "black");
    $(".rd_10").css("background-color", "#080808");
    ucitaj();
    return;
  }
  if(poeni >= $(".poeni_10").text()){
    if(poeni > $(".poeni_10").text()){
      $(".ime_10").text(ime);
      $(".prezime_10").text(prezime);
      $(".poeni_10").text(poeni);
      $(".ime_10").css("background-color", "black");
      $(".prezime_10").css("background-color", "black");
      $(".poeni_10").css("background-color", "black");
      $(".rd_10").css("background-color", "#080808");
      ucitaj();
      return;
    }
    let ime10 = $(".ime_10").text();
    let proveraRedosleda = ime.localeCompare(ime10);
    if(proveraRedosleda<0){
      $(".ime_10").text(ime);
      $(".prezime_10").text(prezime);
      $(".poeni_10").text(poeni);
      $(".ime_10").css("background-color", "black");
      $(".prezime_10").css("background-color", "black");
      $(".poeni_10").css("background-color", "black");
      $(".rd_10").css("background-color", "#080808");
      ucitaj();
      return;
    }
    else if(proveraRedosleda==0){
    let prezime10 = $(".prezime_10").text();
    let proveraRedosledaP = prezime.localeCompare(prezime10);
    if(proveraRedosledaP<=0){
      $(".ime_10").text(ime);
      $(".prezime_10").text(prezime);
      $(".poeni_10").text(poeni);
      $(".ime_10").css("background-color", "black");
      $(".prezime_10").css("background-color", "black");
      $(".poeni_10").css("background-color", "black");
      $(".rd_10").css("background-color", "#080808");
      ucitaj();
      return;
      }  
    }
  }
}
