// Unlock audio on first click
document.addEventListener("click", () => {
  console.log("Audio unlocked");
});





const clap = document.getElementById("a");
const hihat = document.getElementById("s");
const kick = document.getElementById("d");
const openhat = document.getElementById("f");
const boom = document.getElementById("g");
const ride = document.getElementById("h");
const snare = document.getElementById("j");
const tom = document.getElementById("k");
const tink = document.getElementById("l");






document.addEventListener("keydown", function(event){
    if (event.key === "a"){
    clap.currentTime = 0;
    clap.play();
}
    else if (event.key === "s") {
    hihat.currentTime = 0;
    hihat.play();
}   
    else if (event.key === "d") {
    kick.currentTime = 0;
    kick.play();
}   
    else if (event.key === "f") {
    openhat.currentTime = 0;
    openhat.play();
}   
    else if (event.key === "g") {
    boom.currentTime = 0;
    boom.play();
}
    else if (event.key === "h") {
    ride.currentTime = 0;
    ride.play();
}
    else if (event.key === "j") {
    snare.currentTime = 0;
    snare.play();
}   
    else if (event.key === "k") {
    tom.currentTime = 0;
    tom.play();
}   
    else if (event.key === "l") {
    tink.currentTime = 0;
    tink.play();
}   
  });

































