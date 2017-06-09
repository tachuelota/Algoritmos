function findBinary(arr, neddle) { 
var min = 0, 
max = arr.length - 1;
while (min <= max){
var guess = Math.floor((min+max) / 2);
if (arr[guess] === neddle ) return guess;
(arr[guess] < neddle) ? min = guess + 1 : max = guess - 1;
}
return -1;
}
