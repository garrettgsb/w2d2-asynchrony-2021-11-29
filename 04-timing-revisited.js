function doXInYMs(x /* a function */, y /* some number of milliseconds */) {
  // `doXInYMs` is a convenient way to remember the arguments that setTimout and setInterval take.
  // We didn't add this part in lecture, but you can think of `doXInYMs` as just "wrapping" setTimeout, like this:
  return setTimeout(x, y);
}
x = function() {};
y = 1000;
doXInYMs(x, y);
setTimeout(x, y);

// Puzzle: What order will these console.logs come in?
console.log('Start');
setTimeout(() => { console.log('1s') }, 1000);
setTimeout(() => { console.log('2s') }, 2000);
setTimeout(() => { console.log('5s') }, 5000);
setTimeout(() => { console.log('1.1s') }, 1100);
setTimeout(() => { console.log('NOW') }, 0);
console.log('End');

const timesTwo = (num) => { return num * 2e15 };

console.log(timesTwo(15));
