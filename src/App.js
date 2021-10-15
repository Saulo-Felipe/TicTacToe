import React, { useState, useEffect } from 'react'
import {config, IaPlay} from './ia-Configs'
import './style.css'

var App = function App() {
    var win_tie = [[false, "type"], false]

    const [game, setGame] = useState({
        tic_tac: "O",
        gameConfig: [null, null, null, null, null, null, null, null, null],
        gameMode: "human"
    })


    // O INNERHTML dos SVG é necessário para poder gerar a animação
    useEffect(() => {
        CheckWinner()
        //Adicionar icones dinamicamente
        var winImage = document.querySelector(".icon-winner")
        var venceu = document.querySelector("#venceu")
        if (win_tie[0][0] === true) {
            document.querySelector("#end-game").style.display = "block"
            document.querySelector("#endGameConfig").style.transform = "translate(-50%, -50%) scale(1)"
            if (win_tie[0][1] === "O") {
                winImage.innerHTML = `<svg height="110" width="110"><circle class="circle" cx="60" cy="60" r="40" stroke="#231f20" stroke-width="10" fill-opacity="0" /></svg>`
                venceu.innerHTML = "Venceu!"
            } else if (win_tie[0][1] === "X") {
                winImage.innerHTML = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              width="100px" height="100px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve"><g id="Layer_3" class="X-svg"><line id="path2" fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" x1="8.5" y1="41.5" x2="41.5" y2="8.5"/>
                <line id="path3" fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" x1="41.5" y1="41.5" x2="8.5" y2="8.5"/></g></svg>`
                venceu.innerHTML = "Venceu!"
            }
        } else if (win_tie[1] === true) {
            document.querySelector("#end-game").style.display = "block"
            document.querySelector("#endGameConfig").style.transform = "translate(-50%, -50%) scale(1)"

            winImage.innerHTML = `<svg height="110" width="110"><circle class="circle" cx="60" cy="60" r="40" stroke="#231f20" stroke-width="10" fill-opacity="0" /></svg>`
            winImage.innerHTML += `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            width="100px" height="100px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve"><g id="Layer_3" class="X-svg"><line id="path2" fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" x1="8.5" y1="41.5" x2="41.5" y2="8.5"/>
            <line id="path3" fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" x1="41.5" y1="41.5" x2="8.5" y2="8.5"/></g></svg>`
            venceu.innerHTML = "Empate!"
        }
    }, [game])

    useEffect(() => {
        //Parte de escolher a opção de jogo
        var cog = document.querySelector(".fa-cog")
        cog.addEventListener("click", () => {
            var dropdown = document.querySelector(".dropdown")
            dropdown.style.display = getComputedStyle(dropdown, null).display === "none" ? "block" : "none"
            cog.style.transform = getComputedStyle(dropdown, null).display === "none" ? "rotate(0deg)" : "rotate(180deg)"
        })
    }, [])

    function restart() {
        setGame({
            tic_tac: "O",
            gameConfig: [null, null, null, null, null, null, null, null, null],
            gameMode: game.gameMode
        })

        document.querySelector("#endGameConfig").style.transform = "translate(-50%, -50%) scale(0)"
        document.querySelector("#end-game").style.display = "none"
    }
    function CheckWinner() {
        if ((game.gameConfig[0] === "O" && game.gameConfig[1] === "O" && game.gameConfig[2] === "O") ||
            (game.gameConfig[3] === "O" && game.gameConfig[4] === "O" && game.gameConfig[5] === "O") ||
            (game.gameConfig[6] === "O" && game.gameConfig[7] === "O" && game.gameConfig[8] === "O") ||
            //Vertical Possibility
            (game.gameConfig[0] === "O" && game.gameConfig[3] === "O" && game.gameConfig[6] === "O") ||
            (game.gameConfig[1] === "O" && game.gameConfig[4] === "O" && game.gameConfig[7] === "O") ||
            (game.gameConfig[2] === "O" && game.gameConfig[5] === "O" && game.gameConfig[8] === "O") ||
            //Diagonal Possibility
            (game.gameConfig[0] === "O" && game.gameConfig[4] === "O" && game.gameConfig[8] === "O") ||
            (game.gameConfig[2] === "O" && game.gameConfig[4] === "O" && game.gameConfig[6] === "O"))
        { // If número O vencer
            win_tie[0][0] = true
            win_tie[0][1] = "O"
        } else if ((game.gameConfig[0] === "X" && game.gameConfig[1] === "X" && game.gameConfig[2] === "X") ||
            (game.gameConfig[3] === "X" && game.gameConfig[4] === "X" && game.gameConfig[5] === "X") ||
            (game.gameConfig[6] === "X" && game.gameConfig[7] === "X" && game.gameConfig[8] === "X") ||
            //Vertical Possibility
            (game.gameConfig[0] === "X" && game.gameConfig[3] === "X" && game.gameConfig[6] === "X") ||
            (game.gameConfig[1] === "X" && game.gameConfig[4] === "X" && game.gameConfig[7] === "X") ||
            (game.gameConfig[2] === "X" && game.gameConfig[5] === "X" && game.gameConfig[8] === "X") ||
            //Linear Possibility
            (game.gameConfig[0] === "X" && game.gameConfig[4] === "X" && game.gameConfig[8] === "X") ||
            (game.gameConfig[2] === "X" && game.gameConfig[4] === "X" && game.gameConfig[6] === "X"))
        {
            win_tie[0][0] = true
            win_tie[0][1] = "X"
        } else if (game.gameConfig.filter(element => element != null).length === 9) {
                win_tie[1] = true
        }
    }

    function handlePlayed(action) {
        if (game.gameConfig[action - 1] === null && win_tie[0][0] === false) {
            function newValues() {
                var newValue = [...game.gameConfig.slice(0, action - 1), game.tic_tac === "O" ? "O" : "X" , ...game.gameConfig.slice(action)]
                setGame({
                    tic_tac: game.tic_tac === "O" ? "X" : "O",
                    gameConfig: newValue,
                    gameMode: game.gameMode
                })
            }
            if (game.gameMode === "human") {
                newValues()
            } else if (game.gameMode === "IA") {
                if (game.tic_tac === "O") {
                    newValues()
                }
            }
        }
    }

    useEffect(() => {
        if ((game.gameMode === "IA") && (game.tic_tac === "X") && (win_tie[0][0] === false) && (win_tie[1] === false)) {
            config(game)

            setTimeout(() => {
                setGame({
                    tic_tac: game.tic_tac === "O" ? "X" : "O",
                    gameConfig: IaPlay,
                    gameMode: game.gameMode
                })

            }, 1500)
        }
    }, [game])


    function IA_alternative() {

        setGame({
            tic_tac: "O",
            gameConfig: [null, null, null, null, null, null, null, null, null],
            gameMode: "IA"
        })

        document.querySelector('.dropdown').style.display = "none"
        document.querySelector(".fa-cog").style.transform = "rotate(0deg)"
    }

    function FriendAlternative() {
        setGame({
            tic_tac: "O",
            gameConfig: [null, null, null, null, null, null, null, null, null],
            gameMode: "human"
        })

        document.querySelector('.dropdown').style.display = "none"
        document.querySelector(".fa-cog").style.transform = "rotate(0deg)"
    }


    function closeConfig() {
        document.querySelector("#endGameConfig").style.transform = "translate(-50%, -50%) scale(0)"
        document.querySelector("#end-game").style.display = "none"
    }

    return (
        <div id="game">
            <div id="body">
                <div className="column">
                    <div className="line border-bottom border-right" onClick={() => {handlePlayed(1)}}><div>{game.gameConfig[0]}</div></div>
                    <div className="line border-bottom border-right" onClick={() => {handlePlayed(4)}}><div>{game.gameConfig[3]}</div></div>
                    <div className="line border-right" onClick={() => {handlePlayed(7)}}><div>{game.gameConfig[6]}</div></div>
                </div>
                <div className="column">
                    <div className="line border-bottom border-right" onClick={() => {handlePlayed(2)}}><div>{game.gameConfig[1]}</div></div>
                    <div className="line border-bottom border-right" onClick={() => {handlePlayed(5)}}><div>{game.gameConfig[4]}</div></div>
                    <div className="line border-right" onClick={() => {handlePlayed(8)}}><div>{game.gameConfig[7]}</div></div>
                </div>
                <div className="column">
                    <div className="line border-bottom" onClick={() => {handlePlayed(3)}}><div>{game.gameConfig[2]}</div></div>
                    <div className="line border-bottom" onClick={() => {handlePlayed(6)}}><div>{game.gameConfig[5]}</div></div>
                    <div className="line" onClick={() => {handlePlayed(9)}}><div>{game.gameConfig[8]}</div></div>
                </div>
            </div>
            <br/>
            <div className="config">
                <div className="XorO">
                    <div className="oneSpan">Vez de: </div>
                    <div className="twoSpan">{game.tic_tac}</div>
                </div>
                <div className="config-options">
                    <button className="btn restart" onClick={() => restart()}>Recomeçar</button>
                    <div className="btn configBtn">
                        <div className="dropdown">
                            <div className="alternative" onClick={() => {FriendAlternative()}}>
                                Jogar Contra um Amigo
                            </div>
                            <div className="alternative line-top" onClick={() => {IA_alternative()}}>
                                Jogar Contra IA
                            </div>
                        </div>
                        <i class="fas fa-cog fa-2x"></i>
                    </div>
                </div>
            </div>
            <div id="end-game">

            </div>
            <div id="endGameConfig">
                <h1 id="endTittle">Fim de Jogo!</h1>
                <div className="icon-winner"></div>
                <div id="venceu">Venceu...</div>
                <button className="btn game-again" onClick={() => restart()}>Jogar Novamente</button>
                <button className="btn exit" onClick={() => closeConfig()}>Ver Resultado</button>
            </div>
            <div className="modeGame">Modo de Jogo atual: <span className="red">{game.gameMode === "human" ? 'Contra um Amigo 😎' : 'Contra o robo 🤖'}</span></div>
        </div>
    )

}

export {App}
