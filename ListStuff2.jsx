import { useState } from "react";

function ListStuff2() {
	/* 
    1. Create a list of objects for the quiz/options/answers
    2. Map the list to something



    3. If user selected input.value === correctAnswer then score + 1 
    use ref to reference the current value
    */

	const [changeQuestion, setChangeQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [userTarget, setUserTarget] = useState("");
	const [quizActive, setQuizActive] = useState(true);
	const [isChecked, setIsChecked] = useState(false);

	const quizList = [
		{
			questionNum: 1,
			question: "What is JSX?",
			options: [
				"A JavaScript library",
				"A syntax extension for JavaScript",
				"A database query language",
				"A CSS preprocessor",
			],
			correctAnswer: "A syntax extension for JavaScript",
		},
		{
			questionNum: 2,
			question: "What does the 'key' prop do in React?",
			options: [
				"Encrypts component data",
				"Helps React identify which items have changed",
				"Sets component priority",
				"Defines component styling",
			],
			correctAnswer: "Helps React identify which items have changed",
		},
		{
			questionNum: 3,
			question: "What is the difference between state and props?",
			options: [
				"State is mutable, props are immutable",
				"Props are mutable, state is immutable",
				"Both are mutable",
				"Both are immutable",
			],
			correctAnswer: "State is mutable, props are immutable",
		},
		{
			questionNum: 4,
			question: "What is a React Hook?",
			options: [
				"A debugging tool",
				"A function that lets you use state and lifecycle features",
				"A component lifecycle method",
				"A CSS-in-JS solution",
			],
			correctAnswer:
				"A function that lets you use state and lifecycle features",
		},
		{
			questionNum: 5,
			question: "When should you use useEffect?",
			options: [
				"For side effects like API calls or subscriptions",
				"To declare component state",
				"To define component props",
				"To create event handlers",
			],
			correctAnswer: "For side effects like API calls or subscriptions",
		},
		{
			questionNum: 6,
			question: "What is the Virtual DOM?",
			options: [
				"A copy of the real DOM kept in memory",
				"A CSS framework",
				"A testing library",
				"A routing solution",
			],
			correctAnswer: "A copy of the real DOM kept in memory",
		},
		{
			questionNum: 7,
			question: "What is prop drilling?",
			options: [
				"Optimizing component performance",
				"Passing props through multiple component layers",
				"Creating reusable components",
				"Managing component lifecycle",
			],
			correctAnswer: "Passing props through multiple component layers",
		},
		{
			questionNum: 8,
			question: "What is the purpose of React.Fragment?",
			options: [
				"To group elements without adding extra DOM nodes",
				"To create reusable components",
				"To manage component state",
				"To handle errors",
			],
			correctAnswer: "To group elements without adding extra DOM nodes",
		},
		{
			questionNum: 9,
			question:
				"What is the difference between controlled and uncontrolled components?",
			options: [
				"Controlled components manage their own state",
				"Uncontrolled components are managed by React state",
				"Controlled components are managed by React state",
				"There is no difference",
			],
			correctAnswer: "Controlled components are managed by React state",
		},
		{
			questionNum: 10,
			question: "What is React.memo used for?",
			options: [
				"Storing component data",
				"Memoizing component results to prevent unnecessary re-renders",
				"Creating component animations",
				"Managing component lifecycle",
			],
			correctAnswer:
				"Memoizing component results to prevent unnecessary re-renders",
		},
		{
			questionNum: 11,
			question: "What is the useCallback hook used for?",
			options: [
				"Managing component state",
				"Memoizing functions to prevent unnecessary re-creation",
				"Making API calls",
				"Handling component errors",
			],
			correctAnswer: "Memoizing functions to prevent unnecessary re-creation",
		},
		{
			questionNum: 12,
			question: "What is Context API used for?",
			options: [
				"Making HTTP requests",
				"Sharing state across components without prop drilling",
				"Styling components",
				"Testing components",
			],
			correctAnswer: "Sharing state across components without prop drilling",
		},
		{
			questionNum: 13,
			question: "What is the difference between useState and useReducer?",
			options: [
				"useState is for complex state, useReducer is for simple state",
				"useState is for simple state, useReducer is for complex state",
				"They are identical",
				"useReducer can only be used in class components",
			],
			correctAnswer:
				"useState is for simple state, useReducer is for complex state",
		},
		{
			questionNum: 14,
			question: "What is a Higher-Order Component (HOC)?",
			options: [
				"A component that renders other components",
				"A function that takes a component and returns a new component",
				"A component with higher priority",
				"A component that uses hooks",
			],
			correctAnswer:
				"A function that takes a component and returns a new component",
		},
		{
			questionNum: 15,
			question: "What is the purpose of useRef?",
			options: [
				"To reference DOM elements or persist values across renders",
				"To manage component state",
				"To make API calls",
				"To create component animations",
			],
			correctAnswer:
				"To reference DOM elements or persist values across renders",
		},
		{
			questionNum: 16,
			question: "What is lazy loading in React?",
			options: [
				"Loading components synchronously",
				"Loading components only when they are needed",
				"Loading all components at once",
				"A CSS technique",
			],
			correctAnswer: "Loading components only when they are needed",
		},
		{
			questionNum: 17,
			question:
				"What is the difference between componentDidMount and useEffect?",
			options: [
				"componentDidMount is for functional components",
				"useEffect is for class components",
				"componentDidMount is for class components, useEffect is for functional components",
				"They are identical",
			],
			correctAnswer:
				"componentDidMount is for class components, useEffect is for functional components",
		},
		{
			questionNum: 18,
			question: "What is reconciliation in React?",
			options: [
				"The process of comparing Virtual DOM with Real DOM",
				"The process of creating components",
				"The process of handling errors",
				"The process of making API calls",
			],
			correctAnswer: "The process of comparing Virtual DOM with Real DOM",
		},
		{
			questionNum: 19,
			question: "What is the purpose of Error Boundaries?",
			options: [
				"To prevent all errors in React",
				"To catch JavaScript errors in component tree and display fallback UI",
				"To handle API errors",
				"To validate component props",
			],
			correctAnswer:
				"To catch JavaScript errors in component tree and display fallback UI",
		},
		{
			questionNum: 20,
			question: "What is StrictMode in React?",
			options: [
				"A tool for highlighting potential problems in an application",
				"A performance optimization technique",
				"A way to enforce TypeScript",
				"A testing library",
			],
			correctAnswer:
				"A tool for highlighting potential problems in an application",
		},
	];

	const currentQuestion = quizList[changeQuestion];

	function checkCorrectAnswer() {
		userTarget === currentQuestion.correctAnswer
			? setScore((prev) => prev + 1)
			: setScore((prev) => prev);

		console.log(`User Selection: ${userTarget}`);
		console.log(`Correct Answer: ${currentQuestion.correctAnswer}`);
	}

	function isQuizActive() {
		setQuizActive((prev) => (prev < quizList.length ? true : false));
	}
	return (
		<>
			<div className="quizContainer">
				{quizActive ? (
					<>
						<h2>Question: {currentQuestion.questionNum}</h2>
						<p> {currentQuestion.question} </p>
						<form action="submit" id="answerOptions">
							{currentQuestion.options.map((item, i) => (
								<>
									<input
										key={i}
										type="radio"
										name="options"
										id={`options${i}`}
										className="radioButtons"
										value={item}
										onChange={(e) => {
											setIsChecked(true);
											setUserTarget(e.target.value);
										}}
										checked={userTarget === item}
									/>
									<label htmlFor={`options${i}`}>{item}</label>
								</>
							))}
						</form>
						<div id="submitContainer">
							<button
								type="button"
								onClick={() => {
									setIsChecked(true);
									setChangeQuestion((prev) =>
										prev < quizList.length - 1 ? prev - 1 : prev
									);
								}}
							>
								Last Question
							</button>
							<p>
								Total Score: {score}/{quizList.length}
							</p>
							<button
								type="button"
								onClick={
									isChecked
										? () => {
												checkCorrectAnswer();
												setChangeQuestion((prev) =>
													prev < quizList.length - 1 ? prev + 1 : prev
												);
												setQuizActive(
													changeQuestion + 1 >= quizList.length ? false : true
												);
												setIsChecked(false);
										  }
										: () => alert("No option selected.")
								}
							>
								Next Question
							</button>
						</div>
					</>
				) : (
					<div>
						<h2>
							Quiz Completed! Your score: {score}/{quizList.length}
						</h2>
						<button
							type="button"
							onClick={() => {
								setQuizActive(true);
								setChangeQuestion(0);
								setUserTarget("");
							}}
						>
							Restart
						</button>
					</div>
				)}
			</div>
		</>
	);
}

export default ListStuff2;
