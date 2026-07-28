import { useState } from 'react'
import Form from './components/Form';
import Task from './components/Task';
import Counter from './components/Counter';

function App() {
  const [tasks, updateHook] = useState([]);
  const [value, NewValue] = useState('');

  // function addTask(form){
  //   let New = [...tasks];
  //   New.push(form.inpVal);
 
  //   updateHook(New);
  // }

  function addTodo(){
    
    if(!value.trim()) return;

    const content = {
      id: crypto.randomUUID(),
      value: value
    }
    let New = [...tasks, content];
    
    updateHook(New);
    NewValue('');
  }

  function Delete(idToDelete){
    // keep all tasks except with that id which we need to delete.
    updateHook(tasks.filter(task => task.id !== idToDelete));
  }

  return (
    <>
      <input type="text" value={value} onChange={(event)=>{NewValue(event.target.value)}}/>
      <button onClick={addTodo}> Add </button>
      <br />
      {
        tasks.map((task)=>{
          return <Task key = {task.id} id = {task.id} value = {task.value} onDelete = {Delete}/>
        })
      }
      <br />
      
      <Counter/>
    </>
  )
}

export default App;