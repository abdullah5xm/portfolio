
let preloader = document.getElementById('loading');

function myFunction() {
  preloader.style.display = 'none';
}

///////  menu
    let n = 0;
    function mnu() {
      if (n == 0) {
        document.getElementById('id1').style.height = '350px';
        document.getElementById('id2').innerHTML =
        '<i class="fas fa-times"></i>';

        n = 1;
      } else if (n == 1) {
        document.getElementById('id1').style.height = '70px';
        document.getElementById('id2').innerHTML =
        '<i class="fas fa-hamburger"></i>';
        n = 0;
      }
    }