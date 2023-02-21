input.onButtonPressed(Button.A, function () {
    balls += 1
    basic.showString("BALLS")
    basic.showNumber(balls)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("BALLS-STRIKES")
    basic.showNumber(balls)
    basic.showNumber(strikes)
})
input.onButtonPressed(Button.B, function () {
    strikes += 1
    basic.showString("STRIKES")
    basic.showNumber(strikes)
})
input.onGesture(Gesture.Shake, function () {
    strikes = 0
    balls = 0
    basic.showNumber(strikes)
    basic.showNumber(balls)
})
let balls = 0
let strikes = 0
strikes = 0
balls = 0
basic.showNumber(strikes)
basic.showNumber(balls)
