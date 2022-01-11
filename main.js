noseX=0;
noseY=0;
rightWristX=0;
leftWristX=0;
dif=0;
function setup(){
    //video
        video= createCapture(VIDEO);
    video.size(600, 600);
    video.position(100,100);
    //canvas
    canvas= createCanvas(520 , 470);
    canvas.position(830 , 150);
    //instize posenet 
    poseNet=ml5.poseNet(video , modelLoaded);
    poseNet.on('pose',gotPoses);
    }
    
    function modelLoaded(){
    console.log("Model is Loaded!");
    }
    
    function gotPoses(results) {
        if (results.length > 0 ) {
            noseX=results[0].pose.nose.x;
            noseY=results[0].pose.nose.y;
            rightWristX=results[0].pose.rightWrist.x;
            leftWristX=results[0].pose.leftWrist.x;
            dif=floor(leftWristX - rightWristX);
            console.log("noseX = " + noseX);
            console.log("noseY = " + noseY);
            console.log("x position of left wrist  = " + leftWristX);
            console.log("x position of right wrist = " + rightWristX);
            console.log("square measure = " + dif);
        } 
    
    }
    
    function draw(){
        background('red');
        //random color
        const randomColor = Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')
        document.getElementById("heading").style.color = randomColor; 
        //emoji

        textSize(dif);
        fill('#000000');
        text('😀' , noseX ,noseY )
       
        }

    
    