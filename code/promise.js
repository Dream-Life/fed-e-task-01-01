var a='hello', b='lagou', c='I L U'
const {log} = console
Promise.resolve(a).then(v=> v+b).then(v=>{
    log(v+c)
})

Promise.resolve(a).then(v=>{
    log(v+b+c)
})

let pa = Promise.resolve(a), pb = Promise.resolve(b), pc = Promise.resolve(c)
Promise.all([pa,pb,pc]).then(res=>log(res.join('')))
