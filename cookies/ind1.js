document.cookie = "username=Manan; Path=/";
document.cookie = "emailId=manan.patel.cg@gmail.com; expires=Thu, 01 Jan 2970 00:00:00 UTC; Path=/";

let arr = document.cookie.split(";")[0].split("=")[1];
console.log(arr);
console.log(document.cookie.split(";")[1].split("=")[1]);
