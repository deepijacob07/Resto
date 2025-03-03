
// // const form=document.getElementById('form')
// // const name=document.getElementById('username')
// // const email=document.getElementById('email')
// // const dateTime=document.getElementById('dateTime')
// // const select1=document.getElementById('select1')


// // const usernameError=document.getElementById('usernameError')
// // const emailError=document.getElementById('emailError')
// // const dateError=document.getElementById('dateError')
// // const peopleError=document.getElementById('peopleError')


// // function validateForm(event) {
// //     let valid = true;

// //     usernameError.textContent = '';
// //     emailError.textContent = '';
// //     dateError.textContent = '';
// //     peopleError.textContent = '';
    

// //     if (username.value.trim() === '') {
// //     usernameError.textContent = 'Username is required.';
// //     valid = false;
// // } else if (username.value.length < 3) {
// //     usernameError.textContent = 'Username must be at least 3 characters long.';
// //     valid = false;
// // } 

// //     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// //     if (!emailPattern.test(email.value.trim())) {
// //       emailError.textContent = 'Please enter a valid email address.';
// //       valid = false;
// //     }
// //     if (dateTime.value.trim() === '') {
// //       dateError.textContent = 'Date and time  cannot be empty.';
// //       valid = false;
// //     }
// //     if (select1.value === '') {
// //       peopleError.textContent = ' please select number of people.';
// //       valid = false;
// //     }
    
// //     if (!valid) {
// //       event.preventDefault();
// //     }
// //   }
// //   form.addEventListener('submit', validateForm);
  

// const form = document.getElementById('form');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const dateTime = document.getElementById('dateTime');
// const select1 = document.getElementById('select1');

// const usernameError = document.getElementById('usernameError');
// const emailError = document.getElementById('emailError');
// const dateError = document.getElementById('dateError');
// const peopleError = document.getElementById('peopleError');

// function validateForm(event) {
//   let valid = true;

//   // Reset error messages
//   usernameError.textContent = '';
//   emailError.textContent = '';
//   dateError.textContent = '';
//   peopleError.textContent = '';

//   // Username validation
//   if (username.value.trim() === '') {
//     usernameError.textContent = 'Username is required.';
//     valid = false;
//   } else if (username.value.length < 3) {
//     usernameError.textContent = 'Username must be at least 3 characters long.';
//     valid = false;
//   }

//   // Email validation
//   const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   if (!emailPattern.test(email.value.trim())) {
//     emailError.textContent = 'Please enter a valid email address.';
//     valid = false;
//   }

//   // Date and Time validation
//   if (dateTime.value.trim() === '') {
//     dateError.textContent = 'Date and time cannot be empty.';
//     valid = false;
//   }

//   // People validation
//   if (select1.value === '') {
//     peopleError.textContent = 'Please select number of people.';
//     valid = false;
//   }

//   // Prevent form submission if any validation fails
//   if (!valid) {
//     event.preventDefault();
//   }
// }

// form.addEventListener('submit', validateForm);


function more(){
  let dot=document.getElementById("dot");
  let hide=document.getElementById("hide");
  let button=document.getElementById("button")

  if(dot.style.display==="none"){
     dot.style.display="inline";
     button.innerHTML="Read More";
     hide.style.display="none";
  }
  else{
     dot.style.display="none";
     button.innerHTML="Read Less";
     hide.style.display="inline";
  }
 }

 
document.getElementById("form").addEventListener("submit", function(event) {
    // Prevent form submission to handle validation
    event.preventDefault();
    
    // Clear previous error messages
    clearErrors();

    let isValid = true;

    // Get the form field values
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const dateTime = document.getElementById("dateTime").value.trim();
    const people = document.getElementById("select1").value;
    const message = document.getElementById("message").value.trim();

    // Validate username (required)
    if (username === "") {
        showError("usernameError", "Please enter your name.");
        isValid = false;
    }

    // Validate email (required, and should be in correct format)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "") {
        showError("emailError", "Please enter your email.");
        isValid = false;
    } else if (!emailRegex.test(email)) {
        showError("emailError", "Please enter a valid email.");
        isValid = false;
    }

    // Validate date & time (required)
    if (dateTime === "") {
        showError("dateError", "Please select a date and time.");
        isValid = false;
    }

    // Validate number of people (required)
    if (people === "") {
        showError("peopleError", "Please select the number of people.");
        isValid = false;
    }

    // If form is valid, you can submit the form or handle further
    if (isValid) {
        alert("Form submitted successfully!");
        // Optionally, you can submit the form programmatically
        // this.submit();
    }
});

// Helper function to show error message
function showError(fieldId, message) {
    document.getElementById(fieldId).innerText = message;
}

// Helper function to clear error messages
function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => element.innerText = '');
}
