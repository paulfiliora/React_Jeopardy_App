let sounds = {};
sounds.flip = new Audio("assets/audio/card-flip.mp3");
sounds.flipBack = new Audio("assets/audio/card-flip-back.mp3");
sounds.countdown = new Audio("assets/audio/timer_theme.wav");
sounds.result = new Audio("assets/audio/result.mp3");
sounds.laugh = new Audio("assets/audio/laugh.mp3");
sounds.ding = new Audio("assets/audio/bell-ding.mp3");
sounds.boo = new Audio("assets/audio/boo.mp3");



export let play = sound => {
  if (sounds[sound]) {
    sounds[sound].currentTime = 0;
    sounds[sound].play();
  }
};

export let stop = sound => {
  if (sounds[sound]) {
    sounds[sound].pause();
  }
};
