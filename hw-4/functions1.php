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

?>