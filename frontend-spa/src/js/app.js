import home from "./home.js";
import header from "./header.js";
import footer from './footer.js';
import albumView from "./albumView.js";
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


            const btn1 = document.querySelector("#addNewAlbum");
            console.log(containerEL);
            console.log(btn1);
            const modal = document.getElementById("myModal");
            modal.style.display = "none";
            btn1.addEventListener("click", () => {
               
                const span = document.getElementsByClassName("close")[0];
                
                btn1.onclick = function() {
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
            })

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

        const editBtn = album.querySelector("editBtn")

    })





}

function makeAlbumView(album) {
    containerEL.innerHTML = header();
    containerEL.innerHTML += albumView(album);
    containerEL.innerHTML += footer();

}