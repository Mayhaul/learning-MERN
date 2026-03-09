let url = "https://catfact.ninja/fact";
fetch(url)
.then((res)=>{
    // console.log(res);
    return res.json();
})
.then((data)=>{
    console.log(data.fact);
})
.catch((err)=>{
    console.log(`error: ${err}`)
})
// BOTH fetch AND .json() RETURN A PROMISE.
async function getFacts(){
    try{
        let res1 = await fetch(url);
        let data1 = await res1.json();
        console.log(data1.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
    }catch (e){
        console.log(`error: ${e}`);
    }
}
getFacts();
