let isTemperatura = false
let temperatura = 0
let luminosidad = 0
input.onButtonPressed(Button.A, function () {
    isTemperatura = false
})
input.onButtonPressed(Button.B, function () {
    isTemperatura = true
})
basic.forever(function () {
    if (isTemperatura == true) {
        music.stopMelody(MelodyStopOptions.All)
        temperatura = input.temperature()
        if (temperatura > 22) {
            basic.showIcon(IconNames.Pitchfork)
        } else {
            basic.showIcon(IconNames.Chessboard)
        }
    } else {
        luminosidad = input.lightLevel()
        if (luminosidad > 150) {
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.UntilDone)
        } else {
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funeral), music.PlaybackMode.UntilDone)
        }
    }
})
