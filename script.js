const holes = $('.hole') // utilier la méthode jquery appropriée pour selectionner les éléments ayant pour classe "hole";
const scoreBoard = $('.score') //utiliser la méthode jquery appropriée pour selectionner l'élément ayant pour classe "score";
const moles = $('.mole') // utilier la méthode jquery appropriée pour selectionner les éléments ayant pour classe "mole";



console.log(holes)
console.log(scoreBoard)
console.log(moles)
decompte = 10
let score = 0


//$(holes).addClass('up')

function  startgame () {
    let intervalGame = setInterval(() =>{
        if(decompte !== 0) {
            decompte --
            let intervalHolesUp = setInterval(()=>{
                let hole = holes.eq(Math.floor(Math.random() * holes.length));
                hole.addClass('up');
                hole.click(function() {
                    $(this).removeClass('up');
                    score++;
                    scoreBoard.text(score)
                });
            }, Math.floor(Math.random() * (1000 - 200)) + 200)

        }
        else {
            clearInterval(intervalGame)
            alert("Game over!!!" + " Votre score est de: " + score)
            window.location.reload()
        }
    },1000)


}

document.getElementById("startGame").addEventListener("click", (startgame))