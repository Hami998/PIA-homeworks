// funkcije za otvaranje formi
function openSignIn() {
        $(".sign_in_modal_bg").addClass("sign_in_modal_bg_active");
}
function closeSignIn() {
    $(".sign_in_modal_bg").removeClass("sign_in_modal_bg_active");
}
function openSignUp() {
    $(".sign_up_modal_bg").addClass("sign_up_modal_bg_active");
    $("#name").val("");
    $("#surname").val("");
    $("#nick").val("");
    $("#email").val("");
    $("#password").val("");
    $("#password_again").val("");
}
function closeSignUp() {
$(".sign_up_modal_bg").removeClass("sign_up_modal_bg_active");
}
//funkcije za proveru inputa
let name = "";
let surname = "";
let nick = "";
let email = "";
let password = "";
let passwordAgain = "";
function checkSignUp(){
    name = $("#name").val();
    surname = $("#surname").val();
    nick = $("#nick").val();
    email = $("#email").val();
    password = $("#password_1").val();
    passwordAgain = $("#password_again").val();
    // let pattern = /^[A-Z]{1}[a-z]*$/;
    let pattern_0 = /^\s*$/;
    let pattern_1 = /^[A-Z]{1}/;
    let pattern_2 = /^[A-Z]{1}[a-z]*$/;
    let pattern_3 = /^[a-zA-Z0-9]*$/;
    let pattern_4 = /^[a-zA-Z]{1}[a-zA-Z0-9]*@gmail.com$/;
    let pattern_5 = /[A-Z]/;
    let pattern_6 = /[a-z]/;
    let pattern_7 = /[0-9]/;
    let checkName_0 = pattern_0.exec(name);
    let checkName_1 = pattern_1.exec(name);
    let checkName_2 = pattern_2.exec(name);
    let checkSurname_0 = pattern_0.exec(surname);
    let checkSurname_1 = pattern_1.exec(surname);
    let checkSurname_2 = pattern_2.exec(surname);
    let checkNick_0 = pattern_0.exec(nick);
    let checkNick_1 = pattern_3.exec(nick);
    let checkEmail_0 = pattern_0.exec(email);
    let checkEmail_1 = pattern_4.exec(email);
    let checkPassword_1 = pattern_0.exec(password);
    let checkPassword_2 = pattern_5.exec(password);
    let checkPassword_3 = pattern_6.exec(password);
    let checkPassword_4 = pattern_7.exec(password);
    let checkCorrectPassword = password.localeCompare(passwordAgain);
    if(checkName_0){
        alert("You should enter your first name");
        $("#name").val("");
        return;
    }
    if(!checkName_1){
        alert("You should enter your first name with capital letters");
        $("#name").val("");
        return;
    }
    if(!checkName_2){
        alert("You didn't wrote your name correctly");
        $("#name").val("");
        return;
    }
    if(checkSurname_0){
        alert("You should enter your last name");
        $("#surname").val("");
        return;
    }
    if(!checkSurname_1){
        alert("You should enter your last name with capital letters");
        $("#surname").val("");
        return;
    }
    if(!checkSurname_2){
        alert("You didn't wrote your last name correctly");
        $("#surname").val("");
        return;
    }
    if(checkNick_0){
        alert("You should enter your nick, length should be less then 12 letters");
        $("#nick").val("");
        return;
    }
    if(!checkNick_1){
        alert("You nick should include only letters and numbers, no space");
        $("#nick").val("");
        return;
    }
    if(checkEmail_0){
        alert("You should enter your email");
        $("#email").val("");
        return;
    }
    if(!checkEmail_1){
        alert("You should enter your email in format johnsmith990@gmail.com");
        $("#email").val("");
        return;
    }
    if(checkPassword_1){
        alert("You should enter password, it should contain capital and small letters and numbers");
        $("#password_1").val("");
        return;
    }
    if(!checkPassword_2){
        alert("Password is weak, it should contain capital letters");
        $("#password_1").val("");
        return;
    }
    if(!checkPassword_3){
        alert("Password is weak, it should contain small letters");
        $("#password_1").val("");
        return;
    }
    if(!checkPassword_4){
        alert("Password is weak, it should contain numbers");
        $("#password_1").val("");
        return;
    }
    if(checkCorrectPassword == 1 || checkCorrectPassword == -1){
        alert("Password doesn't match");
        $("#password_again").val("");
        return;
    }
}