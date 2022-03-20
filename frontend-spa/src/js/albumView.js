export default function albumView(album) {
    console.log(album);
    return `
<main class="main">
        <h2 class="albumTitle">${album.title}</h2>
        <div class="allSongs">
            <article class="flip-card song">
                <section class="inner">
                    <div class="card-front song-front">
                        <img src="${album.imageUrl}" alt="Avatar" style="width:300px;height:300px;">
                    </div>
                    <section class="card-back album-back">
                    ${

                        album.songs.map(song => {
                            return `<h1 class="albumTitle">${song.title}</h1>
                            <p class="recordLabel">${song.artist}</p>
                            <p class="recordLabel">${song.duration}</p>
                            <p class="recordLabel">${song.link}</p>`;
                        }).join("")
                    }
                    </section>
                </section>
            </article>
            <article class="flip-card addNewSong">
                <section class="addSong">
                    <img src="./images/plus.png" alt="Avatar" style="height: 3cm;">
                </section>
                <h3>Add New Song</h3>
            </article>
        </div>
    </main>
    `;
}