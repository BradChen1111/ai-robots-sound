/**
 * Change the "Class 1" bubbles in the if statements to the same names as the classes you made on Teachable Machine. 
 * 
 * Spaces, spelling and capitalization matters! 
 * 
 * Class names can't be longer than 12 characters.
 */
/**
 * Anything you put inside these if statements will be activated when the micro:bit receives that class name from the https://microbitai.inventor.city 
 * 
 *  vision recognition website
 */
/**
 * Click on the + to add more classes, and the - to delete them
 * 
 * Just duplicate this <SerialData = " "> hexagon and place it into the  new else if statement
 */
// This block listens to the website for your class names, and saves them as a variable
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    SerialData = serial.readUntil(serial.delimiters(Delimiters.NewLine))
    music.playTone(262, music.beat(BeatFraction.Eighth))
    // This If statement checks that variable with the class name, and if it matches the class name you entered, it will activate the code within that block
    if (SerialData == "phoebe") {
        basic.showIcon(IconNames.Heart)
    } else if (SerialData == "Mami") {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Meh)
    }
})
let SerialData = ""
serial.redirectToUSB()
