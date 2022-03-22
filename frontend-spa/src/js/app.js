import home from "./home.js";
import header from "./header.js";
import footer from './footer.js';
import albumView from "./albumView.js";
import {modals, albumEditTitleModal} from "./modal.js";
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
            modals('addNewAlbum');

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

        // albumEditTitleModal("editBtn")
        const editBtn = album.querySelector(".updateBtn");
        editBtn.addEventListener("click", () =>{
            const updateInput = album.querySelector(".update-album-title");
            fetch("http://localhost:8080/albums/" + albumIdEl.value, {
                method: "PATCH",
                body: updateInput.value
            })
           .then(res => res.json())
           .then(newAlbums => {
               makeHomeViewFromJson(newAlbums);
           })
        })

    })
    const albumTitleInput = containerEL.querySelector(".album-title");
    const imageUrlInput = containerEL.querySelector(".ImgUrl");
    const recordLabelInput = containerEL.querySelector(".company");
    const addAlbumBtn = containerEL.querySelector(".addAlbumSubmitBtn");
    addAlbumBtn.addEventListener("click", () => {
        const newAlbumJson = {
            "title": albumTitleInput.value,
        "imageUrl": imageUrlInput.value,
        "recordLabel": recordLabelInput.value,
        }
        fetch (`http://localhost:8080/albums/addAlbum`, {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(newAlbumJson)
        })
        .then (res => res.json())
        .then (album => {
            makeHomeView(album);
        })
    
    })
}

function makeAlbumView(album) {
    containerEL.innerHTML = header();
    containerEL.innerHTML += albumView(album);
    containerEL.innerHTML += footer();

    const backBtn = containerEL.querySelector(".backBtn");
    backBtn.addEventListener("click", () => {
        makeHomeView();
    })
    modals('addNewSong');

    const songTitleInput = containerEL.querySelector(".song-title");
    const songUrlInput = containerEL.querySelector(".songUrl");
    const durationInput = containerEL.querySelector(".duration");
    const artistNameInput = containerEL.querySelector(".artistName")
    const addNewSongBtn = containerEL.querySelector(".addNewSongBtn");
    addNewSongBtn.addEventListener("click", () => {
        const newSongJson = {
            "title": songTitleInput.value,
            "link": songUrlInput.value,
            "duration": durationInput.value,
            "artist": artistNameInput.value,
        }
        fetch (`http://localhost:8080/albums/${album.id}/addSong`, {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(newSongJson)
        })
        .then (res => res.json())
        .then (album => {
            makeHomeView(album);
        })
    
    })

}