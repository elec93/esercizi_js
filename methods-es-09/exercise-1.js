const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

let insieme = Object.entries(person);

for(let entrambi of insieme){
  let [primo, secondo] = entrambi ;
  console.log(primo + ": " + secondo);
}
