
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