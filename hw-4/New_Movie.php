<?PHP
    include ("connection_database.php");
    include ("functions1.php");
    $_SESSION;
    $user_connection = check_login($connected);
    if ($_SERVER['REQUEST_METHOD'] = 'POST') {
    // if(isset($_POST['title'])
    // and isset($_POST['year']) and isset($_POST['date_of_publishing']) and isset($_POST['genre']) 
    // and isset($_POST['duration']) and isset($_POST['director']) and isset($_POST['writer'])
    // and isset($_POST['production_com']) and isset($_POST['description']) 
    // and isset($_POST['rating']) and isset($_POST['voters']) and isset($_POST['actors']) and isset($_POST['img'])
    // ){
    if(isset($_POST['submit'])){
    $title = $_POST['title'];
    $year = $_POST['year'];
    $date_of_publishing = $_POST['date_of_publishing'];
    $genre = $_POST['genre'];
    $duration = $_POST['duration'];
    $director = $_POST['director'];
    $writer = $_POST['writer'];
    $production_com = $_POST['production_com'];
    $description = $_POST['description'];
    $rating = $_POST['rating'];
    $voters = $_POST['voters'];
    $actors = $_POST['actors'];
    // $img = $_POST['img'];
    $imgName = $_FILES['file']['name'];
    $query = "SELECT imdb_id FROM movie_list;";
    $result = mysqli_query($connected, $query);
    $lastValueImdb = "";
    while($row = mysqli_fetch_array($result)){  
        $lastValueImdb = $row['imdb_id'];
    }
    $newLastElement = intval(str_replace("tt","",$lastValueImdb));
    $newLastElement++;
    $lastValueImdb = "tt".strval($newLastElement);
    echo $lastValueImdb;
    $emptyString = "";
    $query = "INSERT INTO movie_list(imdb_id, title, year, data_published, genre, duration, director,
    writer, production_company, actors, description, avg_votes, votes)
    VALUES ('$lastValueImdb', '$title', '$year', '$date_of_publishing', '$genre', '$duration', '$director', '$writer',
    '$production_com', '$actors', '$description', '$rating', '$voters')";

    $result = mysqli_query($connected, $query);

    //  $query_1 = "INSERT INTO movie_poster(imdbID, title, poster)
    //  VALUES ('$newLastElement', '$title', '$img')";
    $add = 1;
    $query_1 = "INSERT INTO movie_poster(imdbID, title, poster, added) VALUES ('$newLastElement', '$title',
     '$imgName', $add)";
    $result_1 = mysqli_query($connected, $query_1);
    $fileDestination = "movie_images/" . $imgName;
    move_uploaded_file($_FILES['file']['tmp_name'], $fileDestination);
    header("location: movie.php?id=" . $lastValueImdb);
    } else {
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
        <script type="text/javascript" src="script.js" ></script>
        <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
</head>
<body>
            <div class="movie_title"> <h1></h1> </div>
            <div class="container">
            <form action="" method="post" enctype="multipart/form-data">
            <div class="basic_informations">
            <div class="col_info_1">
            <label for="title" class="label">Title: </label>
                  <input type="text" class="title field" id="title" name="title" placeholder="movie title...">
                  <br>
            <label for="year" class="label">Year: </label>
            <input type="text" class="year field" id="year" name="year" placeholder="year...">
            <br>
            <label for="date_of_publishing" class="label">Date of publishing: </label>
            <input type="text" class="date_of_publishing field" id="date_of_publishing" 
            name="date_of_publishing" placeholder="date of release...">
            <br>
            <label for="genre" class="label">Genre: </label>
            <input type="text" class="genre field" id="genre" 
            name="genre">
            <br>
            <label for="duration" class="label">Duration: </label>
            <input type="text" class="duration field" id="duration" 
            name="duration">
            <br>
            <label for="director" class="label">Director: </label>
            <input type="text" class="director field" id="director" 
            name="director">
            <br>
            <label for="writer" class="label">Writer: </label>
            <input type="text" class="writer field" id="writer" 
            name="writer">
            <br>
            <label for="production_com" class="label">Production company: </label>
            <input type="text" class="production_com field" id="production_com" 
            name="production_com">
            <br>
            <label for="description" class="label">Description: </label>
            <textarea type="text" class="description textarea" id="description" 
            name="description"></textarea>
            <br>
            <label for="rating" class="label">Rating: </label>
            <input type="text" class="rating field" id="rating" 
            name="rating">
            <br>
            <label for="voters" class="label">Number of voters: </label>
            <input type="text" class="voters field" id="voters" 
            name="voters">
            <br>
            <label for="actors" class="label">List of actors: </label>
            <textarea type="text" class="actors textarea" id="actors" 
            name="actors"></textarea>
            <br>
            <label for="img" class="label">Img link: </label>
            <!-- <input type="text" class="img field" id="img" 
            name="img"> -->
            <input type="file" name="file">
            <br>
            </div>
            </div>
            <button type="submit" name="submit" class="preview_movie btn btn-success" onclick="addMovie()">
            Preview</button>
            </form>
            </div>    
            <button type="submit" class="submit_log_off btn btn-success" 
            style="position:absolute;top:0px;left:0px;width:100px"> 
            <a href="functions.php?log_off=1" style="color:white;text-decoration:none">Log off</a></button>  
</body>
</html>