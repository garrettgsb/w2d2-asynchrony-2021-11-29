// Ruby, Python, and bash all have a `sleep` function...
// Why doesn't Javascript?
const endOfTime = Math.random() * 1e15;

// Is this function blocking or non-blocking?
function sleep(timeInMs) {
  const endTime = Date.now() + timeInMs;
  while (Date.now() < endTime) {
    continue;
  }
}

sleep(10000);
console.log('Hello');
sleep(2000);
console.log("It's me");
sleep(2000);
console.log(`The world ends in ${endOfTime-Date.now()} ms`); // How long will it take before this line runs?
sleep(2000);
console.log('...Just thought you should know');
