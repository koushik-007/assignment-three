function findMinLengthOfThreeWords( word1, word2, word3 ) {
    let words = [ word1, word2, word3];   // create an array of the words
  
    for ( i = 0; i < words.length; i++ ){   // Looping through the array to find index
      let lengh = words[i].length;    // Setting  variable 'length' as the length of an index in the array
      
      let min = Math.min(lengh);   // Setting variable 'min' to index in the array that's the shortest
      return min;   // min should return whatever length is the shortest?
    }
  }
  console.log(findMinLengthOfThreeWords());