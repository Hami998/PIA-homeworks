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
    // if(isset($_POST['title'])){
    //     $title = "";
    //     $title = $_POST['title'];
    //     echo $title;
    // }
    // if(isset($_POST['title'])and isset($_POST['year']) and isset($_POST['date_of_publishing']) and isset($_POST['genre']) 
    // and isset($_POST['duration']) and isset($_POST['director']) and isset($_POST['writer'])
    // and isset($_POST['production_com']) and isset($_POST['description']) 
    // and isset($_POST['rating']) and isset($_POST['voters']) and isset($_POST['actors']) and isset($_POST['img']))
    // {
    //     echo "Sve je dobro proslo";
    // }
    // else {
    //     echo "Nije uspesno proslo";
    // }
?>