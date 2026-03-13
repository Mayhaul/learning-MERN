// Callback hell

let h1 = document.querySelector('h1');

function change(color,delay,callback){
    setTimeout(()=>{
        h1.style.color = color;
        if(callback) callback();
    },delay);
    
}

// callback is used to perform all the tasks in order which are async in nature.
// function calls are stored in a stack. thats why it works.
// its called a callback hell because of its difficulty in reading.

change("red",1000,()=>{
    change("green",1000,()=>{
        change("brown",1000);
    });
});

// because Callback hell is confusing.. there are
// other things invented in java to avoid it
// such as Promises, Async and Await etc.


// Promise returns a promise object which either resolves or rejects.
// Promise is used to basically flatten the code avoiding nested callbacks.

function SaveToDb(data){
    return new Promise((resolve,reject)=>{
        let NetSpeed = Math.floor(Math.random() *10) + 1;
        if(NetSpeed > 4){
            return resolve("Success : data saved");
        }else{
            return reject("Failed: weak connection");
        }

    });
}

SaveToDb("Mehul Verma")
.then(()=>{
    console.log("Promise 1 resolved");
    return SaveToDb("Verma Mehul");
})
.then(()=>{
    console.log("Promise 2 resolved");
    return SaveToDb("Gay Hona Buri Baat Hai");
})
.then(()=>{
    console.log("Promise 3: resolved");
})
.catch((error)=>{
    console.log("Some promise was rejected");
    console.log(error);
})


// Refactoring the change color code using Promise.

function ChangeClr(color, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("Color changed");
        }, delay); // <--- The delay goes inside here!
    });
}

ChangeClr("green",3000)
.then(async ()=>{
    return await ChangeClr("pink",3000);
})
.then(async ()=>{
    return await ChangeClr("orange",3000);
})
.catch(()=>{
    console.log("error");
})

// Async Funtions- returns a promise by deafult.

async function greet(){
    return "Hello World!"
}

// color change code using Async Await.

async function demo(color,delay){
    await ChangeClr("blue",4000);
}
demo();

