import React, {useEffect, useState} from 'react'
import {StartPage} from "./components/StartPage";
import {Game} from "./components/Game";

import styles from './main.module.css'


function App() {
    const [genetation, setGeneration] = useState(1)
    const [cells, setCells] = useState([])
    const [intervalId, setIntervalId] = useState(null)
    const fieldSize = 10

    const handleGenerateCells = () => {
        let finnalArray = []
        for (let i = 0; i < fieldSize; i++) {
            let newArray = []
            for (let i = 0; i < fieldSize; i++) {
                newArray.push({isAlive: false})
            }
            finnalArray.push(newArray)
        }
        return finnalArray
    }

    const handleCellClick = (rowIndex, cellIndex, value) => {
        setCells(prevState => prevState.map((row, index) => index === rowIndex ? row.map((cell, cIndex) => cellIndex === cIndex ? {isAlive: value} : cell) : row))
    }

    const handleRestartGame = () => {
        setCells(handleGenerateCells())
        clearInterval(intervalId)
        setGeneration(1)
    }

    const handleSetAlive = (rowIndex, cellIndex) => {
        if (rowIndex < 0 || cellIndex < 0 || rowIndex > fieldSize - 1 || cellIndex > fieldSize - 1) {
            return false
        }
        if (cells[rowIndex][cellIndex].isAlive) {
            return true
        } else {
            return false
        }
    }

    const handleAliveCell = (rowIndex, cellIndex) => {
        let aliveCells = 0
        if (handleSetAlive(rowIndex, cellIndex - 1)) {
            aliveCells = aliveCells + 1
        }
        if (handleSetAlive(rowIndex, cellIndex + 1)) {
            aliveCells = aliveCells + 1
        }
        if (handleSetAlive(rowIndex + 1, cellIndex)) {
            aliveCells = aliveCells + 1
        }
        if (handleSetAlive(rowIndex - 1, cellIndex)) {
            aliveCells = aliveCells + 1
        }
        if (handleSetAlive(rowIndex + 1, cellIndex - 1)) {
            aliveCells = aliveCells + 1
        }
        if (handleSetAlive(rowIndex + 1, cellIndex + 1)) {
            aliveCells = aliveCells + 1
        }
        if (handleSetAlive(rowIndex - 1, cellIndex + 1)) {
            aliveCells = aliveCells + 1
        }
        if (handleSetAlive(rowIndex - 1, cellIndex - 1)) {
            aliveCells = aliveCells + 1
        }

        if (aliveCells === 3) {
            handleCellClick(rowIndex, cellIndex, true)
        } else {
            handleCellClick(rowIndex, cellIndex, false)
        }

    }

    const handleCreateNewGenerate = () => {
        for (let i = 0; i < fieldSize; i++) {
            for (let k = 0; k < fieldSize; k++) {
                handleAliveCell(i, k)
            }
        }
        setGeneration(prevState => prevState + 1)
    }


    useEffect(() => {
        setCells(handleGenerateCells())
    }, [])

    const startGame = () => {
        handleCreateNewGenerate()
    }

    const finishGame = () => {
        return cells.every(row => row.every(cell => cell.isAlive === false))
    }

    const pauseGame = () => {
        clearInterval(intervalId)
    }

    useEffect(() => {
        if (finishGame()) {
            setGeneration(1)
            clearInterval(intervalId)
        }
    }, [cells])

    return (
        <div className={styles.root}>
            <Game pauseGame={pauseGame} genetation={genetation} cells={cells} finishGame={finishGame} startGame={startGame} handleCellClick={handleCellClick}
                  handleRestartGame={handleRestartGame} handleSetAlive={handleSetAlive}/>
        </div>
    );
}

export default App;
