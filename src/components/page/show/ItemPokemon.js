

const ItemPokemon = ({ image, name, type, base_experience, attack, }) => {
    const style = type + " thumb-container";
    return (
        <div className={style}>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <h5>Type: {type}</h5>
                <h5>Base: {base_experience}</h5>
                <h5>Attack: {attack}</h5>
            </div>
        </div>
    )
};

export default ItemPokemon;