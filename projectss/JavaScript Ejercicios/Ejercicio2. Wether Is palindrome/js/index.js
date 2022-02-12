/*
    Write a JavaScript function that checks whether a passed string is palindrome or not? 
    A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
*/

function removeSpace(str) {
    str = str.replace(/\s+/g, '');
    return str;
}

function isPalindrome(str) {
    str = removeSpace(str);

    flag = false;

    var reverse = [].map.call(str, function (x) {
        return x;
    }).reverse().join('');

    if (str === reverse) {
        flag = true;
    }

    console.log(reverse);

    return flag;

}

var str = 'nurses run';
console.log(isPalindrome(str));