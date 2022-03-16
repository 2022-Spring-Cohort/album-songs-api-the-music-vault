package org.wcci.apimastery.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    private String artist;
    @ElementCollection
    private Collection<Comment> comments;
    @ManyToOne
    @JsonIgnore
    private Album album;

    public Song() {
    }

    public Song(String title, String link, int duration, String artist, Album album,  Comment... comments) {
        this.title = title;
        this.link = link;
        this.duration = duration;
        this.album = album;
        this.artist = artist;
        this.comments = Arrays.asList(comments);
    }

    public long getId() {
        return id;
    }

    public String getArtist() {
        return artist;
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

    public Collection<Comment> getComments() {
        return comments;
    }

    public void setAlbum(Album album) {
        this.album = album;
    }

    public void setComments(Collection<Comment> comments) {
        this.comments = comments;
    }
}

