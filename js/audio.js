const keys = document.querySelectorAll('.sound');
const instruments = document.querySelectorAll('header>nav>a');

//console.log(keys);
//console.log(instruments);

function clickSound(e){
  //console.log("Clicksound has being reached");
  //console.log(e.target);

  let soundKey = e.target.dataset['sound'];
  //console.log(soundKey);
  var audio = document.querySelector(`audio[data-sound="${soundKey}"]`);
  //console.log(audio);
  audio.currentTime = 0;
  audio.play();
}

function switchInstrument(e){
  //console.log("switchInstrument has been reached");
  e.preventDefault();
  //console.log(e.target);
  let inst1 = document.querySelector('#instrument1');
  let inst2 = document.querySelector('#instrument2');
  let inst3 = document.querySelector('#instrument3');
  //console.log(inst1);
  //console.log(inst2);
  //console.log(inst1);

  let instrument = e.target.dataset['instrument'];
  //console.log(`instrument:${instrument}`);

  if(instrument == "instrument1"){
    //console.log(`I should be in instrument 1: ${instrument}`);
    inst1.style.display = "block";
    inst2.style.display = "none";
    inst3.style.display = "none";
    return;
  }
  else if(instrument == "instrument2"){
    //console.log(`I should be in instrument 2: ${instrument}`);
    inst1.style.display = "none";
    inst2.style.display = "block";
    inst3.style.display = "none";
    return;
  }
  else {
    //console.log(`I should be in instrument 3: ${instrument}`);
    inst1.style.display = "none";
    inst2.style.display = "none";
    inst3.style.display = "block";
    return;
  }
}

instruments.forEach(function(instrument){
  instrument.addEventListener("click", switchInstrument);
  //console.log(instrument);
});

keys.forEach(function(key){
    key.addEventListener("click", clickSound);
    //console.log(key);
});
