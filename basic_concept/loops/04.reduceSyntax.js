let arr = [10,7];

// we get only one value, we will use this when we have to operate the value of arr like add , sub, multi, div
let arr1 = arr.reduce((crnt, nxt)=> crnt + nxt , 0);
console.log(arr1);