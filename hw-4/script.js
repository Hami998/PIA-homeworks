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