luminosidad = 0
temperatura = 0

def on_button_pressed_a():
    global luminosidad
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """)
    luminosidad = input.light_level()
    if luminosidad > 150:
        music._play_default_background(music.built_in_playable_melody(Melodies.ENTERTAINER),
            music.PlaybackMode.IN_BACKGROUND)
    else:
        music._play_default_background(music.built_in_playable_melody(Melodies.FUNERAL),
            music.PlaybackMode.IN_BACKGROUND)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global temperatura
    temperatura = input.temperature()
    if temperatura > 22:
        basic.show_icon(IconNames.PITCHFORK)
    else:
        basic.show_icon(IconNames.CHESSBOARD)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    pass
basic.forever(on_forever)
