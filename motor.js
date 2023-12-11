const pianoKeys = document.querySelectorAll(".piano-keys .key");
const keyscheck = document.querySelector(".keys-check input");
const volumeSlider = document.querySelector(".volume-slider input");
let audio = new Audio("/Piano/tunes/f.wav");
let mapedkey = [];


const playTunes = (key)=>{
  audio.src = `/Piano/tunes/${key}.wav`;
  audio.play();
  const clikedKey = document.querySelector(`[data-key="${key}"]`);
  clikedKey.classList.add("active");
  setTimeout(()=>{
    clikedKey.classList.remove("active");
  },150);
};

pianoKeys.forEach((key)=>{
  console.log(key.dataset.key);
  key.addEventListener("click",()=> playTunes(key.dataset.key));
  mapedkey.push(key.dataset.key);
});

document.addEventListener("keydown",(e)=>{
  if (mapedkey.includes(e.key)) {
    playTunes(e.key);
  };
});
const handleVolume = (e)=>{
  audio.volume = e.target.value;
};

volumeSlider.addEventListener("input",handleVolume);

const showHideKeys = ()=>{
  pianoKeys.forEach(key=>key.classList.toggle("hide"));
};

keyscheck.addEventListener("click",showHideKeys);