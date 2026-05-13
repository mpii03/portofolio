function playSong(songId) {
    const allSongs = document.querySelectorAll('audio');

    // Pause semua lagu
    allSongs.forEach(song => {
        if (song.id !== songId) {
            song.pause();
            song.currentTime = 0;
        }
    });

    const selectedSong = document.getElementById(songId);

    if (selectedSong.paused) {
        selectedSong.play();
    } else {
        selectedSong.pause();
    }
}