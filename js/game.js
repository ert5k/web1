var cvs = document.getElementById("myCanvas");
var ctx = cvs.getContext("2d");

var playerHp = 100;
var moveSpeed = 2.0;

var bg = new Image();
var player = new Image();

player.src = "img/Player/Poses/player_stand.png";
bg.src = "img/Soldier/Limbs/body_back.png";

function draw(){
    ctx.drawImage(bg, 0, 0);
	ctx.drawImage(player, 50, 50)
}
requestAnimationFrame(draw)