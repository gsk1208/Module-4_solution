(function(window){
    var helloSpeaker = {};
    helloSpeaker.name= names[i];
    var speakWord = "Hello";
    helloSpeaker.speak = function(name){
        console.log(speakWord + " " + names[i]);
    }
    window.helloSpeaker = helloSpeaker;

})(window);

