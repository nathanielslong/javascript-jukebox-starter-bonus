function Song(location,fileName) {
  this.location = location;
  this.fileName = fileName;
}

function Jukebox() {
  this.music = [];
}

var player = document.getElementById("player");
var current = document.getElementById("current");
var currentIndex = 0;

Jukebox.prototype.index = function(num) {
  currentIndex = num;
}

Jukebox.prototype.nextSong = function() {
  if (this.music.length - 1 < currentIndex + 1) {
    currentIndex = 0;
  } else {
    currentIndex = currentIndex + 1;
  }
}

Jukebox.prototype.previousSong = function() {
  if (currentIndex - 1 < 0) {
    currentIndex = this.music.length - 1;
  } else {
    currentIndex = currentIndex - 1;
  }
}

Jukebox.prototype.play = function() {
  if (current.innerText != "Currently Playing: " + this.music[currentIndex].fileName) {
  player.src = this.music[currentIndex].location;
  current.innerText = "Currently Playing: " + this.music[currentIndex].fileName;
  player.play(); 
  } else {
    player.play();
  }
}


Jukebox.prototype.pause = function() {
  player.pause();
}

Jukebox.prototype.stop = function() {
  player.pause();
  current.innerText = "Currently Playing: ";
}

Jukebox.prototype.volUp = function() {
  player.volume+=0.1;
}

Jukebox.prototype.volDown = function() {
  player.volume-=0.1;
}

Jukebox.prototype.shuffle = function() {
  currentIndex = Math.floor(Math.random() * (this.music.length));
}

var song1 = new Song("assets/music/fearless.mp3","Fearless");
var song2 = new Song("assets/music/feelin-good.mp3","Feelin' Good");
var song3 = new Song("assets/music/get-happy.mp3","Get Happy");
var jukebox1 = new Jukebox();

jukebox1.music.push(song1);
jukebox1.music.push(song2);
jukebox1.music.push(song3);

var node = document.getElementById("player");

$(document).ready(function() {
  for (i=0;i<jukebox1.music.length;i++) {
    var song = document.createElement("h1");
    song.innerText = jukebox1.music[i].fileName;
    node.parentNode.insertBefore(song, node);
  }
  songStrings = [];
  var songNames = $("h1");

  $.each(songNames, function( index, value  ) {
    songStrings.push(value.innerText)
  });

  $("h1").click(function() {
    currentIndex = songStrings.indexOf(this.innerText);
    jukebox1.play();
  })
})

$(document).ready(jukebox1.play())
