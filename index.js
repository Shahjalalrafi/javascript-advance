
// function getPromise(ispassed) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(ispassed) {
//                 resolve('i have passed the exam')
//             }else {
//                 reject(new Error('i am failed'))
//             }
//         },2000)
//     })
// }

// getPromise(false)
// .then((res) => {
//     console.log(res)
// })
// .catch((e) => {
//     console.log(e)
// })

// const delay = s => new Promise(resolve => setTimeout(resolve, 1000 * s))

// delay(2).then(() => console.log('after 2 second'))
// delay(3).then(() => console.log('after 3 second'))
// delay(5).then(() => console.log('after 5 second'))
// delay(2).then(() => console.log('after 2 second'))



// let p1 = new Promise(resolve => {
//     setTimeout(resolve, 5000, 'one')
// })

// let p2 = new Promise(resolve => {
//     setTimeout(resolve, 300, 'two')
// })

// Promise.all([p1,p2])
// .then(res => console.log(res))

// Promise.race([p1,p2])
// .then(v => console.log(v))


let promises = [Promise.resolve(2),Promise.resolve(3),Promise.resolve(4)]

async function asyncAll() {
    let ans = await Promise.all(promises)
    console.log(ans)
}

asyncAll()