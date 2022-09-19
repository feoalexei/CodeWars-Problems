// 20 ////////// Dubstep //////////

function songDecoder(song) {
  return song
    .replace(/(WUB)+/g, " ")
    .replace(/^ | $/g, "");
}

console.log(songDecoder ("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"));
