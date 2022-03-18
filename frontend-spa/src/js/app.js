import home from "./home.js";
import header from "./header.js";
import footer from './footer.js';
import {
    albums
} from "./albumsJson.js";
const containerEL = document.querySelector(".container");

function makeHomeView() {
    fetch("http://localhost:8080/albums")
        .then(res => res.json())
        .then(albums => {
            makeHomeViewFromJson(albums)
        })
}
makeHomeView();

function makeHomeViewFromJson(albums) {
    containerEL.innerHTML = header();
    containerEL.innerHTML += home(albums);
    containerEL.innerHTML += footer();


}