<?PHP
    include ("connection_database.php");
    include ("functions.php");
    $_SESSION;
    $user_connection = check_login($connected);
    $id = $_GET['movie_id'];
    $id_1 = $id;
    if($_SESSION['admin'] == 0){
        header("location: index.php");
    }
    if ($_SERVER['REQUEST_METHOD'] = 'POST') {
        if(isset($_POST['submit'])){
        $title = ucfirst(strtolower($_POST['title']));
        $year = $_POST['year'];
        $date_of_publishing = $_POST['date_of_publishing'];
        $genre = $_POST['genre'];
        $duration = $_POST['duration'];
        $director = ucfirst(strtolower($_POST['director']));
        $writer = ucfirst(strtolower($_POST['writer']));
        $production_com = ucfirst(strtolower($_POST['production_com']));
        $description = $_POST['description'];
        $rating = $_POST['rating'];
        $voters = $_POST['voters'];
        $actors = $_POST['actors'];
        $imgName_1 = $_FILES['file']['name'];
        if(!empty($title)){
            $query = "UPDATE movie_list_new SET title='$title' WHERE imdb_id='$id'";
            $result = mysqli_query($connected, $query);
        }
        if(!empty($description)){
            $query = "UPDATE movie_list_new SET description='$description' WHERE imdb_id='$id'";
            $result = mysqli_query($connected, $query);
        }
        if(!empty($genre)){
            $check = 0;
            $array_of_genre = explode(",", $genre);
            foreach($array_of_genre as $genre_1){
                if(is_numeric($genre_1)){
                    $check++;
                }
            }
            if($check == 0){
                $query = "UPDATE movie_list_new SET genre='$genre' WHERE imdb_id='$id'";
                $result = mysqli_query($connected, $query);
            }
            else{
                header("Location: edit_movie.php?error=1&movie_id=". $id_1);
                exit();
            }
        }
        if(!empty($year)){
            if(is_numeric($year)){
                $query = "UPDATE movie_list_new SET year='$year' WHERE imdb_id='$id'";
                $result = mysqli_query($connected, $query);
            }
            else{
                header("Location: edit_movie.php?error=2&movie_id=". $id_1);
                exit();
            }
        }
        if(!empty($date_of_publishing)){
            $array_of_date = explode(".", $date_of_publishing);
            $array_of_date_1 = explode("-", $date_of_publishing);
            if(checkdate ( intval($array_of_date[0]) , intval($array_of_date[1]) , intval($array_of_date[2]))){
                $query = "UPDATE movie_list_new SET date_published='$date_of_publishing' WHERE imdb_id='$id'";
                $result = mysqli_query($connected, $query);
            }
            else if(checkdate ( intval($array_of_date_1[2]) , intval($array_of_date_1[1]) , intval($array_of_date_1[0]))) {
                $query = "UPDATE movie_list_new SET date_published='$date_of_publishing' WHERE imdb_id='$id'";
                $result = mysqli_query($connected, $query);
            }
            else{
                header("Location: edit_movie.php?error=3&movie_id=". $id_1);
                exit();
            }
        }
        if(!empty($duration)){
            if(is_numeric($duration)){
                $query = "UPDATE movie_list_new SET duration='$duration' WHERE imdb_id='$id'";
                $result = mysqli_query($connected, $query);
            }
            else{
                header("Location: edit_movie.php?error=4&movie_id=". $id_1);
                exit();
            }
        }
        if(!empty($director)){
            if(!(is_numeric($director))){
                $query = "UPDATE movie_list_new SET director='$director' WHERE imdb_id='$id'";
                $result = mysqli_query($connected, $query);
            }
            else{
                header("Location: edit_movie.php?error=5&movie_id=". $id_1);
                exit();
            }
        }
        if(!empty($writer)){
            if(!(is_numeric($writer))){
                $query = "UPDATE movie_list_new SET writer='$writer' WHERE imdb_id='$id'";
                $result = mysqli_query($connected, $query);
            }
            else{
                header("Location: edit_movie.php?error=6&movie_id=". $id_1);
                exit();
            }
        }
        if(!empty($production_com)){
            if(is_numeric($production_com)){
                header("Location: edit_movie.php?error=7&movie_id=". $id_1);
                exit();
            }
            else{
                $query = "UPDATE movie_list_new SET production_company='$production_com' WHERE imdb_id='$id'";
                $result = mysqli_query($connected, $query);
            }
        }
        if(!empty($rating)){
            if(is_numeric($rating) && $rating <= 10 && $rating > 0){
                $query = "UPDATE movie_list_new SET avg_vote='$rating' WHERE imdb_id='$id'";
                $result = mysqli_query($connected, $query);
            }
            else{
                header("Location: edit_movie.php?error=8&movie_id=". $id_1);
                exit();
            }
        }
        if(!empty($voters)){
            if(is_numeric($voters) && $voters >= 0){
                $query = "UPDATE movie_list_new SET votes='$voters' WHERE imdb_id='$id'";
                $result = mysqli_query($connected, $query);
            }
            else{
                header("Location: edit_movie.php?error=9&movie_id=". $id_1);
                exit();
            }
        }
        $check = 0;
        if(!empty($actors)){
            $array_of_actors = explode(".", $actors);  
            foreach($array_of_actors as $actor){
                if(!(is_numeric($actor))){
                    continue;
                }
                else{
                    $check++;
                }
            }
            if($check == 0){
                $query = "UPDATE movie_list_new SET actors='$actors' WHERE imdb_id='$id'";
                $result = mysqli_query($connected, $query);
            }
            else{
                header("Location: edit_movie.php?error=10&movie_id=". $id_1);
                exit();
            }
        }
        if(!empty($imgName_1)){
            $add = 1;
            $id_new = str_replace("tt","",$id);
            $query = "UPDATE movie_poster SET poster='$imgName_1', added='$add' WHERE imdbID='$id_new'";
            $result = mysqli_query($connected, $query);
            $fileDestination = "movie_images/" . $imgName_1;
            move_uploaded_file($_FILES['file']['tmp_name'], $fileDestination);
        }
        header("Location: movie.php?id=". $id);
        }
        }


    $logoff = "<button type=\"submit\" class=\"submit_log_off btn btn-success\" 
    style=\"position:absolute;top:0px;left:0px;width:100px\"> 
    <a href=\"functions.php?log_off=1\" style=\"color:white;text-decoration:none\">Log off</a></button>";
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
                $delete_movie = "<button type=\"submit\" class=\"submit_movie admin_btn submit_all btn btn-success\"> 
                <a href=\"result.php?title=". $title ."\">Delete</a></button>";
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
        <script type="text/javascript" src="script_search.js" ></script>
        <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
