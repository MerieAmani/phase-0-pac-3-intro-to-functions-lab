const { spyOn } = require("expect");

function shout(string) {
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase()
}

const spy = "hello"

function logShout(spy) {
    console.log(spy.toUpperCase())
}

logShout('hello')

const spyOne = "HELLO"

function logWhisper(spyOne) {
    console.log(spyOne.toLowerCase())
}

logWhisper("HELLO")

function sayHiToHeadphonedRoommate(string) {
    if (string === "Let's have dinner together!") {
      return "I would love to!";
    }
    if (string === string.toUpperCase()) {
      return "YES INDEED!";
    }
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    }
  }
