var bill =349;
var rupee ;
var bill_100;
if(bill<=100){
    rupee = bill*5;
    console.log(rupee);
}
else if(bill>100 && bill<=200){
    bill_100 = (bill-100)*7 +500;
     console.log(bill_100);
}
else if(bill>200 && bill<=300){
    rupee = (bill-200)*7 +1200;
       console.log(rupee);
}
else{
    rupee = (bill-300)*10 + 1900;
       console.log(rupee);
}