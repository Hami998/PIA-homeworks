<?PHP
    include ("connection_database.php");
    include ("functions.php");
    $_SESSION;
    $user_connection = check_login($connected);
    $id = $_GET['id'];
    $logoff = "<button type=\"submit\" class=\"submit_log_off btn btn-success\" 
    style=\"position:absolute;top:0px;left:0px;width:100px\"> 
    <a href=\"functions.php?log_off=1\" style=\"color:white;text-decoration:none\">Log off</a></button>";
    $nick = $_SESSION['nickname'];
    $link = "";
    $add = 0;
    $query_5 = "SELECT imdb_id, title, year, date_published, genre, duration, director, writer, production_company,
    actors, description, avg_vote, votes FROM movie_list_new;";
    $result = mysqli_query($connected, $query_5);
    $query_6 = "SELECT imdbID, poster, added FROM movie_poster;";
    $result_1 = mysqli_query($connected, $query_6);

    while($row = mysqli_fetch_array($result)){  
        $row_1 = mysqli_fetch_array($result_1);
        while($row_1 = mysqli_fetch_array($result_1)){
            if (('tt' . $row_1['imdbID']) == $id)
            {
                $link = $row_1['poster'];
                $add = $row_1['added'];
                break;
            }
            else{
                continue;
            }
        } 
        if($id === $row['imdb_id']){
            $title = $row['title'];
            $year = $row['year'];
            $data_published = $row['date_published'];
            $genre = $row['genre'];
            $duration = $row['duration'];
            $director = $row['director'];
            $writer = $row['writer'];
            $production_company = $row['production_company'];
            $actors = $row['actors'];
            $description = $row['description'];
            $avg_votes = $row['avg_vote'];
            $votes = $row['votes'];

            if($_SESSION['admin'] == 1){
                $delete_movie = "<button type=\"submit\" class=\"adm_btn_l  admin_buttons btn btn-success\"> 
                <a href=\"result.php?title=". $title ."\">Delete</a></button>";
                $edit_movie = "<button type=\"submit\" class=\"adm_btn_r  admin_buttons btn btn-success\"> 
                <a href=\"edit_movie.php?movie_id=" . $id . "\">Edit</a></button>";
                $search_movie = "<button type=\"submit\" class=\"adm_btn_r  admin_buttons btn btn-success\"> 
                <a href=\"search.php\">Search</a></button>";
            }
            else{
                $search_movie = "<button type=\"submit\" class=\"btn_search btn btn-success\"> 
                <a href=\"search.php\">Search</a></button>";
            }
            echo "<div class=\"movie_title\"> <h1>" . $title . "</h1> </div>" ;      
            echo "<div class=\"container\">";
            echo "<div class=\"basic_informations\">";
            echo "<div class=\"col_info\">";
            echo "Year: " . $year . "<br>";
            echo "Date of publishing movie: " . $data_published . "<br>";
            echo "Genre: " . $genre . "<br>";
            echo "Duration: " . $duration . " <br>";
            echo "Director: " . $director . " <br>";
            echo "Writer: " . $writer . " <br>";
            echo "Production company: " . $production_company ." <br>";
            echo "Description of the movie: <br>";
            echo $description ." <br>";
            echo "</div>";
            echo "<div class=\"col_image\" style=\"background:none;\">";
            if($add === "0"){
                echo "<img src=\"" . $link . "\" >";
            }
            else{
                echo "<img src=\"movie_images/" . $link . "\" height=\"275\" width=\"175\">";
            }
            echo "</div>";
            echo "</div>";
            echo "<div class=\"rating\"\">
            <div class=\"left\"\">
            Rating of the movie: <button class=\"votes\" disabled>" . $avg_votes . "</button></br>";
            echo "Number of voters: ";
            echo $votes . " <br> ";
            echo "Your nickname is: ". $nick ."<br>";
            $user_email = $_SESSION['user_email'];
            $user_fullname = $_SESSION['user'];
            $my_rating = "";
            $display_my_rating = "";
            $query = "SELECT e_mail, title, rating FROM movie_rating;";
            $result = mysqli_query($connected, $query);
            while($row_1 = mysqli_fetch_array($result)){
                if($user_email == $row_1['e_mail'] && $title == $row_1['title']){
                    $my_rating = $row_1['rating'];
                }
            }
            if(strlen($my_rating) > 0){
               $display_my_rating = $user_fullname .", your vote is: ". $my_rating;
            }

            echo $display_my_rating . " <br> ";
            echo "<button class=\"remove_vote btn btn-success\"><a href=\"functions.php?rating=11&title_1=" . $title .
             "\">Remove vote</a></button>";
            echo "<div class=\"choose\">
            <ul class=\"list\">
            <li>Rate the movie</li>
              <ul>
                  <li class=\"list_item_5\"><a href=\"functions.php?rating=1&title_1=" . $title . "\"> 1 star </a></li>
                  <li class=\"list_item_4\"><a href=\"functions.php?rating=2&title_1=" . $title . "\"> 2 star </a></li>
                  <li class=\"list_item_3\"><a href=\"functions.php?rating=3&title_1=" . $title . "\"> 3 star </a></li>
                  <li class=\"list_item_2\"><a href=\"functions.php?rating=4&title_1=" . $title . "\"> 4 star </a></li>
                  <li class=\"list_item_1\"><a href=\"functions.php?rating=5&title_1=" . $title . "\"> 5 star </a></li>
                  <li class=\"list_item_1\"><a href=\"functions.php?rating=6&title_1=" . $title . "\"> 6 star </a></li>
                  <li class=\"list_item_1\"><a href=\"functions.php?rating=7&title_1=" . $title . "\"> 7 star </a></li>
                  <li class=\"list_item_1\"><a href=\"functions.php?rating=8&title_1=" . $title . "\"> 8 star </a></li>
                  <li class=\"list_item_1\"><a href=\"functions.php?rating=9&title_1=" . $title . "\"> 9 star </a></li>
                  <li class=\"list_item_1\"><a href=\"functions.php?rating=10&title_1=" . $title . "\"> 10 star </a></li>
              </ul>
            </ul>
            </div><br>";
            echo "</div>";
            echo " </div> ";
            echo "<div class=\"right\" style=\"display:column;flex-basis:20%;\">";
            echo "</div>";
            $array_actors = (explode(", ",$actors));
            echo "<div class=\"actors\">";
            echo "<h4>Cast overview: </h4><br>";
            foreach($array_actors as $actor){
                echo "<div  class=\"actor\">" . $actor . "</div>";
            }
            echo "</div>";
            echo "</div>";      
    }
}
?>
<!DOCTYPE html>
<html>
<head>
        <title>PIA HW - Bootstrap</title>
        <meta name="author" content="Mihailo Jacimovic" />
        <meta charset="utf-8" />
        <meta name="description" content="PHP, MySQL" />
        <meta name="keywords" content="pia, web programming, aplikacija" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="css/bootstrap.css">
        <link rel="stylesheet" href="search.css">
        <link rel="stylesheet" href="movie.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script type="text/javascript" src="script_search.js" ></script>
        <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
</head>
<body>
            <?php  echo $logoff;
            ?>

            <?php if($_SESSION['admin'] == 1){
            echo $delete_movie; 
            echo $edit_movie;
            echo $search_movie;
            }
            else{
                echo $search_movie;
            }
            ?>
</body>
</html>