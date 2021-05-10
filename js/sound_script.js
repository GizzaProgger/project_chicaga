let sound = document.querySelectorAll("[data-play-sound]");

sound.forEach(snd=>{
    snd.addEventListener('click', playsnd);
});

function playsnd(){
    let audio = new Audio(this.getAttribute("data-play-sound"));
    audio.play();
}