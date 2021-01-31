<?PHP
    include ("connection_database.php");
    include ("functions1.php");
    $_SESSION;
    $user_connection = check_login($connected);
    if($_SESSION['admin'] == 0){
        header("Location: index.php");
    }
    $nick = $_SESSION['nickname'];
    $text = "Your nick is: ". $nick;
    $search_movie = "<button type=\"submit\" class=\"btn_search btn btn-success\"> 
    <a href=\"search.php\">Search</a></button>";
    if ($_SERVER['REQUEST_METHOD'] = 'POST') {
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
    $imgName = $_FILES['file']['name'];
    $query = "SELECT imdb_id FROM movie_list_new;";
    $result = mysqli_query($connected, $query);
    $lastValueImdb = "";
    while($row = mysqli_fetch_array($result)){  
        $lastValueImdb = $row['imdb_id'];
    }
    echo  $lastValueImdb ;
    $newLastElement = intval(str_replace("tt","",$lastValueImdb));
    $newLastElement++;
    $lastValueImdb = "tt".strval($newLastElement);
    $emptyString = "";
    $check=0; //proveravam da li su svi uneti podaci ispravni
    if(!empty($title)){
        $query = "SELECT title FROM movie_list_new";
        $result = mysqli_query($connected, $query);
        while($row = mysqli_fetch_array($result)){ 
            if ($title == $row['title']){
                header("Location: new_movie.php?error=13");
                exit();
            }
        }
    }
    if(!empty($genre)){
        $array_of_genre = explode(",", $genre);
        foreach($array_of_genre as $genre_1){
            if(is_numeric($genre_1)){
                header("Location: new_movie.php?error=3");
                exit();
            }
        }
    }
    if(!empty($year)){
        if(!(is_numeric($year))){
            header("Location: new_movie.php?error=4");
            exit();
        }
    }
    if(!empty($date_of_publishing)){
        $array_of_date = explode(".", $date_of_publishing);
        if(!(checkdate(intval($array_of_date[0]) , intval($array_of_date[1]) , intval($array_of_date[2])))){
            header("Location: new_movie.php?error=5");
            exit();
        }
    }
    if(!empty($duration)){
        if(!(is_numeric($duration))){
            header("Location: new_movie.php?error=6");
            exit();
        }
    }
    if(!empty($director)){
        if(is_numeric($director)){
            header("Location: new_movie.php?error=7");
            exit();
        }
    }
    if(!empty($writer)){
        if(is_numeric($writer)){
            header("Location: new_movie.php?error=8");
            exit();
        }
    }
    if(!empty($production_com)){
        if(is_numeric($production_com)){
            header("Location: new_movie.php?error=9");
            exit();
        }
    }
    if(!empty($rating)){
        if(!(is_numeric($rating) && $rating <= 10 && $rating > 0)){
            header("Location: new_movie.php?error=10");
            exit();
        }
    }
    if(!empty($voters)){
        if(!(is_numeric($voters) && $voters >= 0)){
            header("Location: new_movie.php?error=11");
            exit(); 
        }
    }
    if(!empty($actors)){
        $check_2=0;
        $array_of_actors = explode(".", $actors);  
        foreach($array_of_actors as $actor){
            if(!(is_numeric($actor))){
                continue;
            }
            else{
                $check_2++;
            }
        }
        if($check_2 > 0){
            header("Location: new_movie.php?error=12");
            exit(); 
        }
    }
    if(empty($title) || empty($year) || empty($date_of_publishing) || empty($genre) || empty($duration) ||
       empty($director) || empty($writer) || empty($production_com) || empty($description) || empty($rating) ||
       empty($voters) || empty($actors) || empty($imgName)){
        header("Location: new_movie.php?error=1");
        exit();
    }
    else{
        $query = "INSERT INTO movie_list_new(imdb_id, title, year, date_published, genre, duration, director,
        writer, production_company, actors, description, avg_vote, votes)
        VALUES ('$lastValueImdb', '$title', '$year', '$date_of_publishing', '$genre', '$duration', '$director', '$writer',
        '$production_com', '$actors', '$description', '$rating', '$voters')";
    
        $result = mysqli_query($connected, $query);
        $add = 1;
        $query_1 = "INSERT INTO movie_poster(imdbID, title, poster, added) VALUES ('$newLastElement', '$title',
         '$imgName', $add)";
        $result_1 = mysqli_query($connected, $query_1);
        $fileDestination = "movie_images/" . $imgName;
        move_uploaded_file($_FILES['file']['tmp_name'], $fileDestination);
        header("location: movie.php?id=" . $lastValueImdb);
    }
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
        <script type="text/javascript" src="script.js" ></script>
        <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
</head>
<body>

            <?php 
            if(empty( $_GET["error"])){
                echo "";
            }
            if(isset($_GET["error"])){
                $error_code = $_GET["error"];
            }
            else{
                $error_code = "";
            }
            if($error_code === "1"){
                echo "<p class=\"error_text\">You should fill all the fields</p>";
            }
            if($error_code === "2"){
                echo "<p class=\"error_text\">You should fill all the fields corectlly</p>";
            }
            if($error_code === "3"){
                echo "<p class=\"error_text\">Genre shouldn't include numbers </p>";
            }
            if($error_code === "4"){
                echo "<p class=\"error_text\">Year should be a number</p>";
            }
            if($error_code === "5"){
                echo "<p class=\"error_text\">Date should be: dd.mm.YYYY </p>";
            }
            if($error_code === "6"){
                echo "<p class=\"error_text\">Duration should be a number</p>";
            }
            if($error_code === "7"){
                echo "<p class=\"error_text\">Name of the director is not right</p>";
            }
            if($error_code === "8"){
                echo "<p class=\"error_text\">Name of the writer is not right</p>";
            }
            if($error_code === "9"){
                echo "<p class=\"error_text\">Name of the production company is not right </p>";
            }
            if($error_code === "10"){
                echo "<p class=\"error_text\">Rating is a number between 1 and 10</p>";
            }
            if($error_code === "11"){
                echo "<p class=\"error_text\">Number of votes should be number greater then 0</p>";
            }
            if($error_code === "12"){
                echo "<p class=\"error_text\">Actors should be list of actors separated by ,</p>";
            }
            if($error_code === "13"){
                echo "<p class=\"error_text\">Movie already in database</p>";
            }
            ?>
            <div class="movie_title"> <h1></h1> </div>
            <div class="container">
            <form action="" method="post" enctype="multipart/form-data">
            <div class="basic_informations">
            <div class="col_info_1">
            <p class=""><?php echo $text;?></p>
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
            <textarea type="text" class="description textarea field" id="description" 
            name="description"></textarea>
            <br>
            <label for="rating" class="label">Rating: </label>
            <input type="text" class="field" id="rating" 
            name="rating">
            <br>
            <label for="voters" class="label">Number of voters: </label>
            <input type="text" class="voters field" id="voters" 
            name="voters">
            <br>
            <label for="actors" class="label">List of actors: </label>
            <textarea type="text" class="textarea field" id="actors" 
            name="actors"></textarea>
            <br>
            <label for="file" class="label">Img link: </label>
            <input type="file" name="file">
            <br>
            </div>
            </div>
            <button type="submit" name="submit" class="preview_movie btn btn-success">
            Add Movie</button>
            </form>
            </div>    
            <button type="submit" class="submit_log_off btn btn-success" 
            style="position:absolute;top:0px;left:0px;width:100px"> 
            <a href="functions.php?log_off=1" style="color:white;text-decoration:none">Log off</a></button>  

            <?php echo $search_movie;?>
</body>
</html>