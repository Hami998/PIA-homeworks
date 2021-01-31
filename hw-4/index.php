<?PHP
    session_start();
    $_SESSION;
    include ("connection_database.php");
    if($_REQUEST['REQUEST_METHOD'] = 'POST'){
        if(isset( $_POST['submit']))
        {
            $user_name = ucfirst(strtolower($_POST['name']));
            $user_surname = ucfirst(strtolower($_POST['surname']));
            $user_nick = $_POST['nick'];
            $user_email = $_POST['email'];
            $user_password = $_POST['password'];
            $user_password_again = $_POST['password_again'];
            if(empty($user_name)){
                header("Location: index.php?error=1");
                exit();
            }
            if(empty($user_surname)){
                header("Location: index.php?error=2");
                exit();
            }
            if(empty($user_nick)){
                header("Location: index.php?error=3");
                exit();
            }
            if(empty($user_email)){
                header("Location: index.php?error=4");
                exit();
            }
            if(empty($user_password)){
                header("Location: index.php?error=5");
                exit();
            }
            if(empty($user_password_again)){
                header("Location: index.php?error=6");
                exit();
            }
            if(!(preg_match ("/^[A-Z]{1}[a-z]*$/", $user_name))){
                header("Location: index.php?error=7");
                exit();
            }
            if(!(preg_match ("/^[A-Z]{1}[a-z]*$/", $user_surname))){
                header("Location: index.php?error=8");
                exit();
            }
            if(strlen($user_nick) > 12){
                header("Location: index.php?error=9");
                exit();
            }
            if(!(preg_match ("/^[a-zA-Z0-9]*$/", $user_nick))){
                header("Location: index.php?error=10");
                exit();
            }
            if(!(preg_match ("/^[a-zA-Z]{1}[a-zA-Z0-9]*@gmail.com$/", $user_email))){
                header("Location: index.php?error=11");
                exit();
            }
            if(!(preg_match ("/^[a-zA-Z0-9]*$/", $user_password))){
                header("Location: index.php?error=12");
                exit();
            }
            if(!(preg_match ("/[A-Z]/", $user_password))){
                header("Location: index.php?error=13");
                exit();
            }
            if(!(preg_match ("/[a-z]/", $user_password))){
                header("Location: index.php?error=14");
                exit();
            }
            if(!(preg_match ("/[0-9]/", $user_password))){
                header("Location: index.php?error=15");
                exit();
            }
            if(!($user_password === $user_password_again)){
                header("Location: index.php?error=16");
                exit();
            }
            $query_0 = "SELECT name, last_name, e_mail FROM users;";
            $result = mysqli_query($connected, $query_0);
            $check = 0;
            while($row = mysqli_fetch_array($result)){
                if($user_name  == $row['name'] && $user_surname == $row['last_name']){
                    header("Location: index.php?error=17");
                    exit();
                }
               if($user_email == $row['e_mail']){
                header("Location: index.php?error=18");
                exit();
               }
            }
            $query = "INSERT INTO users (name, last_name, e_mail, nickname, password) VALUES ('$user_name', '$user_surname', 
            '$user_email', '$user_nick', '$user_password')";

            mysqli_query($connected, $query);                
        }
            //log in
            else if(isset($_POST['commit']))
            {
                $user_name_or_email = $_POST['name_or_email'];
                $user_password = $_POST['password'];
                if(empty($user_name_or_email)){
                    header("Location: index.php?error=19");
                    exit();
                }
                if(empty($user_password)){
                    header("Location: index.php?error=20");
                    exit();
                }
                $query_2 = "SELECT reg_or_ad, name, last_name, e_mail, password FROM users;";
                $result = mysqli_query($connected, $query_2);
                $ckeck_1 = 0;
                while($row = mysqli_fetch_array($result)){
                    $row_name = $row['name'];
                    $row_last_name = $row['last_name'];
                    $row_full_name = $row_name." ".$row_last_name;
                    $admin = $row['reg_or_ad'];
                    if($user_name_or_email == $row_full_name or $user_name_or_email == $row['e_mail']){
                        if($user_password == $row['password']){
                            $user_active = 1;
                            $email = $row['e_mail'];
                            $query_3 = "UPDATE users SET active='1' WHERE e_mail='$email'";
                            $result = mysqli_query($connected, $query_3);
                            echo "User is in sistem";
                            $ckeck_1 = 1;
                            $_SESSION['user'] = $row_full_name;
                            $_SESSION['user_email'] = $row['e_mail'];
                            if($admin == 1){
                            $_SESSION['admin'] = $admin;   
                            }
                            else{
                            $_SESSION['admin'] = $admin; 
                            }
                            header("Location: search.php");
                        }
                    }
                }
                if($ckeck_1 == 0){
                    header("Location: index.php?error=21");
                    exit();
                }
                else{
                    $ckeck_1 = 0;
                }
            }
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
        <link rel="stylesheet" href="style.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script type="text/javascript" src="script.js" ></script>
        <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
