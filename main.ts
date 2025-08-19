let amazonia = 0
let mata_atlatica = 0
input.onButtonPressed(Button.A, function () {
    amazonia = 1
    basic.showString("A")
    basic.showNumber(amazonia)
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    let cerrado = 0
    basic.showString("habitat")
    basic.showString("A")
    basic.showNumber(amazonia)
    basic.showString("C")
    basic.showNumber(cerrado)
    basic.showString("M")
    basic.showNumber(mata_atlatica)
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    mata_atlatica += 1
    basic.showString("" + (mata_atlatica))
    basic.showNumber(0)
    basic.pause(1000)
    basic.clearScreen()
})
