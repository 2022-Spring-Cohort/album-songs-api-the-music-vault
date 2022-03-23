export default function albumView(album) {
    return `
<main class="main">
        <h2 class="albumTitle">${album.title}</h2>
        <img class="backBtn" src="./images/backBtn.png" alt="back button"> 
        <div class="allSongs">
            
                   
                    ${

                        album.songs.map(song => {
                            return `
                            <article class="flip-card song" >
        
                <section class="inner">
                    <div class="card-front song-front">
                        <img src="${album.imageUrl}" alt="Avatar" style="width:300px;height:300px;">
                    </div>
                            <section class="card-back song-back">
                            <h1 class="songTitle">${song.title}</h1>
                            <p class="artistLabel">${song.artist}</p>
                            <p class="averageSongRating">${song.averageSongRating}</p>
                            <p class="durationLabel">${song.duration}</p>
                            <a class="linkLabel" href="${song.link}">Click Here To Listen</a>
                            <input type="hidden" class="songId_field" value="${song.id}" > 
                            <div class="updateIcon">
                    <input type="text" class="update-song-title" placeholder="Edit Song Title" />
                    <button class="updateSongBtn">Submit</button>
                    <img class="deleteBtn" src="./images/delete.png" alt="delete icon">
                </div>
                    </section>
                    </section>
            </article>`
                        }).join("")
                    }
                    
                

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
        <article class="albumReview">
        <div class="reviewInput">
            <label for="fullName">Full Name:</label><br>
            <input id="nameInput" type="text" name="fullName" placeholder="John Doe"><br>
            <label for="rating">Rate The Song:</label><br>
            <input id="ratingInput" type="text"  name="rating" placeholder="5"><br> 
            <label for="comment">Comment:</label><br>
            <input id="commentInput" type="text" name="comment" placeholder="Best song!" ><br>
            <button class="albumSubmitBtn">Submit</button>
        </div> 
        <div class="displayReview">
        ${
            album.comments.map(comment => {
            return`<img class="profileImg" src="./images/profile.png" alt="profile icon">
            <section class="commentDisplay">
                <h3 class="name">${comment.author}</h3>
                <h4 class="albumRating">${comment.rating}</h4>
                <p class="albumComment">${comment.comment}</p>
            </section> `
            }).join("")
        }
            
        </div>
    </article>

    </main>


    `;
}