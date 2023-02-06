const number = 15;

let promiseNumb = new Promise((resolve, reject) => {
    if(number > 10){
        resolve(`Number ${number} is greater`)
    } else {
        reject(`Number ${number} is lesser`)
    }
})

promiseNumb
    .then((value) => console.log(value))
    .catch((err) => console.log(err))