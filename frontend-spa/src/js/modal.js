
export function modals(idName){
  //adding a song
  const modal = document.getElementById("myModal");

  // Get the button that opens the modal
  const btn = document.getElementById(idName);


  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName("close")[0];
  
  btn.onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}





