// Write your code below

/*Given a word, return true if that word contains only unique characters. Return false otherwise.

For example:

hasUniqueChars("Monday")
// returns true
hasUniqueChars("Moonday")
// returns false
Uppercase and lowercase letters should be considered separately:

hasUniqueChars("Bob")
// returns true
*/


function hasUniqueChars(word){
    let answer = true;
    let arr = (word.split('').sort())
    console.log(arr)
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] === arr[j]){
            answer = false;
            return false;
        } }
        if (i === arr.length-1){
        return true
    }
    }
}
console.log(hasUniqueChars('Moonday'))