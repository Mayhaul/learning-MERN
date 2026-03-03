let inp = document.querySelector('input');
let btn = document.querySelector('button');
let ul = document.querySelector('ul');

btn.addEventListener('click', function() {
    console.log(inp.value);
    
    let NewTask = document.createElement('li');
    // Adding Bootstrap classes to the LI
    NewTask.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    NewTask.innerText = inp.value;
    
    let btnDlt = document.createElement('button');
    // Adding Bootstrap classes to the Button
    btnDlt.classList.add('dlt', 'btn', 'btn-danger', 'btn-sm');
    btnDlt.innerText = 'delete';
    
    ul.appendChild(NewTask);
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