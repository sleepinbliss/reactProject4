import { useState } from "react";

function ComponentInteraction() {
	// Example 1: Parent-Child Communication
	const [message, setMessage] = useState("Hello from Parent!");
	const [count, setCount] = useState(0);

	// Example 2: Shopping Cart State
	const [cartItems, setCartItems] = useState([]);

	// Example 3: Theme Toggle
	const [isDarkMode, setIsDarkMode] = useState(false);

	// Example 4: Modal State
	const [isModalOpen, setIsModalOpen] = useState(false);

	// Shopping cart handlers
	const addToCart = (item) => {
		setCartItems((prev) => [...prev, { ...item, id: Date.now() }]);
	};

	const removeFromCart = (id) => {
		setCartItems((prev) => prev.filter((item) => item.id !== id));
	};

	return (
		<div className="ciPageContainer">
			<div className="ci-content">
				<h1>Component Interaction in React</h1>
				<p className="intro">
					Component interaction is fundamental to building dynamic React
					applications. This page demonstrates various patterns for components
					to communicate and share state.
				</p>

				{/* Example 1: Props and State */}
				<section className="example-section">
					<h2>1. Parent-Child Communication via Props</h2>
					<p>
						The most basic form of component interaction - passing data down and
						callbacks up.
					</p>

					<div className="demo-container">
						<ParentComponent
							message={message}
							setMessage={setMessage}
							count={count}
							setCount={setCount}
						/>
					</div>

					<div className="code-explanation">
						<h4>Real-world scenario:</h4>
						<p>
							A dashboard where a parent component manages user data and passes
							it to child widgets.
						</p>
					</div>
				</section>

				{/* Example 2: Shopping Cart */}
				<section className="example-section">
					<h2>2. Shopping Cart - Complex State Management</h2>
					<p>
						Managing shared state across multiple components with add/remove
						functionality.
					</p>

					<div className="demo-container">
						<ShoppingDemo
							cartItems={cartItems}
							addToCart={addToCart}
							removeFromCart={removeFromCart}
						/>
					</div>

					<div className="code-explanation">
						<h4>Real-world scenario:</h4>
						<p>
							E-commerce sites where product components can add items to a
							shared cart component.
						</p>
					</div>
				</section>

				{/* Example 3: Theme Context */}
				<section className="example-section">
					<h2>3. Theme Toggle - Context Pattern</h2>
					<p>
						Using React Context to share theme state across deeply nested
						components.
					</p>

					<div className="demo-container">
						<ThemeDemo isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
					</div>

					<div className="code-explanation">
						<h4>Real-world scenario:</h4>
						<p>
							Apps with light/dark mode where theme preference affects the
							entire component tree.
						</p>
					</div>
				</section>

				{/* Example 4: Modal Communication */}
				<section className="example-section">
					<h2>4. Modal Communication - Event Handling</h2>
					<p>
						Components triggering and controlling modal dialogs with data
						passing.
					</p>

					<div className="demo-container">
						<ModalDemo isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
					</div>

					<div className="code-explanation">
						<h4>Real-world scenario:</h4>
						<p>
							User profile editing, confirmation dialogs, or image galleries
							with overlay modals.
						</p>
					</div>
				</section>

				{/* Best Practices */}
				<section className="best-practices">
					<h2>Best Practices for Component Interaction</h2>
					<ul>
						<li>
							<strong>Props Down, Events Up:</strong> Pass data down via props,
							send events up via callbacks
						</li>
						<li>
							<strong>Lift State Up:</strong> Move shared state to the closest
							common ancestor
						</li>
						<li>
							<strong>Use Context Sparingly:</strong> Only for truly global
							state (theme, auth, language)
						</li>
						<li>
							<strong>Keep Components Focused:</strong> Each component should
							have a single responsibility
						</li>
						<li>
							<strong>Minimize Props Drilling:</strong> Avoid passing props
							through many layers unnecessarily
						</li>
					</ul>
				</section>
			</div>
		</div>
	);
}

// Example Components

function ParentComponent({ message, setMessage, count, setCount }) {
	return (
		<div className="parent-demo">
			<div className="parent-controls">
				<h3>Parent Component</h3>
				<input
					type="text"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					placeholder="Type a message..."
				/>
				<p>Count in parent: {count}</p>
			</div>
			<ChildComponent
				message={message}
				count={count}
				onIncrement={() => setCount((c) => c + 1)}
			/>
		</div>
	);
}

