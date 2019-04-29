let UserInput = require("./cli");
require("dotenv").config();

let request = new UserInput();
let search = process.argv[2];
let term = process.argv.slice(3).join(" ");

search.toLocaleLowerCase();
term.toLocaleLowerCase();

if (!search) {
    search = "spotify-this-song";
    term = "I Want it That Way";
} else {
    if (search === "concert-this") {   
        if (!term){
            term = "Eric Church";
            request.findConcert(term);
        } else {
            console.log("Searching for your concert.");
            request.findConcert(term);
        }
    } else if (search === "spotify-this-song") {
        if (!term) {
            term = "The Sign";
            request.findSong(term);
        }  else {
            console.log("Searching for your song.");
            request.findSong(term);
        }
    } else if (search === "movie-this"){
        if (!term) {
            term = "Mr. Nobody";
            request.findMovie(term);
        }  else {
            console.log("Searching for your movie.");
            request.findMovie(term);
        }
    } else if (search === "do-what-it-says") {
        if (!term) {
            console.log("and.......");
            request.findDoit(term);
        }  else {
            console.log("You got it.");
            request.findDoit(term);
        }
    } 
};