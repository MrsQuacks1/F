function preload() {
    var g=loadImage("filtrodeperritp.png")
}

function setup() {
    canvas=createCanvas(400, 400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
    poseNet=ml5.poseNet(video, A);
    poseNet.on("pose",b)
}

function A() {
    console.log("i")
}

function b() {

}

function draw() {
image(video, 0, 0, 400, 400);

}