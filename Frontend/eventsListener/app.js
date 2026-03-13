let form = document.querySelector('form');

form.addEventListener("submit",function(event){
    event.preventDefault();
    let name = document.querySelector('#name');
    let pass = document.querySelector('#pass');
    console.log(name.value);
    console.log(pass.value);
    alert(`Hi ${name.value} your password is set to ${pass.value}`);

});

// Input event. tracks every character entered.
let para = document.querySelector("#parag");

para.addEventListener("input",function(){
    let New = document.querySelector('h1');
    New.innerText = para.value;
});

