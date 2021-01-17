<?PHP
    session_start();
    $_SESSION;
    include ("connection_database.php");
    $id = $_GET['id'];
    $query_5 = "SELECT imdb_id, title, year, data_published, genre, duration, director, writer, production_company,
    actors, description, avg_votes, votes FROM movie_list;";
    $result = mysqli_query($connected, $query_5);
    while($row = mysqli_fetch_array($result)){   
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
            echo $description;
            echo "</div>";
            echo "<div class=\"col_image\">";
            echo "<div class=\"col_image_image\">";
            echo "Some text also";
            echo "</div>";
            echo "<div class=\"col_image_rating\">";
            echo "Some text";
            echo "</div>";
            echo "</div>";
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
</body>
</html>