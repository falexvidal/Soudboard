// Step 1: This constant stores all the elements in HTML with .sound class into an array ... which are our links with sounds
const keys = document.querySelectorAll('.sound');
// Step 2: This constant stores all the items from the top navigation into an array, in order to display and hide elements when clicked
const instruments = document.querySelectorAll('header>nav>a');

/* Step 6 - this is the final step. Creating the function which will get the clicked element and play the sound.
I pass "e" as a parameter, which will get what the user clicked on step 5, inside "key". */
function clickSound(e){
  // I create once again a grid to store pull the "sound" which was chosen within the array of values from the "keys" constant
  let soundKey = e.target.dataset['sound'];
  /* I'll use the "let soundKey" to play the sound, but I'm gonna kinda write an HTML here.
  I select the tag <audio> on my HTML document which has a data-sound property attrivbuted to that.
  Inside the quotes, I'm gonna put my let soundKey, which is the value clicked by the user on my array.
  This gonna get my sound ready to play.
  */
  var audio = document.querySelector(`audio[data-sound="${soundKey}"]`);
  // So, I put the sound to start at time 0.
  audio.currentTime = 0;
  // And, finally, play it. I play what's inside the variable "audio"
  audio.play();
}

// Step 4 - creating the function that will switch the display of my sections - showing an dhiding the sections as clicked
function switchInstrument(e){
  //This prevents the screen to scrolled to the top after any link is clicked. It strips out the a tag from the usual behaviour
  e.preventDefault();
  /* These are the "let" that I create to store the elements from my sections. Each section has an ID, so I store them here, using them
  QuerySelector attribute.*/
  let inst1 = document.querySelector('#instrument1');
  let inst2 = document.querySelector('#instrument2');
  let inst3 = document.querySelector('#instrument3');
  /*I also create this "let" fos instrument which stores the value from my array. On step 2 I created a constant to
  store all the links from my top navigation menu in an array. Now I'm gonna check which element from this array was clicked
  by the user. All these values stored go to a kind of "grid" which is called "dataset". WHen I pass the paramater "e"
  into the round brackets 'switchInstrument(e) I'm telling to my function which element in that array was clicked. Then,
  I take this elements inside this variable - "let instrument" - to start setting up whith kind of interaction I wanna do with it.*/
  let instrument = e.target.dataset['instrument'];
  /*Well, now I have my clicked element stored in my "let instrument", I'm gonna compare the values. If the clicked link on my
  navigation menu is "instrument1, I'm gonna show only the section whose id is #instrument1 and hide the remaining sections. I'll
  do this 3 times, since I have 3 sections to compare.*/
  if(instrument == "instrument1"){
    /* So inst1 I declared above ... setting #instrument1 as my value. So the #instrument1 secgtion will be displayed and the
    others won't be displayed*/
    inst1.style.display = "block";
    inst2.style.display = "none";
    inst3.style.display = "none";
    return;
  }
  /* Same case here ... Now I wanna compare if the value cliked on the menu was instrument2 to display my #instrument2 section*/
  if(instrument == "instrument2"){
    inst1.style.display = "none";
    inst2.style.display = "block";
    inst3.style.display = "none";
    return;
  }
  /* For the final case I've put an else, but I think it can be made the same way as the other above, copmaring the values.
  Well, in this case I'm gonna dipslay the 3rd section.*/
  else {
    inst1.style.display = "none";
    inst2.style.display = "none";
    inst3.style.display = "block";
    return;
  }
}

// Step 3 - get the const instruments - the array - and pass the element that is being clicked bu the user
instruments.forEach(function(instrument){
  /*This is the listener os the click event ... I'm passing a value into the round brackets and treat this value applying an addEventListener.
  Then, I statet that on click, the switchInstrument will be activated - and then ... I create the function above*/
  instrument.addEventListener("click", switchInstrument);
});

/* Step 5 - Now I need to activete the Soudnboard, using the "keys" constant created on step 1. Once again, I'm gonna pass
th eelement being clicked here - in this case, the "key" which will be triggered by the user click and call the function clickSound,
which is our last step above*/
keys.forEach(function(key){
    key.addEventListener("click", clickSound);
});
