// ya sneaky little meddling kid!!! don't look at this! 

function makeWish() {
  let wish = document.getElementById("inlineFormInput").value;
  let map = {
    vigor: 'Thu Feb 09 2023 21:05:00 GMT-0500 (Eastern Standard Time) 41°18\'34.3\"N 72°56\'06.9\"W',
    prosperity: 'Thu Feb 10 2023 21:05:00 GMT-0500 (Eastern Standard Time) 41°18\'34.3\"N 72°56\'06.9\"W',
    abundance: 'Thu Feb 11 2023 21:05:00 GMT-0500 (Eastern Standard Time) 41°18\'34.3\"N 72°56\'06.9\"W',
    satisfaction: 'Thu Feb 12 2023 21:05:00 GMT-0500 (Eastern Standard Time) 41°18\'34.3\"N 72°56\'06.9\"W'
  }; 
  if (map[wish]) {
    let text = map[wish] + '\nIf this time does not work for you, or if you have any concerns, please email lys.veien.2023@gmail.com.'
    download('invitation.txt', text);
  } else {
    let song = 'When you wish upon a star\nMakes no difference who you are\nAnything your heart desires\nWill come to you\nIf your heart is in your dream\nNo request is too extreme\nWhen you wish upon a star\nAs dreamers do\nLike a bolt out of the blue\nFate steps in and sees you through\nWhen you wish upon a star\nYour dreams come true';
    download('whispers.txt', song)
  }
}

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
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