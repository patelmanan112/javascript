var obj1 = {
    user : "Mansuri",
    age : 21,
    mobNumber : [9512628557 , 9998831046,9737468377,9327094233]
}

for(var key in obj1){
    console.log(key , "=>", obj1[key]);
}


// uzing direct method to get the values and keys
var key1 = Object.keys(obj1);
console.log(key1);

var values1 = Object.values(obj1);
console.log(values1);


class student {
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
}

var s1 = new student("Manan", 18);
console.log(s1)