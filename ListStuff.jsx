import { useState, useRef } from "react";

function ListStuff() {
	/* 
    1. Use states to update the value of lists.
    2. Use ref to grab the input from the user and transfer that data to a list.
    3. Display the updated list items using '.map'
    4. Allow the option to remove an item by using '.filter'
    */

	// Item Object
	const item = [{ name: "Apples", cost: 4, amount: 1 }];

	// Original List
	const [itemList, setItemList] = useState(item);
	const [userInput, setUserInput] = useState("");
	const [editIndex, setEditIndex] = useState(null); // Track which row is being edited
	const [editValue, setEditValue] = useState(""); // Track the value being edited
	const inputRef = useRef(null);

	function getUserText() {
		setUserInput(inputRef.current.value);
	}

	function createObject() {
		const newItem = { name: `${userInput}`, cost: 0, amount: 0 };
		setItemList((prev) => [...prev, newItem]);
	}

	function handleEditClick(i, name) {
		setEditIndex(i);
		setEditValue(name);
	}

	function handleEditChange(e) {
		setEditValue(e.target.value);
	}

	function handleEditSubmit(i) {
		const updated = itemList.map((item, idx) =>
			idx === i ? { ...item, name: editValue } : item
		);
		setItemList(updated);
		setEditIndex(null);
	}

	return (
		<>
			<div className="listPage">
				<div className="displayList">
					<table>
						<caption>Grocery List</caption>
						<thead>
							<tr>
								<th>Name</th>
								<th>Cost</th>
								<th>Amount</th>
								<th>Remove</th>
							</tr>
						</thead>
						<tbody>
							{itemList.map((item, i) => (
								<tr key={i}>
									<td onClick={() => handleEditClick(i, item.name)}>
										{editIndex === i ? (
											<input
												autoFocus
												type="text"
												value={editValue}
												onChange={handleEditChange}
												onBlur={() => handleEditSubmit(i)}
												onKeyDown={(e) => {
													if (e.key === "Enter") handleEditSubmit(i);
												}}
											/>
										) : (
											item.name
										)}
									</td>
									<td>{item.cost}</td>
									<td>{item.amount}</td>
									<td>
										<button
											type="button"
											id="removeButton"
											onClick={() =>
												setItemList(itemList.filter((_, idx) => idx !== i))
											}
										>
											X
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div className="listInputContainer">
					<label htmlFor="userTextInput">Add Item: </label>
					<input
						type="text"
						name="userTextInput"
						id="userTextInput"
						ref={inputRef}
						onChange={getUserText}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								createObject();
								inputRef.current.value = "";
							}
						}}
					/>
				</div>
			</div>
		</>
	);
}
export default ListStuff;
