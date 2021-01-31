<?PHP
    include ("connection_database.php");
    include ("functions.php");
    $_SESSION;
    $user_connection = check_login($connected);
    if($_SESSION['admin'] == 1){
        $see_all_movies = "<button type=\"submit\" class=\"submit_movie submit_all admin_btn_l btn_addd btn btn-success\"> 
        <a href=\"result.php\"\">See all movies</a></button>";
        $add_new_movie = "<button type=\"submit\" class=\"submit_movie  submit_all admin_btn_r  btn_addd btn btn-success\"> 
        <a href=\"new_movie.php\"\">Add new movie</a></button>";
    }
    $nick = $_SESSION['nickname'];
    if($_SESSION['admin'] == 1 or $_SESSION['admin'] == 0){
        $log_off = "<button type=\"submit\" class=\"submit_log_off btn btn-success\" 
        style=\"position:relative;top:0px;left:0px\"> 
    <a href=\"functions.php?log_off=1\" style=\"color:white;text-decoration:none\">Log off</a></button>";
        $nickname = "<button type=\"button\" class=\"submit_log_off btn btn-success\" 
        style=\"position:relative;top:0px;left:0px\" disabled> ". $nick ."
        </button>";
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
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script type="text/javascript" src="script_search.js" ></script>
        <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
</head>
<body>
<?php  echo $log_off;  ?>
    <div class="search_box" id="search_box">
        <form action="result.php" class="search" id="search" method="post">
                <div class="title_bg">
                    <h3 class="title_movies">Search for the movies you like ...</h3>
                </div>
                <div class="form-row rows">
                    <div class="col col_1">
                    <input type="text" class="movie_name input" id="movie_name" name="movie_name"
                     placeholder="search for movies...">
                    </div>
                    <div class="col col_2">
                    <button type="submit" class="submit_movie btn btn-success">Search</button>
                    </div>
                </div>
                <div class="form-row rows">
                    <div class="col col_3">
                    <h3 class="title_movies">Search for the genre you like ...</h3>
                    </div>
                    <div class="col col_4">
                    <input type="checkbox" id="action_movie" name="action_movie" value="Action">
                    <label for="action_movie"> Action movie</label><br>
                    <input type="checkbox" id="drama_movie" name="drama_movie" value="Drama">
                    <label for="drama_movie"> Drama movie</label><br>
                    <input type="checkbox" id="horror_movie" name="horror_movie" value="Horror">
                    <label for="horror_movie"> Horror movie</label><br>
                    <input type="checkbox" id="comedy_movie" name="comedy_movie" value="Comedy">
                    <label for="comedy_movie"> Comedy movie</label><br>
                    <input type="checkbox" id="sf_movie" name="sf_movie" value="Scince fiction">
                    <label for="sf_movie"> Science fiction movie</label><br>
                    </div>
                    <div class="col col_5">
                    <input type="checkbox" id="romance_movie" name="romance_movie" value="Romance">
                    <label for="romance_movie"> Romance movie</label><br>
                    <input type="checkbox" id="thriller_movie" name="thriller_movie" value="Thriller">
                    <label for="thriller_movie"> Thriller movie</label><br>
                    <input type="checkbox" id="animation_movie" name="animation_movie" value="Animation">
                    <label for="animation_movie"> Animation movie</label><br>
                    <input type="checkbox" id="mistery_movie" name="mistery_movie" value="Mistery">
                    <label for="mistery_movie"> Mistery movie</label><br>
                    <input type="checkbox" id="documentary_movie" name="documentary_movie" value="Documentary">
                    <label for="documentary_movie"> Documentary movie</label><br>
                    </div>
                </div>
        </form>
    </div>
    <?php
    echo $nickname;
    ?>
    <?php if($_SESSION['admin'] == 1){
        echo $see_all_movies;
        echo $add_new_movie;
    } ?>
</body>
</html>