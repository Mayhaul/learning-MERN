import ItemName from "./ItemName";

function Item(Item){

    return(

        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={Item.img} style={{ width: "150px", height: "150px", objectFit: "contain" }}/>
                
                <ItemName name = {Item.name}/>
            </div>
            
        </>
    )
}
export default Item;