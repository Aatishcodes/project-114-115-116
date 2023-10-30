function preload() {
 mustache = loadImage("mustache.png")
}


function setup() {
    canvas = createCanvas(460, 375)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    poseNet = ml5.poseNet(video, modelloaded)
    poseNet.on('pose', gotposes)

}

function modelloaded() {
    console.log("the model has been loaded")
}

mustacheX = 0
mustacheY = 0



function gotposes(results) {

    if (results.length > 0) {
        console.log(results)
        mustacheX = results[0].pose.nose.x -120
        mustacheY = results[0].pose.nose.y -50
        

    }

}



function draw() {
    image(video, 0, 0, 460, 375)
    //fill("cyan")
    //stroke("white")
    //circle(noseX, noseY, 20)
    image(mustache, mustacheX, mustacheY, 80, 50)
    



}


function take_snapshot() {
    save("myfilterimage.png")

}
