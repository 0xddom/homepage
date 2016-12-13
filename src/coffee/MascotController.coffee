class MascotController
  constructor: ->
      @minWidth = 750
      @mascots = [
        'lightruri3.png',
        'lightruri1.png',
        'ruri3.png',
        'ruri1.png',
        'ruri4.png',
        'ruri6.png'
      ]
      @mascotsPath = 'images/mascots/'
      @mascotEnabled = true

      @lastMascot = @randomMascot()
      @setMascot @lastMascot

  randomMascot: ->
    new Mascot @mascotsPath + @mascots[Math.floor Math.random() * @mascots.length]

  setMascot: (mascot) ->
    if @mascotEnabled
      mascot.set()
      @setWindowResizeHandler mascot
    else
      mascot.unset()

  mascotFits: ->
    $(window).width() > @mascotMinWidth

  setWindowResizeHandler: (mascot) ->
    $(window).resize (event) ->
      if not @mascotFits() and $('main').hasClass 'mascot'
        mascot.unset()
      else if @mascotFits() and not $('main').hasClass 'mascot'
        mascot.set()

  chooseNewMascot: ->
    mascot = @randomMascot()
    while @lastMascot.mascot == mascot.mascot
      mascot = @randomMascot()
    @setMascot mascot
    @lastMascot = mascot
