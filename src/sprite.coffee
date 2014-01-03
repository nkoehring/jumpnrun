window.JnR ||= {}
class window.JnR.Sprite
  ready: false

  constructor: (@name, @width, @height)->
    @image = new Image()
    @image.onload = ->
      @ready = true

  load: (@url, size)->
    @image = new Image()
    @image.src = @url
    @width = size.a
    @height = size.b

