let mapCanvas = document.getElementById("map"),
    context = mapCanvas.getContext("2d");

const dpr = window.devicePixelRatio || 2;

// 論理サイズ（固定の描画解像度）
const logicalWidth = 600;
const logicalHeight = 500;

// 高解像度対応
mapCanvas.width = logicalWidth * dpr;
mapCanvas.height = logicalHeight * dpr;
context.scale(dpr, dpr); // スケーリング

function drawMap() {
    context.clearRect(0, 0, logicalWidth, logicalHeight);
    context.fillStyle = "white";
    context.font = "14px ＭＳ Ｐ明朝";
    context.textAlign = "right";

    context.fillText("A-5区", 320, 240);
    context.fillText("安定率:98%", 320, 260);

    context.fillText("B-3区", 400, 60);
    context.fillText("安定率:36%", 400, 80);

    context.fillText("c-7区", 80, 40);
    context.fillText("安定率:13%", 80, 60);

    context.fillText("D-8区", 270, 450);
    context.fillText("安定率:13%", 270, 470);

    context.fillText("E-1区", 100, 240);
    context.fillText("安定率:49%", 100, 260);

    context.fillText("F-2区", 590, 300);
    context.fillText("安定率:78%", 590, 320);        

    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 1;
    // c-7
    context.moveTo(10, 150);
    context.lineTo(160,150)
    context.lineTo(220,10)
    // d-8
    context.moveTo(50,490);
    context.lineTo(120,390);
    context.lineTo(440,390);
    context.lineTo(480,490);
    // b-3
    context.moveTo(260,10);
    context.lineTo(280,130);
    context.lineTo(420,130);
    context.lineTo(450,60);
    context.lineTo(510,60);
    context.lineTo(510,160);
    context.lineTo(590,200);

    context.stroke();
}

// リサイズ処理：CSSで表示サイズを調整
function resizeCanvasToFitWindow() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const aspect = logicalWidth / logicalHeight;
    let newWidth = windowWidth;
    let newHeight = windowWidth / aspect;

    if (newHeight > windowHeight) {
        newHeight = windowHeight;
        newWidth = newHeight * aspect;
    }

    mapCanvas.style.width = newWidth-50 + "px";
    mapCanvas.style.height = newHeight-50 + "px";
    if(mapCanvas.style.height > "500px"){
        mapCanvas.style.width = 600 + "px";
        mapCanvas.style.height = 500 + "px";
    }
}

window.addEventListener("resize", resizeCanvasToFitWindow);
window.addEventListener("load", () => {
    drawMap();
    resizeCanvasToFitWindow();
});
