for (let display = "#"; line.length < 8; display = display + "#")
console.log(display);


    //THIS IS THE SECOND


    //THIS PRINT ALL THE NUMBERS FROM 1 -100
    for (let number = 1; number <= 100; number++) {
        let output = "";
        //THIS WILL CHECK IF 1 (NUMBER) IS DIVISIBLE BY 3 AND 5 IF NOT IT WILL DISPLAY THOSE STRINGS RESPECTIVELY 
        if (number % 3 == 0) output = output + "Fizz";
        if (number % 5 == 0) output = output + "Buzz";
        //THIS WILL PRINT IT IN THE CONSOLE IF ITS TRUE OR NOT 
        console.log(output || number);
    };

    //THIS IS THE THIRD ONE


    //this gives the size a number
    let size = 8;

    //giving  the board an empty string
    let board = "";
// this is saying if y is less than 8 add up by 1
    for (let y = 0; y < size; y++) {
// this is saying if y is less than 8 add up by 1
        for (let x = 0; x < size; x++) {
            if ((x + y) % 2 == 0) {
                board += " ";
            } else {
                board += "#";
            }
        }
//AND THIS CAUSES A NEW LINE BREAK
        board += "\n";
    }

    console.log(board);