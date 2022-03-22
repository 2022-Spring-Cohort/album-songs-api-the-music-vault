export default function albumView(album) {
    console.log(album);
    return `
<main class="main">
        <h2 class="albumTitle">${album.title}</h2>
        <img class="backBtn" src="./images/backBtn.png" alt="back button"> 
        <div class="allSongs">
            <article class="flip-card song" >
        
                <section class="inner">
                    <div class="card-front song-front">
                        <img src="${album.imageUrl}" alt="Avatar" style="width:300px;height:300px;">
                    </div>
                    <section class="card-back song-back">
                    ${

                        album.songs.map(song => {
                            return `<h1 class="songTitle">${song.title}</h1>
                            <p class="artistLabel">${song.artist}</p>
                            <p class="durationLabel">${song.duration}</p>
                            <a class="linkLabel" href="${song.link}">Click Here To Listen</a>
                            <input type="hidden" class="songId_field" value="${song.id}" > `;
                        }).join("")
                    }
                    <div class="updateIcon">
                    <input type="text" class="update-song-title" placeholder="Edit Album Title" />
                    <button class="updateSongBtn" type="submit">Submit</button>
                    <img class="deleteBtn" src="./images/delete.png" alt="delete icon">
                </div>
                    </section>
                </section>
            </article>

            <div id="myModal" class="modal">
            <!-- Modal content -->
            <div class="modal-content">
              <span class="close">&times;</span>
               <input type="text" class="song-title" placeholder="Song Title" /><br>
                <input type="text" class="songUrl" placeholder="Song URL" /><br>
                <input type="text" class="duration" placeholder="Song Duration" /><br>
                <input type="text" class="artistName" placeholder="Artist Name" /><br>
                <button class="addNewSongBtn" type="submit">Submit</button>
            </div>
        </div>
            <article class="addNewSong" id="addNewSong">
                <section class="addSong">
                    <img src="./images/plus.png" alt="Avatar" style="height: 3cm;">
                </section>
                <h3>Add New Song</h3>
            </article>
        </div>
    </main>
    `;
}