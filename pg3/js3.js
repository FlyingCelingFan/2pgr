 
window.onload = function() {
function cps() {
    var seconds = 0;
    var mouseclicks = 0;
    
    document.onclick = function() {
        mouseclicks++;
    }
    
    this.secCounter = setInterval(function () {
        seconds++;
    }, 1000);
    this.reset = function() {
        mouseclicks = 0;
        seconds = 0;
    }
    
    this.getCps = function() {
        
    return mouseclicks/seconds;   
    }

}


var counter = new cps();


setInterval(function() {
    if (counter.getCps) {
document.getElementById("cps").innerHTML = counter.getCps();
    }
counter.reset();

},1000);


}
