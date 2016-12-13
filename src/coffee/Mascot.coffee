class Mascot
  constructor: (@mascot) ->

  set: ->
    $('main').addClass 'mascot'
    $('main').css 'background-image', "url(#{@mascot})"
    $('main').removeClass 'plain'

  unset: ->
    $('main').removeClass 'mascot'
    $('main').css 'background-image', ''
    $('main').addClass 'plain'

