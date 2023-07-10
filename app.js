let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrIcon = document.getElementById("ctrIcon");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause(){
    if(ctrIcon.classList.contains("bi-pause")){
        song.pause();
        ctrIcon.classList.remove("bi-pause");
        ctrIcon.classList.add("bi-play");
    }
    else{
        song.play();
        ctrIcon.classList.add("bi-pause");
        ctrIcon.classList.remove("bi-play");
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    }, 5000);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrIcon.classList.add("bi-pause");
    ctrIcon.classList.remove("bi-play");
}