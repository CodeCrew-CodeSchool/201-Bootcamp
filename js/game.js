//Welcome to the 201 Coding Practice Game
let log = console.log;

let student = {};
student.score = 0;

const quiz = {};
quiz.functions = nameFun; //5
quiz.array = arrayFun; //10
quiz.array2 = arrayLoopFun; //10
quiz.array3 = arrayLoopBackFun//10
quiz.objects = objectFun; //25
quiz.constructor = constructorFun; //40
/**/
quiz.grade = function() {
    console.clear();
    log(`Student name: ${student.name} | Grade: ${student.score}`);
}
/**/
quiz.show = function() {
    console.clear();
    console.table(this, ['quiz function names', 'Values']);
}

log('Welcome to the 201 Coding Practice Game');

log('To start, create a variable called name and set it to your name.')
log('When done, run the testName() function.');


function nameFun() {
    let authorname = 'dij';//'|-| @ ©️ k 3 ®';
    log(`Create a function that tells me "Hi, my name is ${authorname}!". Make sure your function uses your name variable in the output`);
    //log(`Hi, my name is ${name}, welcome to BOOTCAMP`);
    log(`Run testFunction() with your Function-name and Name Variable as parameters to verify correctness`);
}

function arrayFun() {
    log('Create an array and name the variable myArray. Fill the array the first name of 5 of your favorite people');
    log('Use the testArray function to test your array');
}

function arrayLoopFun() {
    log('Create a function and use a loop to RETURN the contents of the array as a string');
    log("To verify, run the testArrayLoop() function with your function's name as a parameter");
}

function arrayLoopBackFun() {
    log('Create a function and use a loop to output the contents of the array in a string that is reversed');
    log("To verify, run the testArrayLoopRev() function with your function's name as a parameter");
}

//create function & string usage
//create a function that outputs your name

function objectFun() {
    log('Create an object representation of your favorite pizza and call it myPizza.');
    log('Required properties include: toppings (array), sauce (string), size (string), crust (string), and cost (int)');
    log('Set all object properties to lowercase!');
    log('To verify, run the testObj function. Your object is an optional parameter');
    //toppings, sauce, size, crust, cost
}

function constructorFun() {
    log('Create an object contructor to create multiple kinds of pizza.');
    log('Also, create an object constructor that can be used to create multiple orders.');
    log('Required properties for orders include: pizza (array), order status (string) ~ for example: cooking / out for delivery / delivered ~');
    log('The order objects should also have a method that can update the status of the order');
    log('Set all object properties to lowercase!');
    // log('To verify, run the testOrder function ')
    log('To verify, run the testConstructors function with your Pizza constructor and Order constructor as parameters'); 
    //test both pizza and order constructors by creating a 
    // new object based on the function parameters
}










//, create an array, a loop, an object, an object constructor


