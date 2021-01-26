<?php
session_start();
include ("connection_database.php");
function check_login($connected){
    $query_1 = "SELECT e_mail, active FROM users;";
    $result_1 = mysqli_query($connected, $query_1);
    $active_status = '';
    $email = $_SESSION['user_email'];
    while($row = mysqli_fetch_array($result_1)){ 
        if($email === $row['e_mail']){
            $active_status =  $row['active'];
          //  echo $active_status;
        }
    }
    if ($active_status == 1) {
     } else {
         echo "Please log in first to see this page.";
         header("Location: index.php");
     }
}
if(isset($_GET['rating'])){
    $rating = $_GET['rating'];
    $title = $_GET['title_1'];
    $e_mail = $_SESSION['user_email'];
    $query_1=("SELECT imdb_id FROM movie_list WHERE title='$title'");
    $result = mysqli_query($connected, $query_1); 
    $row = mysqli_fetch_array($result);  
    $query = "INSERT INTO movie_rating (e_mail, title, rating) VALUES ('$e_mail', '$title', 
            '$rating')";
    mysqli_query($connected, $query);   
    $query_2=("SELECT avg_votes, votes FROM movie_list WHERE title='$title'");
    $result = mysqli_query($connected, $query_2); 
    $row_1 = mysqli_fetch_array($result);
    $new_votes = $row_1['votes'] + 1;
    $new_avg_votes = $row_1['avg_votes'] + ($rating/$new_votes);
    $new_avg_votes_rounded = number_format($new_avg_votes, 2);
    $query_3 = ("UPDATE movie_list SET avg_votes=$new_avg_votes_rounded, votes=$new_votes WHERE title='$title';");
    mysqli_query($connected, $query_3);   
    header("Location: movie.php?id=". $row['imdb_id']);
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
if(isset($_GET['log_off'])){
    $query_1 = "SELECT e_mail, active FROM users;";
    $result_1 = mysqli_query($connected, $query_1);
    while($row = mysqli_fetch_array($result_1)){ 
        $email = $row['e_mail'];
        if($row['active'] == 1){
            $query = "UPDATE users SET active='0' WHERE e_mail='$email'";
            $result = mysqli_query($connected, $query);
        }
    }
    header("Location: index.php");
}
?>