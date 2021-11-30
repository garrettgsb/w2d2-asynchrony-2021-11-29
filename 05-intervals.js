// setTimeout and setInterval share an interface
setTimeout(() => { console.log('tick') }, 1000);
setInterval(() => { console.log('tock') }, 1000);

{
  // setTimeout can be used in a recursive loop like this
  // to act like an interval.
  let stop = false;
  function tick() {
    console.log('tick');
    if (!stop) {
      setTimeout(tick, 1000);
    }
  }

  // setTimeout and setInterval returns an object.
  // That object can be used to clear the interval with `clearInterval` or `clearTimeout`
  // (`clearTimeout` and `clearInterval` both work on `setTimeout` and `setInterval`-- they are interchangeable!)
  const interval = setInterval(() => {
    console.log('stop after 5s');
  }, 1000);

  setTimeout(() => clearInterval(interval), 5000);
}

{
  function logNTimes(n) {
    let count = 0;
    const interval = setInterval(() => {
      if (count++ < n) {
        console.log(`${count}/${n}`);
      } else {
        clearInterval(interval);
      }
    }, 1000);
  }

  logNTimes(5);
  logNTimes(3);
  logNTimes(16);
}
