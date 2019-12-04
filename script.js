const memorycards = [
    { id: 'g-clef', image: "./images/g-clef.jpg"},
    { id: 'f-clef', image: "./images/f-clef.jpg" },
    { id: 'quarter', image: "./images/quarter.jpg" },
    { id: 'whole', image: "./images/whole.jpg" },
    { id: 'allabreve', image: "./images/allabreve.jpg"},
    { id: 'eighth', image: "./images/eighth.jpg" },
    { id: 'half', image: "./images/half.jpg" },
    { id: 'sixteenth', image: "./images/sixteenth.jpg" },
  ]


//create function with template literal and the content
const createCard = (id, image) => {
    return `
    <div class="memory-card" data-value=${id}>
      <div class="front-face"></div>
      <img class="back-face" src="${image}" alt="memory-card">
    </div>
    `
}

const duplicated = [...memorycards, ...memorycards];

const memoryboard = document.querySelector('.board')
//print the cards on the board
duplicated.forEach(function(card) {
    memoryboard.innerHTML += createCard(card.id, card.image)
})


const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let stopFlip = false; //lockBoard in tutorial 
let firstCard, secondCard;

function flipCard() {
    if(stopFlip) return;
    if(this === firstCard) return;

    /*this. represents the card that was clicked*/

    this.classList.add('flip');

    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;

    checkForMatch();
}

function checkForMatch() {
    if(firstCard.dataset.value === secondCard.dataset.value){
        /* if the cards match the cards flipfunction gets inactivated */
        disableCards(); 
        return;
    }
    /*if they do not match they will flip back */
    unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards(){
    stopFlip = true;

    setTimeout(()=> {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500); /*1.5 seconds before cards turn over*/ 
}

/* resets the values for functions and cards so it can start over from flipCard*/ 
function resetBoard() {
    [hasFlippedCard, stopFlip] = [false, false];
    [firstCard, secondCard] = [null, null];

    /* if all cards are face up and matched a replay button is created */
    if(cards.length === memoryboard.querySelectorAll('.flip').length){
        memoryboard.insertAdjacentHTML('beforeend','<div class="reset"><h3>Yay! You won!</h3><button class="reset-all">Play again</button></div>');
        document.querySelector('.reset-all').addEventListener('click', resetAll);
    };
}


//when game won, remove flip, add a click and shuffle
function resetAll () {
    memoryboard.removeChild(memoryboard.querySelector('.reset'));
    setTimeout(() => {
        cards.forEach(card => {
            card.classList.remove('flip');
            card.addEventListener('click', flipCard);
        });
        shuffle();
    }, 300);
}

cards.forEach(card => card.addEventListener('click', flipCard));

//if reset, loop through and give the card random number
function shuffle() {
    cards.forEach(card=> {
      let randomPos = Math.floor(Math.random() * 16);
      card.style.order = randomPos;
    })
  };
  
  shuffle();