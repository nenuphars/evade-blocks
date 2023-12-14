class Game {
  constructor() {
    this.player = null;
  }
  start() {
    this.player = new Player();
    this.attachEventListeners()
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

const game = new Game();
game.start();
