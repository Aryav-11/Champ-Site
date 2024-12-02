// When the user scrolls down from the top of the document, slide down the navbar
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("nav").style.top = "-190px";

    } else {
        document.getElementById("navbar").style.top = "-190px";
        document.getElementById("nav").style.top = "0";
    }
}

function Display_theAnim() {
    document.getElementById('Anim').style.display = "block";
}

function Display_Cut_theAnim() {
    document.getElementById('Anim').style.display = "none";
}
// This is here to check the size of the screen
// function responsive_add() {

//     if (screen.width < 600) {
//         document.getElementById("navbar").style.top = "-190px";
//         document.getElementById("nav").style.top = "-0";
//     } else if (screen.width < 768) {
//         alert(2);
//     } else if (screen.width < 992) {
//         alert(3);
//     } else if (screen.width < 1200) {
//         alert(4);
//     } else if (screen.width > 1200) {
//         alert(5);
//     } else {
//         alert("Not Found");
//     }
// }