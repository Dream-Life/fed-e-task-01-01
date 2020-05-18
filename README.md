# fed-e-task-01-01
简答题

1. 输出为10；

    因为代码是这样执行的
    ```javascript
    var a,i // var变量提升
    a=[]
    // for循环开始
    i=0
    if(i<10){
        a[0]= function(){
            console.log(i);
        }; 
    }
    i++
    ...
    if(i<10){
        a[6]= function(){
            console.log(i);
        }; 
    }
    i++
    ...
    // for循环结束，这时i=10
    // 调用a[6]();执行console.log(i);
    console.log(i); // i=10；输出10
    ```

2. 报错；

    代码执行
    ```javascript
    var tmp;
    tmp = 123;
    if(true){
        // 在块级作用域内寻找tmp变量
        // 找到let tmp;变量，如果没找到，就去外层作用域找tmp变量
        // let声明必须在使用之前，否则报错
        console.log(tmp);
        let tmp;
    }
    ```

3. 代码路径：./code/getMin.js

4. var,let,const区别
    
    var
    
    - 存在变量提升
    - 只用于全局作用域和函数作用域
    - 可以在同一个作用域声明同名变量，覆盖之前的变量

    let

    - 只能先声明才能调用，不存在变量提升
    - 可以用于全局作用域，函数作用域以及块级作用域
    - 同一作用域不可以声明同名变量
    - 块级作用域中声明，会绑定这个作用域，形成暂时性死区

    const

    - 只能先声明才能调用，不存在变量提升
    - 可以用于全局作用域，函数作用域以及块级作用域
    - 同一作用域不可以声明同名变量
    - 块级作用域中声明，会绑定这个作用域，形成暂时性死区
    - 声明后初始化数据，就不能改变变量指向的内存地址


5. 输出20；

    原因如下：
    ```javascript
    var a=10;
    var obj={
        a:20,
        fn(){
            // 箭头函数没有this机制，所以this指向fn()
            // fn()是function fn(),所以this指向拥有function的obj
            // this->obj, this.a->obj.a 输出20
            setTimeout(()=>{
                console.log(this.a)
            })
        }
    }
    ```

6. Symbol的用途：

    - 用于属性名，保证属性名隐藏，使其私有化
    - 用于迭代器模式，利用[Symbol.iterator]实现迭代
    - 用于类型转换，利用[Symbol.toPrimitive]进行类型判断
    - 修改toString & match & replace & split & search方法

7. 浅拷贝：新变量拷贝旧变量后，新变量指向的内存地址全部或者一部分还是指向旧变量的内存地址

    深拷贝：新变量拷贝旧变量后，新变量指向的内存地址没有指向旧变量的内存地址

8. js异步编程主要解决了单进程带来的进程执行时间长的问题，异步缩短了代码主进程执行的时间，加快了主进程的执行。

    EventLoop:

    微任务：

    宏任务：