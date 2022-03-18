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
                </article>`
            }).join("")
            }
        
        </div>
    </main>
   
    `
}