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
        })
}
makeHomeView();


function makeHomeViewFromJson(albums) {
    containerEL.innerHTML = header();
    containerEL.innerHTML += home(albums);
    containerEL.innerHTML += footer();

    const flipCardEl = containerEL.querySelectorAll(".flip-card");

    flipCardEl.forEach(album =>{
        let albumIdEl = album.querySelector(".id_field");
        const albumH1 = album.querySelector(".albumTitle");
        albumH1.addEventListener("click", () =>{
            albums.forEach(albumsJson => {
                if(albumsJson.id == albumIdEl.value){
                    makeAlbumView(albumsJson);
                }
            })
        })
})
}
function makeAlbumView(album){
    containerEL.innerHTML = header();
    containerEL.innerHTML += albumView(album);
    containerEL.innerHTML += footer();

}


