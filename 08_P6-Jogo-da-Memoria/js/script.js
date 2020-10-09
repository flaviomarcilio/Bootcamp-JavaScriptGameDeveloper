const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockboard = false;

function flipCard() {
    if(lockboard) return;
    if(this === firstCard) return;

    this.classList.add('flip');

    if(!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;
    checkForMatch();
}

function checkForMatch() {
    if(firstCard.dataset.card === secondCard.dataset.card){
        disableCards();
        return;
    }

    unFlipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unFlipCards() {
    lockboard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1000);

}

function resetBoard() {
    [hasFlippedCard, lockboard] = [false, false];
    [firstCard, secondCard] = [null, null];
    
}

(function shuffle() {
    cards.forEach((card) => {
        let randowPosition = Math.floor(Math.random() * 12);
        card.style.order = randowPosition;
    })
})();

cards.forEach((card) => {
    card.addEventListener('click', flipCard);
})

