let mapCanvas = document.getElementById("map"),
        context = mapCanvas.getContext("2d");

    context.fillStyle = "white";
    context.font = "14px ＭＳ Ｐ明朝";

    context.textAlign = "right";
    let A5x = 320;
    context.fillText("A-5区", A5x, 240);
    context.fillText("安定率:98%", A5x, 260);

    context.textAlign = "right";
    let B3x = 400;
    context.fillText("B-3区", B3x, 60);
    context.fillText("安定率:36%", B3x, 80);

    context.textAlign = "right";
    let C7x = 80;
    context.fillText("c-7区", C7x, 40);
    context.fillText("安定率:13%", C7x, 60);

    context.textAlign = "right";
    let D9x = 270;
    context.fillText("D-8区", D9x, 450);
    context.fillText("安定率:13%", D9x, 470);

    context.textAlign = "right";
    let E1x = 100;
    context.fillText("E-1区", E1x, 240);
    context.fillText("安定率:49%", E1x, 260);

    context.textAlign = "right";
    let F2x = 590;
    context.fillText("F-2区", F2x, 300);
    context.fillText("安定率:78%", F2x, 320);        

    context.strokeStyle = '#fff';
    context.lineWidth = 1;

window.onload = function(){
    

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