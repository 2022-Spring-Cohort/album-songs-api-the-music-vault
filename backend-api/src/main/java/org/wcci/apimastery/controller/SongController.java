package org.wcci.apimastery.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.wcci.apimastery.entities.Song;
import org.wcci.apimastery.repos.AlbumRepository;
import org.wcci.apimastery.repos.SongRepository;

@RestController
public class SongController {
    @Autowired
    private SongRepository songRepo;
    @Autowired
    private AlbumRepository albumRepo;

@GetMapping("/songs")
    public Iterable<Song> getSongs(){
    return songRepo.findAll();
}

@GetMapping("/songs/{id}")
    public Song getSong(@PathVariable long id){
    return songRepo.findById(id).get();
}

// todo to add Comment (request body of comment and path variable of song or an album)

}
