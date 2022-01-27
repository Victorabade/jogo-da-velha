let button = document.getElementById("reset")

document.addEventListener('DOMContentLoaded', () => {
    
    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    })
})

button.addEventListener('click', resetGame)

function handleClick(event){
    let square = event.target
    let position = square.id

    handleMove(position)
    if (gameOver == true){
       setTimeout( ()=> {alert(`Game Over, o jogador ganhador foi o numero ${playerTime}`)}, 10)
    }
    updateSquare()
}

function updateSquare(){
    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        let position = square.id
        let symbol = board[position]

        if(symbol !=''){
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })
}


function resetGame(){
    window.location.reload()

}