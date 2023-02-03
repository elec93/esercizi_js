function repeatHello(callback) {
    setInterval(callback, 1000);
  };
  
print = () => {console.log('Hello');};
  
repeatHello(print);
