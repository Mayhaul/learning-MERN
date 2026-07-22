import {useState, useEffect} from 'react'

function Counter(){

    const [count, setCount] = useState(0);

    useEffect(()=>{
          // console.log("Hello");
          // if(count %2 == 0){
          //   console.log("dark mode")
          // }else{
          //   console.log("light mode")
          // }
      },[count])

      console.log(`${count} and ${setCount}`);

    return(

        <>
            <div>
                    <button onClick={()=> setCount(count + 1)}>{count}</button>
            </div>
        </>
    )
}

export default Counter;