function findLongestWordLength(str) {
    const check = Math.max(...str.split(" ").map(word => word.length));
    
    return check;
}
  
findLongestWordLength("The quick brown fox jumped over the lazy dog");