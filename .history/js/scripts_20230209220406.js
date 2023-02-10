// ya sneaky little meddling kid! don't look at this! 

function makeWish() {
  let wish = document.getElementById("inlineFormInput").value;
  let map = {
    power: 'Thu Feb 09 2023 21:05:00 GMT-0500 (Eastern Standard Time) 41°18\'34.3\"N 72°56\'06.9\"W',
    wealth: 'Thu Feb 10 2023 21:05:00 GMT-0500 (Eastern Standard Time) 41°18\'34.3\"N 72°56\'06.9\"W',
    success: 'Thu Feb 11 2023 21:05:00 GMT-0500 (Eastern Standard Time) 41°18\'34.3\"N 72°56\'06.9\"W',
    happiness: 'Thu Feb 12 2023 21:05:00 GMT-0500 (Eastern Standard Time) 41°18\'34.3\"N 72°56\'06.9\"W'
  }; 
  if (map[wish]) {
    alert(map[wish]);
  } else {
    alert('none');
  }
}

// make it a litle bit harder to inspect element

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}