//Welcome to the 201 Coding Practice Game
let log = console.log;

let student = {};
student.score = 0;

log('Welcome to the 201 Coding Practice Game');

log('Create a variable named name and set it to your name.')
log('When done, run the testName() function.');

function testName() {
    try {
        if (name == '') {
            console.error("You didn't provide a name");
            student.score -= 10;
        } else {
            log("The name you entered is " + name);
            student.name = name;
            student.score += 10;
        }
    } catch(e) {
        console.error("You didn't create a variable!");
        student.score -= 15;
    }
}

