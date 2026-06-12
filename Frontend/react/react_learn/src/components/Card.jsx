function Card(card){
    return (
        <>
            <div>
                <img src={card.img} alt="card" />
                <h2>{card.title}</h2>
                <h3>{card.description}</h3>
            </div>
        </>
    );
}

export default Card;