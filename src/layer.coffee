window.JnR = {} unless window.JnR
class window.JnR.Layer

  constructor: (@name, @root=document.body, @width=800, @height=600, prepend=false)->
    unless @name
      @name = "layer#{document.getElementsByTagName('canvas').length}"

    @canvas = document.createElement("canvas")
    @canvas.width = @w = @width
    @canvas.height = @h = @height
    @canvas.id = "JnR-#{@name}"
    @canvas.style.position = "absolute"

    if @root.hasChildNodes() and prepend
      @root.insertBefore @canvas, @root.firstChild
    else
      @root.appendChild @canvas

    @context = @ctx = @canvas.getContext("2d")

