<?PHP
    session_start();
    $_SESSION;
    include ("connection_database.php");
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
                    <input type="checkbox" id="action_movie" name="action_movie" value="action_movie">
                    <label for="action_movie"> Action movie</label><br>
                    <input type="checkbox" id="drama_movie" name="drama_movie" value="drama_movie">
                    <label for="drama_movie"> Drama movie</label><br>
                    <input type="checkbox" id="horror_movie" name="horror_movie" value="horror_movie">
                    <label for="horror_movie"> Horror movie</label><br>
                    <input type="checkbox" id="comedy_movie" name="comedy_movie" value="comedy_movie">
                    <label for="comedy_movie"> Comedy movie</label><br>
                    <input type="checkbox" id="sf_movie" name="sf_movie" value="sf_movie">
                    <label for="sf_movie"> Science fiction movie</label><br>
                    </div>
                    <div class="col col_5">
                    <input type="checkbox" id="action_movie" name="action_movie" value="action_movie">
                    <label for="action_movie"> Action movie</label><br>
                    <input type="checkbox" id="drama_movie" name="drama_movie" value="drama_movie">
                    <label for="drama_movie"> Drama movie</label><br>
                    <input type="checkbox" id="horror_movie" name="horror_movie" value="horror_movie">
                    <label for="horror_movie"> Horror movie</label><br>
                    <input type="checkbox" id="comedy_movie" name="comedy_movie" value="comedy_movie">
                    <label for="comedy_movie"> Comedy movie</label><br>
                    <input type="checkbox" id="sf_movie" name="sf_movie" value="sf_movie">
                    <label for="sf_movie"> Science fiction movie</label><br>
                    </div>
                    <div class="col col_6">
                    <button type="submit" class="submit_movie btn btn-success">Search</button>
                    </div>
                </div>
        </form>
    </div>
</body>
</html>