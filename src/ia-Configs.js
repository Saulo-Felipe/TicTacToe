var IaPlay

function config(game) {
    var RandomPosition
    // Defesa e Ataque
        //Horizontal Ataque
            if (game.gameConfig[0] === "X" && game.gameConfig[1] === "X" && game.gameConfig[2] === null) {
                RandomPosition = 2
            } else if (game.gameConfig[0] === "X" && game.gameConfig[1] === null && game.gameConfig[2] === "X") {
                RandomPosition = 1
            } else if (game.gameConfig[0] === null && game.gameConfig[1] === "X" && game.gameConfig[2] === "X") {
                RandomPosition = 0
            } else if (game.gameConfig[3] === "X" && game.gameConfig[4] === "X" && game.gameConfig[5] === null) {
                RandomPosition = 5
            } else if (game.gameConfig[3] === "X" && game.gameConfig[4] === null && game.gameConfig[5] === "X") {
                RandomPosition = 4
            } else if (game.gameConfig[3] === null && game.gameConfig[4] === "X" && game.gameConfig[5] === "X") {
                RandomPosition = 3
            } else if (game.gameConfig[6] === "X" && game.gameConfig[7] === "X" && game.gameConfig[8] === null) {
                RandomPosition = 8
            } else if (game.gameConfig[6] === "X" && game.gameConfig[7] === null && game.gameConfig[8] === "X") {
                RandomPosition = 7
            } else if (game.gameConfig[6] === null && game.gameConfig[7] === "X" && game.gameConfig[8] === "X") {
                RandomPosition = 6
            }

        //Vertical Ataque
            else if (game.gameConfig[0] === "X" && game.gameConfig[3] === "X" && game.gameConfig[6] === null) {
                RandomPosition = 6
            } else if (game.gameConfig[0] === "X" && game.gameConfig[3] === null && game.gameConfig[6] === "X") {
                RandomPosition = 3
            } else if (game.gameConfig[0] === null && game.gameConfig[3] === "X" && game.gameConfig[6] === "X") {
                RandomPosition = 6
            } else if (game.gameConfig[1] === "X" && game.gameConfig[4] === "X" && game.gameConfig[7] === null) {
                RandomPosition = 7
            } else if (game.gameConfig[1] === "X" && game.gameConfig[4] === null && game.gameConfig[7] === "X") {
                RandomPosition = 4
            } else if (game.gameConfig[1] === null && game.gameConfig[4] === "X" && game.gameConfig[7] === "X") {
                RandomPosition = 1
            } else if (game.gameConfig[2] === "X" && game.gameConfig[5] === "X" && game.gameConfig[8] === null) {
                RandomPosition = 8
            } else if (game.gameConfig[2] === "X" && game.gameConfig[5] === null && game.gameConfig[8] === "X") {
                RandomPosition = 5
            } else if (game.gameConfig[2] === null && game.gameConfig[5] === "X" && game.gameConfig[8] === "X") {
                RandomPosition = 2
            }

        //Diagonal Ataque
            else if (game.gameConfig[0] === "X" && game.gameConfig[4] === "X" && game.gameConfig[8] === null) {
                RandomPosition = 8
            } else if (game.gameConfig[0] === "X" && game.gameConfig[4] === null && game.gameConfig[8] === "X") {
                RandomPosition = 4
            } else if (game.gameConfig[0] === null && game.gameConfig[4] === "X" && game.gameConfig[8] === "X") {
                RandomPosition = 0
            } else if (game.gameConfig[2] === "X" && game.gameConfig[4] === "X" && game.gameConfig[6] === null) {
                RandomPosition = 6
            } else if (game.gameConfig[2] === "X" && game.gameConfig[4] === null && game.gameConfig[6] === "X") {
                RandomPosition = 4
            } else if (game.gameConfig[2] === null && game.gameConfig[4] === "X" && game.gameConfig[6] === "X") {
                RandomPosition = 2
            }


        //Horizontal Defesa
            else if (game.gameConfig[0] === "O" && game.gameConfig[1] === "O" && game.gameConfig[2] === null) {
                RandomPosition = 2
            } else if (game.gameConfig[0] === "O" && game.gameConfig[1] === null && game.gameConfig[2] === "O") {
                RandomPosition = 1
            } else if (game.gameConfig[0] === null && game.gameConfig[1] === "O" && game.gameConfig[2] === "O") {
                RandomPosition = 0
            } else if (game.gameConfig[3] === "O" && game.gameConfig[4] === "O" && game.gameConfig[5] === null) {
                RandomPosition = 5
            } else if (game.gameConfig[3] === "O" && game.gameConfig[4] === null && game.gameConfig[5] === "O") {
                RandomPosition = 4
            } else if (game.gameConfig[3] === null && game.gameConfig[4] === "O" && game.gameConfig[5] === "O") {
                RandomPosition = 3
            } else if (game.gameConfig[6] === "O" && game.gameConfig[7] === "O" && game.gameConfig[8] === null) {
                RandomPosition = 8
            } else if (game.gameConfig[6] === "O" && game.gameConfig[7] === null && game.gameConfig[8] === "O") {
                RandomPosition = 7
            } else if (game.gameConfig[6] === null && game.gameConfig[7] === "O" && game.gameConfig[8] === "O") {
                RandomPosition = 6
            }

        //Vertical Defesa
            else if (game.gameConfig[0] === "O" && game.gameConfig[3] === "O" && game.gameConfig[6] === null) {
                RandomPosition = 6
            } else if (game.gameConfig[0] === "O" && game.gameConfig[3] === null && game.gameConfig[6] === "O") {
                RandomPosition = 3
            } else if (game.gameConfig[0] === null && game.gameConfig[3] === "O" && game.gameConfig[6] === "O") {
                RandomPosition = 6
            } else if (game.gameConfig[1] === "O" && game.gameConfig[4] === "O" && game.gameConfig[7] === null) {
                RandomPosition = 7
            } else if (game.gameConfig[1] === "O" && game.gameConfig[4] === null && game.gameConfig[7] === "O") {
                RandomPosition = 4
            } else if (game.gameConfig[1] === null && game.gameConfig[4] === "O" && game.gameConfig[7] === "O") {
                RandomPosition = 1
            } else if (game.gameConfig[2] === "O" && game.gameConfig[5] === "O" && game.gameConfig[8] === null) {
                RandomPosition = 8
            } else if (game.gameConfig[2] === "O" && game.gameConfig[5] === null && game.gameConfig[8] === "O") {
                RandomPosition = 5
            } else if (game.gameConfig[2] === null && game.gameConfig[5] === "O" && game.gameConfig[8] === "O") {
                RandomPosition = 2
            }

        //Diagonal Defesa
            else if (game.gameConfig[0] === "O" && game.gameConfig[4] === "O" && game.gameConfig[8] === null) {
                console.log("entrei aqui")
                RandomPosition = 8
            } else if (game.gameConfig[0] === "O" && game.gameConfig[4] === null && game.gameConfig[8] === "O") {
                RandomPosition = 4
            } else if (game.gameConfig[0] === null && game.gameConfig[4] === "O" && game.gameConfig[8] === "O") {
                RandomPosition = 0
            } else if (game.gameConfig[2] === "O" && game.gameConfig[4] === "O" && game.gameConfig[6] === null) {
                RandomPosition = 6
            } else if (game.gameConfig[2] === "O" && game.gameConfig[4] === null && game.gameConfig[6] === "O") {
                RandomPosition = 4
            } else if (game.gameConfig[2] === null && game.gameConfig[4] === "O" && game.gameConfig[6] === "O") {
                RandomPosition = 2
            } else {
                console.log("Número aleatorio gerado")
                while (true) {
                    RandomPosition = Math.floor(Math.random() * (8 - 0 + 1)) + 0
                    if (game.gameConfig[RandomPosition] === null) {
                        break
                    }
                }
            }

    var position = game.gameConfig
    position[RandomPosition] = "X"
    IaPlay = position

}

export {config, IaPlay}
