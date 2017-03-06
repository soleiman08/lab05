let sentence = "the quick brown fox jumps over the lazy dog";
let display: HTMLElement = document.getElementById('display');

let splitWordBtn: HTMLElement = document.getElementById('split');

splitWordBtn.addEventListener('click', ()=>{
    let result: string[] = splitWords(sentence);
    display.innerText = result.join('\n');
});

// Split a sentence into each word and return as an array of strings
function splitWords(input: string): string[]{
 let output: string[] = input.split(' ');
 
 return output;
}

let sortByWordsBtn: HTMLElement = document.getElementById('sort');

sortByWordsBtn.addEventListener('click', ()=>{
    let result: string[] = sortWords(sentence);
    display.innerText = result.join('\n');
});

// Split a sentence into each word and return as an array of strings
function sortWords(input: string): string[]{
 let output: string[] = input.split(' ');
 
 return output.sort();
}

let sortByLengthBtn: HTMLElement = document.getElementById('sort');

sortByLengthBtn.addEventListener('click', ()=>{
    let result: string[] = sortByLength(sentence);
    display.innerText = result.join('\n');
});

// Split a sentence into each word and return as an array of strings
function sortByLength(input: string): string[]{
 
 let output: string[] = input.split(' ');
 
 return output.sort(function(a,b) {
return a.length - b.length;
 
 
}); }

 
//  (function(a, b) {
     
//      if (a.length < b.length) {
//          return 1;
//      }
//   if (a.length > b.length) {
//       return -1;
//    } return 0;
//     });




let reverseEachWordBtn: HTMLElement = document.getElementById('reverse');

reverseEachWordBtn.addEventListener('click', ()=>{
    let result: string[] = reverseEachWord(sentence);
    display.innerText = result.join('\n');
});

// Split a sentence into each word and return as an array of strings
function reversEachWord(input: string): string[]{
 let words: string[] = input.split(' ');
 for(let word of words) {
     let letters = word.split('');
     let reverse = letters.reverse();
     let drow = reverse.join('');
     word = drow;  
}
 return words;

}

