function Card(props){
    return (
        <div className="card">
            <p>{props.username}</p>
            <p>{props.email}</p>
            <p>{props.phone}</p>
        </div>
    );
}

export default Card;