let inp = document.querySelector('input');
let btn = document.querySelector('button');
let ul = document.querySelector('ul');
btn.addEventListener('click',function(){
    console.log(inp.value);
    let NewTask = document.createElement('li');
    NewTask.innerText = inp.value;
    let btnDlt = document.createElement('button');
    btnDlt.classList.add('dlt');
    btnDlt.innerText = 'delete';
    ul.appendChild(NewTask);
    NewTask.appendChild(btnDlt);
    inp.value = "";
});
let dlt = document.querySelectorAll('.dlt');

for(i of dlt){
    i.addEventListener('click',function(){
    console.log("deleted");
});

}



