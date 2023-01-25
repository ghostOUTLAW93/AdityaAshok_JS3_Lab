// fetch() => getting the data from the rest servises
// synchronous and asynchronous
// promises

//synchronous
function f1(){
    console.log("f1")
}
function f2(){
    f1()
    console.log("f2")
}
function f3(){
    f2()
    console.log("f3")
}
f3()

//Asynchronous
//1. Browser API / Web API (events) -> setTimeout(()=>{},2000) or setTimeout(function(){},2000)
//2. Promises -> get the data from API...

function printMe(){
    console.log("print me")
}
function test(){
    console.log("test")
}
setTimeout(printMe, 2000)
test()

//Promises -> its ideal choice to handle async operation
// syntax
// var promise = new Promise(function(resolve, reject){
//do somethings bussiness logics
//XMLhttpRequest()

//resolve
//server breaks -> reject()

// eg: made API call
// now call responded
// if (status == 500){
//     reject()
// }
// });

// promise.then(res => {
//     console.log("ress")
// }, function errr(err){
//     console.log(err)
// });

// example
var promise = new Promise(function(resolve, reject){
    const x = "text";
    const y = "text";
    if(x == y){
        resolve();
    }
    else{
        reject();
    }
});
promise.then(res => {
    console.log("resolve");
}).catch(()=>{
    console.log("reject");
});

// 4 promise states
// 1. fulfilled
// 2. rejected
// 3. pending
// 4. fulfilled