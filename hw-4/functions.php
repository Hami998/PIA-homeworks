<?php
function check_login($connected){
    if (isset($_SESSION['log-in']) && $_SESSION['log-in'] == true) {
        echo "Welcome to the member's area, ";
    } else {
        echo "Please log in first to see this page.";
        header("Location: index.php");
    }
}

?>