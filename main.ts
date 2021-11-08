let Dice1R2 = 0
let Dice1 = 0
let Dice2 = 0
let Dice3 = 0
let Dice4 = 0
let Dice5 = 0
input.onPinPressed(TouchPin.P0, function () {
	
})
input.onButtonPressed(Button.A, function () {
    Dice1R2 = Dice1
})
input.onButtonPressed(Button.B, function () {
	
})
input.onGesture(Gesture.Shake, function () {
    Dice1 = randint(1, 6)
    basic.showNumber(Dice1)
    basic.pause(500)
    Dice2 = randint(1, 6)
    basic.pause(500)
    basic.showNumber(Dice1)
    Dice3 = randint(1, 6)
    basic.pause(500)
    basic.showNumber(Dice1)
    Dice4 = randint(1, 6)
    basic.pause(500)
    basic.showNumber(Dice1)
    Dice5 = randint(1, 6)
    basic.pause(500)
})
