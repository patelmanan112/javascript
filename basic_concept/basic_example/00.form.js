const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const ageInput = document.getElementById("ageInput");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", (e) => {
  let nameValue = nameInput.value;
  let emailValue = emailInput.value;
  let ageValue = ageInput.value;

  if (nameValue == "") {
    nameInput.style.borderColor = "red";
    nameInput.style.color = "red";
    nameInput.setAttribute(placeholder, "Fill this");
    console.log("nameValue.style.borderColor  ");
    alert("Please fill all the given input ");

  }
  if (emailValue == "") {
    emailInput.style.borderColor = "red";
    emailInput.style.color = "red";
    alert("Please fill all the given input ");

  }
  if (ageValue == "") {
    ageInput.style.borderColor = "red";
    ageInput.style.color = "red";
    alert("Please fill all the given input ");



  }
  else if ((nameValue !== "") && (emailValue != "") && (ageValue != "")) {
    e.preventDefault();
    var arr = emailValue.split('');
    var j = 9;
    var compare = "@gmail.com";
    var arr1 = compare.split('');
    var nameCheck = nameValue.split('');

    nameCheck.forEach(Box => {
      if(Box != '!' && Box !='@' && Box!= '+' && Box != '*' && Box != '`' && Box != '-' && Box != '$'){
        console.log("Done");
      }
      else{
        alert("The following name contains special character");
        
      }
      
    });


    for (let i = arr.length - 1; i >= ((arr.length - 1) - (arr1.length - 1)); i--) {
      if (arr[i] === arr1[j]) {
        localStorage.setItem("email", emailValue);
        console.log("Email:", emailValue);
        submitBtn.style.backgroundColor = "green";
        submitBtn.style.color = "white";
        console.log("Complete");
        --j;
      }
      else {
        alert("Your email address predefined is not proper");
        console.log("InComplete");
        return;
        j = 9;

      }
    }
    
    console.log(arr);
    console.log("Name:", nameValue);
    console.log("Age:", ageValue);
    submitBtn.style.backgroundColor = "green";
    submitBtn.style.color = "white";
    localStorage.setItem("name", nameValue);
    localStorage.setItem("age", ageValue);
  }
  // Save each value as its own key-value pair in localStorage

  console.log("Saved to localStorage:", {
    name: localStorage.getItem("name"),
    email: localStorage.getItem("email"),
    age: localStorage.getItem("age"),
  });
});

function checkingEmail(){
  
}