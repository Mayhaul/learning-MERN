import { useState, useEffect } from "react";
export default function Counter(){

    const [count , setCount] = useState(0);
    const [content, setContent] = useState("");
    function click(){
        setCount((prevCount)=> prevCount + 1)
    }

    useEffect(()=>{
        let data = fetch("https://catfact.ninja/fact")
        .then((D)=> D.json())
        .then((D_final)=> setContent(D_final.fact))
        .catch((err)=>{
            console.log(err);
        });
    },[count]);

    return (
        <>
            <button onClick={click}>{count % 2 === 0 ? "even" : "odd"}</button>
            <br />
            <p>{content}</p>
        </>
    )
}