package org.wcci.apimastery.entities;

import org.wcci.apimastery.Embeddables.Comment;

import javax.persistence.*;
import java.util.Arrays;
import java.util.Collection;

@Entity
public class Song {
    @Id
    @GeneratedValue
    private long id;
    private String title;
    private String link;
    private int duration;
    @ElementCollection
    private Collection<Comment> comments;
    @ManyToOne
    private Album album;

    public Song() {
    }

    public Song(String title, String link, int duration, Album album, Comment... comments) {
        this.title = title;
        this.link = link;
        this.duration = duration;
        this.album = album;
        this.comments = Arrays.asList(comments);
    }

    public long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getLink() {
        return link;
    }

    public int getDuration() {
        return duration;
    }

    public Album getAlbum() {
        return album;
    }

    public void setAlbum(Album album) {
        this.album = album;
    }
}

