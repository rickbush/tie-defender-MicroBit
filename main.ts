function originalTie () {
    pins.digitalWritePin(DigitalPin.P10, 1)
    pins.digitalWritePin(DigitalPin.P11, 0)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P10, 0)
    pins.digitalWritePin(DigitalPin.P11, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P11, 0)
    basic.pause(300)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P13, 0)
    basic.pause(300)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.pause(300)
}
function ledON () {
    pins.digitalWritePin(DigitalPin.P10, 1)
    pins.digitalWritePin(DigitalPin.P11, 1)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
}
function basicBlink () {
    ledON()
    basic.pause(200)
    ledOFF()
    basic.pause(200)
}
function startup () {
    for (let index = 0; index < 3; index++) {
        basicBlink()
    }
    basic.pause(500)
    alternateBlink()
    ledOFF()
    basic.pause(500)
    originalTie()
    for (let index = 0; index < 3; index++) {
        basicBlink()
        music.playTone(4000, music.beat(BeatFraction.Sixteenth))
    }
}
function skipTwo () {
    pins.digitalWritePin(DigitalPin.P10, 1)
    pins.digitalWritePin(DigitalPin.P11, 0)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    music.playTone(4000, music.beat(BeatFraction.Sixteenth))
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P10, 0)
    pins.digitalWritePin(DigitalPin.P11, 1)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    music.playTone(4000, music.beat(BeatFraction.Sixteenth))
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P10, 0)
    pins.digitalWritePin(DigitalPin.P11, 0)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    music.playTone(4000, music.beat(BeatFraction.Sixteenth))
    basic.pause(100)
}
function ledOFF () {
    pins.digitalWritePin(DigitalPin.P10, 0)
    pins.digitalWritePin(DigitalPin.P11, 0)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
}
function alternateBlink () {
    pins.digitalWritePin(DigitalPin.P10, 1)
    pins.digitalWritePin(DigitalPin.P11, 0)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    music.playTone(4000, music.beat(BeatFraction.Sixteenth))
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P10, 0)
    pins.digitalWritePin(DigitalPin.P11, 1)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    music.playTone(4000, music.beat(BeatFraction.Sixteenth))
    basic.pause(100)
}
let PotentiometerVal = 0
led.enable(false)
pins.setEvents(DigitalPin.P1, PinEventType.Edge)
pins.setEvents(DigitalPin.P2, PinEventType.Edge)
pins.setEvents(DigitalPin.P3, PinEventType.Edge)
pins.setEvents(DigitalPin.P4, PinEventType.Edge)
pins.setEvents(DigitalPin.P5, PinEventType.Edge)
pins.setEvents(DigitalPin.P6, PinEventType.Edge)
startup()
basic.forever(function () {
    PotentiometerVal = pins.analogReadPin(AnalogPin.P4)
    pins.analogWritePin(AnalogPin.P9, PotentiometerVal)
    if (input.pinIsPressed(TouchPin.P1)) {
        alternateBlink()
    } else if (input.pinIsPressed(TouchPin.P2)) {
        for (let index = 0; index < 4; index++) {
            ledON()
            basic.pause(100)
            ledOFF()
            basic.pause(100)
        }
    } else if (pins.digitalReadPin(DigitalPin.P3) == 1) {
        originalTie()
    } else {
        ledOFF()
    }
})
