const greeting = (user) => {
    document.getElementById("greeting").innerHTML += "Hi,"+ user;
};

function onSubmit() {
    const firstName = document.getElementById("first-name").value;
    greeting(firstName);

} 

