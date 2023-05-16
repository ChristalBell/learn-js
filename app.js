const greeting = (user) => {
    document.getElementById("greeting").innerHTML += "Hi,"+ user;
};

const onSubmit = () => {
    const firstName = document.getElementById("first-name").value;
    return firstName; 
  
}; 

