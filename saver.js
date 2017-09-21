var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

var ctx = canvas.getContext('2d');

setTimeout(function () {

    document.querySelector(".next").addEventListener("click", function () {
        html2canvas(document.querySelector("main"), {
            canvas: canvas,
            allowTaint: true
        }).then(function (canvas) {
            console.log('Drew on the existing canvas');
        });
    }, false);

}, 2000);

function download() {
    var dt = canvas.toDataURL('image/png');
    this.href = dt;
};

downloadLnk.addEventListener('click', download, false);

(function () {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d');

    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        drawStuff();
    }
    resizeCanvas();

    function drawStuff() {
    }

    setTimeout(explode, 2000);

})();
