const dice = document.querySelector('.dice');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
let score0El = document.querySelector('#score--0');
let score1El = document.querySelector('#score--1');
const diceRoll = document.querySelector('.btn--roll');
const newGame = document.querySelector('.btn--new');
const hold = document.querySelector('.btn--hold');
const playerActive = document.querySelector('.player--active');

let play = true;
let currentScore = 0;
let activePlayer = 0;
let score = [0,0]
dice.classList.add('hidden');

const switchPlayer = function(){
	    currentScore = 0;
    	document.getElementById(`current--${activePlayer}`).textContent = 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
        (activePlayer === 0 ? activePlayer = 1 : activePlayer = 0);
}

diceRoll.addEventListener('click', function (){
	if(play){
	let Number = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${Number}.png`;
    dice.classList.remove('hidden');
    if(Number!== 1){
	    currentScore+= Number;
	    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
		switchPlayer();
    }
}
})

hold.addEventListener('click', function (){
	if(play){
	score[activePlayer]+= currentScore;
	if(score[activePlayer] >= 20){
		player0El.classList.remove('player--active');
        player1El.classList.remove('player--active');
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        dice.classList.add('hidden');
        play = false;
	}else{
	   document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
	   switchPlayer();
	}
}
});

newGame.addEventListener('click', function (){
	document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
	currentScore = 0;
	score =[0,0];
	play = true;
	activePlayer = 0;
	dice.classList.add('hidden');

	player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    current0El.textContent = 0;
    current1El.textContent = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
})