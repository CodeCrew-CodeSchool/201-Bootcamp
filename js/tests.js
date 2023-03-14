function testName() {
    try {
        if (name == '') {
            console.error("You didn't provide a name");
            student.score -= 5;
        } else {
            //'%c TEST FOR multiply() PASSES', 'color: green'
            log("%c The name you entered is " + name, 'color: green');
            student.name = name;
            student.score += 5;

            log('Answer the following problems at your own pace by calling the following quiz functions: ');
            
            console.table(quiz);
        }
    } catch(e) {
        log(e);
        console.error("You didn't create a variable!");
        student.score -= 10;
    }
}

function testFunction(studentFun, name) {
    if (studentFun(name) == "Hi, my name is " + name + "!") {
        log("Correct Output")
        student.score += 10;
    } else {
        log("Incorrrect!")
        student.score -= 10;
    }
}

function testArray() {
    if (typeof myArray != 'object' || myArray.length != 5) {
        console.error('Your array is invalid');
        student.score -= 10;
    } else {
        log('%c Your array is correct', 'color: green');
        // let myArrayString = myArray.map()
        // myArray.map( x => console.log(x))
    }
}

function adminStringify(arr) {
    let str = ''
    for (let i = 0; i < arr.length; i++) {
        str += arr[i];
    }
    return str;
}
function adminStringifyReverse(arr) {
    let str = ''
    for (let i = arr.length; i > 0; i--) {
        str += arr[i];
    }
    return str;
}
function testArrayLoop(looper) {
    if (looper() != adminStringify(myArray)) {
        console.error("Your array function isn't returning the string of the myArray variable");
        student.score -= 10;
    } else {
        let output = adminStringify(looper);
        log("%c Good job! " + output + " is correct output", "color: green");
    }
}
function testArrayLoopRev(looper) {
    if (looper() != adminStringify(myArray)) {
        console.error("Your array function isn't returning the reverse of the myArray variable");
        student.score -= 10;
    } else {
        let output = adminStringify(looper);
        log("%c Good job! " + output + " is correct output", "color: green");
    }
}

function testObj(obj = myPizza) {
    let props = ['toppings', 'sauce', 'size', 'crust', 'cost'];
    let check = 0;
    for (let i = 0; i < props.length; i++) {
        try {
           if (myPizza[props[i]] != undefined) {
            check++;
           }
            
        } catch (e) {
            log(e);
            console.error("Your pizza object wasn't created correctly");
            student.score -= 25;
        }
    }
    if (check == 5) {
        log('%c Your Pizza object is correct', 'color: green');
        student.score += 25;
        
    }
}

function testOrder(ord) {
    let props = ['pizzas', 'status', 'update'];
    let check = 0;
    try {
        for (let i = 0; i < props.length; i++) {
            log(i);
            if (ord[props[i]] != undefined && typeof ord[props[2]] == 'function') {
                check++;
                log(check)
            }
            } 
    } catch (e) {
        log(e);
        console.error("Your order object wasn't created correctly");
    }
    if (check == 3) {
        log('%c Your order object is correct', 'color: green');
        student.score += 20;
    } else {
        console.error("Your order object wasn't created correctly");
    }
}

function testConstructors(piz, ord) {
    try {
        let p = new piz();
        let o = new ord();
        
        testObj(p);
        testOrder(o);
        student.score += 40;
    } catch(e) {
        log(e);
        console.error("Your constructor isn't creating properly formatted objects");
    }
    
}