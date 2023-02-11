const isLogged = true;

const firstPromise = (isLogged) =>
    new Promise((resolve, reject) => {
        if (isLogged) {
            resolve(Math.random())
        } else {
            reject("error: isLogged false")
        }
    })

const number = 0;
const secondPromise = (number) =>
    new Promise((resolve, reject) => {
        if (number > 0.5) {
            resolve(`{name: "John", age: 24}`)
        } else {
            reject("error")
        }
    })

firstPromise(isLogged)
    .then((value) => secondPromise(value))
    .then((result) => console.log(result))
    .catch((error) => console.log(error))

