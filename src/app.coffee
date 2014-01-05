window.JnR = {} unless window.JnR
class window.JnR.App

  layers: {}
  sprites: {}

  constructor: (@initFunction, @root=document.body, @width, @height)->
    @root = document.getElementById(@root) if (typeof @root is 'string')
    throw new Error("invalid root element") unless @root

    @initFunction()

  addLayer: (name)->
    @layers[name] = new JnR.Layer(name, @root, @width, @height)

  addSprite: (name, image, w, h, cb)->
    sprite = new JnR.Sprite(name, w, h, cb)
    sprite.load(image, w, h)
    @sprites[name] = sprite

  draw: (layer, sprite, x, y, w, h)->
    @layers[layer].context.drawImage @sprites[sprite].image, x, y, w, h

