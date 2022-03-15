package org.wcci.apimastery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
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
        Album album1 = new Album("Writings on the Wall", "https://music.apple.com/us/album/the-writings-on-the-wall/266809606\n", "Columbia Records");
        albumRepo.save(album1);

        Album album2 = new Album("The Black Parade", "Google.com", "Reprise" );
        albumRepo.save(album2);
            //todo make duration a string
        Song song1 = new Song("Say My Name", "google.com", 4, album1);
        songRepo.save(song1);

        Song song2 = new Song("The Black Parade", "Google.com", 5, album2);
        songRepo.save(song2);


    }
}
