<?PHP
    session_start();
    $_SESSION;
    include ("connection_database.php");
            $pattern = strtolower($_POST['movie_name']);
            $query_3 = "SELECT title FROM movie_list;";
            $result = mysqli_query($connected, $query_3);
            echo "<div class=\"list\">";
            echo "<ul class=\" list_list\"";
            while($row = mysqli_fetch_array($result)){
                $title = strtolower($row['title']);
                $string_result = strpos($title,$pattern);
                if( $string_result === 0){
                    echo "<li class=\"list_dot\" \"list_item\">" . $row['title'] . "</li>";
                }
            }
            echo "</ul>";
            echo "</div>";
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
</body>
</html>