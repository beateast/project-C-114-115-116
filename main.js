lipX=0;
lipY=0;

function preload() {
    muchstach_lip = loadImage('https://freepngimg.com/thumb/moustache/2-2-moustache-png-file-thumb.png');
}

function setup() {
    createCanvas(300, 300);
    canvas.center();
    video = createCature(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    pose.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(muchstach_lip, lipX, lipY, 30, 30);
}

function modelLoaded() {
    console.log('poseNet is initialized');
}

function gotPoses(result)
{
    if(result.lenth > 0)
    {
        console.log(result);
        console.log("lip x = " + result[0].pose.lip.x);
        console.log("lip y = " + result[0].pose.lip.y);
    }
}

function take_snapshot(){
    save('myFilter.png');
}