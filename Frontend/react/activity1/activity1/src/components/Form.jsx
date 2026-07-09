function handleSubmit(event){
    event.preventDefault();

    console.log("meow");
}

function Form(){

    return(

        <>
            <form onSubmit={handleSubmit} action={"https://www.youtube.com"} >
                <input type="text" placeholder="hlo name"/>
                <input type="number" placeholder="age"/>

                <button type="submit"> submit </button>
            </form>
        </>

    )
}
export default Form;