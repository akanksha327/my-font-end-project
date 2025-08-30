function makeMaze() {
    let canvas = document.getElementById("mazeCanvas");
    let ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear previous maze
    ctx.fillStyle = "blue";
    ctx.fillRect(50, 50, 50, 50); // just a test square

    document.getElementById("mazeContainer").style.opacity = 1;
}

function toggleVisablity(id) {
    let e = document.getElementById(id);
    if (e.style.visibility === "visible") {
        e.style.visibility = "hidden";
    } else {
        e.style.visibility = "visible";
    }
}
