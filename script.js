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


      // this is the task for data structure

      function range(start, end, step = start < end ? 1 : -1) {
        let array = [];
      
        if (step > 0) {
          for (let i = start; i <= end; i += step) array.push(i);
        } else {
          for (let i = start; i >= end; i += step) array.push(i);
        }
        return array;
      }
      
      function sum(array) {
        let total = 0;
        for (let value of array) {
          total += value;
        }
        return total;
      }
      
      console.log(range(1, 10));
      console.log(range(5, 2, -1));
      console.log(sum(range(1, 10)));


      // the second task

      function reverseArray(array) {
        let output = [];
        for (let i = array.length - 1; i >= 0; i--) {
          output.push(array[i]);
        }
        return output;
      }
      
      function reverseArrayInPlace(array) {
        for (let i = 0; i < Math.floor(array.length / 2); i++) {
          let old = array[i];
          array[i] = array[array.length - 1 - i];
          array[array.length - 1 - i] = old;
        }
        return array;
      }
      
      console.log(reverseArray(["A", "B", "C"]));
      let arrayValue = [1, 2, 3, 4, 5];
      reverseArrayInPlace(arrayValue);
      console.log(arrayValue);

      // this is for the third

      function arrayToList(array) {
        let list = null;
        for (let i = array.length - 1; i >= 0; i--) {
          list = {value: array[i], rest: list};
        }
        return list;
      }
      
      function listToArray(list) {
        let array = [];
        for (let node = list; node; node = node.rest) {
          array.push(node.value);
        }
        return array;
      }
      
      function prepend(value, list) {
        return {value, rest: list};
      }
      
      function nth(list, n) {
        if (!list) return undefined;
        else if (n == 0) return list.value;
        else return nth(list.rest, n - 1);
      }
      
      console.log(arrayToList([10, 20]));
      console.log(listToArray(arrayToList([10, 20, 30])));
      console.log(prepend(10, prepend(20, null)));
      console.log(nth(arrayToList([10, 20, 30]), 1));


      // this is for the fourth
      function deepEqual(a, b) {
        if (a === b) return true;
        
        if (a == null || typeof a != "object" ||
            b == null || typeof b != "object") return false;
      
        let keysA = Object.keys(a), keysB = Object.keys(b);
      
        if (keysA.length != keysB.length) return false;
      
        for (let key of keysA) {
          if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
        }
      
        return true;
      }
      
      let obj = {here: {is: "an"}, object: 2};
      console.log(deepEqual(obj, obj));
      console.log(deepEqual(obj, {here: 1, object: 2}));
      console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));      
