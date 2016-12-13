
$(document).ready (event) ->
  controller = new MascotController()

  window.setInterval ->
    controller.chooseNewMascot()
  , 30*1000

