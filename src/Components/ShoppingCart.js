import React, { /*useEffect*/ } from "react";
import socksData from '../Components/JSONs/RegularSocks.json';

export default function ShoppingCart() {
    
    // Fetch items from JSON file or any other source
    const socks = socksData;

    return (
        <div>
            {/* Display shopping cart items */}
            {socks.map(sock => (
                <div key={sock.id}>
                    <p>{sock.name}</p>
                    <p>{sock.price}</p>
                    <button>Remove</button>
                    <input type="number" defaultValue={1} min={1} />
                </div>
            ))}
            {/* Display pre-tax total price */}
            <p>Total: $0.00</p>
        </div>
    );
}



