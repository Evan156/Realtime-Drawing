noseX = 0
noseY = 0
leftWristX = 0
rightWristX = 0
diffrence = 0

function setup() {
    video = createCapture(VIDEO)
    video.size(550, 500)

    canvas = createCanvas(550, 500)
    canvas.position(560, 100)

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {

    console.log("modelLoaded")

}

function gotPoses(results) {

    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        leftWristX = results[0].pose.leftWrist.x
        rightWristX = results[0].pose.rightWrist.x
        diffrence = floor(leftWristX - rightWristX);


    }
}


function draw() {

    background("cyan")
    document.getElementById("square_side").innerHTML = "Width And Height of a Square will be = " + diffrence + "px";
    fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY, diffrence);


}