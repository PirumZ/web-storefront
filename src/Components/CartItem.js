import "../Sock.css";

export default function CartItem(props) {
  return (
    <div className="sock">
      <div className="image">
        <img src={props.image} alt="It's socks" width="20%" height="30%"></img>
      </div>
      <div className="sock-name">
        <b>Name: </b>
        {props.brand} {props.name}
      </div>
      <div>
        <b>Price: </b>${props.price}
      </div>
    </div>
  );
}
