const string = prompt('Enter a string: ');

function countVowel(str) { 

    let count = 0;
    const vowels = ["a", "e", "i", "o", "u"]
    
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    // return number of vowels
    return count
}
const result = countVowel(string);

alert(result);

