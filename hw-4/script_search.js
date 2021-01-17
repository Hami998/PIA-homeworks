//funckije za pretragu filmova
function findMovie(){
    let value = $("#movie_name").val();
    let check_value = value.toLowerCase();
    //alert(check_value);
    let movie_value = $(".list_dot");
    //alert(movie_value.length);
    //alert(movie_value.eq(0).text());
    for(let i=0; i< movie_value.length; i++){
      //alert(movie_value.eq(i).text());
      let check_movie_value = movie_value.eq(i).text().toLowerCase();
      let position = check_movie_value.search(check_value);
      //alert(check_movie_value);
      //alert(position);
      if(position == 0){
        movie_value.eq(i).show();  
      }
      else{
        movie_value.eq(i).hide();
      }
    }
}