</head>
<body>
            <?php  echo $logoff;  ?>
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
                echo "<p class=\"error_text\">Genre is not written corectly</p>";
            }
            if($error_code === "2"){
                echo "<p class=\"error_text\">Year is supposed to be a number</p>";
            }
            if($error_code === "3"){
                echo "<p class=\"error_text\">Date should be in format dd.mm.YYYY</p>";
            }
            if($error_code === "4"){
                echo "<p class=\"error_text\">Duration should be number</p>";
            }
            if($error_code === "5"){
                echo "<p class=\"error_text\">Name of the director is not written correctly</p>";
            }
            if($error_code === "6"){
                echo "<p class=\"error_text\">Name of the writer is not written correctly</p>";
            }
            if($error_code === "7"){
                echo "<p class=\"error_text\">Name of the production company is not written correctly</p>";
            }
            if($error_code === "8"){
                echo "<p class=\"error_text\">Rating is number between 1 and 10</p>";
            }
            if($error_code === "9"){
                echo "<p class=\"error_text\">Number of voters is number greater than 0</p>";
            }
            if($error_code === "10"){
                echo "<p class=\"error_text\">List of actors should be separated with comma</p>";
            }
            ?>
            <div class="movie_title"> <h1></h1> </div>
            <div class="container">
            <form action="" method="post" enctype="multipart/form-data">
            <div class="basic_informations">
            <div class="col_info_2">
            <label for="title" class="label">Title: </label>
                  <input type="text" class="title field" id="title" name="title" placeholder="<?php echo $title?>">
                  <br>
            <label for="year" class="label">Year: </label>
            <input type="text" class="year field" id="year" name="year" placeholder="<?php echo $year?>">
            <br>
            <label for="date_of_publishing" class="label">Date of publishing: </label>
            <input type="text" class="date_of_publishing field" id="date_of_publishing" 
            name="date_of_publishing" placeholder="<?php echo $data_published?>">
            <br>
            <label for="genre" class="label">Genre: </label>
            <input type="text" class="genre field" id="genre" 
            name="genre" placeholder="<?php echo $genre?>">
            <br>
            <label for="duration" class="label">Duration: </label>
            <input type="text" class="duration field" id="duration" 
            name="duration" placeholder="<?php echo $duration?>">
            <br>
            <label for="director" class="label">Director: </label>
            <input type="text" class="director field" id="director" 
            name="director" placeholder="<?php echo $director?>">
            <br>
            <label for="writer" class="label">Writer: </label>
            <input type="text" class="writer field" id="writer" 
            name="writer" placeholder="<?php echo $writer?>">
            <br>
            <label for="production_com" class="label">Production company: </label>
            <input type="text" class="production_com field" id="production_com" 
            name="production_com" placeholder="<?php echo $production_company?>">
            <br>
            <label for="description" class="label">Description: </label>
            <textarea type="text" class="textarea field" id="description" 
            name="description"  placeholder="<?php echo $description?>"></textarea>
            <br>
            <label for="voters" class="label">Number of voters: </label>
            <input type="text" class="voters field" id="voters" 
            name="voters" placeholder="<?php echo $votes?>">
            <br>
            <label for="rating" class="label">Rating: </label>
            <input type="text" class="field" id="rating" 
            name="rating" placeholder="<?php echo $avg_votes?>">
            <br>
            <label for="actors" class="label">List of actors: </label>
            <textarea type="text" class="textarea field" id="actors" 
            name="actors"  placeholder="<?php echo $actors?>"></textarea>
            <br>
            <label for="file" class="label">Img link: </label>
            <input type="file" name="file">
            <br>
            </div>
            </div>
            <button type="submit" name="submit" class="preview_movie btn btn-success">
            Save</button>
            </form>
            </div>    
</body>
</html>