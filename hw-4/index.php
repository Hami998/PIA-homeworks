<?PHP
    session_start();
    $_SESSION;
    include ("connection_database.php");

    if($_REQUEST['REQUEST_METHOD'] = 'POST'){
        if(isset($_POST['name'])){
            $user_name = $_POST['name'];
        }
        if(isset($_POST['surname'])){
            $user_surname = $_POST['surname'];
        }
        if(isset($_POST['nick'])){
            $user_nick = $_POST['nick'];
        }
        if(isset($_POST['email'])){
            $user_email = $_POST['email'];
        } 
        if(isset($_POST['password'])){
            $user_password = $_POST['password'];
        }  
        if(isset($_POST['password_again'])){
            $user_password_again = $_POST['password_again'];
        } 
            $query = "INSERT INTO users (name, last_name, e_mail, nickname, password) VALUES ('$user_name', '$user_surname', 
            '$user_email', '$user_nick', '$user_password')";

            mysqli_query($connected, $query);
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
    <div class="sign_in_modal_bg">
        <div class="sign_in_modal">
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
            <button class="commit btn btn-success" onclick="checkSignIn()">Sign in</button>
            <p class="text">Don't have an account:</p>
            <button class="registration btn btn-success" onclick="openSignUp(); closeSignIn()">Sign Up</button>
        </div>
    </div>
    <div class="sign_up_modal_bg">
            <div class="sign_up_modal">
            <form action="" method="post">
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
                <button type="submit" class="submit_sign_up btn btn-success" onclick="checkSignUp()">Submit</button>
            </form>
            </div>
    </div>

</body>
</html>