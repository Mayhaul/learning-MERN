let inp = document.querySelector('input');
let btn = document.querySelector('button');
let ul = document.querySelector('ul');

btn.addEventListener('click', function() {
    console.log(inp.value);
    
    let NewTask = document.createElement('li');
    
    NewTask.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    NewTask.innerText = inp.value;
    
    let btnDlt = document.createElement('button');
    btnDlt.classList.add('dlt', 'btn', 'btn-danger', 'btn-sm');
    btnDlt.innerText = 'delete';
    
    if(NewTask.innerText!="") ul.appendChild(NewTask);
    NewTask.appendChild(btnDlt);
    inp.value = "";
});

ul.addEventListener('click', function(event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log('deleted');
    }
});