document.addEventListener('deviceready', function(){
    var childwin = window.open("https://nirik666.github.io/IABtest/", "_blank", "location=no,clearcache=yes,clearsessioncache=yes,toolbar=no,");
    childwin.addEventListener("loadstop", function(event){
        childwin.executeScript({
            file: "cordova.js"
        });
    });
}, false);
