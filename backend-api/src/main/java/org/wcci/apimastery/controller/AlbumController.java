package org.wcci.apimastery.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.wcci.apimastery.entities.Album;
import org.wcci.apimastery.repos.AlbumRepository;
import org.wcci.apimastery.repos.SongRepository;

import java.util.Collection;

@RestController
public class AlbumController {
    @Autowired
    private AlbumRepository albumRepo;
    @Autowired
    private SongRepository songRepo;


    @GetMapping("/albums")
    public Iterable<Album> getAlbums(){
        return albumRepo.findAll();
    }

    @GetMapping("/albums/{id}")
    public Album getAlbum(@PathVariable long id){
        return albumRepo.findById(id).get();
    }



    @PostMapping("/albums/addAlbum")
    public Iterable<Album> addAlbum(@RequestBody Album newAlbum){
        albumRepo.save(newAlbum);
        return albumRepo.findAll();
    }



}