</head>
<body>
    <div class="buttons">
    <button class="sign_in btn btn-success" onclick="openSignIn()">Sign in</button>
    <button class="sign_up btn btn-success" onclick="openSignUp()">Sign Up</button>
    </div>
    <?php
            if(empty( $_GET["error"])){
                echo "";
            }
            if(isset($_GET["error"])){
                $error_code = $_GET["error"];
            }
            else{
                $error_code = "";
            }
            if($error_code === "1"){
                echo "<p class=\"error_text\">Name field is empty</p>";
            }
            else if($error_code === "2"){
                echo "<p class=\"error_text\">Last name field is empty</p>";
            }
            else if($error_code === "3"){
                echo "<p class=\"error_text\">Nick field is empty</p>";
            }
            else if($error_code === "4"){
                echo "<p class=\"error_text\">E mail field is empty</p>";
            }
            else if($error_code === "5"){
                echo "<p class=\"error_text\">Password field is empty</p>";
            }
            else if($error_code === "6"){
                echo "<p class=\"error_text\">Password field is empty</p>";
            }
            else if($error_code === "7"){
                echo "<p class=\"error_text\">You didn't wrote your name correctly</p>";
            }
            else if($error_code === "8"){
                echo "<p class=\"error_text\">You didn't wrote your last name correctly</p>";
            }
            else if($error_code === "9"){
                echo "<p class=\"error_text\">Nick should be name shorter than 12 letters</p>";
            }
            else if($error_code === "10"){
                echo "<p class=\"error_text\">Nick should include only letters and numbers, without spaces</p>";
            }
            else if($error_code === "11"){
                echo "<p class=\"error_text\">You should enter your email in format johnsmith990@gmail.com</p>";
            }
            else if($error_code === "12"){
                echo "<p class=\"error_text\">You should enter password,
                it should contain capital and small letters and numbers</p>";
            }
            else if($error_code === "13"){
                echo "<p class=\"error_text\">Password is weak, it should contain capital letters</p>";
            }
            else if($error_code === "14"){
                echo "<p class=\"error_text\">Password is weak, it should contain small letters</p>";
            }
            else if($error_code === "15"){
                echo "<p class=\"error_text\">Password is weak, it should contain numbers</p>";
            }
            else if($error_code === "16"){
                echo "<p class=\"error_text\">Password doesn't matchs</p>";
            }
            else if($error_code === "17"){
                echo "<p class=\"error_text\">User already exist</p>";
            }
            else if($error_code === "18"){
                echo "<p class=\"error_text\">E mail already exist</p>";
            }
            else if($error_code === "19"){
                echo "<p class=\"error_text\">You should enter name or e mail</p>";
            }
            else if($error_code === "20"){
                echo "<p class=\"error_text\">You should enter a password</p>";
            }
            else if($error_code === "21"){
                echo "<p class=\"error_text\">You didn't enter name, email or password correctly</p>";
            }
    ?>
    <div class="sign_in_modal_bg">
        <div class="sign_in_modal">
            <form action="" method="post" class="forma_1">
            <div class="title_bg">
                <h3 class="title">Sign in</h3>
            </div>
            <div class="exit">
                <span class="modal_close" onclick="closeSignIn()">X</span>
            </div>
            <label for="name_or_email" class="label">Enter name or email: </label>
            <input type="text" class="name_or_email input" id="name_or_email" name="name_or_email" placeholder="Name or email">
            <label for="password" class="label">Enter password: </label>
            <input type="password" class="password input" id="password" name="password" placeholder="password">
            <button class="commit btn btn-success" name="commit">Sign in</button>
            </form>
            <p class="text">Don't have an account:</p>
            <button class="registration btn btn-success" onclick="openSignUp(); closeSignIn()">Sign Up</button>
        </div>
    </div>
    <div class="sign_up_modal_bg">
            <div class="sign_up_modal">
            <form action="" method="post" class="forma" id="forma">
            <div class="title_bg">
                    <h3 class="title">Sign Up</h3>
                </div>
                <div class="exit">
                    <span class="modal_close" onclick="closeSignUp()">X</span>
                </div>
                <label for="name" class="label">Enter name: </label>
                <input type="text" class="name input" id="name" name="name" placeholder="John">
                <label for="surname" class="label">Enter surname: </label>
                <input type="text" class="surname input" id="surname" name="surname" placeholder="Smith">
                <label for="nick" class="label">Enter nick: </label>
                <input type="text" class="nick input" id="nick" name="nick" placeholder="" maxlength="12">
                <label for="email" class="label">Enter email: </label>
                <input type="text" class="email input" id="email" name="email" placeholder="johnsmith@gmail.com">
                <label for="password" class="label">Enter password: </label>
                <input type="password" class="password input" id="password_1" name="password" placeholder="">
                <label for="password_again" class="label">Confirm password: </label>
                <input type="password" class="password password_again input" id="password_again" name="password_again" placeholder="">
                <button type="submit" name="submit" class="submit_sign_up btn btn-success">Submit</button>
            </form>
            </div>
    </div>
</body>
</html>