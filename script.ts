

function generateRandom():number{
    let x = Math.floor(Math.random()*101);
    return x
}

function compareGuesses():void {
    
    let x = generateRandom()
    let guess1:number = parseInt((document.getElementById('first-number') as HTMLInputElement).value);
    let guess2:number = parseInt((document.getElementById('second-number') as HTMLInputElement).value);
    
    if(guess1 === x && guess2 === x){
        console.log('congratulations, you BOTH got it right!')
    } else if(guess1 === x){
        console.log(`Player1, you got it right, number was ${x}`)
    } else if(guess1 === x){
        console.log(`Player2, you got it right, number was ${x}`)
    } else if(Math.abs(x - guess1) === Math.abs(x - guess2)){
        console.log(`you are both equally close! number is ${x}`)
    } else if(Math.abs(x - guess1) < Math.abs(x - guess2)){
        console.log(`Player1 wins, number was ${x}`);
    } else if(Math.abs(x - guess2) < Math.abs(x - guess1)){
        console.log(`Player2 wins, number was ${x}`);


   

}
}

let form = document.getElementById('form') as HTMLFormElement
form.addEventListener('submit', function(e){
    e.preventDefault()
    compareGuesses()
})