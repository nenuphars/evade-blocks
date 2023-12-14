class Game {
  constructor() {
    this.player = null;
    this.obstacles = []
  }
  start() {
    this.player = new Player();
    this.attachEventListeners();
    const obstacle = new Obstacle()
    this.obstacles.push(obstacle)

    this.moveObstacles()
    // this.createObstacles()
  }
  attachEventListeners(){
    window.addEventListener("keydown", (event)=> {
        const input = event.key
        if(input === "ArrowLeft"){
            this.player.moveLeft()
        }
        else if(input === "ArrowRight"){
            this.player.moveRight()
        }
    })
  }
  moveObstacles(){
    setInterval(()=>{
        this.obstacles.forEach((obstacle)=>{
            obstacle.moveDown()
        })
    },60)
  }
  createObstacles(){
    setInterval(()=>{
        const obstacle = new Obstacle()
        this.obstacles.push(obstacle)
    },1000)
  }
}

class Player {
  constructor() {
    this.width = 10;
    this.height = 5;
    this.positionX = 50 - this.width / 2;
    this.positionY = 0;

    this.domElement = this.createPlayer();
  }

  createPlayer() {
    const nodeDOM = document.createElement("div");
    nodeDOM.id = "player";
    nodeDOM.style.width = `${this.width}vh`;
    nodeDOM.style.height = `${this.height}vw`;
    nodeDOM.style.bottom = this.positionY + `vh`;
    nodeDOM.style.left = `${this.positionX}vw`;

    const board = document.getElementById("board");
    board.appendChild(nodeDOM);
    return nodeDOM;
  }

  moveRight() {
    this.positionX += 1;
    this.domElement.style.left = `${this.positionX}vw`;
  }

  moveLeft() {
    this.positionX -= 1;
    this.domElement.style.left = `${this.positionX}vw`;
  }
}

class Obstacle {
    constructor(){
        this.width = 10
        this.height = 5
        this.positionX = 50 - this.width / 2
        this.positionY = 95

        this.domElement = this.createElement()   
    }
    createElement(){
        const obstacleDOM = document.createElement("div")
        obstacleDOM.className = "obstacles"
        obstacleDOM.style.width = `${this.width}vw`
        obstacleDOM.style.height = `${this.height}vh`
        obstacleDOM.style.left = `${this.positionX}vw`
        obstacleDOM.style.bottom = `${this.positionY}vh`

        const board = document.getElementById("board")
        board.appendChild(obstacleDOM)

        return obstacleDOM
    }
    moveDown(){
        this.positionY -= 1
        this.domElement.style.bottom = `${this.positionY}vh`
    }
}

const game = new Game();
game.start();
