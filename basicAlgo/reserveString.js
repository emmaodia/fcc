function reverseString(str) {

    let arr = [];
    //Use a spread opeator to parse the string items to the an array format
    arr.push(...str)
    //The reverse() method reverse the array items
    arr.reverse();
    //It never hurt to be double sure with console log
    console.log(arr);
  
    return arr.join("");
}
  
  //check with a function call
reverseString("hello");
  