function preload(){
}

function setup(){
    canvas = createCanvas(400,405);
    canvas.position(110,220);
    vid = createCapture(VIDEO);
    vid.hide();

    ttiinntt_color = "" ;
}

function draw(){
    image(vid, 0,0,400,405);
    tint(ttiinntt_color);
}

function take_snapshot(){
    save('YOUR_FACE.png');
}

function filter_ttiinntt(){
    ttiinntt_color = document.getElementById("Color_names").value;
}