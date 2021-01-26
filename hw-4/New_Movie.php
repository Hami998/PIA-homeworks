<?PHP
    include ("connection_database.php");
    include ("functions.php");
    $_SESSION;
    $user_connection = check_login($connected);
    $delete = "<button type=\"submit\" class=\"submit_log_off btn btn-success\" 
    style=\"position:absolute;top:0px;left:0px;width:100px\"> 
    <a href=\"functions.php?log_off=1\" style=\"color:white;text-decoration:none\">Log off</a></button>";
            echo "<div class=\"movie_title\"> <h1></h1> </div>" ;      
            echo "<div class=\"container\">";
            echo "<form>";
            echo "<div class=\"basic_informations\">";
            echo "<div class=\"col_info\">";
            echo "<label for=\"title\" class=\"label\">Title: </label>
                  <input type=\"text\" class=\"title\" id=\"title\" name=\"title\" placeholder=\"movie title...\">
                  <br>";
            echo "<label for=\"year\" class=\"label\">Year: </label>
            <input type=\"text\" class=\"year\" id=\"year\" name=\"year\" placeholder=\"year...\">
            <br>";
            echo "<label for=\"date_of_publishing\" class=\"label\">Date of publishing: </label>
            <input type=\"text\" class=\"date_of_publishing\" id=\"date_of_publishing\" 
            name=\"date_of_publishing\" placeholder=\"date of release...\">
            <br>";
            echo "<label for=\"genre\" class=\"label\">Genre: </label>
            <input type=\"text\" class=\"genre\" id=\"genre\" 
            name=\"genre\">
            <br>";
            echo "<label for=\"duration\" class=\"label\">Duration: </label>
            <input type=\"text\" class=\"duration\" id=\"duration\" 
            name=\"duration\">
            <br>";
            echo "<label for=\"director\" class=\"label\">Director: </label>
            <input type=\"text\" class=\"director\" id=\"director\" 
            name=\"director\">
            <br>";
            echo "<label for=\"writer\" class=\"label\">Writer: </label>
            <input type=\"text\" class=\"writer\" id=\"writer\" 
            name=\"writer\">
            <br>";
            echo "<label for=\"production_com\" class=\"label\">Production company: </label>
            <input type=\"text\" class=\"production_com\" id=\"production_com\" 
            name=\"production_com\">
            <br>";
            echo "<label for=\"description\" class=\"label\">Description: </label>
            <textarea type=\"text\" class=\"description\" id=\"description\" 
            name=\"description\"></textarea>
            <br>";
            echo "<label for=\"rating\" class=\"label\">Rating: </label>
            <input type=\"text\" class=\"rating\" id=\"rating\" 
            name=\"rating\">
            <br>";
            echo "<label for=\"voters\" class=\"label\">Number of voters: </label>
            <input type=\"text\" class=\"voters\" id=\"voters\" 
            name=\"voters\">
            <br>";
            echo "<label for=\"actors\" class=\"label\">List of actors: </label>
            <textarea type=\"text\" class=\"actors\" id=\"actors\" 
            name=\"actors\"></textarea>
            <br>";
            echo "</div>";
            echo "<div class=\"col_image\" style=\"background:none;\">";
            echo "<label for=\"img\" class=\"label\">Img link: </label>
            <input type=\"text\" class=\"img\" id=\"img\" 
            name=\"img\">
            <br>";
            echo "</div>";
            echo "</div>";
            echo "<button type=\"submit\" class=\"preview_movie btn btn-success\">Preview</button>";
            echo "</form>";
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
        <link rel="stylesheet" href="movie.css" type="text/css"<?php echo time(); ?>>
        <link rel="stylesheet" href="movie_1.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script type="text/javascript" src="script_search.js" ></script>
        <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
        <style media="screen">
            .choose{
                margin-left:-60px;
                margin-top:-35px;
            }
            .choose ul li{
                background: #262626;
                width: 170px;
                border: 1px solid #fff;
                height: 35px;
                line-height: 10px;
                text-align: center;
                float: left;
                color: #fff;
                font-size: 14px;
                position: relative;
                top: 20px;
                left: -25px;
                font-family: Arial, Helvetica, sans-serif;
                padding: 10px;
                cursor: pointer;
                list-style:none;
                }
                .choose ul li:hover{
                background: #2F4F4F;
                }
                .choose ul ul{
                display: none;
                }
                .choose ul:hover > ul{
                display: block;
                }
                .choose ul li  > a {
                    text-decoration: none;
                    color: white;
                }
        </style>
</head>
<body>
<?php  echo $delete;  ?>
</body>
</html>