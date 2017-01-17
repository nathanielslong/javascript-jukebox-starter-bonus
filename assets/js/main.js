function Song(location,filename) {
  this.location = location;
  this.filename = filename;
}

function Jukebox() {
  this.music = [];
}

var player = document.getElementById("player");
var songiden = document.getElementById("songiden");
var currentindex = 0;

Jukebox.prototype.index = function(num) {
  currentindex = num;
}

Jukebox.prototype.nextsong = function() {
  if (this.music.length - 1 < currentindex + 1) {
    currentindex = 0;
  } else {
    currentindex = currentindex + 1;
  }
}

Jukebox.prototype.previoussong = function() {
  if (currentindex - 1 < 0) {
    currentindex = this.music.length - 1;
  } else {
    currentindex = currentindex - 1;
  }
}

Jukebox.prototype.play = function() {
  player.src = this.music[currentindex].location;
  songiden.innerText = this.music[currentindex].filename;
  player.play();
}

Jukebox.prototype.pause = function() {
  player.pause();
}

Jukebox.prototype.volup = function() {
  player.volume+=0.1;
}

Jukebox.prototype.voldown = function() {
  player.volume-=0.1;
}

Jukebox.prototype.shuffle = function() {
  currentindex = Math.floor(Math.random() * (this.music.length));
}

var song1 = new Song("assets/music/fearless.mp3","Fearless");
var song2 = new Song("assets/music/feelin-good.mp3","Feelin' Good");
var song3 = new Song("assets/music/get-happy.mp3","Get Happy");
var jukebox1 = new Jukebox();

jukebox1.music.push(song1);
jukebox1.music.push(song2);
jukebox1.music.push(song3);

$(document).ready(jukebox1.play())
