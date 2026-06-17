let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

let currentPlayer = "X";
let gameOver = false;

addEventListener("keypress", function(event){
    if(event.key === "g" || event.key === "G"){
        gameOver = false;
    }
});

function checkGame(){
    if(board[0][0] === "X" && board[0][1] === "X" && board[0][2] === "X"){
        document.getElementById("res").textContent = "Win player X";
        gameOver = true;
    }
}

function TypeSymbol(button){

    if(gameOver){
        return;
    }

    const row = button.dataset.row;
    const col = button.dataset.col;
    
    const img = document.createElement("img");
    if(currentPlayer === "X"){
        img.src = "../Photos/X.png";
        board[row][col] = "X";
        currentPlayer = "O";
    }
    else{
        img.src = "../Photos/O.png";
        board[row][col] = "O";
        currentPlayer = "X";
    }

    
    img.style.width = "100%";
    img.style.height = "100%";

    button.appendChild(img);
    button.disabled = true;
    checkGame();
    
}