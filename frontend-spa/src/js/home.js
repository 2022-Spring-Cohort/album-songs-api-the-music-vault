export default function home(albums) {

    return `
    <main class="main">
            <h1 class="album">Albums in the Vault</h1>
            <div class="allAlbums">
                ${albums.map(album => {
                return ` 
           
                <div class= "flipcardContainer">
                    <article class="flip-card">
                        <section class="inner">
                            <div class="card-front">
                                <img src="${album.imageUrl}" alt="Avatar" style="width:300px;height:300px;">
                            </div>
                            <section class="card-back">
                                <h1 class="albumTitle">${album.title}</h1>
                                <h1 class="averageAlbumRating">Album Rating:<br>${album.averageAlbumRating}</h1>
                                <input type="hidden" class="id_field" value="${album.id}" > 
                                <p class="recordLabel">Record Label:<br>${album.recordLabel}</p>
                                <div class="updateIcon">
                                     <input type="text" class="update-album-title" placeholder="Edit Album Title" />
                                    <button class="updateBtn">Submit</button>
                                    <img class="deleteBtn" src="./images/delete.png" alt="delete icon">
                                </div>
                            </section>
                        </section>
                    </article>
                    </div>`
                }).join("")
                }
                <article class="addNewAlbum" id="addNewAlbum">
                    <section class="addAlbum">
                        <img src="./images/plus.png" alt="Avatar" style="height: 3cm;">
                    </section>
                    <h3>Add New Album</h3>
                </article>

                <div id="myModal" class="modal">
                    <div class="modal-content">
                    <span class="close">&times;</span>
                    <input type="text" class="album-title" placeholder="Writing's On The Wall" /><br>
                    <input type="text" class="ImgUrl" placeholder="Album Cover URL" /><br>
                    <input type="text" class="company" placeholder="Columbia Records" /><br>
                    <button class="addAlbumSubmitBtn">Submit</button>
                </div>

                <div id="editAlbumTitle" class="editTitlemodal">
                    <div class="editTitlemodal-content">
                    <span class="close">&times;</span>
                   
                </div>
            </div>
        </main>
        `
}