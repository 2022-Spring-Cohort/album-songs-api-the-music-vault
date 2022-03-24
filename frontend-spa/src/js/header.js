export default function header(){
   return  `
   
   <header class="header">
    <nav class="nav">
        <a id="aboutUs" class="nav-links aboutUs">About the Creators</a>
        <a class="nav-links" href="https://wecancodeit.org/about-us/">About WCCI</a>
    </nav>

    <div id="aboutUsModal" class="aboutusmodal">
        <div class="aboutusmodal-content">
                        <span class="closeModal">&times;</span>
            <div class="aboutuscontent">
                    <h1 class="aboutuscontent">Hari, Avery, and Mike are currently students at We Can Code IT- an intensive 14 week software development bootcamp for fullstack Java developers.</h1>
                    <h2 class="aboutuscontent"> Click to view their LinkedIn profiles below </h2>
                <div class="photos">
                    <div class="hari names">
                        <a class="headshots" href="https://www.linkedin.com/in/hari-adhikari-77935116b/" target="_blank"> <img
                            alt="githublogo" src="/images/hari.jpg" width="auto" height="175px"></a>
                        <p>Hari Adhikari</p>
                    </div>
                    <div class="avery names">
                        <a class="headshots" href="https://www.linkedin.com/in/averycs/" target="_blank"> <img
                        alt="githublogo" src="/images/avery.jpg" width="auto" height="175px"></a>
                        <p>Avery Smith</p>
                    </div>
                    <div class="mike names">
                        <a class="headshots" href="https://www.linkedin.com/in/mikethecoder/" target="_blank"> <img
                        alt="githublogo" src="/images/mike.jpg" width="auto" height="175px"></a>
                        <p>Mike Liddy</p>
                    </div>
                </div>
            </div>
        </div>
     </div>
</header>`
}