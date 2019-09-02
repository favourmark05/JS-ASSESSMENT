for (let display = "#"; display.length < 8; display = display + "#")
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

    //this is for task3
    function min(a, b) {
        if (a < b) return a;
        else return b;
      }
      
      console.log(min(0, 10));
      console.log(min(0, -10));

      //task three b
      function isEven(n) {
        if (n == 0) return true;
        else if (n == 1) return false;
        else if (n < 0) return isEven(-n);
        else return isEven(n - 2);
      }
      
      console.log(isEven(50));
      console.log(isEven(75));
      console.log(isEven(-1));

      //task three c
      function countChar(string, ch) {
        let counted = 0;
        for (let i = 0; i < string.length; i++) {
          if (string[i] == ch) {
            counted += 1;
          }
        }
        return counted;
      }
      
      function countBs(string) {
        return countChar(string, "B");
      }
      
      console.log(countBs("BABY"));
      console.log(countChar("AMALA", "A"));
      
