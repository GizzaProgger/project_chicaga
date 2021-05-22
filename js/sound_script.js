let sounds = document.querySelectorAll("[data-play-sound]");
let allAudio;

sounds.forEach(sound=>{
    // Функция click принимает на вход функцию
    // По этому ты не можешь вызвать ее так
    // snd.addEventListener('click', playSound(snd.getAttribute("data-play-sound")));
    // Получается, что при такой записи ты ее вызываешь и в addEventListener передаешь результат ее работы
    // А именно undefined т.к. она ничего не возращает
    sound.addEventListener('click', () => playSound(sound.getAttribute("data-play-sound")));
});

function playSound(url){
    let audio;
    audio = new Audio(url);

    if (allAudio == undefined){}
    else {
        allAudio.pause();
        allAudio.currentTime = 0;
    }
    allAudio = audio;
    audio.play();
}

// Комменты не удаляй. Когда будем мержить, то удалим не нужное
function playSoundFactory(uri) {
    return () => playSound(uri)
}

// playSoundFactory - это фабрика по производству функций.
// Она возращает тебе функцию. По этому можно написать так
// snd.addEventListener('click', playSound(snd.getAttribute("data-play-sound"));
// В данном случае это бесполезно и даже путает, но иногда такой подход может быть полезен