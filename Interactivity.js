// function toggleMenu() {
//     var menu = document.querySelector('.ham-menu');
//     menu.classList.toggle('active');
// }
// document.getElementById('ham-menu').addEventListener('click', function() {
//     var sidebar = document.getElementById('sidebar');
//     if (sidebar.style.left === "-300px") {
//       sidebar.style.left = "0";
//     } else {
//       sidebar.style.left = "-300px";
//     }
// });

function toggleMenu() {
    var menu = document.getElementById('ham-menu');
    var sidebar = document.getElementById('sidebar');

    menu.classList.toggle('active');

    if(sidebar.style.left === "-400px" || sidebar.style.left === "") {
        sidebar.style.left = "0";
    } else {
        sidebar.style.left = "-400px";
    }
}