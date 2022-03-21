export default function home(albums) {

return `
    <main class="main">
            <h2 class="album">Albums</h2>
            <div class="allAlbums">
                ${albums.map(album => {
                return ` 
                    <article class="flip-card">
                        <section class="inner">
                            <div class="card-front">
                                <img src="${album.imageUrl}" alt="Avatar" style="width:300px;height:300px;">
                            </div>
                            <section class="card-back">
                                <h1 class="albumTitle">${album.title}</h1>
                                <input type="hidden" class="id_field" value="${album.id}" > 
                                <p class="recordLabel">${album.recordLabel}</p>
                            </section>
                        </section>
                    </article>`
                }).join("")
                }
                <article class="addNewAlbum">
                    <section class="addAlbum">
                        <img src="./images/plus.png" alt="Avatar" style="height: 3cm;">
                    </section>
                    <h3>Add New Album</h3>
                </article>
                <div id="myModal" class="modal">
                    <div class="modal-content">
                    <span class="close">&times;</span>
                    <p>Form input needed for adding song</p>
                </div>
        </div>

            </div>
        </main>
        `
}