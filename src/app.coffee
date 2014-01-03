window.JnR ||= {}
class window.JnR.App

  layers: {}
  sprites: {}

  constructor: (@root=document.body, @width, @height)->
    @root = document.getElementById(@root) if (typeof @root is 'string')
    throw new Error("invalid root element") unless @root

    @addLayer("one")
    @addLayer("two")

  addLayer: (name)->
    return false if @layers[name]?

    @layers[name] = new JnR.Layer(name, @root, @width, @height)

  addSprite: (name, image, size)->
    return false if sprites[name]?

    sprite = new Sprite(name)
    sprite.load(image, size)
    sprites[name] = sprite

  draw: (layer, sprite, bbox)->
    layer.context.drawImage(sprite.image, bbox.a, bbox.b, bbox.c, bbox.d)

