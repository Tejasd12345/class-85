canvas = document.getElementById("Mycanvas");
ctx=canvas.getContext("2d");
rw=100;
rh=90;
rx=301;
ry=301;
nasa_image_array = ["img0.jpg","img1.jpg","img2.jpg","img3.jpg"];
randomnumber=Math.floor(Math.random()*4);
console.log(randomnumber);
background_image= nasa_image_array[randomnumber];
console.log("background image = "+background_image);
rover_image="rover.png";
function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadbackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}
function uploadbackground() {
    ctx.drawImage(background_imgTag,0,0, canvas.width, canvas.height);
}
function uploadrover() {
    ctx.drawImage(rover_imgTag,rx,ry, rw, rh);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '37'){
        left();
        console.log("left");
    }
    if(keyPressed == '38'){
        up();
        console.log("up");
    }
    if(keyPressed == '39'){
        right();
        console.log("right");
    }
    if(keyPressed == '40'){
        down();
        console.log("down");
    }
}
function left() {
    if (rx>=0) {
        rx=rx-10;
        console.log("when left key pressed x= " +rx + " y= "+ry);
        uploadbackground();
        uploadrover();
    }
}
function right() {
    if (rx<=700) {
        rx=rx+10;
        console.log("when right key pressed x= " +rx + " y= "+ry);
        uploadbackground();
        uploadrover();
    }
}
function up() {
    if (ry>=0) {
        ry=ry-10;
        console.log("when up key pressed x= " +rx + " y= "+ry);
        uploadbackground();
        uploadrover();
    }
}function down() {
    if (ry<=500) {
        ry=ry+10;
        console.log("when down key pressed x= " +rx + " y= "+ry);
        uploadbackground();
        uploadrover();
    }
}