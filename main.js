// js code for text typing on HOME section



var typed = new Typed('.text', {
  strings: ['Python Programmer.', 'Web Developer.', 'full-stack developer.'],
  typeSpeed: 80,
  backSpeed: 50,
  backDelay: 1000,
  loop: true
});



var sidemenu = document.getElementById("sidemenu");
function openmenu(){
  sidemenu.style.right = "0"
}

function closemenu(){
  sidemenu.style.right = "-200px"
}