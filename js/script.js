'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // document.querySelector('.message').textContent = 'โ No number!';
    displayMessage('โ No number!');
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '๐ Correct Number!';
    displayMessage('๐ Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (score > 1) {
    score--;
    // document.querySelector('.message').textContent =
    //   guess > secretNumber ? 'Too high!' : 'Too low!';
    displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
    document.querySelector('.score').textContent = score;
  } else {
    // document.querySelector('.message').textContent = 'You lose the game!';
    displayMessage('You lose the game!');
    document.querySelector('.score').textContent = 0;
  }
});
//Refactoring ็ฎๅไปฃ็ 

/*   else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
    } else {
      document.querySelector('.message').textContent = 'You lose the game!';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
    } else {
      document.querySelector('.message').textContent = 'You lose the game!';
    }
  }
  document.querySelector('.score').textContent = score;
}); */
// .querySelector('.check') ่ทๅไบไปถๆบ .addEventListener('click', ็ๅฌๅฏน่ฑกๆฏๅฆ่ขซ่งฆๅ
// , function ()
//{console.log(document.querySelector('.guess').value()); }่ฟ่กไบไปถๅค็็จๅบไปฅๅฝๆฐ่ตๅผๅฝขๅผๅฎ็ฐ

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  //   document.querySelector('.highscore').textContent = highScore;
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = 'NaN';
});
