var btn1 = document.querySelector('#btn1');
var btn2 = document.querySelector('#btn2');
var btn3 = document.querySelector('#btn3');
var btn4 = document.querySelector('#btn4');
var check = document.querySelector("#check");

check.addEventListener('change', (event) => {
    if (event.target.checked) {
        //  document.cookie = "username=Manan; Path=/";
        //    document.cookie = "emailId=manan.patel.cg@gmail.com; Path=/";
        // console.log(document.cookie);

        setTimeout(() => {
            document.cookie = "username=Manan; Path=/";
            console.log(document.cookie);
        }, 2000);
        setTimeout(() => {
            document.cookie = "emailId=manan.patel.cg@gmail.com; Path=/";
            console.log(document.cookie);
        }, 3000);

        setTimeout(() => {
            document.cookie = "username=manan; expires=Thu, 01 Jan 1970 00:00:00 UTC; Path=/";
            document.cookie = "emailId=manan.patel.cg@gmail.com; expires=Thu, 01 Jan 1970 00:00:00 UTC; Path=/";
            console.log("Removed");

        }, 10000)

    }
})

document.cookie = "username=Manan; Path=/";
document.cookie = "emailId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; Path=/";
console.log(document.cookie.split(";")[0].split("=")[1]);

console.log(document.cookie.split(";")[1].split("=")[1]);
// console.log(document.cookie.valueOf);


btn1.addEventListener("click", () => {
    document.cookie = "username=Manan; Path=/";
});

btn2.addEventListener("click", () => {
    document.cookie = "emailId=manan.patel.cg@gmail.com; Path=/";
});

btn3.addEventListener("click", () => {
    console.log(document.cookie);
    console.log(typeof document.cookie); // string
});

btn4.addEventListener("click", () => {
    // delete cookies by setting past expiry date
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; Path=/";
    document.cookie = "emailId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; Path=/";
});
