import { useEffect } from "react"
import { useState, Fragment } from "react"


const TicTacToe = () => {

    const [data, setData] = useState(Array(9).fill(""))
    const [isUserX, setIsUserX] = useState(true)
    const [winner, setWinner] = useState(null)


    const handleClickGrid = (index) => {
        if (!!winner) return
        const clone = [...data]
        clone[index] = isUserX ? "X" : "O"
        setData(clone)
        setIsUserX(!isUserX)
    }

    const handleRestartGame = () => {
        setData(Array(9).fill(""))
    }

    const WINNING_PATTERNS = [
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

        // for (let i = 0; i < WINNING_PATTERNS.length; i++) {
        //     let [a, b, c] = WINNING_PATTERNS[i]
        //     if (!!data[a] && data[a] == data[b] && data[a] == data[c]) {
        //         setWinner(data[a])
        //         return data[a]
        //     }
        // }

        for (let [a, b, c] of WINNING_PATTERNS) {
            if (!!data[a] && data[a] == data[b] && data[a] == data[c]) {
                setWinner(data[a])
                return data[a]
            }
        }
    }

    useEffect(() => {
        calculateWinner()
    }, [data])

    return (
        <Fragment>
            <div className="d-flex align-items-center justify-content-center">
                <div>
                    <div className="game-area" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
                        {data?.map((key, index) => {
                            return (
                                <Fragment>
                                    <button className="btn btn-grid"
                                        style={{ border: "1px solid black", padding: 75, borderRadius: 0 }}
                                        onClick={() => handleClickGrid(index)}>
                                        <h1> {key}</h1>
                                    </button>
                                </Fragment>
                            )
                        })}
                    </div>
                </div>
            </div>


            <div className="d-flex align-items-center justify-content-center flex-column">
                <h2 className="mt-5">
                    Winner is :{winner}
                </h2>
                <button className="btn btn-start btn-primary mt-5" onClick={handleRestartGame}>
                    ReStart Game
                </button>
            </div>
        </Fragment>
    )
}

export default TicTacToe