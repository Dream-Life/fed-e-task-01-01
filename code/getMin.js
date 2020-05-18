var arr = [12, 34, 32, 89, 4];
const {log} = console;

// Set去重
function getMin(arr){
    if(Array.isArray(arr)){
        let set =  new Set(arr)
        let min = arr[0]
        set.forEach(item => min = min>item ? item:min)
        return min 
    }else{
        throw "It must be Array!"
    }
    return
}

// 数组扩展
function getMin1(arr){
    if(Array.isArray(arr)){
        // return Math.min.call(null, ...arr)
        return Math.min(...arr) 
    }else{
        throw "It must be Array!"
    }
    return
}

log(getMin(arr));
log(getMin1(arr));