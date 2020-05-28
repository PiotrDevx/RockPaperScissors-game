const game = () => {
    let pScore = 0;
    let cScore = 0;

    //Start the Game
    const start = () => {
        const playBtn = document.querySelector('.banner button');
        const startScreen = document.querySelector('.banner');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            startScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };

    const play = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.playerHand');
        const computerHand = document.querySelector('.computerHand');

        const computerOptions = ['rock', 'paper', 'scissors'];
        
        options.forEach(options => {
            options.addEventListener('click', function(){
                
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                compareHands(this.textContent, computerChoice);

                playerHand.src = `./assets/${this.textContent}.png`
                computerHand.src = `./assets/${computerChoice}.png`
                

            });
        });

        
        
    };

    const updateScore = () =>{
        const playerScore = document.querySelector('.playerScore p');
        const computerScore = document.querySelector('.computerScore p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice) => {

        const winner = document.querySelector('.winner')

        if(playerChoice === computerChoice){
            winner.textContent = 'It is a tie';
            return;
        }

        if (playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'You Win';
                pScore ++;
                updateScore();
                return;
            } else {
                winner.textContent = 'You Lose';
                cScore ++;
                updateScore();
                return;
            }
        }

        if (playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'You Lose';
                cScore ++;
                updateScore();
                return;
            } else {
                winner.textContent = 'You Win';
                pScore ++;
                updateScore();
                return;
            }
        }

        
        if (playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'You Lose';
                cScore ++;
                updateScore();
                return;
            } else {
                winner.textContent = 'You Win';
                pScore ++;
                updateScore();
                return;
            }
        }
    }

    start();
    play();

};

game();