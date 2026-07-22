import { useState, useEffect } from "react";

function Like(){

    const [like, doLike] = useState(false);

    useEffect(()=>{
        if(like == true){
            console.log("Liked:)")
        }else{
            console.log("unliked :(")     
        }
    },[like]);

    return (
    <>
    
    <div className="likes">
        <button onClick={()=>doLike(!like)}>
            {like ? "Liked :)" : "Unliked :("}
        </button>
    </div>
    
    </>
    )
}

export default Like;