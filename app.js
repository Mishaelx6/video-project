// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const video = document.querySelector(".video-container");
const buttons = document.querySelector('.switch-btn');

buttons.addEventListener("click", function(){

  if(!buttons.classList.contains("slide")){
    buttons.classList.add("slide");
    video.play()
  }
  else {
        buttons.classList.remove("slide");
        video.pause()
  }
})

const preloader = document.querySelector(".preloader");
window.addEventListener("load", function(){
setTimeout(function () {
  preloader.classList.add("hide-preloader")

}, 1000);

})
