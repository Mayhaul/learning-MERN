import { useState,useEffect } from "react";

function Form({onSubmit}){

    const [inpVal, takeInput] = useState('');

    function submitKro(event){
        event.preventDefault();
        if(!inpVal.trim()){
            return;
        }
        onSubmit({inpVal:inpVal});
        takeInput('');
    }

    return (<>
        <form onSubmit={submitKro}>
            <input placeholder="Add Task" type="text" value={inpVal} onChange={(e) => takeInput(e.target.value)}/>
            <button>Add Task</button>
        </form>
    
    
    </>);
}

export default Form;