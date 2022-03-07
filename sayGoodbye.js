(function(window){
    var byeSpeaker = {};
    byeSpeaker.name = names[i];
    var speakWord = "Goodbye";
    byeSpeaker.speak = function(name){
        console.log(speakWord + " " + names[i]);
    }
    window.byeSpeaker = byeSpeaker;
  
})(window);

