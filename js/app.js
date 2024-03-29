const game = new Game();

/**
 * Listens for click on `#begin-game` and calls startGame() on game object
 */

const startButton = document.getElementById('begin-game');
startButton.addEventListener('click', function() {
  game.startGame();
  this.style.display = 'none';
  document.getElementById('play-area').style.opacity = '1';
});
document.addEventListener('keydown',function(event) {
    game.handleKeydown(event)
})
