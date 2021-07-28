let start = 0
music.playTone(131, music.beat(BeatFraction.Sixteenth))
basic.forever(function () {
    if (calliBot2.readBumperSensor(C2Sensor.links, C2State.an) || calliBot2.readBumperSensor(C2Sensor.rechts, C2State.an)) {
        start = input.runningTime()
        while (input.runningTime() - start < 1000) {
            calliBot2.motor(C2Motor.beide, C2Dir.rückwärts, 30)
        }
        start = input.runningTime()
        while (input.runningTime() - start < 333) {
            calliBot2.motor(C2Motor.links, C2Dir.rückwärts, 30)
            calliBot2.motor(C2Motor.rechts, C2Dir.vorwärts, 30)
        }
    } else {
        calliBot2.motor(C2Motor.beide, C2Dir.vorwärts, 30)
    }
})
