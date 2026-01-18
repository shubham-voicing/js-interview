let data = Array(9).fill("")
let isUserX = true
const gameAreaId = document.getElementById("gameArea")

const drawBoard = () => {


    let gameGridHTML = ""
    for (let i = 0; i < data.length; i++) {
        gameGridHTML += `<button class="hello btn btn-grid" 
        onclick={handleClickGrid(${i})}
        style="border:1px solid black;padding:55px">
        ${data[i]}
        </button>
        `
    }
    gameAreaId.innerHTML = gameGridHTML
}

const WINNING_PATTERS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const calculateWinner = () => {
    let winningHTML = document.getElementById("winnerText")
    for (let [a, b, c] of WINNING_PATTERS) {
        if (!!data[a] && data[a] == data[b] && data[a] == data[c]) {
            winningHTML.innerHTML = `<h5>Winner is ${data[a]}`
            return data[a]

        }
    }
    return null
}

const handleClickGrid = (index) => {
    let winner = calculateWinner()
    if (!!winner) return
    const clone = [...data]
    const Text = !!isUserX ? "X" : "O"
    clone[index] = Text
    data = clone
    isUserX = !isUserX
    gameAreaId.children[index].innerHTML = Text

}

drawBoard()