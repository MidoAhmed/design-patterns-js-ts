/**
 * Iterator is a behavioral design pattern that lets you traverse elements of a collection without exposing
 * its underlying representation (list, stack, tree, etc.).
 */

// Song Model
class Song {
  title: string;
  artist: string;

  constructor(title: string, artist: string) {
    this.title = title;
    this.artist = artist;
  }
}

// Iterable Collection — Playlist
class Playlist {
  private songs: Song[] = [];

  addSong(song: Song): void {
    this.songs.push(song);
  }

  getSongs(): Song[] {
    return this.songs;
  }

  createIterator(): PlaylistIterator {
    return new PlaylistIterator(this);
  }
}

// The Iterator
class PlaylistIterator {
  private playlist: Playlist;
  private index: number = 0;

  constructor(playlist: Playlist) {
    this.playlist = playlist;
  }

  hasNext(): boolean {
    return this.index < this.playlist.getSongs().length;
  }

  next(): Song | null {
    if (!this.hasNext()) {
      return null;
    }

    // Return the current song and increment the index
    return this.playlist.getSongs()[this.index++];
  }

  reset(): void {
    this.index = 0;
  }
}

// Example usage
const playlist = new Playlist();
playlist.addSong(new Song("Bohemian Rhapsody", "Queen"));
playlist.addSong(new Song("Lose Yourself", "Eminem"));
playlist.addSong(new Song("Shape of You", "Ed Sheeran"));

const iterator = playlist.createIterator();

console.log("🎵 Playing songs:");
while (iterator.hasNext()) {
  const song = iterator.next();
  console.log(`Now playing: ${song?.title} by ${song?.artist}`);
}
