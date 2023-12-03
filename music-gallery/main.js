console.log("welcome to spotify");

// initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));






let songs = [
    { songName: "Love story - By Taylor Swift ", filepath: "songs/1.mp3", coverpath: "./covers/1.jpeg" },
    { songName: "Love me like you do - By Ellie Goulding", filepath: "songs/2.mp3", coverpath: "./covers/2.jpeg" },
    { songName: "Like my father - By Jax", filepath: "songs/3.mp3", coverpath: "./covers/3.jpeg" },
    { songName: "She don't give a - By King", filepath: "songs/4.mp3", coverpath: "./covers/4.jpeg" },
    { songName: "Perfect - By Ed Sheeran ", filepath: "songs/5.mp3", coverpath: "./covers/5.jpeg" },
    { songName: "Photograph - by Ed Sheeran ", filepath: "songs/6.mp3", coverpath: "./covers/6.jpeg" },
    { songName: "love yourself - By Justin Bieber ", filepath: "songs/7.mp3", coverpath: "./covers/7.jpeg" },
    { songName: "Until i found you - By Stephen Sanchez", filepath: "songs/8.mp3", coverpath: "./covers/8.jpeg" },
    { songName: "Perfectly imperfect - By Ada Pasternak ", filepath: "songs/9.mp3", coverpath: "./covers/9.jpeg" },
    { songName: "At my worst - By Pink Sweats ", filepath: "songs/10.mp3", coverpath: "./covers/10.jpeg" },

]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play(); 

//handle play/pause click

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})

// listen to event   
audioElement.addEventListener('timeupdate', () => {
    // update seekbar 
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})


document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})