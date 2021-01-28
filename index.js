JUST FOR PRACTICE


function getPromise(ispassed) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(ispassed) {
                resolve('i have passed the exam')
            }else {
                reject(new Error('i am failed'))
            }
        },2000)
    })
}

getPromise(false)
.then((res) => {
    console.log(res)
})
.catch((e) => {
    console.log(e)
})

const delay = s => new Promise(resolve => setTimeout(resolve, 1000 * s))

delay(2).then(() => console.log('after 2 second'))
delay(3).then(() => console.log('after 3 second'))
delay(5).then(() => console.log('after 5 second'))
delay(2).then(() => console.log('after 2 second'))



let p1 = new Promise(resolve => {
    setTimeout(resolve, 5000, 'one')
})

let p2 = new Promise(resolve => {
    setTimeout(resolve, 300, 'two')
})

Promise.all([p1,p2])
.then(res => console.log(res))

Promise.race([p1,p2])
.then(v => console.log(v))


let promises = [Promise.resolve(2),Promise.resolve(3),Promise.resolve(4)]

async function asyncAll() {
    let ans = await Promise.all(promises)
    console.log(ans)
}

asyncAll()


const form = document.getElementById('form')

form.addEventListener('submit', function(e) {
    e.preventDefault()

    let isvalid = false
    let data = {};
    [...this.elements].forEach(el => {
        if(el.type !== 'submit') {
            isvalid = validator(el)
            if(isvalid) {
                data[el.name] = el.value
            }else {
                alert(`require field need to fill up!`)
                
            }
        }
        console.log(data)
    })
    if(isvalid) {
        console.log(data)
        this.reset()
    }
})

function validator(el) {
    if(!el.value) {
        return false
    }
    return true
}

var a 

function async() {
    a = 20
    setTimeout(()=> {
        console.log(a)
    },)
}

async()

a = 30


class Person {
    constructor(name) {
        console.log(name, ' is a construtor')
    }
    getId() {
        return 10
    }
}


class AnotherPerson extends Person {
    constructor(name){
        console.log(name, ' constructor from another class')
        super(name)
    }
}

let p = new Person('rafi')
console.log(p.getId())


