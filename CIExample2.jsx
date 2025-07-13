import { useState } from "react";

function PCCom2() {
	const [shoppingCart, setShoppingCart] = useState([]);
	const items = [
		{ name: "Laptop", cost: 999 },
		{ name: "Mouse", cost: 25 },
		{ name: "Keyboard", cost: 75 },
	];

	function addToCart(index) {
		setShoppingCart((prev) => [...prev, items[index]]);
	}
	function removeFromCart(index) {
		setShoppingCart((prev) => prev.filter((_, i) => i !== index));
	}

	return (
		<>
			<div className="EveryPageStyle">
				<div className="gridLayout">
					<div id="shoppingItems">
						<section>
							<p>
								{items[0].name} - ${items[0].cost}
							</p>
							<button type="button" onClick={() => addToCart(0)}>
								Add to Cart
							</button>
						</section>
						<section>
							<p>
								{items[1].name} - ${items[1].cost}
							</p>
							<button type="button" onClick={() => addToCart(1)}>
								Add to Cart
							</button>
						</section>
						<section>
							<p>
								{items[2].name} - ${items[2].cost}
							</p>
							<button type="button" onClick={() => addToCart(2)}>
								Add to Cart
							</button>
						</section>
					</div>
					<div id="shoppingCart">
						<h2>Shopping Cart ({shoppingCart.length})</h2>
						<ul>
							{shoppingCart.map((item, i) => (
								<li key={i}>
									{item.name} - ${item.cost}
									<button
										type="button"
										style={{
											width: 10,
											height: 10,
											scale: 0.5,
											background: "red",
										}}
										id="removeButton"
										onClick={() => removeFromCart(i)}
									>
										X
									</button>
								</li>
							))}
						</ul>
						<h2>Total: ${}</h2>
					</div>
				</div>
			</div>
		</>
	);
}

export default PCCom2;
