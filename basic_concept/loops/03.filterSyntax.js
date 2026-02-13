let arr = [2,3,12,32,45];

let arr1 = arr.filter((data)=> data>10)
console.log(arr1)

let  arr2 = [{name: "Manan", age: 18}, 
            {name: "vjay", age: 21},
            {name: "Kuldeep", age: 23}
        ];
 let arr4 = arr2.filter((data)=>
         data.age>18
        )
        console.log(arr4)