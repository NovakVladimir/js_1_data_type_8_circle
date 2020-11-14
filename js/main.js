function ifFit() {
    let circleLength = document.getElementById("circleLength").value;
    let squarPerim = document.getElementById("squarPerim").value;
    let diam = circleLength / Math.PI;
    let side = squarPerim / 4;
    let result;
    if(side >= diam) {
        result = "The circle will fit in a square";
    } 
    else {
        result = "the circle is too big";
    }
    document.getElementById("result").innerHTML = result;
    document.getElementById("result").style.backgroundColor = "orange";
}
