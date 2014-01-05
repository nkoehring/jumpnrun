function initGame() {
  this.addLayer("one")
  this.addSprite(
    "drop", "assets/drop.png", 96, 96,
    this.draw.bind(this, "one", "drop", 10, 10, 96, 96)
  )
}
