<?php
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