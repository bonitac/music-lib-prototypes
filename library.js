var Library = function(name,creator) {
  this.name    = name;
  this.creator  = creator;
  this.playlists=[];
}

var Playlist = function (name){
  this.name = name;
  this.tracks = [];
}

var Track = function (title,rating,songLength){
  this.title = title;
  this.rating = rating;
  this.songLength = songLength
}

Playlist.prototype.totalDuration = function (){
  let time = 0;
  this.tracks.forEach((track)=> {
    time += track.songLength;
  })
  return time;
}

Playlist.prototype.overallRating = function (){
  let rating = 0;
  let numTracks = this.tracks.length
  this.tracks.forEach((track)=>{
    rating += track.rating
  })
  return rating/numTracks;
}

const lib1 = new Library("songs","Bonita");
const playlist1 = new Playlist("sleepy");
const tracks1 = new Track("zzzz",5,120);
playlist1.tracks.push(tracks1);
lib1.playlists.push(playlist1);
const tracks2 = new Track("snooozzzz",1,1200);
playlist1.tracks.push(tracks2);
// console.log(lib1);
// console.log(playlist1)
// console.log(tracks1)
console.log(playlist1.overallRating())
console.log(playlist1.totalDuration())