package org.wcci.apimastery.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.wcci.apimastery.repos.AlbumRepository;
import org.wcci.apimastery.repos.SongRepository;

@RestController
public class SongController {
    @Autowired
    private SongRepository songRepo;
    @Autowired
    private AlbumRepository albumRepo;



}
