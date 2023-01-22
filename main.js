noseX = 0;
noseY = 0;
function preload() {
 clownnose = loadImage("https://i.postimg.cc/2SJ44d7T/clown-2-removebg-preview.png");
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);

}

function modelLoaded() {
    console.log('PostNet is Intialized')
}
function gotPoses(results)
{
    if(results.length > 0)
{
    noseX = results[0].pose.nose.x -15;
    noseY = results[0].pose.nose.y -15;
    console.log(results);
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
}
}



function draw(){
    image(video, 0, 0, 300, 300);
    fill("red");
    stroke(255, 0, 0);
    circle(noseX + 15, noseY + 15, 30);
   //image(clownnose, noseX, noseY, 30, 30);
}
function take_snapshot(){
    save('myFilterImage.png');
}