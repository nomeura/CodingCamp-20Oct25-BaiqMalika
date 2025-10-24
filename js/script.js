function welcomeSpeech() {
    let name = prompt("Please enter your name:");
    if (name) {
        alert(`Welcome to our portfolio website, ${name}!`);
    } else {
        alert("Welcome to our portfolio website!");
    }
    document.getElementById("nama").innerText = name ? name : "";
}

function validateForm() {
    let name = document.forms["contactForm"]["name"].value;
    let email = document.forms["contactForm"]["email"].value;
    let message = document.forms["contactForm"]["message"].value;
    if (name === "" || email === "" || message === "") {
        alert("All fields must be filled out");
    }else{
        alert("Message sent successfully!");
    }
    
}
