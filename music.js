const song = document.getElementsByTagName("audio")[0];
const ctrlBtn = document.getElementsByClassName("controller")[0];
const progress = document.getElementsByTagName("input")[0];
let playBtn = document.getElementsByClassName("play")[0];
let pauseBtn = document.querySelector(".pause");
let rightBtn = document.querySelector(".right");
let leftBtn = document.querySelector(".left");
const image = document.getElementsByTagName("img")[0];
const songTitle = document.querySelector(".song-title");
const Singer = document.getElementsByClassName("singer")[0];
const audio = document.getElementsByTagName("audio")[0];



const songs = 
[
    {
        song:"C:/Users/Hp/Desktop/javascript project training/music_app_withFunction/music/Always (Isak Danielson).mp3",
        songName:"Always",
        singer:"Isak Danielson",
        photo:"C:/Users/Hp/Desktop/javascript%20project%20training/music_app_withFunction/photo/Isak Danielson.jpg",
    },
    {
        song:"C:/Users/Hp/Desktop/javascript project training/music_app_withFunction/music/Bruno Mars - The Lazy Song (Official Music Video).mp3",
        songName:"The Lazy Song",
        singer:"Bruno Mars",
        photo: "C:/Users/Hp/Desktop/javascript project training/music_app_withFunction/photo/bruno mars.jpg",
    },
    {
        song:"C:/Users/Hp/Desktop/javascript%20project%20training/music_app_withFunction/music/Akon%20-%20Lonely%20(Official%20Music%20Video).mp3",
        songName: "Lonely",
        singer:"Akon",
        photo:"c:/Users/Hp/Desktop/javascript project training/music_app_withFunction/photo/akon.jpg"
    },
    
    {
        song:"C:/Users/Hp/Desktop/javascript project training/music_app_withFunction/music/Giveon - Heartbreak Anniversary (Lyrics).mp3",
        songName:"Heartbreak Anniversary",
        singer:"Giveon",
        photo:"C:/Users/Hp/Desktop/javascript project training/music_app_withFunction/photo/giveon.jpg"
    },
    {
        song:"C:/Users/Hp/Desktop/javascript project training/music_app_withFunction/music/Joe Lay - သို့ အတိတ်က (Lyric Video).mp3",
        songName:"Tho A Tate Ka",
        singer:"Joe Lay",
        photo:"C:/Users/Hp/Desktop/javascript project training/music_app_withFunction/photo/joe lay.jpg"
    },
    {
        song:"C:/Users/Hp/Desktop/javascript project training/music_app_withFunction/music/Justin Bieber - Ghost.mp3",
        songName:"Ghost",
        singer:"Justin Bieber",
        photo:"C:/Users/Hp/Desktop/javascript project training/music_app_withFunction/photo/jb.jpg"
    },
    {
        song:"C:/Users/Hp/Desktop/javascript project training/music_app_withFunction/music/Love Yourself.mp3",
        songName:"Love Yourself",
        singer:"Justin Bieber",
        photo:"C:/Users/Hp/Desktop/javascript project training/music_app_withFunction/photo/jb.jpg"
    }
]

if(song.play()){
    setInterval(()=>{
      progress.value=song.currentTime;
    },500)
    
}

song.onloadedmetadata=()=>{
    progress.max  = song.duration;
    progress.value = song.currentTime;
}





let currentSong = 0;


ctrlBtn.addEventListener("click",(e)=>{
    const userCLickTag = e.target;
    if(userCLickTag.classList.contains("fa-play")|| userCLickTag.classList.contains("play")){
         song.play();
         playBtn.style.display="none";
         pauseBtn.style.display="block";
    }else if(userCLickTag.classList.contains("fa-pause")||userCLickTag.classList.contains("pasue")){
        song.pause();
        pauseBtn.style.display="none";
        playBtn.style.display="block";
    }else if(userCLickTag.classList.contains("fa-arrow-right") || userCLickTag.classList.contains("right")){
        if(currentSong<songs.length-1){
            currentSong++; 
            leftBtn.classList.remove("notShow");
            audio.setAttribute("src",songs[currentSong].song);
            playBtn.style.display="none";
            pauseBtn.style.display="block";
            song.play();
            songTitle.textContent=songs[currentSong].songName;
            Singer.textContent=songs[currentSong].singer;
            image.setAttribute("src",songs[currentSong].photo);
            if(currentSong==songs.length-1){
                rightBtn.classList.add("notShow");
            }
        }
    }else if(userCLickTag.classList.contains("fa-arrow-left") || userCLickTag.classList.contains("left")){
            if(currentSong>0){
               currentSong--;
               if(currentSong==0){
                  leftBtn.classList.add("notShow");
               }
               if(currentSong!=songs.length-1){
                  rightBtn.classList.remove("notShow");
               }
               audio.setAttribute("src",songs[currentSong].song);
               playBtn.style.display="none";
               pauseBtn.style.display="block";
               song.play();
               songTitle.textContent=songs[currentSong].songName;
               Singer.textContent=songs[currentSong].singer;
               image.setAttribute("src",songs[currentSong].photo);
            }
    }
})


progress.onchange=()=>{
    song.currentTime=progress.value;
    song.play();
    playBtn.style.display="none";
    pauseBtn.style.display="block";
}


