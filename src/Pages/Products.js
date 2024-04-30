import RegularList from "../Components/RegularList";

export default function ProductPage() {
  return (
    // Page housing the entire product offering for the company 
    // Components are imported to fill out content
    <div>
      <h2>
        This is our entire inventory. Please email us if you'd like new
        additions.
      </h2>
      <h3 className="header">Athletic/Regular Socks</h3>
      <RegularList />
    </div>
  );
}
