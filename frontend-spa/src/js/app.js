import home from "./home.js";
import header from "./header.js";
import footer from './footer.js';
import albumView from "./albumView.js";
import {
    modals,
    albumEditTitleModal
} from "./modal.js";
import {
    albums
} from "./albumsJson.js";
import {
    songs
} from "./songsJson.js";
import songView from "./songView.js";


const containerEL = document.querySelector(".container");

function makeHomeView() {
    fetch("http://localhost:8080/albums")
        .then(res => res.json())
        .then(albums => {
            makeHomeViewFromJson(albums)
        }).then(() => {
            modals('addNewAlbum')

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

            fetch("http://localhost:8080/albums/" + albumIdEl.value, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(newAlbums => {
                    makeHomeView();
                })
        })

        // albumEditTitleModal("editBtn")
        
        const editBtn = album.querySelector(".updateBtn");
        editBtn.addEventListener("click", () => {
            const updateInput = album.querySelector(".update-album-title");
            if(updateInput.value != ""){
            
            fetch("http://localhost:8080/albums/" + albumIdEl.value, {
                    method: "PATCH",
                    body: updateInput.value
                })
                .then(res => res.json())
                .then(newAlbums => {
                    makeHomeViewFromJson(newAlbums);
                })
            }
        })
    
    })
    const albumTitleInput = containerEL.querySelector(".album-title");
    const imageUrlInput = containerEL.querySelector(".ImgUrl");
    const recordLabelInput = containerEL.querySelector(".company");
    const addAlbumBtn = containerEL.querySelector(".addAlbumSubmitBtn");
    addAlbumBtn.addEventListener("click", () => {
        if (albumTitleInput.value != "" && imageUrlInput.value != "" && recordLabelInput.value != "") {
            const newAlbumJson = {
                "title": albumTitleInput.value,
                "imageUrl": imageUrlInput.value,
                "recordLabel": recordLabelInput.value,
            }
            fetch(`http://localhost:8080/albums/addAlbum`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newAlbumJson)
                })
                .then(res => res.json())
                .then(album => {
                    makeHomeView(album);
                })
        }
        //This is where we put a message of what we want them to do
        // else{

        // }

    })
}


function makeAlbumView(album) {
    containerEL.innerHTML = header();
    containerEL.innerHTML += albumView(album);
    containerEL.innerHTML += footer();

    bindSongViewFromJson(album);

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

            if (songTitleInput.value != "" && songUrlInput.value != "" && durationInput.value != "" && artistNameInput.value != ""){
                const newSongJson = {
                    "title": songTitleInput.value,
                    "link": songUrlInput.value,
                    "duration": durationInput.value,
                    "artist": artistNameInput.value,
                    "comments": []
                }
            fetch(`http://localhost:8080/albums/${album.id}/addSong`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newSongJson)
                })
                .then(res => res.json())
                .then(album => {
                    makeAlbumView(album);

                })
        }
    })

const albumCmtBtn = containerEL.querySelector(".albumSubmitBtn");
const authorInput = containerEL.querySelector("#nameInput");
const ratingInput = containerEL.querySelector("#ratingInput");
const commentInput = containerEL.querySelector("#commentInput");
albumCmtBtn.addEventListener("click", () => {
    if(authorInput.value!="" && ratingInput.value!="" && commentInput.value!=""){
    const newCommentJson = {
        "author": authorInput.value,
        "rating": ratingInput.value,
        "comment": commentInput.value
    }
    fetch(`http://localhost:8080/albums/${album.id}/addComment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCommentJson)
        })
        .then(res => res.json())
        .then(newComment => {
            makeAlbumView(newComment);
        })
    }
})

}



function bindSongViewFromJson(album) {


    const cardEl = containerEL.querySelectorAll(".song");
    cardEl.forEach(song => {
        let songIdEl = song.querySelector(".songId_field");
        const songH1 = song.querySelector(".songTitle");
        songH1.addEventListener("click", () => {
            album.songs.forEach(songJson => {
                if (songJson.id == songIdEl.value) {

                    makeSongView(songJson, album);
                }
            })
        })

        const editSongBtn = song.querySelector(".updateSongBtn");
        editSongBtn.addEventListener("click", () => {
            const updateSongInput = song.querySelector(".update-song-title");
            if(updateSongInput.value!=""){
            fetch("http://localhost:8080/songs/" + songIdEl.value, {
                    method: "PATCH",
                    body: updateSongInput.value
                })
                .then(res => res.json())
                .then(newSongs => {
                    makeAlbumView(newSongs);
                })
            }
        })


        // This will be for the delete song button. Need to finish
        const deleteSongBtn = song.querySelector(".deleteBtn")
        deleteSongBtn.addEventListener("click", () => {
            fetch("http://localhost:8080/songs/" + songIdEl.value, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(newSongs => {
                    makeAlbumView(newSongs);
                })
        })
    })
}

function makeSongView(songJson, albumJson) {
    containerEL.innerHTML = header();
    containerEL.innerHTML += songView(songJson, albumJson);
    containerEL.innerHTML += footer();

    const backBtn = containerEL.querySelector(".backBtn");
    backBtn.addEventListener("click", () => {
        makeAlbumView(albumJson);
    })
    const songCmtBtn = containerEL.querySelector(".songReviewSubmitBtn");
    const songAuthorInput = containerEL.querySelector("#nameInput");
    const songRatingInput = containerEL.querySelector("#ratingInput");
    const songCommentInput = containerEL.querySelector("#commentInput");
    songCmtBtn.addEventListener("click", () => {
       if(songAuthorInput.value!=""&& songRatingInput.value!="" && songCommentInput.value!="" ){
        const newSongCommentJson = {
            "author": songAuthorInput.value,
            "rating": songRatingInput.value,
            "comment": songCommentInput.value
        }
        fetch(`http://localhost:8080/songs/${songJson.id}/addComment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newSongCommentJson)
            })
            .then(res => res.json())
            .then(newAlbums => {
                newAlbums.forEach(album => {
                    album.songs.forEach(song => {
                        if (song.id == songJson.id) {
                            makeSongView(song, album)
                        }
                    })
                })
            })
        }
    })


}