<?php
    include ("connection_database.php");
    include ("functions.php");
    $_SESSION;
    if($_SESSION['admin'] == 1 or $_SESSION['admin'] == 0){
        $log_off = "<button type=\"submit\" class=\"submit_log_off btn btn-success\"\"> 
        <a href=\"functions.php?log_off=1\" style=\"color:white;text-decoration:none\">Log off</a></button>";
        $return = "<button type=\"submit\" class=\"submit_return btn btn-success\" \"> 
        <a href=\"search.php\" style=\"color:white;text-decoration:none\">Return</a></button>";
    }
$movie_list = "";
    $user_connection = check_login($connected);
        if(empty($_POST['movie_name']) and empty($_POST['action_movie']) and empty($_POST['drama_movie'])
        and empty($_POST['horror_movie']) and empty($_POST['comedy_movie']) and empty($_POST['sf_movie'])
        and empty($_POST['romance_movie']) and empty($_POST['thriller_movie']) and empty($_POST['animation_movie'])
        and empty($_POST['mistery_movie']) and empty($_POST['documentary_movie'])){
            $query_3 = 
            "SELECT movie_list_new.*, movie_poster.poster FROM movie_list_new 
            INNER JOIN movie_poster ON movie_list_new.imdb_id = concat('tt', movie_poster.imdbID)
            ORDER BY year DESC, title";
            $result = mysqli_query($connected, $query_3);
            $_SESSION['id'] = '';
            while($row = mysqli_fetch_array($result)){
                if ($_SESSION['admin'] == 1){      
                    $movie_list .= "<div class='list_item'><a class=\"link_1\"\"
                    href=\"movie.php?id=" . $row['imdb_id'] . "\">" . $row['title'] . "</a> </div>
                    <div class='delete_button'><a class=\"link\" \"
                    href=\"functions.php?title=" . $row['title'] . "\">Delate</div>";
                }   
                else{
                    $movie_list .= "<div class='list_item'><a class=\"link_1\"\"
                    href=\"movie.php?id=" . $row['imdb_id'] . "\">" . $row['title'] . "</a> </div>";
                }           
            }
        }
        else if(isset($_POST['movie_name']) && empty($_POST['action_movie']) && empty($_POST['drama_movie'])
        && empty($_POST['horror_movie']) && empty($_POST['comedy_movie']) && empty($_POST['sf_movie'])
        && empty($_POST['romance_movie']) && empty($_POST['thriller_movie']) && empty($_POST['animation_movie'])
        && empty($_POST['mistery_movie']) && empty($_POST['documentary_movie'])){
            $pattern = strtolower($_POST['movie_name']);
            $query_3 = 
            "SELECT movie_list_new.*, movie_poster.poster FROM movie_list_new 
            INNER JOIN movie_poster ON movie_list_new.imdb_id = concat('tt', movie_poster.imdbID)
            ORDER BY year DESC, title";
            $result = mysqli_query($connected, $query_3);
            while($row = mysqli_fetch_array($result)){
                $title = strtolower($row['title']);
                $string_result = strpos($title,$pattern);
                if( $string_result === 0){
                    if ($_SESSION['admin'] == 1){      
                        $movie_list .= "<div class='list_item'><a class=\"link_1\"\"
                        href=\"movie.php?id=" . $row['imdb_id'] . "\">" . $row['title'] . "</a> </div>
                        <div class='delete_button'><a class=\"link\" \"
                        href=\"functions.php?title=" . $row['title'] . "\">Delate</div>";
                    }   
                    else{
                        $movie_list .= "<div class='list_item'><a class=\"link_1\"\"
                        href=\"movie.php?id=" . $row['imdb_id'] . "\">" . $row['title'] . "</a> </div>";
                    }    
                }
            }
        }
        else if(isset($_POST['movie_name']) or isset($_POST['action_movie']) or isset($_POST['drama_movie'])
        or isset($_POST['horror_movie']) or isset($_POST['comedy_movie']) or isset($_POST['sf_movie'])
        or isset($_POST['romance_movie']) or isset($_POST['thriller_movie']) or isset($_POST['animation_movie'])
        or isset($_POST['mistery_movie']) or isset($_POST['documentary_movie'])){
           $action = "1";
           $movie_name = "";
           if(isset($_POST['movie_name'])){
            $movie_name = $_POST['movie_name'];
           }
           if(isset($_POST['action_movie'])){
            $action = $_POST['action_movie'];
           }
           $drama = "1";
           if(isset($_POST['drama_movie'])){
            $drama = $_POST['drama_movie'];
           }
           $horror = "1";
           if(isset($_POST['horror_movie'])){
            $horror = $_POST['horror_movie'];
           }
           $comedy = "1";
           if(isset($_POST['comedy_movie'])){
            $comedy = $_POST['comedy_movie'];
           }
           $sf = "1";
           if(isset($_POST['sf_movie'])){
            $sf = $_POST['sf_movie'];
           }
           $romance = "1";
           if(isset($_POST['romance_movie'])){
           $romance = $_POST['romance_movie'];
           }
           $thriller = "1";
           if(isset($_POST['thriller_movie'])){
            $thriller = $_POST['thriller_movie'];
            }
           $animation = "1";
           if(isset($_POST['animation_movie'])){
            $animation = $_POST['animation_movie'];
            }
           $mistery = "1";
           if(isset($_POST['mistery_movie'])){
            $mistery = $_POST['mistery_movie'];
            }
           $documentary = "1";
           if(isset($_POST['documentary_movie'])){
            $documentary = $_POST['documentary_movie'];
            }
            $query_3 = 
            "SELECT movie_list_new.*, movie_poster.poster FROM movie_list_new 
            INNER JOIN movie_poster ON movie_list_new.imdb_id = concat('tt', movie_poster.imdbID)
            ORDER BY year DESC, title";
            $result_1 = mysqli_query($connected, $query_3);
           $string_result_1 = "";
           $string_result_2 = "";
           $string_result_3 = "";
           $string_result_4 = "";
           $string_result_5 = "";
           $string_result_6 = "";
           $string_result_7 = "";
           $string_result_8 = "";
           $string_result_9 = "";
           $string_result_10 = "";
           echo "<form action=\"movie.php\" method=\"post\">";
           while($row = mysqli_fetch_array($result_1)){
               $checked_number = 0;
               $checked_genre = 0;
               $genre = $row['genre'];
               if($action !== "1"){
                $checked_number += 1;
                $string_result_1 = strpos($genre,$action);
                if($string_result_1 === FALSE){
                    $string_result_1 = -1;
                }
                else{
                    $checked_genre += 1;
                }
               }
               else{
                $string_result_1 = -1;
               }
               if($drama !== "1"){
                $checked_number += 1;
                $string_result_2 = strpos($genre,$drama);
                if($string_result_2 === FALSE){
                    $string_result_2 = -1;
                }
                else{
                    $checked_genre += 1;
                }
               }
               else{
                $string_result_2 = -1;
               }
               if($horror !== "1"){
                $checked_number += 1;
                $string_result_3 = strpos($genre,$horror);
                if($string_result_3 === FALSE){
                    $string_result_3 = -1;
                }
                else{
                    $checked_genre += 1;
                }
               }
               else{
                $string_result_3 = -1;
               }
               if($comedy !== "1"){
                $checked_number += 1;
                $string_result_4 = strpos($genre,$comedy);
                if($string_result_4 === FALSE){
                    $string_result_4 = -1;
                }
                else{
                    $checked_genre += 1;
                }
               }
               else{
                $string_result_4 = -1;
               }
               if($sf !== "1"){
                $checked_number += 1;
                $string_result_5 = strpos($genre,$sf);
                if($string_result_5 === FALSE){
                    $string_result_5 = -1;
                }
                else{
                    $checked_genre += 1;
                }
               }
               else{
                $string_result_5 = -1;
               }
               if($romance !== "1"){
                $checked_number += 1;
                $string_result_6 = strpos($genre,$romance);
                if($string_result_6 === FALSE){
                    $string_result_6 = -1;
                }
                else{
                    $checked_genre += 1;
                }
               }
               else{
                $string_result_6 = -1;
               }
               if($thriller !== "1"){
                $checked_number += 1;
                $string_result_7 = strpos($genre,$thriller);
                if($string_result_7 === FALSE){
                    $string_result_7 = -1;
                }
                else{
                    $checked_genre += 1;
                }
               }
               else{
                $string_result_7 = -1;
               }
               if($animation !== "1"){
                $checked_number += 1;
                $string_result_8 = strpos($genre,$animation);
                if($string_result_8 === FALSE){
                    $string_result_8 = -1;
                }
                else{
                    $checked_genre += 1;
                }
               }
               else{
                $string_result_8 = -1;
               }
               if($mistery !== "1"){
                $checked_number += 1;
                $string_result_9 = strpos($genre,$mistery);
                if($string_result_9 === FALSE){
                    $string_result_9 = -1;
                }
                else{
                    $checked_genre += 1;
                }
               }
               else{
                $string_result_9 = -1;
               }
               if($documentary !== "1"){
                $checked_number += 1;
                $string_result_10 = strpos($genre,$documentary);
                if($string_result_10 === FALSE){
                    $string_result_10 = -1;
                }
                else{
                    $checked_genre += 1;
                }
               }
               else{
                $string_result_10 = -1;
               }
               if($checked_number === $checked_genre){
                   if(strlen($movie_name)> 0){
                    $title = strtolower($row['title']);
                    $pattern = strtolower($movie_name);
                    $string_result = strpos($title,$pattern);
                    if( $string_result === 0){
                        if ($_SESSION['admin'] == 1){      
                            $movie_list .= "<div class='list_item'><a class=\"link_1\"\"
                            href=\"movie.php?id=" . $row['imdb_id'] . "\">" . $row['title'] . "</a> </div>
                            <div class='delete_button'><a class=\"link\" \"
                            href=\"functions.php?title=" . $row['title'] . "\">Delate</div>";
                        }   
                        else{
                            $movie_list .= "<div class='list_item'><a class=\"link_1\"\"
                            href=\"movie.php?id=" . $row['imdb_id'] . "\">" . $row['title'] . "</a> </div>";
                        }    
                   }
                }
                else{
                    if ($_SESSION['admin'] == 1){      
                        $movie_list .= "<div class='list_item'><a class=\"link_1\"\"
                        href=\"movie.php?id=" . $row['imdb_id'] . "\">" . $row['title'] . "</a> </div>
                        <div class='delete_button'><a class=\"link\" \"
                        href=\"functions.php?title=" . $row['title'] . "\">Delate</div>";
                    }   
                    else{
                        $movie_list .= "<div class='list_item'><a class=\"link_1\"\"
                        href=\"movie.php?id=" . $row['imdb_id'] . "\">" . $row['title'] . "</a> </div>";
                    }     
               }
           }
           echo "</form>";
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
        <link rel="stylesheet" href="result.css?">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script type="text/javascript" src="script_search.js" ></script>
        <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
</head>
<body>
    <?php echo $log_off;?>
        <?php   
                    echo  $movie_list;
                    echo $return;
        ?>

</body>
</html>