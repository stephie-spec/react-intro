function Card(props){
    return (
        <div class="card">
            <img src={props.image} class="card-img-top" alt={props.name} />
            <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text text-primary fw-bold">${props.price}</p>
                <div class="mt-auto">
                    <button 
                        class="btn btn-primary w-100" 
                        onClick={props.onAddToCart}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;