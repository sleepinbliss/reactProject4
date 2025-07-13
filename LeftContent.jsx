import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";

function LeftContent({ currentPage, section1Pages, setCurrentPage }) {
	const [currentArrow, setCurrentArrow] = useState(1);
	const [isHovered, setIsHovered] = useState(false);
	const [listState, setListState] = useState(false);

	// function showList() {
	// 	!listState ? setListState(true) : setListState(false);
	// }
	function changeArrow() {
		setCurrentArrow(currentArrow === 1 ? 2 : 1);
	}

	return (
		<div className="menuSelection">
			<motion.div
				style={{ opacity: isHovered ? 1 : 0 }}
				initial={{ x: 0 }}
				animate={{ x: 3 }}
				transition={{
					repeat: Infinity,
					repeatType: "loop",
					duration: 5,
					ease: "anticipate",
				}}
			>
				{currentArrow === 1 ? (
					<FaArrowRight className="dropDownArrow" />
				) : (
					<FaArrowDown className="dropDownArrow" />
				)}
			</motion.div>
			<h2>Index</h2>
			<ul>
				<motion.ul className="menuListItem" onClick={changeArrow}>
					<h3
						className="menuListItem fullSize"
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
						onClick={() => setListState(!listState)}
					>
						React Things
					</h3>
					<AnimatePresence>
						{listState && (
							<motion.div>
								<li
									className="menuListItem"
									onClick={() => setCurrentPage(0)}
									id="option1"
								>
									Component Interaction
								</li>
								<li
									className="menuListItem"
									onClick={() => setCurrentPage(1)}
									id="option2"
								>
									Lazy Loading & Code Splitting
								</li>
								<li
									className="menuListItem"
									onClick={() => setCurrentPage(2)}
									id="option3"
								>
									Motion Animation
								</li>
							</motion.div>
						)}
					</AnimatePresence>
				</motion.ul>

				<li className="menuListItem">option2</li>
				<li className="menuListItem">option3</li>
				<li className="menuListItem">option4</li>
				<li className="menuListItem">option5</li>
				<li className="menuListItem">option6</li>
				<li className="menuListItem">option7</li>
				<li className="menuListItem">option8</li>
				<li className="menuListItem">option9</li>
				<li className="menuListItem">option10</li>
			</ul>
		</div>
	);
}
export default LeftContent;
