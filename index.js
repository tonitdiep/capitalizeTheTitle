
2129. Capitalize the Title: You are given a string title consisting of one or more words separated by a single space, where each word consists of English letters. Capitalize the string by changing the capitalization of each word such that:

If the length of the word is 1 or 2 letters, change all letters to lowercase.
Otherwise, change the first letter to uppercase and the remaining letters to lowercase.
Return the capitalized title.

/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
      //first lowercase all letters in the title input
    let firstWord = title.toLowerCase().split(' ')
    // let wordOutcome = [];


    for (let i = 0; i < firstWord.length; i++){
            
        if (firstWord[i].length > 2){
            firstWord[i] = firstWord[i][0].toUpperCase() + firstWord[i].slice(1);
                   console.log('test', firstWord)
        }
    }
        
    return firstWord.join(' ');
    //return capitalized title
};