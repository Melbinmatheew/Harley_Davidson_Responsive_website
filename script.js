let toggleLogo = document.querySelector('.toggle-logo');
let menu = document.querySelector('.menu');


toggleLogo.addEventListener('click', function () {
  menu.classList.toggle('is-active');
  closeMenuButton.style.display = 'block'; // Show the close button
});



