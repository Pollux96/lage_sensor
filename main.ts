input.onButtonPressed(Button.A, function () {
    Vkkip = Vkkip - 100
})
function zeigePixel (cx: number, cy: number) {
    strip.clear()
    strip.setMatrixColor(cx, cy, neopixel.colors(NeoPixelColors.Red))
    strip.setMatrixColor(cx + 1, cy, neopixel.colors(NeoPixelColors.Red))
    strip.setMatrixColor(cx, cy + 1, neopixel.colors(NeoPixelColors.Red))
    strip.setMatrixColor(cx + 1, cy + 1, neopixel.colors(NeoPixelColors.Red))
    strip.show()
}
input.onButtonPressed(Button.B, function () {
    Vkkip = Vkkip + 100
})
let strip: neopixel.Strip = null
let Vkkip = 0
Vkkip = 200
strip = neopixel.create(DigitalPin.P3, 32, NeoPixelMode.RGB)
strip.setMatrixWidth(8)
basic.pause(2000)
let C_X = 3
let Cy = 1
zeigePixel(C_X, 1)
basic.forever(function () {
    if (input.isGesture(Gesture.TiltRight)) {
        if (C_X < 6) {
            C_X = C_X + 1
        }
        basic.pause(Vkkip)
        zeigePixel(C_X, Cy)
    }
    if (input.isGesture(Gesture.TiltLeft)) {
        if (C_X > 0) {
            C_X = C_X - 1
        }
        basic.pause(Vkkip)
        zeigePixel(C_X, Cy)
    }
})
basic.forever(function () {
    if (input.isGesture(Gesture.LogoDown)) {
        if (Cy < 2) {
            Cy = Cy + 1
        }
        basic.pause(Vkkip)
        zeigePixel(C_X, Cy)
    }
    if (input.isGesture(Gesture.LogoUp)) {
        if (Cy > 0) {
            Cy = Cy - 1
        }
        basic.pause(Vkkip)
        zeigePixel(C_X, Cy)
    }
})
