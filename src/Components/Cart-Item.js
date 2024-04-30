export default function CartItem(props){
    return( 
    <div className="sock">
      <div className="image">
        <img src={props.image} alt="It's socks" width="20%" height="30%"></img>
      </div>
      <div className="sock-name">
        <b>Name: </b>
        {props.brand} {props.name}
      </div>
      <div className="fit-mat">
        <b>Fit: </b>
        {props.fit}
      </div>
      <div>
        <b>Material:</b> {props.material}
      </div>
      <div>
        <b>Price: </b>
        ${props.price}
      </div>
      </div>    
    );    
};