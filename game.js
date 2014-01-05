function initGame() {
  this.addLayer("one")
  this.addSprite(
    "drop", "assets/drop.png", 96, 96,
    this.draw.bind(this, "one", "drop", 10, 10, 96, 96)
  )
  var x = 10
  var y = 10

  function gameLoop() {
    if(x < 694 && y == 10) x+=2
    else if(x == 694 && y < 494) y+=2
    else if(x > 10 && y == 494) x-=2
    else if(x == 10 && y > 10) y-=2

    this.draw("one", "drop", x, y, 96, 96)

    requestAnimationFrame(gameLoop.bind(this));
  }

  gameLoop.apply(this)
}
