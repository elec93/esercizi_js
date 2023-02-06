function repeatHello(callback) {
  let interval = setInterval(callback, 1000);
  setTimeout(() => clearInterval(interval), 5000)};

let print = () => {console.log('Hello');};

repeatHello(print);

