package org.wcci.apimastery.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.wcci.apimastery.Embeddables.Comment;
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
    public Iterable<Song> getSongs() {
        return songRepo.findAll();
    }

    @GetMapping("/songs/{id}")
    public Song getSong(@PathVariable long id) {
        return songRepo.findById(id).get();
    }


    @PostMapping("/songs/{id}/addComment")
    public Song addCommentToSong(@PathVariable long id, @RequestBody Comment newComment) {
        Song newSong = songRepo.findById(id).get();
        newSong.addComment(newComment);
        songRepo.save(newSong);
        float sum = 0;
        for(Comment currentComment:newSong.getComments()){
            sum += currentComment.getRating();
        }

        System.out.println(sum);
        newSong.setAverageSongRating(Math.round(sum/newSong.getComments().size()));
        songRepo.save(newSong);

        return newSong;

    }
}

