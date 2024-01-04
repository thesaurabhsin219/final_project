// // console.log("like");

// // var a=20;
// // var b=30;
// // var c=40;
// // console.warn(a+b+c);

// // const arr=[1,2,3,4,5];
// // console.log(arr);
// // console.log(arr[4]);
// const app=require('./app')
// console.log(app.z())
arr=[1,2,3,4,5,6,7,8,9];
var a=arr.filter((item)=>{
    return item>=5
})
console.log(a)