<?PHP
    session_start();
    $_SESSION;
    include ("connection_database.php");
    include ("functions.php");
    $user_connection = check_login($connected);
    $id = $_GET['id'];
    $delete = "<button type=\"submit\" class=\"submit_log_off btn btn-success\" 
    style=\"position:absolute;top:0px;left:0px;width:100px\"> 
    <a href=\"functions.php?log_off=1\" style=\"color:white;text-decoration:none\">Log off</a></button>";
    $id_1 = 114709;
    $link = "";
    $query_5 = "SELECT imdb_id, title, year, data_published, genre, duration, director, writer, production_company,
    actors, description, avg_votes, votes FROM movie_list;";
    $result = mysqli_query($connected, $query_5);
    $query_6 = "SELECT imdbID, poster FROM movie_poster;";
    $result_1 = mysqli_query($connected, $query_6);
    while($row = mysqli_fetch_array($result)){  
        $row_1 = mysqli_fetch_array($result_1);
        while($row_1 = mysqli_fetch_array($result_1)){
            if ($row_1['imdbID'] == $id_1)
            {
                $link = $row_1['poster'];
                break;
            }
            else{
                continue;
            }
        } 
        if($id ===  $row['imdb_id']){
            $title = $row['title'];
            $year = $row['year'];
            $data_published = $row['data_published'];
            $genre = $row['genre'];
            $duration = $row['duration'];
            $director = $row['director'];
            $writer = $row['writer'];
            $production_company = $row['production_company'];
            $actors = $row['actors'];
            $description = $row['description'];
            $avg_votes = $row['avg_votes'];
            $votes = $row['votes'];
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
            echo "<img src=\" " . $link . "\" >";
            echo "</div>";
            echo "</div>";
            echo "<div class=\"rating\"> Rating of the movie: <button class=\"votes\" disabled>" . $avg_votes ."</button><br>";
            echo "Number of voters: ";
            echo $votes . " </div> ";
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
        <link rel="stylesheet" href="movie_1.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script type="text/javascript" src="script_search.js" ></script>
        <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
</head>
<body>
<?php  echo $delete;  ?>
</body>
</html>