/* A special value: negative representation of a zero */
var trendRate = -0;
console.log(trendRate === -0);

console.log(trendRate.toString()); //0 OOPS!
console.log(trendRate === 0); //true OOPS!
trendRate < 0; //false the > & < lie
trendRate > 0; //false

// Determines if it's a 0 or -0. Referes to as "===="
console.log(Object.is(trendRate, -0)); 
console.log(Object.is(trendRate, 0));