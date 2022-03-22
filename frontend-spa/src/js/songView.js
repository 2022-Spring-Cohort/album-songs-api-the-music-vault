export default function songView(song){
    return`
<main class="main">
        <h2 class="songTitle">${song.title}</h2>
        <div class="singleSong">
            <article class="flip-card">
                <section class="inner">
                    <div class="card-front song-front">
                        <img src="./images/destinysChild.jpg" alt="Avatar" style="width:300px;height:300px;">
                    </div>
                        <section class="card-back songInfo">
                            <h1 class="artist">${song.artist}</h1>
                            <p class="avgRatingSong">${song.averageSongRating}</p>
                            <a class="songLink" href="${song.link}">Click here to Listen</a>
                            <p class="duration">Duration: ${song.duration}</p>
                            <div class="updateIcon">
                                <img class="editBtn" src="./images/edit.png" alt="adit icon">
                                <img class="deleteBtn" src="./images/delete.png" alt="delete icon">
                        </div>
                        </section>
                </section>
            </article>
            <article class="songComments">
                <div class="displayReview">
                    <img class="profileImg" src="./images/profile.png" alt="profile icon">
                    <section class="commentDisplay">
                        <h3 class="name">John Doe</h3>
                        <h4 class="rating">3</h4>
                        <p class="comment">I love this song!</p>
                    </section>
                </div>
                
                <div class="reviewInput">
                    <label for="fullName">Full Name:</label><br>
                    <input id="nameInput" type="text" name="fullName" placeholder="John Doe"><br>
                    <label for="rating">Rate The Song:</label><br>
                    <input id="ratingInput" type="text" name="rating" placeholder="5"><br>
                    <label for="comment">Comment:</label><br>
                    <input id="commentInput" type="text" name="comment" placeholder="Best song!"><br>
                    <button class ="songReviewSubmitBtn">Submit </button>
                </div>

                </atricle>
        </div>
        <img class="backBtn" src="./images/backBtn.png" alt="back button">
    </main>
    `;}

    // Changed line 33 from form to div so the page wouldn't refresh. Also, changed  from a submit button on line 40, to a regular
    //button