
export function modal(idName){
  console.log(1243)
  //adding a song
  const modal = document.getElementById("myModal");

  // Get the button that opens the modal
  const btn = document.getElementById(idName);


  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}


// export function albumEditTitleModal(idName){
//   console.log(1243)
//   //adding a song
//   const modal = document.getElementById("editAlbumTitle");

//   // Get the button that opens the modal
//   const btn1 = document.getElementById(idName);


//   // Get the <span> element that closes the modal
//   const span = document.getElementsByClassName("close")[0];

//   // When the user clicks the button, open the modal 
//   btn1.onclick = function() {
//     modal.style.display = "block";
//   }

//   // When the user clicks on <span> (x), close the modal
//   span.onclick = function() {
//     modal.style.display = "none";
//   }

//   // When the user clicks anywhere outside of the modal, close it
//   window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   }
// }
