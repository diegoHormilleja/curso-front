/*
    Write a JavaScript function that reverse a number.
    Example x = 32243;
    Expected Output : 34223
*/

function reverse_number(num){
    var str = "" + num + "";

    var reverse = [].map.call(str, function(x) {
        return x;
      }).reverse().join('');
    
      return reverse;

}

var str = '12345';
console.log(reverse_number(12345));