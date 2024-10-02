/*#7. Iterate through all numbers from 1 to 45. Print following:
>For multiples of 3 print "Fizz"
>For multiples of 5 print "Buzz"
>For multiples 3 and 5 print "FizzBuzz"*/

for (let i= 1; i<= 45; i++){
if (i%3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
}else if ( i % 3 == 0) {
    console.log("Fizz")
}else if ( i % 5 == 0) {
    console.log("Buzz")
    }
}