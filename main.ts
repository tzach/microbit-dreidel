function day (num: number) {
    if (1 == num) {
        basic.showLeds(`
            . . # # .
            . . . # .
            . . . # .
            . . . # .
            # # # # .
            `)
    }
    if (2 == num) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . . # # .
            . # . # .
            . # . # .
            `)
    }
    if (3 == num) {
        basic.showLeds(`
            . # # # #
            . . . . #
            . # . . #
            . # . . #
            . # . . #
            `)
    }
    if (4 == num) {
        basic.showLeds(`
            . # # # #
            . # . . #
            . # # . #
            . . . . #
            . # # # #
            `)
    }
}
input.onGesture(Gesture.Shake, function () {
    basic.pause(500)
    if (shake == 0) {
        shake = 1
        day(randint(1, 4))
        basic.pause(5000)
        shake = 0
    }
    basic.clearScreen()
})
let shake = 0
shake = 0
basic.clearScreen()
basic.forever(function () {
    if (shake == 0) {
        images.createImage(`
            . . # . .
            # # # # #
            # . . . #
            . # . # .
            . . # . .
            `).scrollImage(1, 1000)
    }
})
