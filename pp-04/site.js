// function to play doorbell audio
function ringDoorbell() {
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();
}

(function(){
  // check browser quality
  if (typeof(document.querySelector)==="undefined") {
    return;
  }
  // replace the HTML in <figure> element with new code to create a button
  document.querySelector("#bell-sound").innerHTML = "<button id='bell-button'>Ring the Doorbell</button>"
  // add event listener that will play audio when button is clicked by calling rinDoorbell function
  document.querySelector("#bell-button").addEventListener("click",ringDoorbell)
})(); // end of function()
