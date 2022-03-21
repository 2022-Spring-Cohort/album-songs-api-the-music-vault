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

        Comment comment3 = new Comment("This was a great album","David",5);
        Album album1 = new Album("Writings on the Wall", "./images/destinysChild.jpg","Columbia Records" ,comment3);
        albumRepo.save(album1);

        Comment comment2 = new Comment("Good album","Rickie",1);
        Album album2 = new Album("The Black Parade", "./images/my-chemical-romance.jpg", "Reprise", comment2);
        albumRepo.save(album2);

        Comment comment1 = new Comment("Love this song!","HAM",5);
        Song song1 = new Song("Say My Name", "https://www.youtube.com/watch?v=sQgd6MccwZc&ab_channel=DestinysChildVEVO", "4","Destiny's Child", album1, comment1);

        songRepo.save(song1);

        Comment comment4 = new Comment("Great song","Johnny",1);
        Song song2 = new Song("Helena", "https://www.youtube.com/watch?v=UCCyoocDxBA&ab_channel=MyChemicalRomance", "5","My Chemical Romance", album2 ,comment4);
        songRepo.save(song2);

        Song song3 = new Song("Bills, Bills, Bills", "https://www.youtube.com/watch?v=NiF6-0UTqtc&ab_channel=DestinysChildVEVO", "5","Destiny's Child", album1);
        songRepo.save(song3);


        Album album3 = new Album("A Fever You Can't Sweat Out", "Google.com", "Fueled by Ramen");
        albumRepo.save(album3);
        Song song15 = new Song("I Write Sins, Not Tragedies", "https://www.youtube.com/watch?v=vc6vs-l5dkc", "3:06", "Panic! At the Disco", album3);
        songRepo.save(song15);
        Song song4 = new Song("There's a Good Reason These Table Are Numbered Honey, You Just Haven't Thought of it Yet", "https://www.youtube.com/watch?v=AKfrDroTPRg", "3:40", "Panic! At the Disco", album3);
        songRepo.save(song4);
        Song song5 = new Song("Lying Is the Most Fun a Girl Can Have Without Taking Her Clothes Off", "https://www.youtube.com/watch?v=8AZxUtZ2ZgI", "3:20","Panic! At the Disco", album3);
        songRepo.save(song5);

        //Extra Album and Songs 2
        Album album4 = new Album("The Rise and Fall of Ziggy Stardust and the Spiders From Mars", "Google.com", "RCA");
        albumRepo.save(album4);
        Song song6 = new Song("Starman", "https://www.youtube.com/watch?v=sI66hcu9fIs", "4:16", "David Bowie", album4);
        songRepo.save(song6);
        Song song7 = new Song("Lady Stardust", "https://www.youtube.com/watch?v=iARDYHakmC0", "3:21","David Bowie", album4);
        songRepo.save(song7);
        Song song8 = new Song("Hang on to Yourself", "https://www.youtube.com/watch?v=I71sQkFIe_c", "2:39", "David Bowie", album4);
        songRepo.save(song8);

        //Extra Album and Songs 3
        Album album5 = new Album("Oracular Spectacular", "Google.com", "Columbia Records");
        albumRepo.save(album5);
        Song song9 = new Song("Time to Pretend", "https://www.youtube.com/watch?v=B9dSYgd5Elk", "4:21", "MGMT", album5);
        songRepo.save(song9);
        Song song10 = new Song("Electric Feel", "https://www.youtube.com/watch?v=MmZexg8sxyk", "3:49", "MGMT", album5);
        songRepo.save(song10);
        Song song11 = new Song("Kids", "https://www.youtube.com/watch?v=fe4EK4HSPkI", "5:02", "MGMT", album5);
        songRepo.save(song11);

        //Extra Album and Songs 4
        Album album6 = new Album("Demon Days", "Google.com", "Virgin Records");
        albumRepo.save(album6);
        Song song12 = new Song("Feel Good Inc.", "https://www.youtube.com/watch?v=HyHNuVaZJ-k", "3:41", "Gorillaz", album6);
        songRepo.save(song12);
        Song song13 = new Song("El Manana", "https://www.youtube.com/watch?v=TEB56tk7I88", "3:50", "Gorillaz", album6);
        songRepo.save(song13);
        Song song14 = new Song("Dare", "https://www.youtube.com/watch?v=uAOR6ib95kQ", "4:04", "Gorillaz", album6);
        songRepo.save(song14);
    }
}
