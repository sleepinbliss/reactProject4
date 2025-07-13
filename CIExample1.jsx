import { useRef, useState } from "react";

function PCCom() {
	const userTextRef = useRef(null);

	const [message, setMessage] = useState("");
	const [count, setCount] = useState(0);

	const handleShowMessage = () => {
		// 3. Read the value from the input using the ref
		setMessage(userTextRef.current.value);
	};

	const handleCount = () => {
		setCount((prev) => prev + 1);
	};

	return (
		<>
			<div className="EveryPageStyle">
				<h2>Parent Component</h2>
				<input
					type="text"
					name="userType"
					id="userType"
					onChange={handleShowMessage}
					ref={userTextRef}
				/>
				{/*Interacts with receivedMessage */}
				<p>Count in parent: {count}</p>
				<br />
				<h2>Child Component</h2>
				<p id="receivedMessage">Received message: "{message}"</p>
				{/*Interacts with userType input */}
				<p id="receivedCount">Received count: {count}</p>
				<button type="button" id="incrementCount" onClick={handleCount}>
					Increment Count
				</button>
			</div>
		</>
	);
}

export default PCCom;
