const isLogged = true;

const firstPromise = (isLogged) =>
    new Promise((resolve, reject) => {
        if (isLogged) {
            resolve(Math.random())
        } else {
            reject(new Error("isLogged false"))
        }
    })

const number = 0;
const secondPromise = (number) =>
    new Promise((resolve, reject) => {
        if (number > 0.5) {
            resolve(`{name: "John", age: 24}`)
        } else {
            reject(new Error("there is an error"))
        }
    })

firstPromise(isLogged)
    .then((value) => secondPromise(value))
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
    .finally(() => console.log("I get executed anyway"));


