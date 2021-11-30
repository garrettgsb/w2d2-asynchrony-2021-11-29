{
  // Higher order function
  function maybeRun(callback, chance=0.5) {
    if (Math.random() < chance) {
      callback();
    }
  }

  let count = 0;
  function countTimesRan() {
      console.log(`countTimesRan has run ${++count} times!`);
  }

  for (let i = 0; i < 100; i++) {
    maybeRun(countTimesRan);
  }
}