function ChildComponent({ message, count, onIncrement }) {
	return (
		<div className="child-demo">
			<h4>Child Component</h4>
			<p>Received message: "{message}"</p>
			<p>Received count: {count}</p>
			<button onClick={onIncrement}>Increment Count</button>
		</div>
	);
}

function ShoppingDemo({ cartItems, addToCart, removeFromCart }) {
	const products = [
		{ name: "Laptop", price: 999 },
		{ name: "Mouse", price: 25 },
		{ name: "Keyboard", price: 75 },
	];

	return (
		<div className="shopping-demo">
			<div className="products-section">
				<h4>Products</h4>
				{products.map((product, index) => (
					<ProductCard key={index} product={product} onAddToCart={addToCart} />
				))}
			</div>
			<Cart items={cartItems} onRemoveItem={removeFromCart} />
		</div>
	);
}

function ProductCard({ product, onAddToCart }) {
	return (
		<div className="product-card">
			<span>
				{product.name} - ${product.price}
			</span>
			<button onClick={() => onAddToCart(product)}>Add to Cart</button>
		</div>
	);
}

function Cart({ items, onRemoveItem }) {
	const total = items.reduce((sum, item) => sum + item.price, 0);

	return (
		<div className="cart">
			<h4>Shopping Cart ({items.length})</h4>
			{items.map((item) => (
				<div key={item.id} className="cart-item">
					<span>
						{item.name} - ${item.price}
					</span>
					<button onClick={() => onRemoveItem(item.id)}>Remove</button>
				</div>
			))}
			<div className="cart-total">Total: ${total}</div>
		</div>
	);
}

function ThemeDemo({ isDarkMode, setIsDarkMode }) {
	return (
		<div className={`theme-demo ${isDarkMode ? "dark" : "light"}`}>
			<ThemeToggle isDarkMode={isDarkMode} onToggle={setIsDarkMode} />
			<ThemedCard isDarkMode={isDarkMode} />
		</div>
	);
}

function ThemeToggle({ isDarkMode, onToggle }) {
	return (
		<div className="theme-toggle">
			<button onClick={() => onToggle(!isDarkMode)}>
				Switch to {isDarkMode ? "Light" : "Dark"} Mode
			</button>
		</div>
	);
}

function ThemedCard({ isDarkMode }) {
	return (
		<div className="themed-card">
			<h4>Themed Component</h4>
			<p>Current theme: {isDarkMode ? "Dark" : "Light"}</p>
			<p>This component automatically adapts to the theme!</p>
		</div>
	);
}

function ModalDemo({ isOpen, setIsOpen }) {
	const [userData, setUserData] = useState({
		name: "John Doe",
		email: "john@example.com",
	});

	return (
		<div className="modal-demo">
			<UserProfile user={userData} onEdit={() => setIsOpen(true)} />
			{isOpen && (
				<Modal onClose={() => setIsOpen(false)}>
					<UserEditForm
						user={userData}
						onSave={(newData) => {
							setUserData(newData);
							setIsOpen(false);
						}}
						onCancel={() => setIsOpen(false)}
					/>
				</Modal>
			)}
		</div>
	);
}

function UserProfile({ user, onEdit }) {
	return (
		<div className="user-profile">
			<h4>User Profile</h4>
			<p>Name: {user.name}</p>
			<p>Email: {user.email}</p>
			<button onClick={onEdit}>Edit Profile</button>
		</div>
	);
}

function Modal({ children, onClose }) {
	return (
		<div className="modal-overlay" onClick={onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<button className="modal-close" onClick={onClose}>
					×
				</button>
				{children}
			</div>
		</div>
	);
}

function UserEditForm({ user, onSave, onCancel }) {
	const [formData, setFormData] = useState(user);

	const handleSubmit = (e) => {
		e.preventDefault();
		onSave(formData);
	};

	return (
		<form onSubmit={handleSubmit} className="user-edit-form">
			<h4>Edit Profile</h4>
			<input
				type="text"
				value={formData.name}
				onChange={(e) => setFormData({ ...formData, name: e.target.value })}
				placeholder="Name"
			/>
			<input
				type="email"
				value={formData.email}
				onChange={(e) => setFormData({ ...formData, email: e.target.value })}
				placeholder="Email"
			/>
			<div className="form-buttons">
				<button type="submit">Save</button>
				<button type="button" onClick={onCancel}>
					Cancel
				</button>
			</div>
		</form>
	);
}

export default ComponentInteraction;
