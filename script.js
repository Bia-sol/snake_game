//criar elemento que irá rodar o jogo
let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;

let snake = [];

//inicio cobrinha
snake[0] ={
    x: 8 * box,
    y: 8 * box
}

// direção
let direction = "right";

// comida
let food ={
    x: Math.floor(Math.random() * 15+1) * box,
    y: Math.floor(Math.random() * 15+1) * box
}

//função para criar o background
function criarBG() {
    context.fillStyle = "lightgreen";
    //desenha o retÂngulo usando x e y e a largura e altura stadas 
    context.fillStyle(0, 0, 16 * box, 16 * box)
}

//função para criar cobrinha
function criarCobrinha (){
    for(i = 0; i < snake.lengyh; i++){
        context.fillStyle ="green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
        }
    }
//quando um evento acontece, detecta e chama a função update
document.addEventListener('keydown', update);

function update(event){
    if(event.keyCode == 37 && direction != 'right') direction ='left';
    if(event.keyCode == 38 && direction != 'down') direction ='up';
    if(event.keyCode == 39 && direction != 'left') direction ='right';
    if(event.keyCode == 40 && direction != 'up') direction ='down';
}
//função principal
function iniciarJogo(){
    if(snake[0].x > 15*box && direction == "right"){
        snake[0].x = 0;
    }
    if(snake[0].x < 0 && direction == 'left'){
        snake[0].x = 16 * box;
    }
    if(snake[0].y > 15*box && direction == "down"){
        snake[0].y = 0;
    }
    if(snake[0].x < 0 && direction == 'up'){
        snake[0].x = 16 * box;
    }
    criarBG();
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeX -= box;
    if(direction == "down") snakeX += box;

    if(snakeX != food.x || snakeY != food.y){
        snake.pop(); //pop tira o último elemento da lista
    }else{
        food.x = Math.floor(Math.random() * 15 +1) * box;
        food.y = Math.floor(Math.random() * 15 +1) * box;
    }
    let newHead ={
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead); //método unshift adiciona como primeiro quadradinho da cobrinha
}