document.addEventListener("DOMContentLoaded", function() {
    const powerSwitch = document.getElementById('power');

    //getting all drum pads
    const Q = document.getElementById('Heater-1');
    const W = document.getElementById('Heater-2');
    const E = document.getElementById('Heater-3');
    const A = document.getElementById('Heater-4');
    const S = document.getElementById('Clap');
    const D = document.getElementById('Open-HH');
    const Z = document.getElementById('Kick\'n-hat');
    const X = document.getElementById('Kick');
    const C = document.getElementById('Closed-HH');

    const currRecord = document.getElementById('record');
    const pullBtn = document.getElementById('pull');

    let powerOn = Boolean(false);
    let volume = Number(0);

    function powerOnOff() {
        if(!powerOn) {
            powerSwitch.style.justifyContent = "flex-end";
            powerOn = true;
        }
        else {
            powerSwitch.style.justifyContent = "flex-start";
            powerOn = false;
        }
    }

    function playButton(element, text, number, volume) {
        console.log("hi");
        if(powerOn===true) {
            let audio = document.getElementById(number);
            element.style.backgroundColor = "#ffa500";
            audio.play();
            volume /= 100;
            audio.volume=volume;
            currRecord.innerHTML=text;
            sleep(100).then(() =>
                element.style.backgroundColor = "#808080"
            )
        }
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    pullBtn.addEventListener("change", function(){
        volume=pullBtn.value;
    })
    powerSwitch.addEventListener("click", powerOnOff);
    Q.addEventListener("click", function(){

        playButton(Q, "Heater 1", "Q", volume);
    })
    W.addEventListener("click", function(){
        playButton(W, "Heater 2", "W", volume);
    })
    E.addEventListener("click", function(){
        playButton(E, "Heater 3", "E", volume);
    })
    A.addEventListener("click", function(){
        playButton(A, "Heater 4", "A", volume);
    })
    S.addEventListener("click", function(){
        playButton(S, "Clap", "S", volume);
    })
    D.addEventListener("click", function(){
        playButton(D, "Open HH", "D", volume);
    })
    Z.addEventListener("click", function(){
        playButton(Z, "Kick'n start", "Z", volume);
    })
    X.addEventListener("click", function(){
        playButton(X, "Kick", "X", volume);
    })
    C.addEventListener("click", function(){
        playButton(C, "Closed", "C", volume);
    })
    document.addEventListener("keypress", function(event){
        if(event.key === "Q" || event.key === "q"){
            playButton(Q, "Heater 1", "Q", volume);
        }
        if(event.key === "W" || event.key === "w"){
            playButton(W, "Heater 2", "W", volume);
        }
        if(event.key === "E" || event.key === "e"){
            playButton(E, "Heater 3", "E", volume);
        }
        if(event.key === "A" || event.key === "a"){
            playButton(A, "Heater 4", "A", volume);
        }
        if(event.key === "S" || event.key === "s"){
            playButton(S, "Clap", "S", volume);
        }
        if(event.key === "D" || event.key === "d"){
            playButton(D, "Kick'n sat", "D", volume);
        }
        if(event.key === "Z" || event.key === "z"){
            playButton(Z, "Heater 4", "Z", volume);
        }
        if(event.key === "X" || event.key === "x"){
            playButton(X, "Clap", "X", volume);
        }
        if(event.key === "C" || event.key === "c"){
            playButton(C, "Kick'n sat", "C", volume);
        }
    })
    
})