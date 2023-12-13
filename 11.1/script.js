//create an array of flashcards
const flashcards =[
    {question:'What is hello in japanese?', answer:'Konnichiwa'},
    {question:'What is goodbye in japanese?', answer:'BaiBai'},
];

//create a avrible to store current flashcards
//the index is the position of the card in the array
let currentCard = 0;

//create a funtion to update the flashcard content
function updateFlashCard(){
    //get the current card content
    const card = document.getElementById('flashcard');
    //update the text content of the card with the question or answer
   //in this case flipped means the answer is showing
   //there are only two sides to a flashcard
    if(card.classList.contains('flipped')) {
        //if flipped show answer side
        card.textContent = flashcards[currentCard].answer;

    }
    else {
        //otherwise, if not flipped show the question side
        card.textContent = flashcards[currentCard].question;

    }

}
//init first card

updateFlashCard();
//event listener for flash card
document.getElementById('flashcard').addEventListener('click', function() {
  //toggle the flipped card so card flips
    this.classList.toggle('flipped');
    //update the card content by calling the updateFlashCard function
    updateFlashCard();
});


//event listener for next button
document.getElementById('next').addEventListener('click', function() {
   //increment the current card index
    currentCard = (currentCard + 1) % flashcards.length;
    //get the flash card element 
    const card = document.getElementById('flashcard');
   //remove the flipped class from the card
    card.classList.remove('flipped');
    //update the card content by calling the updateFlashCard function
    updateFlashCard();
});