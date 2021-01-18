<?php
include ("connection_database.php");
function check_login($connected){
    if (isset($_SESSION['log-in']) && $_SESSION['log-in'] == true) {
        echo "Welcome to the member's area, ";
    } else {
        echo "Please log in first to see this page.";
        header("Location: index.php");
    }
}
if(isset($_GET['title'])){
    $title = $_GET['title'];
    $query = "DELETE FROM movie_list WHERE title='$title'";
    $result = mysqli_query($connected, $query);
    if($result){
        echo"Delated from database";
    }
    header("Location: result.php");
}
// if($title){

// }
?>