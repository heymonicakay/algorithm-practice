// Basic Algorithm Scripting: Reverse a String

// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.

// function is declared and param set to take arg "str" (string)
       /* initiating a for loop to iterate over something
            - declaring a variable whose value is an empty string, where the new string will go
            - declaring the starting point for the loop so that the iteration's starting index position is equal to the index position of the final character in the string.
            h = 0
            e = 1
            l = 2
            l = 3
            o = 4
                  desired starting index = 4
                  length of "hello" = 5
                  5 - 1 = 4
            (starting index = the length of the string - 1; subtract one to account for the fact that the very first index value is 0)
            - setting the stopping condition that states, as long as i (the index) is greater than or equal to zero, then the statement will be executed. In this case, if the index of the character bein iterated over is greater than or equal to zero then it is concatinated with the current value of the variable revStr.
            - the final expression, evaluated at the end of each loop iteration. In this case, the expression subtracts one from var i which is the index position of the loop iteration. As a result, the next loop iteration is executed on the character positioned at the index just below the index which was just looped over. (iteration over index position 4, then iteration over index position 3)
       **/
      const reverseStringOne = (str) => {
        for(var revStr = "", i = str.length - 1; i >= 0; i-- ) {
          revStr += str[i];
        }
        return revStr;
      }

      reverseStringOne("hello");

  // Console logging tests

  console.log("Test 1 - reverseString('hello') should return a string.", reverseStringOne("hello"))

  console.log("Test 1 - reverseString('hello') should become 'olleh'", reverseStringOne("hello"))

  console.log('Test 1 - reverseString("Howdy") should become "ydwoH".', reverseStringOne("Howdy"))

  console.log('Test 1 - reverseString("Greetings from Earth") should return "htraE morf sgniteerG".', reverseStringOne("Greetings from Earth"))


  const reverseStringTwo = (str) => {
        var arr = str.split("").reverse()
        for( var revStr = "", i = 0; i <= arr.length - 1; i++ ) {
              revStr += arr[i]
        }
        return revStr;
      }

      reverseStringTwo("hello");

  // Console logging tests

  console.log("Test 2 - reverseString('hello') should return a string.", reverseStringTwo("hello"))

  console.log("Test 2 - reverseString('hello') should become 'olleh'", reverseStringTwo("hello"))

  console.log('Test 2 - reverseString("Howdy") should become "ydwoH".', reverseStringTwo("Howdy"))

  console.log('Test 2 - reverseString("Greetings from Earth") should return "htraE morf sgniteerG".', reverseStringTwo("Greetings from Earth"))

  const reverseStringThree = (str) => {
        const arr = str.split("").reverse()
        const revStr = arr.join("")
        return revStr
      }

      reverseStringThree("hello");

  // Console logging tests

  console.log("Test 3 - reverseString('hello') should return a string.", reverseStringThree("hello"))

  console.log("Test 3 - reverseString('hello') should become 'olleh'", reverseStringThree("hello"))

  console.log('Test 3 - reverseString("Howdy") should become "ydwoH".', reverseStringThree("Howdy"))

  console.log('Test 3 - reverseString("Greetings from Earth") should return "htraE morf sgniteerG".', reverseStringThree("Greetings from Earth"))
