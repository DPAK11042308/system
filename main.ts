let reading = 0
let light_level = 0
input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    reading = input.lightLevel()
    light_level = input.lightLevel()
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(reading)
    }
})
