import { useState } from "react";

function Task(props) {
const [Done, setDone] = useState(false);

  function deleteTask(){
    props.onDelete(props.id);
  }

  function toggleMarkAsDone(){
    setDone((marked)=> !marked);
  }

  return (
    <>
      <div>
        <span>{props.value} </span> 
        <button onClick={deleteTask}> Delete </button> <br />
        <label>
          <input type="checkbox" onClick={toggleMarkAsDone}/>
          {Done ? "Done" : "Pending"}
        </label>
        

      </div>
    </>
  );
}

export default Task;