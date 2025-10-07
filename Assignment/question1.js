var sub1 =98;
var sub2 =98;
var sub3 =89;
var sub4 =99;
var sub5 =88;
var sum = sub1 + sub2 + sub3 + sub4 + sub5 ;
var total = sum/5.0;
if(total>=90){
    console.log("Grade A");
}
else if(total>=80 && total<90){
     console.log("Grade B");
}
else if(total>=70 && total<80){
     console.log("Grade C");
}
else if(total>=60 && total<70){
     console.log("Grade D");
}
else{
     console.log("Fail");
}