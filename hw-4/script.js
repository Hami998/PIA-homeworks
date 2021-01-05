// funkcije za otvaranje formi
function openSignIn() {
        $(".sign_in_modal_bg").addClass("sign_in_modal_bg_active");
}
function closeSignIn() {
    $(".sign_in_modal_bg").removeClass("sign_in_modal_bg_active");
}
function openSignUp() {
    $(".sign_up_modal_bg").addClass("sign_up_modal_bg_active");
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
    password = $("#password").val();
    passwordAagain = $("#password_again").val();
    // let pattern = /^[A-Z]{1}[a-z]*$/;
    let pattern_0 = /^\s*$/;
    let pattern_1 = /^[A-Z]{1}/;
    let pattern_2 = /^[A-Z]{1}[a-z]*$/;
    let pattern_3 = /^[a-zA-Z0-9]*$/;
    let checkName_0 = pattern_0.exec(name);
    let checkName_1 = pattern_1.exec(name);
    let checkName_2 = pattern_2.exec(name);
    let checkSurname_0 = pattern_0.exec(surname);
    let checkSurname_1 = pattern_1.exec(surname);
    let checkSurname_2 = pattern_2.exec(surname);
    let checkNick_0 = pattern_0.exec(nick);
    let checkNick_1 = pattern_3.exec(nick);
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
}