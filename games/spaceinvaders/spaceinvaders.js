const canvas = document.getElementById("spaceinvaders");
const context = canvas.getContext("2d");

const fps = 60;

const ship = {
    x: canvas.width/2,
    y: 5,
    width: 20,
    height: 40,
    color: "white"
}

const invader = {
    color: "white"
}

let bullets = [];

function update(){
    if (bullets.length > 0) {
        bullets.forEach(function(item, index, bullets) {
            item.y += item.velocityY;
        });
    }
}

function render(){
    drawRect(0, 0, 600, 500, "black");
    drawShip(ship.x, ship.width, ship.height, ship.color);
    bullets.forEach(function (item, index, bullets) {
        drawBullet(item);
    });
}

function drawShip(x, w, h, color){
    context.fillStyle = color;
    context.fillRect(x, canvas.height - ship.height, w, h);
}

function drawRect(x, y, w, h, color){
    context.fillStyle = color;
    context.fillRect(x, y, w, h);
}       

canvas.addEventListener("mousemove", moveShip);
canvas.addEventListener("mousedown", shoot);

function moveShip(evt){
    let rect = canvas.getBoundingClientRect();
    ship.x = evt.clientX - rect.left;

    console.log("evt.clientX:" + evt.clientX + " / rect.left:" + rect.left);
}

function drawBullet(bullet){
    context.fillStyle = bullet.color;
    context.fillRect(bullet.x, bullet.y, bullet.width, bullet.height, bullet.color);
}

function shoot(evt){
    let bulletHeight = 20;
    let bulletX = ship.x + ship.width/4;
    let bulletY = canvas.height - ship.height - bulletHeight;

    let bullet = {
        x: bulletX,
        y: bulletY,
        width: 10,
        height: bulletHeight,
        velocityY: -8,
        color: "white"
    }

    bullets.push(bullet);
}

function game(){
    update();
    render();
}

setInterval(game, 1000/fps);