let playerHp = 100
let dragonHp = 100

let playerAttack = () => {
    let roll = rollDice()
    dragonHp -= roll 
    return roll
}

let dragonAttack = () => {
    let roll = rollDice()
    playerHp -= roll
    return roll
}

let rollDice = () => {
    return Math.ceil(Math.random() * 20) 
}

let battle = setInterval(() => {
    
        if (playerHp > 0){ 
            console.log(`O Herói causou ${playerAttack()} e agora o Dragão tem ${dragonHp}.`)
        } else {
            console.log('Parabéns! Você virou comida de dragão! xD')
            clearInterval(battle)
            return false
        }
    
        if (dragonHp > 0) {
            console.log(`O Dragão causou ${dragonAttack()} e agora o Herói tem ${playerHp}.`)
        } else {
            console.log('Parabéns! Você matou o dragão.')
            clearInterval(battle)
            return false
        }

}, 1000);