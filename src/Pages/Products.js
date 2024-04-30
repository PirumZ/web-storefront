import AthleticList from "../Components/AthleticList";
import RegularList from "../Components/RegularList";
import Sock from "../Components/Sock";

export default function ProductPage( {addToCart} ) {
  return (
    // Page housing the entire product offering for the company 
    // Components are imported to fill out content
    <div>
      <h2>
        This is our entire inventory. Please email us if you'd like new
        additions.
      </h2>
      <h3 className="header">Athletic Socks</h3>
      <AthleticList />
      <h3 className="header">Regular Socks</h3>
      <RegularList />
      {/* Render Sock component for each sock */}
      <Sock addToCart={addToCart} />
    </div>
  );
}
