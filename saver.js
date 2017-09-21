//canvas opzetten
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

//canvas schalen
resizeCanvas();
window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() 
{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;        
}



setTimeout(function () {

    document.querySelector(".next").addEventListener("click", function () {
        html2canvas(document.querySelector("main"), {
            canvas: canvas,
            allowTaint: true
        });
        var dt = canvas.toDataURL('image/png');
        document.getElementById("downloadLnk").href=dt
    }, false);

}, 2000);

downloadLnk.addEventListener('click', download, false);

function download(event) {
    event.preventDefault();
    var dt = canvas.toDataURL('image/png');
    downloadLnk.href = dt;
};

