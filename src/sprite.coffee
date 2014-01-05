window.JnR = {} unless window.JnR
class window.JnR.Sprite

  constructor: (@name, @width, @height, @cb)->
    @image = new Image()
    @image.onload = @cb

  load: (@url, @width, @height)->
    @image.src = @url

