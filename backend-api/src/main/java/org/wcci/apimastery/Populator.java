package org.wcci.apimastery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wcci.apimastery.Embeddables.Comment;
import org.wcci.apimastery.entities.Album;
import org.wcci.apimastery.entities.Song;
import org.wcci.apimastery.repos.AlbumRepository;
import org.wcci.apimastery.repos.SongRepository;

@Component
public class Populator implements CommandLineRunner {
    @Autowired
    private SongRepository songRepo;
    @Autowired
    private AlbumRepository albumRepo;


    @Override
    public void run(String... args) throws Exception {
            //todo add album art

        Comment comment3 = new Comment("THis was a great album","David",5);
        Album album1 = new Album("Writings on the Wall", "https://music.apple.com/us/album/the-writings-on-the-wall/266809606", "Columbia Records", comment3);
        albumRepo.save(album1);

        Comment comment2 = new Comment("Good album","Rickie",2);
        Album album2 = new Album("The Black Parade", "Google.com", "Reprise", comment2);
        albumRepo.save(album2);


        //todo make duration a string

        Comment comment1 = new Comment("Love this song!","HAM",5);
        Song song1 = new Song("Say My Name", "google.com", 4,"Destiny's Child", album1, comment1);

        songRepo.save(song1);

        Comment comment4 = new Comment("Great song","Johnny",1);
        Song song2 = new Song("Helena", "Google.com", 5,"My Chemical Romance", album2, comment4);
        songRepo.save(song2);

        //todo finish figuring out how to do the below after lunch:

        //song1.addComment(comment1);
//        songRepo.save(song1);



    }
}
