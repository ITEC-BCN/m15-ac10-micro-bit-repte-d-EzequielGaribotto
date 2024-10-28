let luminosidad = 0
let temperatura = 0
input.onButtonPressed(Button.A, function () {
    luminosidad = input.lightLevel()
    if (luminosidad > 150) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
    } else {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funeral), music.PlaybackMode.InBackground)
    }
})
input.onButtonPressed(Button.B, function () {
    temperatura = input.temperature()
    if (temperatura > 22) {
        basic.showIcon(IconNames.Pitchfork)
    } else {
        basic.showIcon(IconNames.Chessboard)
    }
})
basic.forever(function () {
	
})
