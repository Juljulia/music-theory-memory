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

    /*this represents the card that was clicked*/
    this.classList.add('flip');

    if(!hasFlippedCard){
        hasFlippedCard= true;
        firsCard = this;
        return;
    }

    secondCard = this;

    checkForMatch();
}

function checkForMatch(){
    if(firstCard.dataset.value === secondCard.dataset.value){
        disableCards();
        return;
    }

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
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

cards.forEach(card => card.addEventListener('click', flipCard));
