// function to play doorbell audio
function ringDoorbell() {
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();
}

(function(){
  if (typeof(document.querySelector)==="undefined") {
    return;
  }

  
})();
