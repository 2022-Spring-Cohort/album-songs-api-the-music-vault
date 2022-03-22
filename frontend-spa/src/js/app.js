import home from "./home.js";
import header from "./header.js";
import footer from './footer.js';
import albumView from "./albumView.js";
import {modal} from "./modal.js";
import {
    albums
} from "./albumsJson.js";

const containerEL = document.querySelector(".container");
function makeHomeView() {
    fetch("http://localhost:8080/albums")
        .then(res => res.json())
        .then(albums => {
            makeHomeViewFromJson(albums)
        }).then(() => {
            modal('addNewAlbum');
            // const modalEl = document.getElementById("myModal");
            // modalEl.style.display = "none";
            // btn1.addEventListener("click", () => {
               
            //     const span = document.getElementsByClassName("close")[0];
            
            //     modal('addNewAlbum');
                
                // btn1.onclick = function() {
                //   modal.style.display = "block";
                // }

                // // When the user clicks on <span> (x), close the modal
                // span.onclick = function() {
                //     modal.style.display = "none";
                // }

                // // When the user clicks anywhere outside of the modal, close it
                // window.onclick = function(event) {
                //     if (event.target == modal) {
                //         modal.style.display = "none";
                //     }
                // }
            // })

        })
}
makeHomeView();




function makeHomeViewFromJson(albums) {
    containerEL.innerHTML = header();
    containerEL.innerHTML += home(albums);
    containerEL.innerHTML += footer();

    const flipCardEl = containerEL.querySelectorAll(".flip-card");
    flipCardEl.forEach(album => {
        let albumIdEl = album.querySelector(".id_field");
        const albumH1 = album.querySelector(".albumTitle");
        albumH1.addEventListener("click", () => {
            albums.forEach(albumsJson => {
                if (albumsJson.id == albumIdEl.value) {
                    makeAlbumView(albumsJson);
                }
            })
        })

        const deleteBtn = album.querySelector(".deleteBtn")
        deleteBtn.addEventListener("click", () => {
            console.log(123)
            fetch("http://localhost:8080/albums/" + albumIdEl.value, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(newAlbums => {
                makeHomeViewFromJson(newAlbums);
            })
        })

    
        // const editBtn = album.querySelector(".editBtn");
        // editBtn.addEventListener("click", () =>{
        //     console.log(123454454545)
        //     albumEditTitleModal("editBtn")
        // })

    })
}

function makeAlbumView(album) {
    containerEL.innerHTML = header();
    containerEL.innerHTML += albumView(album);
    containerEL.innerHTML += footer();

}